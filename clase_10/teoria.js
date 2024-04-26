/**
 * MOTORES DE PLANTILLAS
 * 
 * 
 * Glosario
 * 
 * Router: Middleware de Express que permite agrupar endpoints comunes para contar con una arquitectura mas limpia,
 * 
 * API: 'Contrato' formado de definiciones y protocolos, con el fin de comunicar componentes.
 * 
 * REST: Sistema de estilo arquitectural para sistemas distribuidos de hipermedios, con el fin de comprender la estructura de los datos a trabajar.
 * 
 * Middleware: Funciones que se colocan en medio de la ruta y el callback(req, res) que se ejecutaran antes de comenzar a procesar la petición.
 *
 *  Multer: Middleware desarrollado para poder realizar carga de archivos dentro de las peticiones, con el fin de que el cliente pueda manejar archivos como imágenes, vídeos o documentos; dentro de una petición.
 * 
 * 
 * MOTORES DE PLANTILLAS
 * 
 * Uno de los primeros problemas del desarrollo web: dinamismo
 * 
 * Imagina que eres pionero en el mundo del desarrollo web, y quieres desarrollar una pagina que pue dar la bienvenida al usuario que la visite.
 * 
 * Al momento, escribes tu nombre:
 * 
 * <h1>!Bienvenido, Mauricio</h1> <---- en este ejemplo el nombre del usuario es estático.
 * 
 * Como afrontar los datos estáticos en una pagina web?
 * Tú y tu equipo de desarrolladores contemplan el problema presentado anteriormente y presentan diferentes propuestas:
 * * Crear n pagina web para cada usuario (descartado)
 * * Cambiar el mensaje por ¨Bienvenido, usuario¨, menos ameno, pero mas genero (descartado) 
 * * Llamar a todos los usuarios Mauricio y pedir que reconozcan su nuevo nombre (súper descartado.¿Quien propuso esto?)
 * * Desarrollar un código que antes de renderizar la etiqueta   <h1></h1>, delimitar * * una ¨marca¨ reemplazable por algún dato, con el estilo:
 * <h1>¡Bienvenido, {{nombre}}</h1>
 *(¡Bien ahí! Comenzamos con esta idea)
 *
 * Como afrontar los datos estáticos en una pagina web?
 * 
 * Entonces, una vez que eligen esta idea, comienza a desarrollar lo que será un ¨Motor de plantillas¨. De manera que podemos colocar.  
 * <h1>¡Bienvenido, {{nombre}}</h1>
 * 
 * Luego, una vez teniendo el nombre a mostrar, simplemente reemplazar {{nombre}} por ese nuevo dato.
 * Ahora todo lo que necesitamos que sea dinámico, podemos marcarlo como un "reemplazable", y el motor de plantillas reemplazara el dato antes de mostrarlo al cliente.
 * 
 * Motor de plantillas como solución de dinamismo en sitios web
 * 
 * Existen multiples motores de plantillas tales como: Handlebars, ejs, Pug.
 * Cada uno de estos tiene una sintaxis diferente, diferentes reglas de reemplazado de plantillas, aunque son muy similares en funcionamiento. con el fin de brindar una experiencia ligeramente mas dinámica, a comparación de una pagina web estática.
 * 
 * 
 * Motor de plantillas vs librerías y frameworks frontend
 * 
 * Aun utilizamos un motor de plantillas?
 * 
 * Seguramente, a lo largo de las ultimas diapositivas, pensaste: "En serio tanto lio para dinamizar un saludo de bienvenida?, eso es cosa de nada con React, Angular, etc"
 * 
 * Sin embargo, tenemos que comprender que hay diferentes contextos para cada tecnología. Es por ello que, cuando preguntamos a un desarrollador "Que es mejor entre x e y?" casi siempre escuchemos "depende"
 * 
 * La diferencia principal: nivel de dinamismo
 * 
 * Nivel de dinamismo:
 * 
 * * El nivel de dinamismo refiere a que tanta interacción tiene el usuario con la pagina, ademas de que tan constantes son los cambios y renderizados de los elementos de la pagina.
 * 
 * Tener definido el nivel de dinamismo refiere a que tanta interacción tiene el usuario con la pagina, ademas de que tan constante son los cambios y renderizados de los elementos de la pagina.
 * 
 * * Tener definido el nivel de dinamismo que tendrá nuestro proyecto, nos permitirá focalizar la tecnología a utilizar.
 * 
 * * Que una herramienta sea poderosa, no significa que sea la solución par todo.
 * 
 *  Que elegir según el nivel de dinamismo?
 * 
 * * Para 'Landing pages', donde el dinamismo es casi nulo, salvo los típicos formularios del final. Podemos utilizar javascript puro para resolver este problema, ya que no necesitamos un nivel de complejidad alto en una tarea sencilla.
 * 
 * *  Cuando hablamos de un website, comenzamos a viajar por diferentes páginas, tal vez nos interesa mostrar algunos productos para catálogo  o un sistema de login sencillo para pedidos.
 *  Entonces el dinamismo aumenta, aquí podríamos utilizar mas un motor de plantillas. Dinamismo controlado, pero aun no con el nivel de complejidad para considerarse webapp.
 * * Finalmente, entrando a una webapp llegamos al nivel de dinamismo mas fuerte de la web. Como el nombre lo indica, es una aplicación en tu navegador. Aquí los elementos cambian muy constantemente, son muy manipulable, requieren respuestas as rápidas  y salen y entran al DOM constantemente.
 * 
 * * El motor de plantillas ya no es util en este punto debido a que Handlebars necesita renderizado la plantilla por completo para poder la información actualizada, esto afecta al DOM y da la impresión de un sitio "lento".
 * 
 * * Es entonces cuando un framework o librería como React, Vue, permiten aprovechar el virtual DOM para performance, o como angular que tiene su propio mecanismo de renderizado interno.
 *  IMPORTANTE:
 *  Recuerda que puedas llegar al mismo resultado utilizando cualquier tecnología, pero evidentemente en algunos cosas sera demasiado compleja una tarea si elegimos mal, o en otros casos nos daremos cuenta de que el proyecto era "demasiado sencillo" para la herramienta utilizada y tal vez "no era necesario hacer tanto". 
 * 
 * EXPRESS Y HANDLEBARS
 * 
 * * Es un motor de plantillas pensado para agregar un nivel medio de dinamismo en una pagina web.
 *  * Dicho motor preprocesa el html que queremos renderizar, reconociendo el patron {{variable}}, de manera que buscara un objeto que cuente con dicha propiedad para poder sustituir, dando el efecto de dinamismo.
 * 
 * * No esta pensado para elemento de cambios constantes, esto debido a que los cambios siguen requiriendo una renderización  completa en el DOM.
 * 
 * INSTALACIÓN VER DOCUMENTACIÓN
 * 
 * 1) Tener listo tu proyecto express.
 * 
 * Antes de pensar en Handlebars tenemos que comenzar a plantear nuestro proyecto de Express. Debemos pensar en la estructura de nuestras carpetas y en donde colocaremos las plantillas.
 * 
 * Sera mi aplicación  completamente hecha de plantillas, o generaré  una plantilla para casos especiales? 
 * 
 * La estructura inicial deberá ser como lo indica la imagen.
 * 
 * 2) Agregamos una carpeta Views.
 * 
 *  En esta carpeta agregaremos todas las plantillas que queremos utilizar, podemos entender entonces que aquí colocaremos las paginas  a utilizar en el proyecto.
 *  Sin embargo, necesitamos un marco inicial para colocar las plantillas, paro ello utilizaremos un "layout". Crearemos una carpeta layouts dentro de views, y dentro colocaremos "main.handlebars", haciendo referencia a que ese es el marco principal.
 * 
 * Luego, fuera de layouts, pero dentro de views, agregaremos un index (pagina principal)
 * 
 * 3) Configurar main.handlebars
 * 
 * Nota que es la estructura de un html cualquiera, sin embargo, esta vez dentro de body colocamos con {{{}}} el nombre body (única vez que encerraremos en tres llaves)
 * 
 * Ahora, cada vista de views que vayamos a renderizar, se renderizará dentro de este body. De esta manera, no tenemos que escribir una estructura html completa por cada vista que queramos trabajar. 
 * Estructura normal de un html
 *  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clase 9 - MULTER</title>
</head>
<body>
{{{body}}} <---- a esto se refiere
</body>
</html>
 * 
 * 4) Saludar desde index.handlebars
 * Nota que, como la vista index estará dentro del main layout, ya no es necesario crear una pagina para poder mostrar la vista.
 * Generamos un saludo, indicando que al entrar a dicha ruta se mostrará  el nombre. Nota como dejamos name entre las dos llaves, haciendo referencia a que es una variable reemplazable al momento de hacer el preprocesamiento.
 * <h1>Hola {{name}}<h1/>
 * Podemos colar cuantas variables necesitemos al momento de renderizar.
 * 5) Instalar el motor de handlebars
 * npm install express-handlebars
 * 6) Configuración handlebars en nuestro motor express
 * 6.5)Archivo utils.js para poder exportar el __dirname (en el caso de trabajar con type: module y no commonjs)


 */