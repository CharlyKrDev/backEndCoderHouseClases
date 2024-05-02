/**
 *  WEBSOCKET
 * 
 * Plantilla: Documento HTML con marcas reemplazables para poder ser reemplazadas por un motor de plantillas.
 * Motor de plantilla: Librería desarrollada para tomar un HTML y reemplazar datos en este para generar un efecto de dinamismo en la pagina.
 * Paginas estáticas: Paginas que no requiere cambio de elementos ni interacción compleja con el usuario.
 * Handlebar: Motor de plantillas basado en la marca {{}}
 * Layout: Marco de disposición que requiere handlebars para poder encapsular en un solo cuerpo HTML todas las vistas de diferentes plantillas.
 * Express-handlebars: Paquete o modulo de npm para conectar handlebars con express.
 * 
 * WEBSOCKET
 * 
 * Websocket es un protocolo de comunicación basado en TCP para poder establecer esa conexión entre el cliente y el servidor, justo como sabemos, es el mismo objetivo que cubre HTTP.
 * 
 * Cuando llegamos a este punto, seguramente nos planteamos:
 * * Por que es necesario aprender otro protocolo?
 * * Cuando debo considerar un protocolo y cuando otro?
 * * Sirve realmente el protocolo websocket? En todas las paginas web veo http o https nunca websocket.
 * 
 * Que hace que websocket se destaque?
 * 
 * A pesar de que websocket y HTTP son protocolos como lo mencionamos anteriormente, websocket tiene una característica muy importante: Su protocolo TCP estable dos endpoints de comunicación, a cada endpoint se le conoce como socket.
 * 
 * El contar con estos dos sockets permitirá establecer una comunicación bidireccional implica:
 * * Que el cliente puede obtener recursos del servidor cuando lo solicite (como en HTTP).
 * * Que el servidor puede entregar información al cliente sin necesidad que el cliente haga una petición.
 * 
 * 
 * Primer intento: HTTP Long Polling
 * 
 * El HTTP Long polling consiste en que el cliente vuelva a hacer una petición tan *pronto como reciba una respuesta del servidor, es decir, bombardea al servidor *constantemente de peticiones para emular respuestas “en tiempo real”
 *
 *Sin embargo, se concluyó que esta operación es costosa en recursos y, al final, un *tanto lenta para realmente considerarse “tiempo real”.

 Solución óptima: Websocket:

 *Websocket es un protocolo excelente para esta situación ya que:
 ** El cliente no tendrá que estar actualizando la página constantemente
 ** En cuanto el servidor reciba una actualización de una nueva puja, actualizará a todos *los clientes conectados, permitiendo dar información en tiempo real
 ** Una vez que termina la subasta, el socket se cierra y el servidor deja de notificar *innecesariamente al cliente.
 *
 * COMO FUNCIONA?
 * Primero, el cliente tiene que enviar una solicitud HTTP llamada Handshake (apretón de manos). Este apretón de manos será un “acuerdo” o “contrato” de confianza para que el servidor pueda actualizar al cliente sin que éste se lo pida. 

El servidor recibe la petición de Handshake y procede a “responder el saludo”, a esto se le llama “Abrir conexión”.

A partir de este punto, el canal queda abierto de manera bidireccional, por lo que el cliente se puede comunicar con el servidor cuando quiera y viceversa. 

La comunicación es “persistente” hasta que alguno de los dos lados decida cerrar el canal de comunicación.
 
Protocolo WebSocket principios:

* Websocket permitió por primera vez acceder a una web de forma dinámica en tiempo real.
* Basta con que el cliente establezca una conexión con el servidor, que se confirma mediante el llamado apretó de manos o websocket protocol handshake.
* Con él, el cliente envía al servidor todos los datos de identificación necesarios para el intercambio de información.
* El canal de comunicación queda "abierto" tras el handshake.
* El servidor puede activarse por si mismo y poner toda la información a disposición del cliente sin que este tenga que pedírselo. Se dispone de nueva información, se lo comunica al cliente sin necesidad de recibir una solicitud especifica para ello.
* Las notificaciones push de las paginas web funcionan según este principio.

Ejemplos de uso de Websocket

* Chats: Ya sea en paginas de asistencia técnica, en redes sociales, o en algún juego, es necesario que el canal se dé  en tiempo real.
* Paneles de "Noticias importantes" en sitios de noticias: Es importante que el usuario reciba las noticias mas actuales para asi tener la primicia (que en estos tiempos es muy difícil por la rapidez de información)
* Actualización de bolsas: El tiempo real en transacciones en la bolsa de valores es crucial. Los usuarios no pueden perder tiempo mientras una pagina se recarga para poder ver los últimos cambios.
* Juegos en tiempo real: Cada movimiento, cada mensaje, cada ataque o cada acción de un jugador, debe verse reflejada para otros jugadores inmediatamente, por lo que las respuestas rápidas y en tiempo real son cruciales.
* Plataformas compra/venta como eBay: Si tenemos contemplado algún sistema de subastas, donde el usuario necesite tomar acción rápida para la resolución de compra/venta de algún producto, entonces necesitamos respuestas inmediatas y visibles para todos.

COMPARACIÓN WEBSOCKET vs HTTP

WEBSOCKET:

1) Es un canal abierto entre servidor y cliente. Como una llamada telefónica.
2) Se usa para comunicación en tiempo real. Ej: un chat
3) Se usa para escuchar información en tiempo real
4) Es un protocolo de comunicación
5) Conexión de doble vía
6) No sustituye a HTTP

HTTP:

1) Son peticiones al servidor que esperan una respuesta. Como un walkies-talkie.
2) Se solicita información y se espera una respuesta. Ej: un formulario de login
3) Se usa para consumir APIs y recursos web
4) Protocolo HTTP
5) Conexión de una sola vía
6) No sustituye a WebSockets

IMPORTANTE!

Como podrás notar, se menciona que HTTP no es reemplazo de Websocket, ni websocket es reemplazo de HTTP. Ambos son complementos que se pueden utilizar en conjunto, con el fin de hacer sistemas completos y complejos.

SOCKET EN EXPRESS CON SOCKET.IO:
Socket.io

* Es una biblioteca de Javascript para poder implementar los sockets anteriormente mencionados.
* Debido al funcionamiento que hemos visto en clase. socket.io debe instanciarse tanto de lado del cliente, como del servidor.
* Permite utilizar todo el potencial mencionado de los websocket, y cuenta con una API casi idéntica para el cliente y para el servidor.

Características:

* Socket.io utiliza principalmente el protocolo Websocket proporcionando la misma interfaz.
* Se puede usar como un contenedor para websocket aunque proporciona muchas mas funciones, incluidas la transmisión a multiples sockets, el almacenamiento de datos asociados con cada cliente y E/S asíncronas.
* Se puede instalar con npm.
* Fiabilidad: Las conexiones se establecen incluso en presencia de:
    - proxies y balanceadores de carga.
    - firewall personal y software antivirus.
* Soporte de re-conexión automática: A menos que se le indique lo contrario, un cliente desconectado intentará siempre volver a conectarse, hasta que el servidor vuelva a estar disponible.
* Detección de desconexión: Se implementa un mecanismo de heartbeat, lo que permite que tanto el servidor como el cliente sepan cuando el otro ya no responde.
* Soporte binario:  Se puede emitir cualquier estructura de datos serializable, que incluye:
    - ArrayBuffer y Blob en el navegador
    - ArrayBuffer y Buffer en Node.js

Pasamos a la instalación y parte practica.




















 * 
 */