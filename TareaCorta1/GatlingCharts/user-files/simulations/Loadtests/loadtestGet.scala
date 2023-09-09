import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class LoadTestGet extends Simulation {

  val httpProtocol = http
    .baseUrl("http://localhost:30000")  
  
  // Se va a hacer un get de todos los libros en la base de datos
  
  val get = scenario("Get all books load test")
    .exec(
      http("Get all books")
        .get("/books")
        .check(status.is(200)) 
    )

  // 100 Usuarios constantes usaran el api en esa funcionalidad por 20minutos
  setUp(
    get.inject(
      constantUsersPerSec(100) during(20 minutes)
    )
  ).protocols(httpProtocol)

}