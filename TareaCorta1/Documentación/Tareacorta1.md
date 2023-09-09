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

# Configuración de las pruebas

1- PostGreSQL

* GET 1
![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/f1743530-bd54-467d-a34d-9ec2dea569f5)

* GET 2
![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/25e4ad56-8741-4841-a38c-ae50b5b5a502)

* GET 3
  ![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/2fb3a50e-2b83-4d65-88df-992bb2d8e8f9)


  
  




# Resultados de las pruebas 

1- MariaDB

2- MariaDB Galera

![image](https://github.com/joctan-tec/2023-02-2021069671-IC4302/assets/99993320/b4e47e4d-53f3-4c3d-b202-27799de167fe)

Durante la prueba de PUT (Update), la base de datos dejó de responder y cayó.

3- PostGreSQL

4- PostGRE HA

5- ElasticSearch 



# Resultados en Grafana 

1- MariaDB

2- MariaDB Galera

3- PostGreSQL

4- PostGRE HA

5- ElasticSearch 

# Aspectos Adicionales

Para llevar a cabo las pruebas de carga, se requería el uso de Gatling. Sin embargo, no todas las bases de datos disponían de una interfaz que permitiera utilizar puntos finales HTTP directamente. Por lo tanto, fue necesario crear una aplicación intermedia para abordar esta limitación. 

Esta aplicación intermedia fue desarrollada en Python utilizando la biblioteca Flask. Cada base de datos tenía su propia API específica. Para ejecutar una API de una base de datos, era necesario tener un entorno de implementación en funcionamiento en Kubernetes. Para lograr esto, se crearon imágenes de Docker para cada API mediante el uso de un Dockerfile. Los nombres de las imágenes se registraron en un archivo ubicado en "stateless/values.yaml", junto con otras configuraciones que se utilizarían para establecer el entorno de implementación, como los nombres y las aplicaciones asociadas.

# Conclusiones y Recomendaciones

### Pruebas locales antes de Docker

A la hora de implementar una imagen en Docker se recomienda probar primero el código que se quiera poner en el contenedor. En nuestro caso con las APIs nos fue increíblemente útil probarlas primero desde un IDE en Python y sin usar Docker. Esto nos salvo bastante tiempo durante el desarrollo y nos ayudo a prevenir confusiones en la detección de errores.

### Monitorización y generación de reportes 

Los reportes y visualizaciones que se pueden generar a través de métricas y timeseries, usando herramientas como Grafana y Prometheus son claves para tomar acciones y saber los límites de nuestra base de datos. Utilizar herramientas como Gatling para realizar pruebas de carga es una práctica crucial para garantizar que una aplicación o sistema pueda manejar cargas de trabajo realistas y mantener su rendimiento.

### Tipos de operaciones en pruebas de carga

A la hora de realizar las pruebas se deben tener en cuenta que distintos tipos de operaciones, incluso con la misma cantidad de usuarios puede llevar a resultados completamente distintos sobre la misma base de datos. Por ejemplo, una operación de GET no tendrá la misma carga que una operación PUT o POST.

### Postman para pruebas de API

Postman es una excelente herramienta para probar APIs. Cuenta con una completa colección de funciones para configurar cualquier tipo de petición HTTP: GET, POST, PUT, DELETE, etc. Aparte de esto la UI es sencilla de entender y utilizar.

### Limitaciones de dashboards pre-configurados

Si bien herramientas como Grafana proveen dashboards pre-configurados para visualizar métricas, estos no siempre incluirán todos los datos que se requiere monitorear. Muchas veces será necesario agregar paneles y métricas manualmente a los dashboards.

Por ejemplo, un dashboard general de una base SQL puede no tener información específica como el throughput de una API en particular. Hay que conocer los datos que se desean visualizar y agregarlos de forma explícita al dashboard.

Además, a medida que el sistema crece y hay nuevos datos, habrá que expandir los dashboards. Los dashboards pre-configurados son un buen punto de partida, pero esperar que muestren todas las métricas desde el inicio puede llevar a decepciones. Monitorear sistemas grandes requiere identificar las métricas clave y agregarlas de forma manual y progresiva.

### Ventajas de Docker y Kubernetes para pruebas de API

A la hora de probar APIs localmente, usar Docker y Kubernetes facilita el proceso ya que permiten ejecutar el API simultáneamente con otras aplicaciones si fuera necesario. Esto evita tener que detener otros servicios que usen los mismos puertos o recursos. Además, containerizar la API con Docker hace que su ejecución sea consistente en diferentes entornos. El código se ejecutará de la misma forma sin importar el sistema operativo o dependencias del host. 

### Adherirse a Estándares de Codificación

Establecer y seguir un estándar de codificación dentro del equipo. Esto mejora la consistencia y la legibilidad del código, lo que facilita la colaboración y el mantenimiento. Mantener un enfoque claro en las metas y objetivos, así como dividir las tareas de manera eficiente, garantiza que el equipo pueda avanzar de manera efectiva y evitar desviaciones innecesarias.

### Herramientas de Desarrollo y Control de Versiones

El dominio de herramientas como GitHub y Docker simplifica enormemente la colaboración en equipo y la gestión de proyectos. Facilitan el seguimiento de cambios, la integración de código y aseguran una ejecución consistente de aplicaciones en diferentes entornos, lo que aumenta la eficiencia y la portabilidad de dicho proyecto. Aprender a utilizar herramientas como GitHub es esencial para el desarrollo colaborativo. Familiarizarse con las funcionalidades básicas de control de versiones y colaboración en repositorios.

### Preservación de la Estructura del Proyecto

Mantener la estructura del proyecto a lo largo del tiempo es esencial para la mantenibilidad y la escalabilidad. Evita el caos y la confusión a medida que el proyecto crece y se desarrolla, lo que ahorra tiempo y recursos en el futuro. Esto facilita la gestión y la colaboración eficiente.

### Aprendizaje Continuo

Desarrollar la mentalidad de aprendizaje continuo es valioso no solo para la tarea actual, sino para el crecimiento a largo plazo como profesional. Siempre buscar oportunidades para adquirir nuevas habilidades y conocimientos. No limitarse a lo que se enseña en clase, es decir, repasar los conceptos aprendidos, investigar y profundizar en el tema. La investigación adicional puede proporcionar ideas frescas y enfoques innovadores para el progreso de la tarea.

### Reuniones de Seguimiento Regular

Es fundamental programar reuniones periódicas para evaluar el progreso de la tarea. Estas reuniones permiten mantener a todos los miembros del equipo actualizados y proporcionan un espacio para discutir desafíos y soluciones. Siguiendo el ejemplo del profesor o utilizando una metodología de gestión de proyectos, asegurándose de mantener una estructura organizativa sólida para la tarea. Esto incluye la definición de objetivos claros y la asignación de responsabilidades.










