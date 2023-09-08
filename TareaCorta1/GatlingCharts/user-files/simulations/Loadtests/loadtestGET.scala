import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class LoadTestGet extends Simulation {

  val httpProtocol = http
    .baseUrl("http://localhost:30000")  
  
  // Se va a hacer un get de todos los libros en la base de datos
  val scn = scenario("Get all books load test")
    .exec(
      http("Get all books")
        .get("/books")
        .check(status.is(200)) 
    )

  setUp(
    scn.inject(
      rampUsersPerSec(10) to(100) during(5 minutes),
      constantUsersPerSec(100) during(15 minutes)
    )
  ).protocols(httpProtocol)

}