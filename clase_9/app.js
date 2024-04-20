/**
 * Clase 8 - Router y Multer
 * - Express Router
 * - Express y middlewares
 * - Multer
 * Router en Express
 * En la clase anterior nos encontrábamos con el problema: Al ver que había muchas rutas 'iguales' que solo diferían en métodos, nos dimos cuenta de que el código podría tornarse bastante engorroso.
 * 
 * Un Router en express nos permitirá separar los endpoints 'comunes' en entidades separadas que fungirán  como 'mini aplicaciones', las cuales tomaran peticiones que concuerden con dicho endpoint y asi redireccionarse a esta mini aplicación.
 * De esta manera, nuestro código resultara mas organizado, y las diferentes entidades tendrán aislados el comportamiento interno, como configuración, middlewares, etc.
 * 
 * Como aplicar un Router?
 * 
 * Primero recordemos la estructura de nuestro proyecto, hasta el momento sabemos que la estructura básica de nuestro proyecto consiste en la distribución como lo indica la imagen: única carpeta donde vive el proyecto, dentro una carpeta src donde vivía nuestro código, y nuestro servidor dentro.
 * Hay que agregar una carpeta 'routes' donde vivirán nuestro diferentes routers (nota que app.js se queda fuera de routes, pero sigue dentro de src)
 * 
 * Servicio de archivos estáticos con Express
 * 
 * Como funciona?
 * -Nuestro servidor tiene la posibilidad de alojar recursos que pueden ser visibles para el cliente de manera directa.
 * -Podemos configurar una carpeta para que el usuario pueda acceder y ver dichos recursos de manera directa solo con acceder a la ruta donde se encuentra ubicada.
 * -En este curso y en proyectos profesionales 'public', haciendo referencia como dice el nombre, a recursos públicos de fácil acceso para el cliente.
 * 
 * Cuando utilizarlos?
 * 
 * Los dos casos principales para los cuales encontraras el uso de esta carpeta 'public' para archivos estáticos son:
 * * Cuando necesitemos alojar imágenes y servirlas directamente al cliente.
 * * Cuando necesitemos alojar una pagina web en todos sus sentidos: html, css, js. En esta clase haremos una pagina sencilla para mostrar el alcance de public.
 * 
 * Como convertir una carpeta en un recurso estático?
 * 
 * Para poder utilizar los recursos de una carpeta de manera estática, basta conque en el servidor especifiquemos como 'express.static' dicha carpeta con la siguiente sintaxis:
 * 
 * app.use(express.static('public'))
 * 
 * Ahi indicamos que, todo lo que viva en la carpeta public, podrá ser accedido directamente desde la carpeta public.
 * NOTA: IMPORTANTE: Express busca los archivos relativos al directorio estático (en este caso 'public') por lo que el nombre del directorio estático no forma parte de la URL ej:
 * https://localhost:8080/index.html (no hace falta /public/index.html)  https://localhost:8080/img/foto.png (no hace falta /public/img/foto.png)
 * 
 * Prefijo virtual:
 * Para crear un pre fijo virtual (donde el path de acceso no existe realmente en el sistema de archivos) para los archivos servidores por express.static, debemos especificar un path de acceso de montaje para el directorio estático:
 * 
 * app.use('/static', express.static('public'))
 * 
 * ahora se le asigna un "pseudo" nombre a la carpeta public quedando la url asi:
 * https://localhost:8080/static/index.html 
 * https://localhost:8080/static/img/foto.png
 * 
 * Path absoluto:
 * 
 * El path que se proporciona a la función express.static es relativo al directorio desde donde inicia el proceso node.
 * Por eso si ejecutamos la aplicación Express desde cualquier otro directorio, es mas seguro utilizar el path absoluto del directorio al que se desea dar servicio:
 * 
 * app.use('/static', express.static(__dirname + '/public'))
 * 
 * Que es un middleware?
 * Seguramente te has dado cuenta de que hemos utilizado mucho la sintaxis app.use. que pasa de manera interna en este punto?
 * Cada vez que utilizamos un app.use estamos utilizando un middleware. Estas son operaciones que se ejecutan de manera intermedia entre la petición del cliente, y el servicio de nuestro servidor.
 * Como lo indica el nombre 'middleware' hace referencia a un intermediario, siempre se ejecuta antes de llegar al endpoint que corresponde.
 * Podemos utilizar un middleware para:
 * -Dar información sobre las consultas que se están haciendo (logs)
 * -Autorizar o rechazar usuarios antes de que lleguen al endpoint (seguridad)
 * -Agregar o alterar información al método req antes de que llegue al endpoint(formateo)
 * -Redireccionar según sea necesario (router)
 * -En ciertos casos, finalizar la petición sin que llegue al endpoint (seguridad)
 * IMPORTANTE!
 * Como lo ves en el diagrama anterior, los middlewares se ejecutan EN ORDEN, eso quiere decir que, si algún middleware depende de que se haya realizado otra operación ejecutada por un middleware previo, los coloquemos en cascada según prioridad.
 * 
 * TIPOS DE MIDDLEWARES
 * Una aplicación Express puede utilizar los siguientes tipos de middlewares:
 * -Middleware a nivel aplicación.
 * -Middleware a nivel endpoint.
 * -Middleware a nivel del Router.
 * -Middleware de manejo de errores.
 * -Middleware incorporado.
 * -Middleware de terceros.
 * 
 * 
 * 
 */