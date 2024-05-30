## Clase 19 - Cookies, Sessions & Storage II

Glosario:

 * Cookie: Pequeña parte de información que se almacena en el navegador al momento de visitar un sitio web, utilizado para conservar detalles de información útiles para el sitio web.
 * CookieParser: Modulo de Node que permite gestionar cookies desde el servidor, con el fin de poder obtenerlas, leerlas, escribirlas o eliminarlas.
 * Cookie.maxAge: Indica en milisegundos el tiempo de vida de la cookie. Si no se especifica, la cookie persistirá hasta que se elimine.
 * Signed Cookie: Cookie firmada que permite agregar seguridad, la cual escucha si la cookie fue alterada, invalidándose en dado caso.
 * Session: Ciclo de interacción entre un sitio y un cliente, donde el cliente cuenta con un identificador de session para reconocimiento desde el servidor.
 * express-session: Modulo de Node que permite gestionar sesiones y almacenarlas en el servidor.

 ## Storage
 * Session:

Una session es un vinculo que se genera cuando el cliente conecta con un servidor, este vinculo se representa por una sessionId, la cual se guarda en el navegador como identificador de la session. Sin embargo...Donde se guarda la session en el servidor?

## Memory storage

El almacenamiento de una session por memory storage es exactamente igual a la persistencia en memoria que trabajamos la clase pasada. Es un almacenamiento muy peligroso, ya que si el servidor muere o reinicia, la session morirá con el y no habrá forma de recuperarla.

Como solucionar el problema de memory storage?

Una vez entendido el carácter de riesgo de almacenar una session en memoria, nos surge la duda: Como podríamos hacer persistir estas sesiones para evitar cualquier tema en el reinicio o caída repentina de un servidor?

Seguramente tienes clara la idea, ya que lo hiciste con tus productos y tu carrito: Vamos a utilizar un File Storage, es decir, guardar nuestra session en un archivo, para poder consultar las sessions de un lado diferente a la memoria del servidor.

* File Storage

Al igual que las primeras clases del curso, el File storage permitirá dar una persistencia de archivos a las sessions que trabajemos, esto hará que el servidor pueda tomarlas de algún lado en caso de que algo inesperado llegase a pasar (un reinicio, o una caída).

Asi, los usuarios pueden seguir haciendo consultas con sus sessionId, y el servidor podrá consultarlas del archivo que persiste en este.
Es un recurso simple y que tiene sus defectos, sin embargo, es una solución sencilla para resolver el asunto de sessions, sin tener que ocupar recursos de terceros.


