import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class LoadTestPut extends Simulation {

  val httpProtocol = http
    .baseUrl("http://localhost:30000")  

    // Este metodo escoge dos indices aleatorios en la tabla y modifica los datos de un libro con los del otro
    val get = scenario("Get all books load test")
    .exec(
      http("Get all books")
        .get("/books")
        .check(status.is(200)) 
    )

    val post  = scenario("Post books load test")
    .exec(
      http("Post books")
        .post("/books")
        .check(status.is(200)) 
    )

    val delete = scenario("Delete all books load test")
    .exec(
      http("Delete books")
        .delete("/books")
        .check(status.is(200)) 
    )

  // 100 Usuarios constantes usaran el api en esa funcionalidad por 20minutos
  setUp(
    
    get.inject(constantUsersPerSec(10) during (2 minutes)),
    post.inject(constantUsersPerSec(10) during (2 minutes)),
    delete.inject(constantUsersPerSec(10) during (2 minutes)),
    get.inject(constantUsersPerSec(10) during (2 minutes)),
    post.inject(constantUsersPerSec(10) during (6 minutes)),
    get.inject(constantUsersPerSec(10) during (1 minutes)),
    
  ).protocols(httpProtocol)

}