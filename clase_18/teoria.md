## Clase 18 - Cookies, Session & Storage I

Glosario:

   * Realización de multiples operaciones, generalmente sobre multiples documentos.
   * Aggregation pipelines: Consistirán en un conjunto de pasos (stages), donde cada paso corresponderá a una operación a realizar.
   * $count: Cuenta el numero de documentos disponibles que se encuentren en la stage actual
   * $group: Permite agrupar los documentos disponibles en nuevos grupos según un criterio especificado.
   * $limit: Limita el numero de documentos que saldrán de dicha stage.
   * $lookup: Permite realizar un "left join" (combinación de campos), de una colección de la misma base de datos a los documentos de la stage actual.
   * $set /$addFields: Agregan una nueva propiedad a los documentos que se encuentren en dicha stage.
   * $skip: Devuelve solo los documentos que se encuentren del offset indicado.
   * $sort: Ordena los documentos en la stage actual.
   * $match: Devuelve solo los documentos que cumplan con un criterio de búsqueda, podemos colocar filtros comunes aquí.
   * $merge: Escribe los resultados del pipeline en una colección. Debe ser la ultima stage del pipeline para poder funcionar.
   * Mongoose-paginate-v2: Es un plugin para mongoose que nos permitirá realizar paginaciones eficientes para los modelos que nosotros especifiquemos.

## Cookies

* La necesidad de saber información del cliente.

Cuando desarrollamos un sitio web, tenemos que contemplator que la forma de interactuar de un cliente suele ser diferente, entonces es importante tener algún recurso para saber información sobre ciertos detalles de información y comportamiento de un cliente para que el servidor pueda usar eso a su favor.
Como podemos seguir un rastro de los clientes de nuestro sitio web y poder obtener un poco mas de información de contacto y/o de comportamiento sobre los clientes que nos visitan? La respuesta: cookies.

## Que es una cookie?

Una cookie es un pequeñísimo archivo de texto donde podremos almacenar información dentro del navegador, de manera que pueda viajar entre las peticiones y sirva como un ligero contenedor de información necesaria para poder procesar ciertas peticiones.

Algunos de los datos que se suelen guardar en una cookie son:

 * Nombres de usuarios.
 * IDs de sesiones (que abarcaremos mas adelante)
 * Preferencias de navegación para tu pagina.

## Rastros que suele dejar un usuario al navegar en la web.

Ejemplo:

Cliente hace login [la cookie almacena el id de la session] --> El cliente pone el fondo de la pagina en modo "obscuro" [La cookie almacena: - id de la session, - Preferencias de la configuración en pagina] --> El cliente busca productos específicos  [La cookie almacena: - id de la session, - Preferencias de la configuración en pagina, - Búsqueda reciente]

## IMPORTANTE

Las cookies viven en el navegador, por lo que son fácilmente accesibles por multiples elementos externos.

Por ningún motivo guardemos información sensible en una cookie. Nunca guardamos información de métodos de pago, contraseñas, ni cualquier dato que pudiera comprometer la seguridad del cliente.

* Características: 

   ~ A las cookies se les puede configurar un tiempo de vida. Una vez finalizado el mismo, la cookie se elimina del navegador.
   ~ Al almacenar del lado del cliente, el espacio con el que se cuenta es limitado, po lo que se recomienda elegir de forma adecuada lo que se vaya a guardar como cookie.
   ~ Podemos asignarles claves secretas para poder aumentar la seguridad.
   ~ Viven en el navegador, asi que no guardamos datos sensibles.

## Comenzando a utilizar cookies.

1) Partimos de instalar express y el modulo de cookie-parser
2) Posteriormente, siguiendo la arquitectura que hemos hecho en previos proyectos, configuraremos nuestro servidor. Utilizaremos el middleware con app.use seria: app.use(cookieParser())

* Utilización de cookies: set, get y clear.

Setear una cookie:

Una cookie debe setearse dentro del flujo de vida de una petición, por lo tanto, llamaremos un endpoint llamado /setCookie donde utilizaremos el objeto res, para poder asignar una cookie al cliente en su navegador.

Para leer la cookie sedeada, utilizaremos objet req en el endpoint /getCookies, ya que, como el cliente tiene la cookie en su navegador deberá enviarla por dicho objeto.

Ademas, llamaremos también un endpoint llamado /deleteCookie donde utilizaremos el objeto res, para poder limpiar la cookie asignada al cliente en su navegador.

Ejemplo: seteando una cookie.

app.get('/setCookie', (req, res)=>{
   //res.cookie(nombre_de_la_cookie, valor_de_la_cookie,{maxAge:tiempo_de_vida_en_milisegundos})
   res.cookie("CoderCookie", "Esta es una cookie muy poderosa", {maxAge:10000}).send("cookie")
})

