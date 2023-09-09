import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class LoadTestGet extends Simulation {

  val httpProtocol = http
    .baseUrl("http://localhost:30000")  
  
  // Este método 
  val post  = scenario("Post books load test")
    .exec(
      http("Post books")
        .post("/books")
        .check(status.is(200)) 
    )

  // 100 Usuarios constantes usaran el api en esa funcionalidad por 20minutos
  setUp(
    post.inject(
      constantUsersPerSec(100) during(20 minutes)
    )
  ).protocols(httpProtocol)

}