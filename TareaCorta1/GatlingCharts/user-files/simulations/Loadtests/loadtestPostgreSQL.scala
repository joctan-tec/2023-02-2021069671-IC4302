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

  // Este método borra un libro aleatorio, se recomienda insertar el dataset varias veces para evitar quedarse sin elementos que borrar
  val delete = scenario("Get all books load test")
    .exec(
      http("Get all books")
        .delete("/books")
        .check(status.is(200)) 
    )

  // Va subiendo los usuarios de 10 a 100 en los primeros 5 minutos y luego constantemente todos iran haciendo gets durante 20min
  setUp(
    get.inject(
      rampUsersPerSec(10) to(100) during(5 minutes),
      constantUsersPerSec(100) during(20 minutes)
    )
  ).protocols(httpProtocol)

}