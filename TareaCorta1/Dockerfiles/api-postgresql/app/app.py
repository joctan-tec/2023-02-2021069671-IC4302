import psycopg2
from flask import Flask, request, jsonify
import pandas as panda
import random
import os

app = Flask(__name__)


def db_connection():
    conn = None
    try:
        conn = psycopg2.connect(
            host=os.getenv('Posgres_HOST'),
            port=5432,
            database=os.getenv('Posgres_DB'),
            user=os.getenv('PosgresUSER'),
            password=os.getenv('Posgres_PASS')
        )

    except:
        print('No se pudo conectar a la base de datos')
    return conn

def generar_datos_pruebas(num_rows):
    
    lista_libros = panda.read_csv("books-summaries.csv", nrows=num_rows)
    df = panda.DataFrame(lista_libros.values, columns=['id', 'name', 'summary', 'category'])
    diccionario_libros = df.to_dict(orient='records')
    return diccionario_libros

def populate_table(num_rows):
    
    sql = """INSERT INTO libros (name, summary, category)
                VALUES(%s,%s,%s)"""
    
    libros = generar_datos_pruebas(num_rows) 
  
    for libro in libros:
        conn = db_connection()
        cursor = conn.cursor()
        cursor.execute(sql,(libro['name'],libro['summary'],libro['category']))
        conn.commit()
        conn.close()

@app.route('/books', methods=['GET', 'POST', 'DELETE'])
def books():
    if request.method == 'GET':

        conn = db_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM libros")
        rows = cursor.fetchall()

        libros = []
        for row in rows:
            libro = {
                "id": row[0],
                "name": row[1],
                "summary": row[2],
                "category": row[3]
            }
            libros.append(libro)

        conn.close()

        if libros:
            return jsonify(libros), 200
        else:
            return 'No se encontro nada', 404

    if request.method == 'POST':
        
        # Cada vez que se llame post se agarra un indice aleatorio de todos los libros existentes en el dataset
        libros = generar_datos_pruebas(5200) 
        index_aleatorio = random.randint(0, len(libros)-1)
        libro_insertar = libros[index_aleatorio]
        
        conn = db_connection()
        cursor = conn.cursor()
        nombre = libro_insertar['name']
        resumen = libro_insertar['summary']
        category = libro_insertar['category']

        sql = """INSERT INTO libros (name, summary, category)
                VALUES(%s,%s,%s)"""

        cursor.execute(sql,(nombre,resumen,category))
        conn.commit()
        conn.close()
        return jsonify(libro_insertar), 200
    
    
    # Se recomienda primero reiniciar los helm charts para la base para borrar estos datos despúes de hacer las pruebas
    # Para las pruebas gatling se borra un dato aleatorio de los que se encuentran disponibles, para evitar quedarnos sin datos se inserta el dataset multiples veces
    if request.method == 'DELETE':
        
        conn = db_connection()
        cursor = conn.cursor()
        
        cursor.execute("SELECT * FROM libros")
        rows = cursor.fetchall()
        
        # Se escoge un indice aleatorio a borrar
        indice_borrar = random.randint(0, len(rows)-1)
        
        # Se obtiene el id del indice a borrar
        id_borrar = rows[indice_borrar][0]
        
        sql = """DELETE FROM libros WHERE id=%s"""
        
        cursor.execute(sql,(id_borrar,))
        conn.commit()
        conn.close()
        return "The book with the id: {} has been deleted".format(id_borrar), 200

@app.route('/books/<int:id>', methods=['GET', 'PUT'])
def libro_indiv(id):

    libro = None
    if request.method == 'GET':
        conn = db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM libros WHERE id=%s", (id,))
        rows = cursor.fetchall()
        for r in rows:
            libro = r

        conn.close()
        if libro is not None:
            return jsonify(libro), 200
        else:
            return 'No se encontro', 404

    # Este método va a ingresar a los datos de un libro con ese id y va a ponerle los de otro libro aleatorio
    if request.method == 'PUT':
        libros = generar_datos_pruebas(5200) 
        index_aleatorio = random.randint(0, len(libros)-1)
        datos_modificar = libros[index_aleatorio]
        
        conn = db_connection()
        cursor = conn.cursor()
        sql = """UPDATE libros
                SET name=%s,
                    summary=%s,
                    category=%s
                WHERE id=%s"""


        nombre = datos_modificar['name']
        resumen = datos_modificar['summary']
        categoria = datos_modificar['category']

        libro_actualizado = {
            'id': id,
            'name': nombre,
            'summary': resumen,
            'category': categoria
        }

        cursor.execute(sql,(nombre,resumen,categoria,id))
        conn.commit()
        conn.close()
        return jsonify(libro_actualizado)

# Se inserta esa cantidad de datos del dataset en la base de datos
populate_table(80)  

# Para probar operaciones delete
# Con esto se inserta el dataset en la base dos veces para un total de 10400 datos para borrar
# populate_table(5200)
# populate_table(5200)
