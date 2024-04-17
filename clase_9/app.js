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
 * Como convertir una carpeta en un recurso estático?
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