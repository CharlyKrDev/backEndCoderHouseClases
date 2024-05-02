/**
 * WebSocket Parte II
 * 
 * Glosario:
 * Websocket: Protocolo de comunicación que permite una sesión activa entre cliente y servidor.
 * Handshake: Acuerdo entre cliente y servidor que permite establecer una conexión abierta entre ambos puntos.
 * socket.io: Listener de eventos que involucren a los sockets. El listener debe escuchar un evento de nombre idéntico al emitido por el otro punto.
 * socket.emit: Emisor de eventos tanto para cliente como para servidor. El emisor debe emitir un evento de nombre idéntico al que se esta escuchando del otro lado.
 * socketServer.emit: Emisor de eventos del servidor para todos los clientes.
 * socket.broadcast.emit: Emisor de eventos del servidor para todos los clientes, a excepción del socket raíz del cual se llama el evento.
 * 
 * Aplicación chat con websocket.
 * Como aprendimos la clase pasada, las aplicaciones de websocket son bastantes amplias. Una de las mejores formas de comprender su aplicación, es realizando un chat comunitario. 
 * Nuestro chat comunitario contara con:
 *  * Una vista que cuente con un formulario para poder identificarse. El usuario podrá elegir el nombre de usuario con el cual aparecerá en el chat. 
 *  * Un cuadro de input sobre el cual el usuario podrá escribir el mensaje.
 *  * Un panel donde todos los usuarios conectados podrán visualizar los mensajes en tiempo real.
 *  * Una vez desarrollada la aplicación, subiremos nuestro código a glitch.com, para poder que todos puedan utilizarlo.
 * 
 * En filminas se muestra el paso a paso de la practica chat.
 * 
 * 
 */