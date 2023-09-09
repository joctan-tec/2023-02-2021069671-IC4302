# Documentación Tarea Corta 1

**Tecnológico de Costa Rica**

**IC4302-Bases de Datos II**

**Profesor: Nereo Campos Araya**

**Estudiantes:**

* Angel Jiménez Valverde - 2021436942
* Joselyn Priscilla Jiménez Salgado - 2021022576
* Jose Ricardo Cardona Quesada - 2021022613
* Joctan Antonio Porras Esquivel - 2021069671
* Justin Acuña Barrantes - 2018093451

# Guía de Instalación

***Aclaracione importante: Para la guía re recomienda usar visual studio code, ya que imágenes y explicaciones serán basadas en el uso de la terminal WSL en esta aplicación.***

## Requisitos e Instalaciones Previas

Para la ejecución de esta tarea es necesario instalar los siguientes elementos:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Kubernetes (se puede instalar desde la configuración de Docker Desktop)  
- [Helm Charts](https://helm.sh/docs/intro/install/)
- Lens 

En caso de tener Windows, se recomienda instalar WSL (Windows Subsystem for Linux) para poder ejecutar los archivos de automatización.

### Instalación de Docker

1. Descargar Docker Desktop desde el [sitio oficial](https://www.docker.com/products/docker-desktop/).
2. Instalar siguiendo las instrucciones del asistente de instalación. 
3. Una vez instalado, abrir la aplicación y verificar que Docker Engine se está ejecutando.

### Configuración de Kubernetes

1. En la configuración de Docker Desktop, dirigirse a la sección de Kubernetes.  
2. Activar la opción "Enable Kubernetes". Esto instalará un clúster de Kubernetes de un solo nodo.
3. Esperar a que el estado cambie a "Kubernetes is running".
4. Opcionalmente se puede cambiar el rango de direcciones IP del clúster. 

### Instalación de Helm

Para instalar Helm en la máquina local, seguir las instrucciones en la [documentación oficial](https://helm.sh/docs/intro/install/).

### Comprobación del Entorno 

Para verificar que todos los componentes están instalados y funcionando correctamente:

- Ejecutar `docker version` para verificar la instalación de Docker Engine
- Ejecutar `kubectl version` para verificar Kubernetes
- Ejecutar `helm version` para verificar Helm

Si todos los comandos anteriores muestran la versión, el entorno está listo para ejecutar la tarea.

## Instalación de Imágenes en Docker

Una vez que hayas instalado las herramientas necesarias y descargado el repositorio, abre la carpeta en la que se encuentra ubicado. Al hacer esto, verás algo similar a esto:

<img src="imgs/guia1.png" alt="Figura5. exportCart" width="800"/>


Ahora se abrira la terminal de visual Studio en WSL, esto se hace de la siguiente forma:
<img src="imgs/guia2.png" alt="Figura5. exportCart" width="800"/>


**`wsl`**

**`cd Tareacorta1`**

**`cd Dockerfiles`**

Estos comandos abrirán la terminal WSL y te llevarán a la carpeta que contiene el archivo para crear las imágenes de Docker necesarias para la ejecución correcta del programa. En este caso, cada imagen instalará el API de una base de datos distinta o la imagen del cliente de esa base de datos. El cliente se instala para poder manipular la base de datos y definir tablas e insertar datos correctamente.

El archivo Dockerfile se verá similar a esto:

<img src="imgs/guia3.png" alt="Figura5. exportCart" width="400"/>

Como se puede observar, cada una de las imágenes se crea por separado. Sin embargo, este código crea las imágenes en el repositorio de otra persona. Para instalar las imágenes en tus propios repositorios de Docker, debes cambiar todas las instancias del usuario por tus propias credenciales. Esto se verá así:

<img src="imgs/guia4.png" alt="Figura5. exportCart" width="400"/>

Debes reemplazar USERNAME por el nombre de tu usuario de Docker Desktop.

Una vez que hayas realizado este cambio, ejecuta los siguientes comandos en la terminal:

**`dos2unix createimg.sh`**

<img src="imgs/guia5.png" alt="Figura5. exportCart" width="2000"/>

**`./createimg.sh`**

Estos comandos instalarán todas las imágenes de los APIs en repositorios separados para su uso posterior durante la ejecución del programa.

## Instalación de Helm Charts
Una vez se hayan instalado las imágenes para los API de las bases de datos es necesario escoger cuál base se desea hacer loadTest. Para esto es necesario ingresar a la carpeta HelmCharts/ Databases/ values.yaml desde la UI de visual code, una vez ahi se verán los siguientes parámetros

<img src="imgs/guia6.png" alt="Figura5. exportCart" width="2000"/>

En este espacio podrán observarse todas las bases de datos disponibles para monitorear. Sin embargo, por cuestiones de espacio no se pueden ejecutar todas al mismo tiempo. Por lo tanto es necesario hacer lo siguiente:

La base de datos que se desea testear se le pone valor enabled: true
<img src="imgs/guia7.png" alt="Figura5. exportCart" width="350"/>

El resto es necesario asegurarse que tengan el valor enabled: false

<img src="imgs/guia8.png" alt="Figura5. exportCart" width="320"/>


Una vez se haya escogido la base de datos que se va a correr se va a ingresar al folder de los helmcharts para instalar las bases. Para esto se van a ejecutar los siguientes comandos:


**`cd ..`**

**`cd Helmcharts`**

Una vez se esta en la carpeta de los helm charts se va a correr el código de automatización, este instala todos los helm charts necesarios para la ejecución correcta del programa. Para esto se ejecutan los comandos:

**`dos2unix automatizacion.sh`**

**`./automatizacion.sh`**

Esto comenzará a instalar automáticamente todo, una vez termine se verá algo asi:




# Resultados de las pruebas


# MariaDB


# MariaDB Galera

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/b4e47e4d-53f3-4c3d-b202-27799de167fe)

Durante la prueba de PUT (Update), la base de datos dejó de responder y cayó.

* GET 

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/b4f14eaf-d021-4c1b-a503-ded87541052a)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/28a7052f-edcb-42f9-a17e-9125e053b94d)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/2b16e071-3ae8-4272-a147-75884a1d3a5d)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/b5feaf4d-e5cd-4d91-8a5c-40e88bc2f03e)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/b9cb5ea8-2870-4963-a20d-e4258685b80a)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/474a0216-ceaa-4876-99ec-ed39225cabd8)

