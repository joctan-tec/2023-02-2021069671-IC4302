from flask import Flask, request, jsonify
import mariadb
import pandas as panda
import random
import os

# This class gets data from a source
class Data:
    def __init__(self):
        self.__books = panda.read_csv('./books-summaries.csv').values.tolist()

# Returns a random book from dataset
    def getRandomBook(self):
        book = random.choice(self.__books)
        return book


class Connection:
    __instance = None
    __connection = None
    __cursor = None

    def __new__(self):
        if (self.__instance == None):
            self.__connection = mariadb.connect(
                                host=os.getenv('Mariagalera_HOST'),
                                port=3306,
                                database=os.getenv('Mariagalera_DB'),
                                user=os.getenv('MariagaleraUSER'),
                                password=os.getenv('Mariagalera_PASS')
                                )
            self.__instance = super(Connection,self).__new__(self)
        return self.__instance
    
    def getConnection(self):
        if (self.__connection == None):
            self.__connection = mariadb.connect(
                                host=os.getenv('Mariagalera_HOST'),
                                port=3306,
                                database=os.getenv('Mariagalera_DB'),
                                user=os.getenv('MariagaleraUSER'),
                                password=os.getenv('Mariagalera_PASS')
                                )
        return self.__connection
    
    def closeConenection(self):
        self.__connection.close()
        self.__connection = None
    
    def getCursor(self):
        self.getConnection()
        self.__cursor = self.__connection.cursor()
        return self.__cursor
    def closeCursor(self):
        self.__cursor.close()
        self.__cursor = None


app = Flask(__name__)



@app.route('/')
def index():
    return "Connection establised successfully"


#________________________________________________________________________________________
# |                           SELECT / INSERT                                            |
#_|______________________________________________________________________________________|

@app.route('/summaries', methods=['GET','POST'])
def summaries():
    if (request.method == 'GET'):
        cursor = Connection().getCursor()
        
        cursor.execute('SELECT id, book_name, summary, category FROM summaries;')
        sumaryList = [
            dict(id=row[0],book_name = row[1],summary=row[2],category=row[3])
            for row in cursor.fetchall()
        ]
        if (sumaryList != [] or sumaryList != None):
            return jsonify(sumaryList)
        else:
            return 'No found',404
    elif (request.method == 'POST'):
        randomBook = Data().getRandomBook()
        print(randomBook)
        # id_book(ignored bcz it's identity), book_name, summary, category
        arg = (
               randomBook[1],
               randomBook[2],
               randomBook[3])
        query = '''INSERT INTO summaries(book_name, summary, category)
                   VALUES(%s,%s,%s);'''

        Connection().getCursor().execute(query , arg)
        Connection().getConnection().commit()
        Connection().closeCursor()
        Connection().closeConenection()
        return f"Se agregó: {randomBook}", 201


#________________________________________________________________________________________
# |                           SELECT / UPDATE / DELETE                                   |
#_|______________________________________________________________________________________|

@app.route("/summaries/<int:pId>",methods=['GET','PUT','DELETE'])
def summariesID(pId):
    cursor = Connection().getCursor()

    if (request.method == 'GET'):
        query = '''SELECT id, book_name, summary, category FROM summaries
                         WHERE id = %s'''
        cursor.execute(query,(pId,))
        rows = cursor.fetchall()
        summary = None
        for r in rows:
            summary = r
        if summary != None:
            return jsonify(summary), 200
        else:
            return "Not found", 404
    
    if(request.method == 'PUT'):
        query = """UPDATE summaries
                   SET book_name = %s,
                       summary = %s,
                       category = %s
                   WHERE id = %s;
                """
        randomBook = Data().getRandomBook()
        args =(randomBook[1],randomBook[2],randomBook[3], pId)
        cursor.execute("SELECT id FROM summaries WHERE id = %s;",(pId,))
        result = cursor.fetchall()
        
        if (result !=[]):  
            cursor.execute(query,args)
            Connection().getConnection().commit()
            return "Se actualizó: {}".format(pId), 200
        else:
            return "ID {} no existe".format(pId),404
        

    #HACER EL DELETE
    if(request.method == 'DELETE'):
        query = """DELETE FROM summaries WHERE id = %s"""
        cursor.execute("SELECT id FROM summaries WHERE id = %s;",(pId,))
        result = cursor.fetchall()
        
        if (result !=[]):  
            cursor.execute(query, (pId,))
            Connection().getConnection().commit()
            return "Se eliminó: {}".format(pId), 200
        else:
            return "ID {} no existe".format(pId),404
        