Si no colocamos el parámetro maxAge, la cookie persistirá hasta ser borrada (sin tiempo de vida definido)

--> las cookies desde la herramienta de desarrollador se ve en la sección Application.

Ejemplo: obteniendo una cookie.

app.get('/getCookie', (req, res)=>{
   //obtenemos las req.cookies y las enviamos al cliente para corroborar que hay almacenado.
   res.send(req.cookies);
})

En este caso enviamos todas las cookies al cliente. Si queremos acceder a una cookie especifica, la podemos llamar como req.cookies.nombre_de_la_cookie

Ejemplo: Eliminando una cookie

app.get("/deleteCookies", (req, res)=>{
   res.clearCookie("CoderCookie").send("Cookie removed")
})

Si la cookie ya fue borrada o caduco por expiración, no hay problema. El clearCookie procede a ignorarlo.


## Agregando seguridad a la cookie: Signed Cookies

Que es "firmar" una cookie?

Como las cookies son almacenadas en el navegador, pueden llegar a ser alteradas muchas fácilmente que si esta viviera en el servidor. Es por ello que necesitamos agregar un factor de seguridad para la cookie se "invalide" en caso de que haya sido modificada.

No podemos evitar que alguien externo altera la cookie, pero si podemos indicar que, en caso de que la cookie ya no sea exactamente identifica a la generada, entonces la pase como invalida.

* Podemos utilizar el mismo cookieParser

No es necesario instalar algo nuevo, solo configuraremos la inicialización del cookieParser. Esto se conseguirá agregando un secret al momento de la inicialización.

Si inicializamos: app.use(cookieParse("CoderSecretC0d3"));

Podemos firmar las cookies para mayor seguridad a partir de la lógica planteada, solo basta colocar un {signed:true} en la definición de la cookie.

app/get("/setSignedCookie", (req, res)=>{
   res.cookie("SignedCookie", "Esta es una cookie muy poderosa", {maxAge:10000, signed:true}).send("cookie")
})

* Sobre las signed cookies:

Para poder acceder a una signed cookie estas ya no estarán disponibles en req.cookies, sino en req.signedCookies, por lo que hay que pensar bien que cookies corresponderán a que lado.

Si tratamos de acceder a una cookie firmada que fue alterada por alguna razón, al querer acceder a ella solo se devolverá false.

// ACTIVIDAD DE CLASE

## Dando identidad al cliente: sessions

Retomemos un concepto interesante: La conexión sin estado.

Como sabemos, una de las características de nuestra API REST es la conexión sin estado, recordemos que esto significa que el servidor recibe una petición del cliente y devuelve una respuesta... asi, sin contexto previo.
El cliente no sabe de donde obtiene la información que esta solicitando, y al servidor no le interesa que hará el cliente con la información que acaba de entregar.

Entonces, como el servidor sabe del usuario al hacer una petición?

Esto seguramente nos despierta la incognita: Como en un sitio web saben quien soy? Como se gestionaría todo el flujo de una compra si mi servidor trabaja sin estado?

Para resolver estas situaciones, el servidor debe tomar siempre la identidad del cliente que esta haciendo la petición. Es decir, el cliente alimenta al servidor con cada petición con la información que necesita procesar. El servidor no almacenada nada para si.

Actualmente, el cliente debe enviarnos dicha información desde queries, params, body y cookies. Todo esto enviado desde el front. Y si delegamos algo mas de responsabilidad al back? Vamos a manejar un sistema de sesiones.

## Usuario identifícate!  

El sistema de sesiones permitirá que el servidor tenga almacenada información referente al cliente, con el fin de que este pueda mantenerse identificado al momento de hacer las peticiones.

Finalmente rompemos el anonimato! Una vez que el cliente pase por un proceso de login, podemos procesar esa información para mantener reconocido al cliente y poder brindarle respuestas particulares acorde con su rol en la pagina.

* Session como modulo de node

Session permite conseguir este almacenamiento de información de cliente. Este podremos utilizarlo a traves del elemento req.session.
   Algunas características de session son:

   ~ La información que se quiere guardar en session se almacena del lado del servidor.
   ~ Del lado del cliente, se crea una identificador único para poder acceder a esa información desde el navegador.
   ~ Los datos almacenados en session se borran al cerrar la ventada del navegador.
   ~ Se utiliza principalmente para guardar los datos de usuario al iniciar sesión.

## Utilizando session

Session es un modulo de node diseñado para poder manejar el sistema de sesiones previamente definido.

npm install express-session
