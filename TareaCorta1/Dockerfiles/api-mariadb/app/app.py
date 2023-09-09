from flask import Flask, request, jsonify
import mariadb
import pandas
import numpy as np
import os

app = Flask(__name__)

# API PARA ENVIAR DATOS A MARIADB
# Este API esta hecho con el propósito de hacer testing sobre una base mariaDB y tratar de hacer overload de datos
# Se va a correr a través de Gatling.

#Creamos una función encargada de hacer las conexiones automáticamente
def db_connection():
    conn = None
    try:
        conn = mariadb.connect(
            host = os.getenv('MariaDB_HOST'),
            port = 3306,            #El port 3306 es el default para mariadb
            database = os.getenv('MariaDB_DB'),
            user = os.getenv('MariaDB_USER'),
            password = os.getenv('MariaDB_PASS')
        )
    except Exception as e:
        print("Fallo al conectarse a la base de datos: Error: " + str(e))

    return conn #Retornamos la conexión de red, o sino funcionó retorna None

#Luego creamos una función encargada de generar automáticamente datos
#de pruebas, tomando la información del csv en el file dataset
def generar_datos(num_rows):
    #Leemos la lista de libros, hasta llegar a cumplir las filas deseadas
    #a leer
    lista_libros = pandas.read_csv("books-summaries.csv", nrows=num_rows)
    
    #Luego los diferenciamos o encapsulamos en columnas
    df = pandas.DataFrame(lista_libros, columns=['id', 'name', 'summary', 'category'])
    
    #Luego los ordenamos como un diccionario, tomando como oriente en el dataframe al records
    diccionario_libros = df.to_dict(orient='records')
    return diccionario_libros

#Hacemos una función encargada de llenar la base de datos y la tabla de libros
def populate_table(num_rows):
    sql = """INSERT INTO libros (name, summary, category)
            VALUES(%s, %s, %s)"""

    #Luego, guardamos un diccionario con los libros generados
    libros = generar_datos(num_rows) 

    for libro in libros:
        #Iteramos en cada libro, para insertar los datos
        conn = db_connection()
        cursor = conn.cursor()
        
        #Ejecutamos la función sql que llamamos,pasando los datos del dato
        #iterado en el diccionario libros
        cursor.execute(sql, (libro['name'], libro['summary'], libro['category']))
        conn.commit()
        conn.close()


@app.route('/books', methods=['GET', 'POST'])
def books():
    #Primero que todo iniciamos con el proceso del get, obteniendo los datos
    if request.method == 'GET':
        conn = db_connection() #Llamamos al método para hacer la conexión
        cursor = conn.cursor() #Conectamos a un puntero o cursor al conector

        #Al ser el método GET, se encarga de obtener una lista de todos los libros
        cursor.execute("SELECT * FROM libros")
        rows = cursor.fetchall()

        #Ahora iteramos en cada libro y lo añadimos como un valor individual a la lista
        #que deseamos retornada jsonificada
        libros = []
        for r in rows:
            libro = {
                "id":       r[0],
                "name":     r[1],
                "summary":  r[2],
                "category": r[3]
            }
            libros.append(libro)

        conn.close() #Cerramos la conexión

        if libros:   #Si la lista tenía datos... entonces, retornamos los datos
            return jsonify(libros)
        else:        #Si no habían datos en la base de datos
            return 'No se encontró ningún libro', 404

    #Luego hacemos un proceso POST, o que se encarga de hacer un INSERT en realidad
    if request.method == 'POST':
        conn = db_connection()
        cursor = conn.cursor()

        #Creamos variables temporales que almacenan los datos deseados que deseamos
        #agregar en el nuevo dato "libro" en la base de datos
        nombre    = request.form['name']
        resumen   = request.form['summary']
        categoria = request.form['category']

        #Creamos el comando en sql encargado de insertar instancias en mariadb
        sql_cm = """INSERT INTO libros (name, summary, category)
                    VALUES(%s, %s, %s)"""

        #Ejecutamos el comando en mariadb
        cursor.execute(sql_cm, (nombre, resumen, categoria))
        conn.commit() #Hacemos un commit para que se apliquen los cambios de los datos insertados
        conn.close()
        return f"Libro con el id 0 creado de forma correcta"

@app.route('/books/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def libro_indiv(id):
    """
        Esta función usa metodos esta vez referidos individualmente a un libro,
        de modo que haremos funciones que se centren en un libro en específico,
        tanto en una función simple de búsqueda y retornar datos, como actualizar
        y eliminar data
    """
    if request.method == 'GET':
        conn = db_connection()
        cursor = conn.cursor()

        #Llamamos al comando encargado de llamar un select WHERE id = a la
        #id que le pasamos para buscar
        cursor.execute("SELECT * FROM libros WHERE id=%s", (id,))
        rows = cursor.fetchall()

        #Hacemos una iteración en cada libro que coincida la id (solo va a ser uno)
        for r in rows:
            libro = r #Obtenemos la información del libro
        conn.close()

        #Ahora, checamos si se encontró el libro o no, si se encuentra, se retorna
        #jsonificado
        if libro is not None:
            return jsonify(libro), 200
        else:
            return 'No se encontró el libro', 404

    if request.method == 'PUT':
        conn = db_connection()
        cursor = conn.cursor()

        #De nuevo hacemos el comando para hacer la ejecución de la actualización
        #esta vez
        sql = """UPDATE libros
                SET name=%s    ,
                    summary=%s ,
                    category=%s
                WHERE id=%s"""

        #Pasamos los datos actualizados del libro
        nombre    = request.form['name']
        resumen   = request.form['summary']
        categoria = request.form['category']

        #Actualizamos el libro
        libro_actualizado = {
            'id'      : id,
            'name'    : nombre,
            'summary' : resumen,
            'category': categoria
        }

        #Ejecutamos el comando sql y pasamos los argumentos de acuerdo al orden en
        #el comando sql que llamamos
        cursor.execute(sql, (nombre, resumen, categoria, id))
        conn.commit() #Aplicamos los cambios hechos del comando en UPDATE
        conn.close()
        return jsonify(libro_actualizado), 200  #Retornamos el libro actualizado

    if request.method == 'DELETE':
        conn = db_connection()
        cursor = conn.cursor()

        #Llamamos al comando encargado de borrar el libro exacto pasado
        sql = """DELETE FROM libros WHERE id=%s"""

        #Llamamos el comando encargado de eliminar el libro por id
        cursor.execute(sql, (id,)) 

        conn.commit() #Aplicamos los cambios en la base de datos y actualizamos
        conn.close()
        return "El libro con la id: {} ha sido eliminado".format(id), 200

"""
if __name__ ==  "__main__":
    #Programa principal, desde acá se corre el programa, y acá se hace todo lo 
    #del programa
    app.run()
"""

#Llenamos o populizamos la lista con los datos de los libros
populate_table(50)