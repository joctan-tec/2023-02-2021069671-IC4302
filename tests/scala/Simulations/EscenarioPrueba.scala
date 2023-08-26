import io.gatling.core.Predef._
import io.gatling.http.Predef._
import com.mongodb.client.{MongoClients, MongoCollection}
import org.bson.Document

class MongoScenario extends Simulation {

    val httpConf = http.baseUrl("http://localhost") // URL base de tu aplicación (si es necesario)

    val scn = scenario("Escenario de Prueba MongoDB")
        .exec(session => {
            // Configurar la conexión a la base de datos MongoDB
            val mongoClient = MongoClients.create("mongodb://localhost:27017")
            val database = mongoClient.getDatabase("mi-database")
            val collection: MongoCollection[Document] = database.getCollection("mi-coleccion")

            // Realizar operación de lectura en MongoDB (por ejemplo, encontrar un documento)
            val result = collection.find(new Document("campo", "valor")).first()

            // Cerrar la conexión a la base de datos
            mongoClient.close()

            // Agregar el resultado de la operación a la sesión para su posterior uso (opcional)
            session.set("resultadoMongo", result.toJson)

            session
        })
        .exec(http("Consulta a MongoDB")
            .get("/ruta-en-la-aplicacion") // Ruta en tu aplicación (si es necesario)
            .check(status.is(200)))

    setUp(
        scn.inject(atOnceUsers(10))
    ).protocols(httpConf)
}
