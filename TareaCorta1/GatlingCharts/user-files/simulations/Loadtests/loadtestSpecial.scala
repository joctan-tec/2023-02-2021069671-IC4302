import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class LoadTestSpecial extends Simulation {

  val httpProtocol = http
    .baseUrl("http://localhost:30000")  

    // Este metodo escoge dos indices aleatorios en la tabla y modifica los datos de un libro con los del otro
    val get2 = scenario("Get books load test")
    .exec(
      http("Get books")
        .get("/books")
        .check(status.is(200)) 
    )

    val post2  = scenario("Post many books load test")
    .exec(
      http("Post many books")
        .post("/books")
        .check(status.is(200)) 
    )

    val delete2 = scenario("Delete many books load test")
    .exec(
      http("Delete many books")
        .delete("/books")
        .check(status.is(200)) 
    )

  // 100 Usuarios constantes usaran el api en esa funcionalidad por 20minutos
  setUp(
    
    get2.inject(constantUsersPerSec(100) during (20 seconds)),
    post2.inject(constantUsersPerSec(100) during (100 seconds)),
    delete2.inject(constantUsersPerSec(100) during (10 seconds)),
    get2.inject(constantUsersPerSec(100) during (100 seconds)),
    post2.inject(constantUsersPerSec(100) during (10 seconds)),
    get2.inject(constantUsersPerSec(100) during (10 seconds)),
    
  ).protocols(httpProtocol)

}