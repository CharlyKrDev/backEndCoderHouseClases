//Códigos de estado HTTP

/**
* Códigos de estados de un Servidor:

 * Como funciona? Cuando el servidor responde con un estad, esto permite saber que ocurrió con la consulta que estábamos haciendo, y da información al cliente sobre que ha ocurrido.
 * 1xx = Status `Informativo`
 * 2xx = Status `ok`
 * 3xx = Status de re dirección
 * 4xx = Status de error del cliente, este error no le corresponde al backend. El mas común es el 403, que es el forbidden que es la falta de autorización
 * 5xx = Status de error en el servidor. es error que corresponde al backend


API REST

Es un conjunto de definiciones y reglas que permiten que dos equipos puedan integrarse para trabajar juntos. La mejor analogía que hay para comprender esto es que una API funge como un 'contrato' entre el front y el back.

Veamos las etapas en el siguiente Genially.
La API permite entonces que se respondan preguntas como:
*A que endpoint debo apuntar para la tarea que necesito?
*Que método debo utilizar para ese recurso?
*Que información debo enviar para realizar correctamente mi petición?



REST:
Ya tenemos las reglas para comunicarse, pero que tal la estructura del mensaje?
Cuando hacemos una petición o cuando recibimos una respuesta, esta debe tener un formato. REST (REpresentational State Transfer) permite definir la estructura que deben tener los datos para poder transferirse.
La API respondía a u preguntas sobre como comunicarse correctamente, sin embargo, REST define como deber ser el cuerpo del mensaje a transmitir, (puedes llegar a hablar con el presidente si cumples con el protocolo (HTTP) y las reglas (API), pero de que nos servirá si la forma en que estructuramos nuestro mensajes (REST) no es correcta?)

Los formatos mas importantes son los JSON y XML. La utilización de la estructura dependerá de las necesidades del proyecto. Nosotros utilizaremos JSON. Como notas !un JSON parece un objeto! asi que es mucho mas amigable en sintaxis.

SINTAXIS JSON:
{
    "key"":"value",
    "key":[
        "value1"
        "value2"
        "value2"
 ]
}

Entonces una API REST es un modelo completo para tener perfectamente estipulados los protocolos, las reglas, e incluso la estructura de la información, con el din de poder hacer un sistema de comunicación completo entre las computadoras.

Modelo de una API REST:

Cliente (GET, POST, PUT, DELETE) ->  Rest API -> (HTTP REQUEST ) Server
Cliente (JSON, XML, HTML) <-  Rest API <- (HTTP RESPONSE) Server

Que características debe tener una API REST?

Arquitectura Cliente-Servidor sin estado

Cada mensaje HTTP contiene toda la información necesaria para comprender la petición.
Como resultado, ni el cliente, ni el servidor necesitan recordar ningún estado de las comunicaciones entre mensajes.
Esta restricción mantiene al cliente y al servidor débilmente acoplados: El cliente no necesita conocer los detalles de implementación del servidor y el servidor se 'despreocupa' de como son usados los datos que envía el cliente.

CACHEABLE

* Debe admitir un sistema de almacenamiento en cache
* La infraestructura de red debe soportar una cache de varios niveles.
* Este almacenamiento evita repetir varias conexiones entre el servidor y el cliente, en casos en que peticiones idénticas fueran a generar la misma respuesta.

OPERACIONES COMUNES:

* Todos los recursos detrás de nuestra API deben poder ser consumidos mediante peticiones HTTP, preferentemente sus principales (POST, GET, PUT Y DELETE)
* Con frecuencia estas operaciones se equiparan a las operaciones CRUD en bases de datos (en ingles: CREATE, READ, UPDATE, DELETE)
* Al tratarse de peticiones HTTP, estas deberán devolver con sus respuestas los correspondientes códigos de estado, informando el resultado de las mismas.

INTERFAZ UNIFORME

* En un sistema REST, cada acción (mas correctamente, cada recurso) debe contar con un URL (Uniform Resource Identifier), un identificador único.
* Esta nos facilita el acceso a la información, tanto para consultarla, como para modificarla o eliminarla, pero también para compartir su ubicación exacta a terceros.

UTILIZACIÓN DE HIPERMEDIOS

* Cada vez que se hace una petición al servidor y este devuelve una respuesta, parte de la información devuelta puede ser también hipervínculos de navegación asociada a otros recursos del cliente.
* Como resultado de estos, es posible navegar de un recurso REST a muchos otros, simplemente siguiendo enlaces sin requerir el uso de registros u otra infraestructura adicional.


MÉTODOS DE PETICIÓN

Un método es una definición que forma para del protocolo HTTP, el cual nos sirve para canalizar el tipo de peticiones que estoy realizando sobre un cierto endpoint. De esta manera, el cliente puede llamar al mismo endpoint, pero con diferentes métodos, indicando que operación quiere realizar con dicho recurso.

Los 4 que mas se utilizan son 
GET, POST, PUT, DELETE.

* GET (recibe información sobre un recurso de la API), 
* POST (Crea un recurso de la API), 
* PUT (Actualiza un recurso de la API), 
* DELETE (Borra un recurso de la API)

Principios

* Una aplicación RESTful requiere un enfoque de diseño distinto a la forma típica de pensar en un sistema: lo contrario a RPC

* RPC (Remote Procedure Calls, llamadas a procedimientos remotos) basa su funcionamiento en las operaciones que puede realizar el sistema(acciones, usualmente verbos) Ej: getUsuarios()

* En REST, por el contrario, el énfasis se pone en los recursos (usualmente sustantivos), especialmente en los nombres que se le asigna a cada tipo de recurso. Ej. Usuarios.

* Cada funcionalidad relacionada con este recurso tendría sus propios identificadores y peticiones en HTTP.

POSTMAN

El problema: El navegador solo puede enviar peticiones con método GET desde la url, sin embargo, para poder utilizar el resto de métodos, no sera posible con el navegador.

La solución: POSTMAN es un software profesional que nos permitirá gestionar peticiones simulando ser un cliente. De esta manera rompemos la limitantes del navegador y podemos probar todos nuestros endpoints.

Método POSTMAN

Sirve para 'crear' recursos, POST se utiliza para operaciones donde no necesitamos obtener un recurso, sino añadir uno. Algunos de los casos donde se utiliza son:

* Registrar un usuario.
* Loguear un usuario.
* Crear un producto.
* Crear una mascota.
* Crear un carrito de compra.
* Enviar información para un correo electrónico.

Se apoya del recurso de req.body, donde el body representa la información que el cliente enviara para crear.

!Importante
Para que nuestro servidor express pueda interpretar en forma automática mensaje de tipo JSON en formato urlencoded al recibirlos, debemos indicarlo en forma explicita, agregando las siguientes lineas luego de crearlo.

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

Aclaración
{extend:true} precisa que el objeto req.body contendrá valores de cualquier tipo en lugar de solo cadenas.
!Sin esta linea, el servidor no sabra como interpretar los objetos recibidos!




*/
