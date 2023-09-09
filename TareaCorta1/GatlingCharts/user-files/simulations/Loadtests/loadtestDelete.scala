import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class LoadTestDelete extends Simulation {

  val httpProtocol = http
    .baseUrl("http://localhost:30000")  

  // Este método borra un libro aleatorio, se recomienda insertar el dataset varias veces para evitar quedarse sin elementos que borrar
  val delete = scenario("Delete all books load test")
    .exec(
      http("Delete books")
        .delete("/books")
        .check(status.is(200)) 
    )

  // 100 Usuarios constantes usaran el api en esa funcionalidad por 20minutos
  setUp(
    delete.inject(
      constantUsersPerSec(100) during(20 minutes)
    )
  ).protocols(httpProtocol)

}