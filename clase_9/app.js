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
 */