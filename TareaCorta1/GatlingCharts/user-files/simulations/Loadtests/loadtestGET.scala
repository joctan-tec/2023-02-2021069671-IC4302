import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._

class LoadTestGet extends Simulation {

  // protocols
  val httpProtocol = http
    .baseUrl("http://localhost:30000")

  // scenario 
  val scn = scenario("Get all books load test")
    .exec(
      http("Get all books")
        .get("/books")
        .check(
          status.is(200)
        )
    )

  // setup
  setUp(
    scn.inject(constantUsersPerSec(50) during (30 seconds))
  ).protocols(httpProtocol)

}