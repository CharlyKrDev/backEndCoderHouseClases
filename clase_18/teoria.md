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

La necesidad de saber información del cliente.