* Post
  
![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/24778a8f-fe55-45bf-baa7-9cc1dc5df9fc)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/fc56f500-28a3-447b-9ff6-b4c0c8aaa0fd)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/48c93c08-1bc3-427b-989c-c41e1cf5f0bf)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/a0df3630-ab49-42a8-997e-29f40543333c)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/d2077642-1da4-48c8-8bf8-b7e3f35af7da)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/afad8ce7-9be1-4c36-aa0e-f5068143624a)


# PostGreSQL

* GET
![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/f1cfe9cf-dfb4-45d6-82c7-0ff96adb4c3f)


![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/b583813a-6e77-424e-bc7f-03b5a29cfc8c)


* POST
![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/d7902205-e77a-4a0e-ba97-147b2cf9000b)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/4c14cf58-d9d0-44d0-be9d-c7cb6f5b7743)



# Resultados en Grafana 


# MariaDB



# MariaDB Galera

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/00e31958-151d-4b96-a25b-5669f6bc9c44)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/74feed88-810d-4439-84af-85c3bc52d916)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/bf86d5a2-95d8-4c60-a0b8-47b7d70d1215)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/ec5c1b49-b5fa-4809-a685-76df024ba296)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/81cbf8ee-c5f5-4d65-9905-c542b2d6953b)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/6627c238-8775-4ce9-81e4-a7d63717f206)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/192c5b4a-8c79-46bf-86d2-e85ffe8a12ac)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/b4af8447-f5ae-48f8-9d9a-653c4aaf438b)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/7cd93960-d02a-4b62-b266-c079d5edd66d)


# PostGreSQL

* GET

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/f1743530-bd54-467d-a34d-9ec2dea569f5)


![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/25e4ad56-8741-4841-a38c-ae50b5b5a502)


