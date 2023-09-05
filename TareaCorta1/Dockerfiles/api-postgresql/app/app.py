import psycopg2
from flask import Flask, request, jsonify
import pandas as panda

app = Flask(__name__)
import numpy as np

def db_connection():
    conn = None
    try:
        conn = psycopg2.connect(
            host='sql9.freesqldatabase.com',
            database='sql9644463',
            user='sql9644463',
            password='Y1uqIiqXm7',
            cursorclass= psycopg2.cursors.DictCursor)
    except:
        print('No se pudo conectar a la base de datos')
    return conn

#lista_libros = panda.read_csv('books-summaries.csv')
#df = panda.DataFrame(lista_libros.values, columns=['id', 'name', 'summary', 'category'])
#diccionario_libros = df.to_dict(orient='records')


@app.route('/books', methods=['GET', 'POST'])
def books():

    if request.method == 'GET':
        conn = db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM libros")
        libros = [
            dict(id=row['id'], name=row['name'], summary=row['summary'], category=row['category'])
            for row in cursor.fetchall()
        ]
        conn.close()
        if libros is not None:
            return jsonify(libros)
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
        cursor.execute("SELECT * FROM libros WHERE id=?", (id,))
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
                SET name=?,
                    summary=?,
                    category=?
                WHERE id=?"""


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
        sql = """DELETE FROM libros WHERE id=?"""
        cursor.execute(sql,(id,))
        conn.commit()
        conn.close()
        return "The book with the id: {} has been deleted".format(id), 200

if __name__ == '__main__':
    app.run()
