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

@app.route('/books', methods=['GET', 'POST', 'DELETE', ' PUT'])
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
    
    if request.method == 'PUT':
        
        conn = db_connection()
        cursor = conn.cursor()
        
        cursor.execute("SELECT * FROM libros")
        rows = cursor.fetchall()
        
        # Se escoge un indice aleatorio a modificar
        indice_modificar = random.randint(0, len(rows)-1)
        indice_modificar = rows[indice_modificar][0]
        
        # Se escoge otro indice aleatorio para sacar los datos de modificacion
        datos_modificar = random.randint(0, len(rows)-1)
        nombre = rows[datos_modificar][1]
        resumen = rows[datos_modificar][2]
        category = rows[datos_modificar][3]

        sql = """UPDATE libros
                SET name=%s,
                    summary=%s,
                    category=%s
                WHERE id=%s"""

        cursor.execute(sql,(nombre,resumen,category,indice_modificar))
        conn.commit()
        conn.close()
        return "The book with the id: {} has been modified".format(indice_modificar), 200

# Se inserta esa cantidad de datos del dataset en la base de datos
populate_table(80)  

# Para probar operaciones delete
# Con esto se inserta el dataset en la base dos veces para un total de 10400 datos para borrar
#populate_table(5200)
#populate_table(5200)
