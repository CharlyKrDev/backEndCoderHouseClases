## CRUD MONGO DB
  
Glosario:
 
 * Base de datos: Recopilación organizada de datos sobre la cual se pueden aplicar operaciones de lectura, creación, modificación o eliminación de estos.
 * Modelo relacional: Gestión de datos que consiste en representar estos como tablas relacionadas con el fin de brindar una estructura de relación solida entre ellos.
 * Modelo no relacional: Gestión de datos flexibles que sustituye las tablas relacionadas, por colecciones, garantizando facilidad y dinamismo en el manejo de los datos.
 * Mongo DB: Base de datos no relacional basada end documentos que ofrece un modelo de estabilidad, gestión de consultas e indexación profesional.
 * Mongo --dbpath <name>: Comando de mongo que permite inicializar un servidor apuntando a una carpeta personalizada par trabajar la base de datos.
 * Mongo( en CLI): Comando para inicializar cliente CLI de mongo en nuestra terminal.

## CRUD

CRUD es un acronimo que hace referencia a las cuatro operaciones fundamentales de una base de datos:

* C: Create (Crear un dato, insertarlo en la base de datos).
* R: Read (Leer un dato, mostrarlo al cliente).
* U: Update (Actualizar un dato, cambiar su información interna).
* D: Delete (Eliminar un dato, removerlo de nuestra colección).

## Comandos de apoyo

En nuestro cliente CLI contamos con comandos que, si bien no forman parte de la clasificación del CRUD, son útiles para poder gestionar correctamente nuestra base de datos.

 ~ show dbs: Muestra la bases de datos existentes.
 ~ use <db name>: Crea una nueva base de datos (en caso de no existir) y se posiciona sobre ella.
 ~ db: Muestra que base de datos estamos posicionados.
 ~ show collections: Muestra todas las colecciones disponibles en la base de datos posicionada.
 ~ db.createCollection(name): Crea una colección en la base de datos posicionada.
 ~ db.dropDatabase(): Elimina la base de datos actual.
 ~ db.collection.drop(): Elimina la colección de la base de datos posicionada.

## Primeros comandos CRUD: CR <-- db.collection.insertOne(doc) el collection se reemplaza por el nombre de la colección y el doc por el nombre del documento.
 
 ~ db.collection.insertOne(doc): Agrega un nuevo documento a la colección seleccionada.
 ~ db.collection.insertMany(docs): Agrega multiples documentos a la colección seleccionada (dado un arreglo de documentos).
 ~ db.collection.findOne(opt): Busca un elemento que cumpla con los criterios de búsqueda (opt), devuelve el primero documento que cumpla con el criterio.
 ~ db.collection.find(opt): Devuelve todos los documentos que cumplan con dicho criterio.
 ~ db.collection.find(opt).pretty(): Añadido para hacer mas presentables los resultados de un find().

## Conteo de datos

Los comandos de conteo para determinar el numero de documentos en una colección son:

 ~ db.collection.estimatedDocumentCount(): Cuenta el estimado mas proximo al numero de documentos según metadata.
 ~ db.collection.countDocuments(opt): Cuenta los documentos que cumplan con el criterio definido en las opciones (opt)

## OPT (options): Agregando opciones

En muchas consultas encontramos el elemento (opt), esto hace referencia a las opciones de filtro de búsqueda que podemos realizar al momento de buscar un valor, la sintaxis elemental de un opt es: {propiedad: valor} <- db.users.find({gender:"M"})


## Filtros

La búsquedas del mundo real no siempre requieren que un valor sea igual a otro. En ocasiones necesitamos que sea menor, mayor, diferente de. entre otras cosas.

Los filtros pueden agregarse dentro de los elementos de criterio (opt) con ayuda del símbolo $, ademas, podemos agregar mas de un filtro para asegurarnos que el documento se ajuste a criterios muy especifico.

Entonces, la sintaxis general sera: db.coll.find({key:{$operator:val}})

