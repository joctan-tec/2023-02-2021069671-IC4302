import psycopg2
from flask import Flask, request, jsonify
import pandas as panda
import numpy as np
import os
import csv

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

# Este metodo abre el csv del dataset y carga algunos datos en la base para hacer pruebas
# El dataset tiene 5000, este va a insertar los primeros 500 indices
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
    
@app.route('/books', methods=['GET', 'POST'])
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
            return jsonify(insertar_datos_pruebas())
        else:
            return 'No se encontro nada', 404

    if request.method == 'POST':
        conn = db_connection()
        cursor = conn.cursor()
        nombre = request.form['name']
        resumen = request.form['summary']
        category = request.form['category']

        sql = """INSERT INTO libros (name, summary, category)
                VALUES(%s,%s,%s)"""

        cursor.execute(sql,(nombre,resumen,category))
        conn.commit()
        conn.close()
        return f"Book with the id 0 created successfully"


@app.route('/books/<int:id>', methods=['GET', 'PUT', 'DELETE'])
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

    if request.method == 'PUT':
        conn = db_connection()
        cursor = conn.cursor()
        sql = """UPDATE libros
                SET name=%s,
                    summary=%s,
                    category=%s
                WHERE id=%s"""


        nombre = request.form['name']
        resumen = request.form['summary']
        categoria = request.form['category']

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


    if request.method == 'DELETE':
        conn = db_connection()
        cursor = conn.cursor()
        sql = """DELETE FROM libros WHERE id=%s"""
        cursor.execute(sql,(id,))
        conn.commit()
        conn.close()
        return "The book with the id: {} has been deleted".format(id), 200
    
    
if __name__ == '__main__':

    # Se insertan primero algunos libros en la tabla para las distintas operaciones
    populate_table(500)
    app.run(debug=True, host="0.0.0.0", port=5000)
