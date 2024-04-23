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
 * * QUe el cliente puede obtener recursos del servidor cuando lo solicite (como en HTTP).
 * * Que el servidor puede entregar información al cliente sin necesidad que el cliente haga una petición.
 * 
 * 
 * Primer intento: HTTP Long Polling
 * 
 * El HTTP Long polling consiste en que el cliente vuelva a hacer una petición tan *pronto como reciba una respuesta del servidor, es decir, bombardea al servidor *constantemente de peticiones para emular respuestas “en tiempo real”
 *
 *Sin embargo, se concluyó que esta operación es costosa en recursos y, al final, un *tanto lenta para realmente considerarse “tiempo real”.

 Solución óptima: Websocket
 *Websocket es un protocolo excelente para esta situación ya que:
 ** El cliente no tendrá que estar actualizando la página constantemente
 ** En cuanto el servidor reciba una actualización de una nueva puja, actualizará a todos *los clientes conectados, permitiendo dar información en tiempo real
 ** Una vez que termina la subasta, el socket se cierra y el servidor deja de notificar *innecesariamente al cliente.
 *
 * COMO FUNCIONA?
 * Primero, el cliente tiene que enviar una solicitud HTTP llamada Handshake (apretón de manos). Este apretón de manos será un “acuerdo” o “contrato” de confianza para que el servidor pueda actualizar al cliente sin que éste se lo pida. 

El servidor recibe la petición de Handshake y procede a “responderle el saludo”, a esto se le llama “Abrir conexión”.

A partir de este punto, el canal queda abierto de manera bidireccional, por lo que el cliente se puede comunicar con el servidor cuando quiera y viceversa. 

La comunicación es “persistente” hasta que alguno de los dos lados decida cerrar el canal de comunicación.

 



 * 
 */