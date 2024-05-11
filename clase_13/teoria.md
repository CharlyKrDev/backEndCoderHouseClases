## MONGODB CRUD:

## Glosario:

* WebSocket: Protocolo de comunicación que permite una sesión activa entre cliente y servidor.

* SweetAlert2: Librería que permite utilizar alertas con presentación profesional. Sirve para autenticaciones.

* Autenticación: Proceso por el cual el usuario tiene que identificarse para poder hacer uso de algún servicio.

* Deploy: Desplegar una aplicación para pasar de un entorno local a la nube, con el fin de que lo usuarios puedan acceder a dicha aplicación.

* itHub: Es una forja, o una plataforma de desarrollo colaborativo, donde podemos alojar nuestro repositorios con nuestras aplicaciones.

* Glitch.com: Pagina utilizada para poder hacer deploy de nuestra aplicación, a partir de su conexión con github.

## EL GRAN PROBLEMA DE LA PERSISTENCIA

Hasta este punto del curso, hemos estado trabajando con un fileSystem (sistema de archivos) para poder hacer nuestros almacenamientos principales.

Sin embargo, sabemos claramente que hay algunos problemas con el uso de archivos, como son:

* Tener que actualizar todo el archivo cuando hacemos algún cambio.
* Tener que leer todo el archivo cuando buscamos algún dato.
* Sin protección al momento de querer mover o modificar algo.

## La necesidad de cambio

Tal vez hasta el momento no has notado dichos problemas, sin embargo, cuando comenzamos a trabajar con cientos, miles o milles de datos, realmente nos encontramos con un enorme problema de performance.
Es por ello que comenzó a buscarse una solución mas optima para trabajar con grandes volúmenes de datos: surgieron las bases de datos.

## Base de datos

Una base de datos no es mas que una recopilación organizada de datos. Dichos datos deben compartir algún contexto y son almacenados con poder convertirse posteriormente en información util para utilizarse dentro de algún sistema.
La base de datos solo se encarga de almacenar dichos datos, el uso que les demos posteriormente ya no competen a esta.


## Por que es util una base de datos?
Algunas de las cosas que podemos señalar sobre la utilidad de una  base de datos son:
* Almacenamiento mas seguro: Los datos que viven en una base de datos no son modificables directamente, por lo que estos no pueden ser cambiados tan fácilmente.
* Segmentación de datos: Podemos separar los datos en "contextos", permitiendo asi tener separados los datos de interés.
    ~ Separar clientes potenciales de clientes interesados.
    ~ Separar productos existentes de productos fuera de stock.
    ~ separar diferentes usuarios por genero, nacionalidad, plan, etc.
* Gestión sencilla una vez configurada: Una vez que hemos definido los esquemas principales de nuestra base de datos, podremos realizar operaciones sobre estos datos como:
    ~ Filtrar.
    ~ Ordenar.
    ~ Buscar datos específicos.
    ~ Actualizar un conjunto de datos sin afectar o tocar otros datos.

## Modelo relacional y no relacional

* La necesidad de distintos modelos de bases de datos:

Una vez que entendimos que la base de datos nos sirve para mantener los datos organizados toca entender cuando utilizar un modelo relacional o un modelo no relacional.
    ~ Una base de datos relacional refiere a estructura, relación, dependencia y de cambio controlado.
    ~ Una base de datos no relacional refiere a algo menos estructurado, con relaciones y dependencias mas flexibles, y de cambios sumamente rápidos.

## Modelo relacional.

Refiere a modelos de datos donde se requieren estructuras mas firmes y estrictas sobre los datos. Ademas, se utilizan en datos mas controlados.
    ~ Se basan en tablas, columnas y filas para gestionar sus datos.
    ~ Permiten conectar las tablas a partir de "relaciones" basadas en llaves primarias y foráneas.
    ~ Sirve para datos de control como:
        - Sistemas bancarios.
        - Sistemas de clima (no tiempo atmosférico).
        - Sistemas de películas.
        - Su lenguaje es SQL (Structured Query Language).
        - Algunos sistemas SQL son:
            ~ PostgreSQL
            ~ Oracle
            ~ MySQL
            ~ MariaDB

## El problema de las BD relacionales.

Cuando las aplicaciones que necesitamos incrementan sus requisitos, los datos cambian mas rápido y son mas complejos, son mas inconsistentes yu por lo tanto nuestra base de datos datos relacional comienza a volverse lenta.


## Solución: Introducir un modelo mas flexible.

Introduciendo el modelo no relacional

Se desarrolla un modelo donde los datos sean mas flexibles, tanto en estructura, como en asociación.
Todo esto con el fin de crear datos pensados para desempeño, no para consistencia inmediata.

## Modelo No relacional.

La flexibilidad de datos lo hace considerablemente mas rápido en cuanto a su accesibilidad.
* Puede basarse en:
    ~ Clave valor
    ~ Documentos
    ~ Gráficos
    ~ Memoria

