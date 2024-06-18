## Clase 21

Glosario:
Autenticación: Proceso por el cual el cliente otorga sus credenciales al servidor para definir su identificad en el uso de la aplicación.

Autorización: Proceso por el cual, a un cliente ya autenticado, se le otorga o restringe el acceso a algún recurso, según su nivel jerárquico.

Passport: Sistema de middleware para autenticación y autorización que permite realizar multiples estrategias de manera limpia y modular.

Passport-local: Estrategia de passport utilizada para mantener una lógica de autenticación bajo username y password.


Registro: Un bloque importante

Los sitios web han tenido que enfrentarse a una forma muchas mas rápida de navegación de los usuarios.

cuando un sitio solicita "registrarse", plantea un bloqueo al usuario, quien debe decidir si realiza el registro o deja el sitio web. Que tan imprescindible es tu sitio web, para que el usuario tenga que tomarse la molestia de un registro?

Agilidad gana en el mercado

Estrategia: Apoyarnos en plataformas "de mayor calibre", que sabemos que el usuario utiliza.

Autenticar por terceros es "pedir datos" de una aplicación donde el usuario ya esta registrado y utilizar los datos públicos para crear otro en nuestra cuenta base. El usuario entonces podrá acceder al sitio web de manera rápida, segura, y sin tener que llenar un formulario que no esta interesado en llenar.

Como hacerlo?

Para pedir prestados datos a la aplicación, hay que ser parte de la aplicación, es decir, tenemos que formar parte de su red interna de desarrollo.

Cada sitio es diferente, algunos pueden darte libertad con solo crear una cuenta de desarrollo. Otros solicitan que expliques tu intención, e incluso pueden evaluarte y decidir no permitirte acceso.

Utilizar un sitio externo requiere que conozcamos correctamente sus configuraciones. Tomate tu tiempo para ender a fondo cada una de las documentaciones a utilizar.

## Paso a paso

1) Me registro como desarrollador de app del sitio y creo una aplicación interna.
2) Configuro el servidor donde utilizare dicha aplicación.
3) Configuro un callback utilizable para mi servidor.

## Ejemplo usar Github

Importante!

Debemos contar con una aplicación privada dentro de dicho sitio web (ya sea Facebook, Twitter, GitHub, etc)

Este sitio nos solicitara una url de callback. Muy importante: Este sitio callback debe coincidir con el callback del router. Por cada estrategia, tu router tendrá dos rutas:

* Ruta inicial: Manda a llamar el middleware de Passport y activa la redirección.

* Ruta callback: Donde llega el dato de usuario final otorgado por Passport.

* Selecciona los datos que necesitas para recrear el usuario: Un sitio web externo no almacena los datos igual que tu. Puede que no encuentres todos los datos que requiere el modelo en la base de datos.

* Si el perfil del usuario esta configurado como privado, no obtendremos información y no podremos proceder por dicho método. Ocurre en Facebook, Github, etc.

* Si presentas dificultades en ver tu perfil de Github en el código al momento de correr el código, cambia tu cuenta a publica.

Lo primero: Localizar como ser parte de la aplicación:

Si ya tienes una cuenta de Github, basta con:

 * Ir a la sección de configuración (settings).
 * Ir a configuración para desarrolladores (Developer settings): Aparecerán las aplicaciones que hemos creado y podremos proceder a crear nuestra app.