## MongoDB: Operadores para Filtros Query

    * $and: Realiza operación AND -> sintaxis: {$and:[{},{}]}.
    * $or: Realiza operación OR -> sintaxis: {$or: [{},{}]}.
    * $lt: Coincide con valores que son menores que un valor especificado.
    * $lte: Coincide con valores menores o iguales a un valor especificado.
    * $gt: Coincide con valores mayores a un valor especificado.
    * $gte: Coincide con valores mayores o iguales a un valor especificado.
    * $ne: Coincide con valores que no son iguales a un valor especificado.
    * $eq: Selecciona los documentos que son iguales a un valor especificado.
    * $exists: Selecciona los documentos según la existencia de un campo.
    * $in: Selecciona los documentos especificados en un array. Sintaxis: {key:{$in:[array of values]}}
    * $nin: Coincide con ninguno de los valores específicos en un array.
    * $size: Coincide con el numero de elementos especificados.
    * $all: Coincide con todos los valores definidos dentro de un array.
    * $elemMatch: Coincide con algún valor definido dentro del array.

## MongoDB: Búsqueda avanzada

    * db.coll.distinct(val). Devuelve un array con los distintos valores que toma un determinado campo en los documentos de la colección.
    * db.coll.find({doc.subdoc:value}). Se utiliza para filtrar subdocumentos.
    * db.coll.find({name:/^Max$/i}) Filtra utilizando expresiones regulares.


## Proyecciones, Sorts, Skips y Limits.

## Proyecciones

En ocasiones no necesitamos toda la información de un documento. Si tenemos un documento con 100 propiedades, podemos definir solo las propiedades que queremos obtener.

Una protección se incluye al momento de hacer búsqueda, (siempre como segundo argumento) y es el equivalente a decirle a la base de datos "solo necesito esto"

find(query, projection)

Asi, podríamos decir db.users.find({}, {name:1}); Lo cual indica que, el campo "name" es el único que necesitamos obtener por par del documento, ahorrándonos espacio y complejidad en el resultado.



## Sort

Sirve para poder hacer un ordenamiento de la información. El ordenamiento se define con 1 o -1 para hacer el ordenamiento ascendente o descendente respectivamente.

La sintaxis es:

db.collection.find().sort({val_A:1,val_B:-1})

la razón por la cual podemos agregar multiples valores de ordenamiento, es en caso de que dos documentos tengan el mismo valor, podemos ordenarlos bajo otro criterio.

## Skip y Limit

Skip: Omite el numero de documentos indicados: Podemos usarlo cuando hagamos paginaciones, cuando necesitemos ignorar un valor que sabemos que es innecesario, etc.

Sintaxis -> .skip(offset)

Limit: Limita el numero de documentos devueltos. De manera que podemos hacer diferentes niveles de paginación (Tu pagina puede devolver 5 elementos por pagina, o bien 100, tu decides.)

Sintaxis -> .limit(num)

## CRUD - UD

Update y Delete.

## Update

Las operaciones Update se pueden realizar de dos maneras: Actualizar un documento, o actualizar multiples documentos.

* db.collection.updateOne(query,update,option) ej: -> db.coll.update({"_id:1},{$set:{"year":2006, name:"Max"}})
    ~ query: Sirve para filtrar que elementos actualizar (usa los filtros iguales al find)
    ~ update: Apartado para indicar que actualizar de los documentos que cumplan con el filtro. Update tiene sus propios operadores como $set, $unset, $inc, $rename, $mul, $min, $max.
    ~option: Opciones a tomar en cuanta para la actualización (como upsert, que inserta el valor en caso de que el comento a actualizar ni siquiera exista)

* db.collection.updateMany(query, update, options)
    Actualiza multiples documentos que cumplan con el criterio.

## Delete

Nuestra ultima operación es para eliminar datos, si bien hay muchas variantes de una eliminación, solo veremos las dos principales.

* db.coll.deleteOne({key:val}) : Elimina solo el primer elemento que cumpla con el criterio, se usa principalmente para encontrar identificadores específicos. Se recomienda no utilizar si somos conscientes de que el valor a buscar no es repetido.

* db.coll.deleteMany({key:val}): Elimina todos los documentos que cumplan con el criterio, se usa cuando sabemos que mas de un valor a contar con ese valor y necesitamos hacer una limpieza general. 
