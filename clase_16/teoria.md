## Clase 16 - Mongo Avanzado I

Glosario:

* DBaaS: Database as a service. Sirve para poder contar con un alojamiento de nuestra base de datos desde un servidor en la nube, para evitar hacer almacenamiento físicos propios.
* Mongo Atlas: DBaaS pensada para MongoDB para setear Cluster y alojar multiples bases de datos.
* Cliente CLI: Cliente que conecta a la base de datos desde una termina de comandos.
* Cliente UI: Cliente que conecta a la base de datos a partir de un programa de escritorio, como MongoDB compass.
* Cliente Web: Cliente que conecta a la base de datos a partir del navegador, como la gestión a partir de Atlas.
* Cliente App: Cliente que conecta dentro de nuestro sistema de backend. Como nuestro programa de nodeJs con mongoose.
* Mongoose: ODM utilizando para gestionar schemas definidos para mantener un control en la flexibilidad de MongoDB. Ademas de otras operaciones importantes para el manejo de sus datos.

## Indexación

Es un recurso utilizado en MongoDB para poder hacer consultas mucho mas rápidas.

Este nos permitirá tener una referencia previa al momento de buscar un documento, con el fin de evitar recorrer toda la colección, documento por documento, hasta encontrar dicho valor.

El índice se asocia a un atributo del documento y permite que las búsquedas se hagan desde puntos específicos, evitando el recorrido completo de la colección.

Hasta este momento nuestras consultas no repercuten en performance, debido a que los datos que consultamos son muy pequeños, Pero que pasaría si comenzamos a incrementar el numero de datos en nuestra base? Que tanto afectan estas búsquedas?

Prever un buen plan de indexación evitara problemas de lentitud en las consultas y se considera una practica necesaria a nivel enterprise, al momento de configurar los schemas de nuestros distintos modelos. !hagamos habito de utilizarlos!

** Hay una muestra practica **

Conclusiones post practica

Una diferencia muy pequeña.. o no?

El tiempo de búsqueda general, contra el tiempo de búsqueda por filtro es mas de un milisegundo aproximadamente, es esto realmente una problemática a considerar?

El ejemplo hasta el momento muestra 5 mil documentos, Que pasara cuando tengamos 20, 50 o 100 mil documentos? Los números pueden dispararse considerablemente en cuanto a su tiempo de respuesta.

Es por ello debemos anticiparnos a los crecimientos exponenciales que puede haber a lo largo de la trayectoria de la aplicación.

El index se agrega dentro del Schema (en el esquema del modelo) como index:true o false.

* Una clara diferencia de performance

Es evidente que hay una reducción en el tiempo de respuesta, y que esta mejorada de performance sera mucho mas notoria conforme el numero de documentos crezca.

Entonces, podemos crear indexación de los campos que consideremos que pueden ocasionar problemas de lentitud dentro de nuestras búsquedas.

Parte de tu trabajo esta en analizar los servicios que utiliza tu aplicativo, para poder desarrollar una estrategia de indexación adecuada a la búsquedas que realicemos en la base de datos.

## IMPORTANTE!

Un índice no debe ser utilizado en todos los campos, solo deben ser utilizados en los campos que sepamos tienen repercusión en nuestras búsquedas.

Colocar un índice en cada campo de cada documento, significa alentar procesos de escritura en cada insert, así también como generar un almacenamiento adicional e innecesario en la base de datos.

## Funcionamiento interno de un índice.

Cuando creamos un índice sobre el campo de un documento, este campo es insertado en una "cinta métrica" donde se colocara el valor indexado de manera ordenada.(Así es, al final, un índice es meramente un ordenamiento)

Así, al momento de realizar una búsqueda por valores indexados, Mongo sera capaz de realizar una búsqueda por B-tree. Esto es lo que permite que la búsqueda de un campo indexado NO requería recorrer la colección completa.

## Otros tipos de índice

Otras de las indexaciones mas comunes son:

    ~ índices compuestos (compound): Se utiliza cuando requerimos utilizar mas de una indexación y queremos definir el orden con el cual realizar el ordenamiento (ordenando con 1 para ascendente, y -1 para descendente, igual que un sort: {campo:1, campo:-1})

    ~ índice de multiples llave (multikey): Se utiliza cuando requerimos hacer una indexación de valores que se encuentran de manera interna en un array.

    ~ índice de texto (text): Se utiliza para poder basarse en búsquedas de palabras "especificas" con el fin de poder tomar referencia de un texto a partir de dichas palabras.

    ~ índice geoespacial (geoespacial): Se utiliza para almacenar data geoespacial de dos coordenadas, utiliza una esfera 2d para poder trabajar los datos.

** ACTIVIDAD COLABORATIVA **

## Populations

Obtener data dentro de la data?

Una population implica obtener un documento referenciado dentro de otro documento, con el de obtener ambos en una sola búsqueda.

Consiste en almacenar el id de un documento, como propiedad de otro documento. A esto se lo conoce como "referencia".

Populate hace referencia a "poblar" de un id a un documento completo. (referencia a la población humana)

## Funcionamiento

1) Al insertar un documento de tipo usuario que adopta mascotas, este se crea con un ObjectId: 
{
 name:Mauricio,
 pets:[]
 _id:ObjectId("a")
}

2) supongamos que ahora creamos dos mascotas, las cuales tambien tendran su ObjectId:
{
 name:Firulais,
 _id:ObjectId("b")
},
{
 name:Kitty,
 _id:ObjectId("c")
}

3) Ahora, si este usuario quisiera "adoptar" las ultimas dos mascotas, podríamos decir que estas mascotas deberían estar dentro del array "pets" del usuario. Pero NO agregamos todo el documento. Solo el _id que usaremos como "referencia" del documento.

{
 name:Mauricio,
 pets:[{pet:ObjectId("b")}, {pet:ObjectId("c")}]
 _id:ObjectId("a")
}

4) La proxima vez que hagamos la búsqueda del usuario, podemos programarlo para que no solo obtenga al usuario, sino que sus referencias de mascotas también.

El resultado final sera la combinación del Documento usuario, mas los documentos correspondientes a cada mascota.

## Populations en Mongoose

Algunas cosas a considerar antes de comenzar con su uso.

* Populate es un método propio de mongoose, por lo que tenemos que instalarlo.
* Hay que tener siempre claro el nombre de la propiedad dentro del objeto, asi también como la referencia de la colección, para poder hacer un populate efectivo.


## Aproximación al proceso

** Practica **