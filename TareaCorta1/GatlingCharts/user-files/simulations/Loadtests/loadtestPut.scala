import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class LoadTestGet extends Simulation {

  val httpProtocol = http
    .baseUrl("http://localhost:30000")  

    // Este metodo escoge dos indices aleatorios en la tabla y modifica los datos de un libro con los del otro
   val put  = scenario("Modify books load test")
    .exec(
        http("modify books")
        .put("/books")
        .check(status.is(200)) 
    )

  // 100 Usuarios constantes usaran el api en esa funcionalidad por 20minutos
  setUp(
    put.inject(
      constantUsersPerSec(100) during(20 minutes)
    )
  ).protocols(httpProtocol)

}