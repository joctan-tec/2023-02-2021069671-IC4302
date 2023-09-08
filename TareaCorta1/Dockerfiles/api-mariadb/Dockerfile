FROM python:3.11.5

#comentamos esto, acá vamos a poner la dirección del directorio a trabajar
#Luego vamos a copiar la información dentro del app. a la posición actual, o .
#Y copiamos los books-summaries sobre los que trabajaremos al docker

#Asignamos el directorio de trabajo en docker como app, ahora aquí dentro
#de docker en el directorio app se copiará código de la aplicación y más datos
WORKDIR /app

#Copiamos los datos al archivo actual en el docker, y corremos
#o instalamos los requerimientos

COPY app/. . 
RUN pip install --no-cache-dir -r requirements.txt

#Le decimos a docker que exponga el puerto 5000, de modo que la aplicación escuchará
#en el puerto 5000.
EXPOSE 5000

#Finalmente le decimos a Flask que escuche en todas las redes, permitiendo conexiones
#externas acercarse a la aplicación
CMD ["flask", "--app", "app", "run", "--host=0.0.0.0"]