![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/2fb3a50e-2b83-4d65-88df-992bb2d8e8f9)


![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/ff60bc1b-ed74-4411-80c3-acae0362cf60)


![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/7d9bdda4-d7de-4fda-8861-607f0b8dc6d2)


![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/859f7c71-8211-4df7-bbf0-46e1c4a1d06d)

* POST
  
![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/f3736033-194b-49f6-b163-bc309969bbbf)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/881a96de-5848-4fd7-a639-49d4dfc844b6)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/2c144033-a79b-4f39-ac69-a238be24e419)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/76dc7127-5703-44a6-b657-f6ab8ed2c6c9)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/54e0681b-a8d4-4ad3-a0db-45f82c70c8b7)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/02b442d8-169f-4a85-9c85-bd90d05872df)

* DELETE
  
![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/4a7299ef-c59c-472b-9647-d078f3361593)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/f8700f89-10e3-4f12-8c85-5ee04d1ef65f)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/17c9b50c-711a-4873-91f1-934399d3fd7c)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/afc2abbd-40e8-4944-b1ce-cea05782432b)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/6b12be4b-9d89-4136-80c8-16d1315eca84)













# PostGRE HA
<<<<<<< HEAD
Debido a distintos bugs en la API junto con una mal funcionamiento de gatling en la carga de datos masivos, no se lograron realizar las pruebas más intensivas, aun así fue posible rescatar unas gráficas de grafana las cuales mostramos a continuación.
=======

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/7772ec3e-21f2-4467-adb1-769102b1818b)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/643a4165-f600-4921-8702-e538acc97d10)

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/924cfd61-6718-406e-b9f9-418b1914bcf5)
>>>>>>> 3eef230fb86a98f6b7b2ee839b9ce93286fd8694



# Conclusiones derivadas de los resultados de las pruebas de carga

El propósito de las pruebas de carga fue simular el comportamiento real de una base de datos, manteniendo un flujo constante de usuarios y consultas. A pesar de esto, los resultados mostraron una falta de cambios drásticos entre las distintas pruebas. Es importante señalar que, en la vida real, los usuarios no actúan de manera constante, por lo que los resultados obtenidos no reflejan de manera realista la operación cotidiana. Sin embargo, estas pruebas ayudan a identificar problemas potenciales que pueden surgir en diversos escenarios.


# Aspectos Adicionales

Para llevar a cabo las pruebas de carga, se requería el uso de Gatling. Sin embargo, no todas las bases de datos disponían de una interfaz que permitiera utilizar puntos finales HTTP directamente. Por lo tanto, fue necesario crear una aplicación intermedia para abordar esta limitación. 

Esta aplicación intermedia fue desarrollada en Python utilizando la biblioteca Flask. Cada base de datos tenía su propia API específica. Para ejecutar una API de una base de datos, era necesario tener un entorno de implementación en funcionamiento en Kubernetes. Para lograr esto, se crearon imágenes de Docker para cada API mediante el uso de un Dockerfile. Los nombres de las imágenes se registraron en un archivo ubicado en "stateless/values.yaml", junto con otras configuraciones que se utilizarían para establecer el entorno de implementación, como los nombres y las aplicaciones asociadas.

# Conclusiones y Recomendaciones

* Pruebas locales antes de Docker

A la hora de implementar una imagen en Docker se recomienda probar primero el código que se quiera poner en el contenedor. En nuestro caso con las APIs nos fue increíblemente útil probarlas primero desde un IDE en Python y sin usar Docker. Esto nos salvo bastante tiempo durante el desarrollo y nos ayudo a prevenir confusiones en la detección de errores.

* Monitorización y generación de reportes 

Los reportes y visualizaciones que se pueden generar a través de métricas y timeseries, usando herramientas como Grafana y Prometheus son claves para tomar acciones y saber los límites de nuestra base de datos. Utilizar herramientas como Gatling para realizar pruebas de carga es una práctica crucial para garantizar que una aplicación o sistema pueda manejar cargas de trabajo realistas y mantener su rendimiento.

* Tipos de operaciones en pruebas de carga

