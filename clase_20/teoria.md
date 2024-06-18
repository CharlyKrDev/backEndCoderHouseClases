## Clase 20 - Autenticación y Autorización

Glosario:

* Storage: Lugar donde se almacenan las sesiones del lado del servidor. Es donde se consultan y comparan las sessionId.

* MemoryStorage: Almacenamiento por defecto de sesiones por express-session. Si el servidor cae, las sesiones caen.

* FileStorage: Almacenamiento alternativo que permite guardar las sesiones en archivos en una carpeta indicada. Cuando el servidor cae, aun puede consultar las sesiones de los archivos después.

* MongoStorage: Almacenamiento alternativo de sesión que permite guardar las sesiones en una base de datos. Es mas accesible ya que tiene un sistema de autogestión que permite limpiar las sesiones expiradas.

## Autenticación: Identifícate!

Ya habíamos trabajado con este concepto, en el cual el cliente debe primero identificarse para poder intentar acceder a un recurso.

La autenticación es el primer paso dentro de la vida e una session del cliente y el servidor.

Para que un cliente pueda autenticarse, debe existir un registro previo almacenado en algún lado. El Cliente envía un identificador (como un email) y el servidor lo buscara en su base de datos para saber si existe previamente. En caso de que si, podrá responder con sus credenciales completas (no sensibles).

En caso de que un cliente intente autenticarse antes de haber generado un registro, el servidor no lo  encontrara en la base y no habrá credenciales por devolver.

## Métodos de autenticación

* Usuario y contraseña: Es el método tradicional mas utilizado, donde el usuario ingresa username o email y password para autenticarse.

* sin contraseña (passwordless): Consiste en que, cada vez que queramos iniciar sesión a un recurso, se nos enviara al email un enlace que nos permitirá acceder sin necesidad de contraseña.

* Por redes sociales: Varias aplicaciones nos dan como opción iniciar sesión directamente con alguna red social. La ventaja es que se usan directamente los datos de esa cuenta social para hacer el inicio de sesión.

* Datos biométricos: Autentica usuarios mediante huellas dactilares.

* JWT(JSON Web Token): Este método open source permite la transmisión segura de datos entre las distintas partes. Comúnmente se utiliza para la autorización a partir de un par de claves que contiene una clave privada y una publica.

* OAuth 2.0: Permite que mediante una API, el usuario se autentique y acceda a los recursos del sistema que necesita.

## Autorización: Definiendo el alcance de cada usuario.

La autorización es el proceso por el cual el servidor decide si, a pesar de las credenciales que tienes, tienes permiso para acceder a un recurso o no. Es decir, que autorizar no hace referencia a que el servidor no sepa quien eres.

Debemos tener un conjunto de servicios jerarquizados para:
 * Usuarios comunes.
 * Usuarios premium (si trabajamos con un sistema de jerarquías)
 * Administrador.

 O por ejemplo:
 * Un empleado.
 * Un Jefe.
 * Un administrador.

 ## IMPORTANTE!

 Al ser procesos diferentes, no olvidemos que deben tener un código de status diferente también:
  * Para procesos fallidos de autorización: 401
  * Para usuarios rechazados por querer acceder a un recurso no autorizado: 403

Los status no son intercambiables. Nunca los uses a la ligera.

## 3 posibles escenarios.

1) El cliente quiere acceder a un recursos sin credenciales --> El servidor rechazara con status 401 = Unauthorized Obligándolo primero a autenticarse.
2) El cliente quiere acceder a un recurso con credenciales de una jerarquía no autorizada. --> El servidor rechazara con status 403 = Forbidden Indicando que, si quiere acceder al recurso, necesitara credenciales con un rol superior.
3) El cliente quiere acceder a un recurso con credenciales de una jerarquía autorizada. El servidor corrobora que las credenciales son válidas y entrega el recurso solicitado.

## Protegiendo las contraseñas: bcrypt

Te diste cuenta?

Si revisamos la base de datos que utilizamos en la clase anterior.

* Notaras que los usuarios se guardaron exactamente como se envió la información: incluyendo el password

* Por protección de datos, debemos guardar un password de manera que no pueda ser visualizado, ni siquiera por nosotros mismos.

* Para ello, antes de guardar el password, se debe procesar este con una operación conocida como hash.

## Usando bcrypt para poder hacer un hasheo.

Debemos reconocer que no somos expertos en seguridad informática, por lo que trabajar con asuntos tan interiorizados a la seguridad puede complicar las cosas.

Para esto, bcrypt se encargara de realizar la operación de aseguración de nuestras contraseñas de una forma fácil y segura.

Para utilizarlo, solo requeriremos instalarlo a partir de npm: npm install bcrypt

## A considerar

Si una contraseña hasheada no puede ser revertida ni siquiera por nosotros mismo, Como sabremos si el cliente se loguea correctamente?

* No podemos hacer una comparación tan cruda como body.password == user.password. Se debe utilizar un recurso diferente.

* bcrypt tiene un proceso de comparación de passwords a partir de su función compare.

* Asi, podremos saber si el cliente metió su password correctamente, sin tener que saber de cual se trata.

## Estrategias de autenticación: Passport

Que es passport?

Passport es un generador de estrategias de autenticación y autorización, para mantener un código limpio, estructurado y altamente configurable.
Podemos utilizar y configurar multiples estrategias de autenticación y autorización con passport. En esta ocasión crearemos un estrategia local.

* Reestructurando nuestro sistema de registro y login con Passport-local.

npm install passport passport-local

## Nociones importantes!

* Passport local siempre requerirá dos cosas: username y password. Si passport no encuentra alguno de estos dos elementos, devolverá un error y no permitirá proceder con la estrategia.

* Podemos cambiar el campo "username" para que tome el campo que nosotros queramos tomar como identificador, en este caso a nosotros no nos interesa nuestro username, realmente nos interesa el correo electrónico, asi que podemos alterarlo con {usernameField:"valor"}

* Passport utiliza un callback "done", el cual se resuelve de la siguiente manera:
 ~ El primer parámetro de done es el error, si pasamos done(null) indicamos que no hay error.
 ~ El segundo parámetro debe ser el usuario generado, por lo tanto, para devolver un usuario, hacemos done(null, user).
 ~ Si pasamos done(null, false) indicamos que no hay error, pero el usuario no estará disponible.

* Cada estrategia que queramos configurar en passport es un middleware por si solo, asi que utilizaremos el elemento passport.use() para configurar diferentes middlewares/estrategias.