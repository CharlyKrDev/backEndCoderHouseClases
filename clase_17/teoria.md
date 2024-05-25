## Clase 17 MongoDB Avanzado II

Glosario
* Indexación: Técnica utilizada para colocarse en una propiedad de un documento, permite realizar búsquedas mas rápidas cuando se involucra dicha propiedad.
* find().explain("executionStats"): No devuelve el resultado de una búsqueda, sino que tiene por objetivo devolver las estadísticas de la operación.
* executionStats.executionTimeMillis: Tiempo en milisegundo que demoro en hacerse la operación.
* population: operación que permite transformar la referencia de un documento en su documento correspondiente en la colección indicada.
* middleware: Operación intermedia que ocurre entre la petición a la base de datos y la entrega del documento o los documentos correspondientes.
* pre: Middleware utilizado para realizar una operación "antes" de devolver el resultado de la operación principal.

## Aggregations

Consiste en la realización de multiples operaciones generalmente sobre multiples documentos.

Pueden utilizarse para:
* Agrupar documentos con base en un criterio especifico.
* Realizar alguna operación sobre dichos documentos, con el fin de obtener un solo resultado.
* Analizar cambios de información con el paso del tiempo.

## Funcionamiento

Los aggregation pipelines consistirán en un conjunto de pasos (stages), donde cada paso corresponderá a una operación a realizar.

Podemos definir tantas stages como necesitemos con el fin de llegar a los resultados esperados.

Los documentos resultantes de la stage que finalice, se utilizan como "input" de la siguiente stage, y asi sucesivamente hasta llegar al final.

Un ejemplo de un pipeline de aggregation puede ser:

 1) Primero filtrar los documentos que tengan un valor x mayor a 20.
 2) Luego ordenarlos de mayor a menor.
 3) Luego en un nuevo campo devuelve el valor máximo.
 4) Luego en un nuevo campo devuelve el valor mínimo.
 5) Luego en un nuevo campo devuelve la suma total de todos los documentos.

## Principales stages disponibles en un aggregation pipeline.

$count: Cuenta el numero de documentos disponibles que se encuentran en la stage actual.

$group: Permite agrupar los documentos disponibles en nuevo grupos según un criterio especificado. cada grupo cuenta con un _id nuevo, ademas de los valores acumulados.

$limit: Limita el numero de documentos que saldrán de dicha stage.

$lookup: Permite realizar un "left join" (combinación de campos), de una colección de la misma base de datos a los documentos de la stage actual.

$set /addFields: Agregan una nueva propiedad a los documentos que se encuentran en dicha stage.

$skip: Devuelve solo los documentos que se encuentran después del offset indicado.

$sort: Ordena los documentos en la stage actual.

$match: Devuelve solo los documentos que cumplan con un criterio de búsqueda, podemos colocar filtros comunes aquí.

$merge: Escribes los resultados del pipeline en una colección. Debe ser la ultima stage del pipeline para poder funcionar.