* Son bases de datos muy útiles para organizar y gestionar información no estructurada, o cuando no se tiene una noción clara de los datos a almacenar.
* Alto grado de Escalabilidad y de performance.
* No utiliza SQl como lenguaje.
* Algunos sistemas No SQL son:
    ~ MongoDB
    ~ Redis
    ~ DynamoDB

# !IMPORTANTE

El que las bases de datos no relacionales sean utilizados en aplicaciones modernas de mayor movilidad de datos, no significa que las bases de datos relacionales no sirvan ya. Las bases de datos relacionales singuen siendo ampliamente demandadas en ciertos sectores del mercado (sistemas bancarios, sistemas de películas, clima, etc)

## Cuando usar cada modelo?

Modelo relacional 

* Cuando el volumen de datos no crece, o bien lo hace poco a poco.
* Cuando las necesidades del proceso pueden atenderse en un solo servidor.
* Cuando no existen picos de uso por parte de los usuarios que utilizan el sistema.

Modelo No relacional

* Cuando el volumen de los datos crece rápidamente.
* Cuando las necesidades del proceso son tal altas y tan constante,s que se requieren multiples servidores.
* Cuando los usuarios saturan el sistema y generan "picos de uso".

## MONGODB

* Base de datos no relacional orientada a documentos.
* En lugar de tablas, opta por utilizar colecciones.
* Cada documento que ingresamos a una colección puede tener diferente estructura.
* Puede utilizarse en modo local o en la nube.

Características:

* Almacena datos en documentos flexibles similares a JSON: la estructura de datos se puede cambiar con el tiempo.
* El modelo de documento se asigna a los objetos en el código de su aplicación para facilitar el trabajo con los datos.
* Las consultas ad hoc, la indexación y la agregación en tiempo real ofrecen maneras potentes de acceder a los datos y analizarlos.
* MongoDB es una base de datos distribuida en su núcleo, por lo que la alta disponibilidad, la Escalabilidad horizontal y la distribución geográfica están integradas y son fáciles de usar. 
* MongoDB es de uso gratuito.

La arquitectura de una BD en mongo seria:

El servidor que contiene a la base de datos y dentro de la base de datos esta la colección o colecciones y dentro de cada colección están los documentos con los datos.

SERVIDOR MongoDB
    |--> BaseDeDatos
                |->Colección 
                        |-> Documentos(Datos)

## Documentos

Una de las grandes ventajas de un documento es que este se basa en el concepto clave-valor, esto, como sabras, se asemeja muchísimo a un objeto como el que has trabajado en JS.

No son propiamente un "objeto" como para llamarlos de tal forma, sino que MongoDB trabaja con una extension de los archivos conocidos como BSON. Esto es lo que realmente permanece en la base de datos.

Los esquemas de una base de datos en MongoDB, con ayuda de elementos como Mongoose, son fácilmente manipulables, ya que permiten definirlos con una estructura casi idéntica a la de un objeto.

## Colecciones en MongoDB

Cada vez que pensemos en un grupo de datos, lo mencionaremos como una colección, en esta almacenaremos cada documento individual (similar a una tabla con sus registros).
 
 * Colección de usuarios
 * Colección de productos
 * Colección de mascotas

 ## Algunos comandos para ser usados en Mongo Compass

 para acceder a una base de datos se usa: use nombreDeLaBaseDeDatos

**Listar todos los documentos de la colección clientes ordenados por edad descendente**
db.nombreDeLaColeccion.find().sort({ edad: -1 })

**Listar el cliente más joven**:
db.clientes.find().sort({ edad: 1 }).limit(1)

**Listar el segundo cliente más joven**:
db.clientes.find().sort({ edad: 1 }).skip(1).limit(1)

**Listar los clientes llamados 'Juan'**:
db.clientes.find({ nombre: "Juan" })

**Listar los clientes llamados 'Juan' que tengan 29 años**:
db.clientes.find({ nombre: "Juan", edad: 29 })

**Listar los clientes llamados 'Juan' ó 'Lucia'**:
db.clientes.find({ nombre: { $in: ["Juan", "Lucia"] } })

**Listar los clientes que tengan más de 25 años**:
db.clientes.find({ edad: { $gt: 25 } })

**Listar los clientes que tengan 25 años ó menos**:
db.clientes.find({ edad: { $lte: 25 } })

**Listar los clientes que NO tengan 25 años**:
db.clientes.find({ edad: { $ne: 25 } })

**Listar los clientes que estén entre los 26 y 35 años**:
db.clientes.find({ edad: { $gte: 26, $lte: 35 } })

**Actualizar la edad de Fede a 36 años**:
db.clientes.updateOne({ nombre: "Fede" }, { $set: { edad: 36 } })

**Actualizar todas las edades de 25 años a 26 años**:
db.clientes.updateMany({ edad: 25 }, { $set: { edad: 26 } })

**Borrar los clientes que se llamen 'Juan'**:
db.clientes.deleteMany({ nombre: "Juan" })

**Eliminar todos los documentos de clientes que hayan quedado con algún valor**:
db.clientes.deleteMany({})