A la hora de realizar las pruebas se deben tener en cuenta que distintos tipos de operaciones, incluso con la misma cantidad de usuarios puede llevar a resultados completamente distintos sobre la misma base de datos. Por ejemplo, una operación de GET no tendrá la misma carga que una operación PUT o POST.

* Postman para pruebas de API

Postman es una excelente herramienta para probar APIs. Cuenta con una completa colección de funciones para configurar cualquier tipo de petición HTTP: GET, POST, PUT, DELETE, etc. Aparte de esto la UI es sencilla de entender y utilizar.

* Limitaciones de dashboards pre-configurados

Si bien herramientas como Grafana proveen dashboards pre-configurados para visualizar métricas, estos no siempre incluirán todos los datos que se requiere monitorear. Muchas veces será necesario agregar paneles y métricas manualmente a los dashboards.

Por ejemplo, un dashboard general de una base SQL puede no tener información específica como el throughput de una API en particular. Hay que conocer los datos que se desean visualizar y agregarlos de forma explícita al dashboard.

Además, a medida que el sistema crece y hay nuevos datos, habrá que expandir los dashboards. Los dashboards pre-configurados son un buen punto de partida, pero esperar que muestren todas las métricas desde el inicio puede llevar a decepciones. Monitorear sistemas grandes requiere identificar las métricas clave y agregarlas de forma manual y progresiva.

* Ventajas de Docker y Kubernetes para pruebas de API

A la hora de probar APIs localmente, usar Docker y Kubernetes facilita el proceso ya que permiten ejecutar el API simultáneamente con otras aplicaciones si fuera necesario. Esto evita tener que detener otros servicios que usen los mismos puertos o recursos. Además, containerizar la API con Docker hace que su ejecución sea consistente en diferentes entornos. El código se ejecutará de la misma forma sin importar el sistema operativo o dependencias del host. 

* Adherirse a Estándares de Codificación

Establecer y seguir un estándar de codificación dentro del equipo. Esto mejora la consistencia y la legibilidad del código, lo que facilita la colaboración y el mantenimiento. Mantener un enfoque claro en las metas y objetivos, así como dividir las tareas de manera eficiente, garantiza que el equipo pueda avanzar de manera efectiva y evitar desviaciones innecesarias.

* Herramientas de Desarrollo y Control de Versiones

El dominio de herramientas como GitHub y Docker simplifica enormemente la colaboración en equipo y la gestión de proyectos. Facilitan el seguimiento de cambios, la integración de código y aseguran una ejecución consistente de aplicaciones en diferentes entornos, lo que aumenta la eficiencia y la portabilidad de dicho proyecto. Aprender a utilizar herramientas como GitHub es esencial para el desarrollo colaborativo. Familiarizarse con las funcionalidades básicas de control de versiones y colaboración en repositorios.

* Preservación de la Estructura del Proyecto

Mantener la estructura del proyecto a lo largo del tiempo es esencial para la mantenibilidad y la escalabilidad. Evita el caos y la confusión a medida que el proyecto crece y se desarrolla, lo que ahorra tiempo y recursos en el futuro. Esto facilita la gestión y la colaboración eficiente.

* Aprendizaje Continuo

Desarrollar la mentalidad de aprendizaje continuo es valioso no solo para la tarea actual, sino para el crecimiento a largo plazo como profesional. Siempre buscar oportunidades para adquirir nuevas habilidades y conocimientos. No limitarse a lo que se enseña en clase, es decir, repasar los conceptos aprendidos, investigar y profundizar en el tema. La investigación adicional puede proporcionar ideas frescas y enfoques innovadores para el progreso de la tarea.

* Reuniones de Seguimiento Regular

Es fundamental programar reuniones periódicas para evaluar el progreso de la tarea. Estas reuniones permiten mantener a todos los miembros del equipo actualizados y proporcionan un espacio para discutir desafíos y soluciones. Siguiendo el ejemplo del profesor o utilizando una metodología de gestión de proyectos, asegurándose de mantener una estructura organizativa sólida para la tarea. Esto incluye la definición de objetivos claros y la asignación de responsabilidades.










