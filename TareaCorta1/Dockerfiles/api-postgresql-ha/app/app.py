from flask import Flask, request, jsonify
import psycopg2
import pandas as panda
import numpy as np
import random
import os

app = Flask(__name__)

# Database connection


def db_connection():
    conn = None
    try:
        conn = psycopg2.connect(
            user=os.getenv("PosgresUSER"),
            password=os.getenv("Posgres_PASS"),
            host=os.getenv("Posgres_HOST"),
            port=5432,
            database=os.getenv("Posgres_DB"))
    except Exception as error:
        print(error)
    return conn


# Lista de libros y su resumen
bookSummary = []


def data_loader():
    # Hace referencia al directorio del dockerfile
    datafile = panda.read_csv('./books-summaries.csv')
    return datafile.values.tolist()


@app.route('/books', methods=['GET', 'POST'])
def summaries():
    conn = db_connection()
    cursor = conn.cursor()
    data = data_loader()
    if request.method == 'GET':
        cursor.execute('SELECT * FROM Libros')
        summaries = [
            dict(id=row[0], name=row[1], summary=row[2], category=row[3])
            for row in cursor.fetchall()
        ]
        if summaries is not None:
            conn.close()
            return jsonify(summaries)
        conn.close()
    # POST ___________________________________________________
    if request.method == 'POST':
        # Obtener un libro random
        bookRand = random.choice(data)

        # id(identity), nombre, resumen, categoria
        args = (bookRand[1], bookRand[2], bookRand[3])

        # query
        sql = """ INSERT INTO Libros (name, summary, category) 
                VALUES ( %s, %s, %s)"""

        cursor = cursor.execute(sql, args)
        conn.commit()
        conn.close()
        return f"Se agregó: {bookRand}", 201
# ________________________________________________________________________


@app.route('/books', methods=['GET', 'PUT', 'DELETE'])
def summary_by_id(id):
    data = data_loader()
    conn = db_connection()
    cursor = conn.cursor()
    summary = None
    # GET por id___________________________________
    if request.method == 'GET':
        cursor.execute("SELECT * FROM Libros WHERE id+?", (id,))
        rows = cursor.fetchall()
        for r in rows:
            summary = r
        if summary is not None:
            conn.close()
            return jsonify(summary), 200
        else:
            conn.close()
            return "Not found", 404
    # Actualizar _________________________________
    if request.method == 'PUT':
        query = """UPDATE Libros
                    SET name = %s,
                        summary = %s,
                        category = %s
                    WHERE id = %s
                """
        bookRand = random.choice(data)
        args = (bookRand[1], bookRand[2], bookRand[3], id)
        cursor.execute("SELECT id FROM Libros WHERE id = %s;", (id,))
        result = cursor.fetchall()

        if (result != []):
            cursor.execute(query, args)
            conn.commit()
            conn.close()
            return "Se actualizó: {}".format(id), 200
        else:
            conn.close()
            return "ID {} no existe".format(id), 404
    # Borrar ______________________________________
    if request.method == 'DELETE':
        query = """DELETE FROM Libros WHERE id = %s"""
        cursor.execute(query, (id,))
        conn.commit()
        conn.close()
        return "Se eliminó: {}".format(id), 200

'''
# Main
if __name__ == '__main__':
    crearTabla()
    app.run(debug=True)'''
