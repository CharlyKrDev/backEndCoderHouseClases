## Clase_15 Mongoose

CRUD: Acrónimo que hace referencia a las cuatro operaciones fundamentales de una base datos (Create Read Update Delete)
Proyecciones: Una proyección se incluye al momento de hacer una búsqueda.
Sort: Sirve para poder hacer un ordenamiento de la información. La sintaxis es: db.collection.find().sort({val_A:1,val_B:-1})
Skip: Omite el numero de documentos indicados. Su sintaxis es: .skip(offset)
Limit: Limita el numero de documentos devueltos. Su sintaxis es: .limit(num)

## Clientes de BD

Cada vez que accedemos a una base de datos para realizar cualquier operación CRUD, nosotros nos convertimos en clientes de esa base de datos.

Podemos ser diferentes tipos de clientes para acceder a la misma base:
 * Cliente CLI
 * Cliente GUI
 * Cliente web
 * Cliente app

Ya fungimos como clientes CLI, vamos a visualizar brevemente los otros tipos de clientes.

## Cliente GUI - Mongo DB Compass

Es el cliente que puede conectar a la base de datos desde un programa gráfico destinado a ello. El cliente GUI por excelencia para trabajar con MondoDB es MongoDB Compass.
Este suele instalarse al momento en el que instalamos Mongo.

## Cliente APP

Este sera nuestro fuerte: Poder acceder a la base de datos desde nuestra aplicación, permite utilizarla a partir de código, a partir de un contexto.

Esto significa que, una vez que se encuentra correctamente configurada la app, no dependeremos tanto de meter mano manualmente pues nuestro programa sabra en que momento realizar las operaciones CRUD.

## Cliente Web - Mongo Atlas

Cuando conseguimos tener nuestra base de datos en la nube, podemos conectarnos a un servidor en la web para poder analizar los datos y realizar las operaciones desde cualquier computadora.

Es de los modelos mas utilizados, debido a que no es necesario contar con una computadora especifica (según sean los permisos)

El cliente web por excelencia para MondoDB es Atlas, ademas de fungir como DBaaS.

## DBassS: Database as a Service.

* El problema: Escalabilidad y factibilidad.

Que pasa cuando tu empresa va creciendo y necesitamos almacenar cantidad enormes de información?
Estamos dispuestos a dedicar cuartos completos con bases de datos?
Que tan elevados pueden llegar a ser los costos de tener que comprar infraestructura física para el negocio? Valdrá la pena?
Y si hubiera forma de "rentar" dicho espacio a un proveedor, para solo preocuparme en los aspectos mas superficiales de la base de datos?

* La solución: DBaaS

Utilizar una base de datos como servicio, implica el poder hacer uso de una base de datos, sin preocuparse en tener que gestionar todo el aspecto físico que este implica, es decir, podemos rentar espacios para poder alojar la información de nuestra de base de datos.

Todos los aspectos físicos, de mantenimiento y seguridad de dichas bases de datos, vienen gestionados por el proveedor de dicho servicio.

Amazon, Google, Microsoft, Mongo Atlas son algunos ejemplos.

## Ventajas de modelo DBaaS:

* Se elimina la infraestructura física de la ecuación ahorrando en costos, ya que el proveedor es responsable del mantenimiento y la disponibilidad de los sistemas. Los usuarios son responsables de sus propios datos.

* Ahorro de costos generalizados. Ademas de prescindir de las inversiones física, con DBaaS se puede tener menos personal dedicado a esta tarea, ahorrar en energía y aprovechar mejor el espacio físico.

* Escalabilidad. Con DBaaS podemos acceder a diferentes tarifas basados principalmente en el rendimiento deseado y nuestras necesidades.

* Personal cualificado. A traves de DBaaS se accede a expertos en bases de datos que se encargaran de todas las tareas de mantenimiento, actualización, seguridad y gestión.

## MongoDB Atlas:

Características destacadas.

* Automatización: una manera fácil de crear, lanzar y escalar aplicaciones en MongoDB.

* Flexibilidad: DBaaS con todo lo necesario para las aplicaciones modernas.

* Seguridad: Varios niveles de seguridad disponibles.

* Escalabilidad: Gran Escalabilidad sin interrumpir la actividad.

* Alta disponibilidad: Implementaciones con tolerancia a errores y autoreparación predeterminadas.

* Alto rendimiento: El necesario para las cargas de trabajos exigentes.

Ventajas de MongoDB Atlas:
En Ejecución:

*  Puesta en marcha de un cluster en segundos.

* Implementaciones replicadas y sin interrupción.

* Total Escalabilidad: Escalado horizontal o vertical sin interrumpir la actividad.

En protección y seguridad:

* Autenticación y cifrado.

*  Copias de seguridad continuas con recuperación temporal.

* Supervision detallada y alertas personalizadas.


## MONGOOSE

Mongoose es un ODM (Object Document Mapping), el cual nos permitirá definir esquemas para poder gestionar colecciones y documentos entre una aplicación de nodejs y una base de datos en MongDB.

Una vez que comprendemos que MongoDB permite gestionar documentos similar a un objeto. Ademas, mongoose nos permitir conectar con la base de datos gestionada desde Mongo Atlas, con el fin de poder mantener la gestión de la base de datos desde la nube.

Instalación y parte practica