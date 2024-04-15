//Códigos de estado HTTP

/**
* Códigos de estados de un Servidor:

 * Como funciona? Cuando el servidor responde con un estad, esto permite saber que ocurrió con la consulta que estábamos haciendo, y da información al cliente sobre que ha ocurrido.
 * 1xx = Status `Informativo`
 * 2xx = Status `ok`
 * 3xx = Status de re dirección
 * 4xx = Status de error del cliente, este error no le corresponde al backend. El mas común es el 403, que es el forbidden que es la falta de autorización
 * 5xx = Status de error en el servidor. es error que corresponde al backend


API REST


Cliente -> Rest API -> Server

es la conexión entre el cliente y servidor

por parte del cliente por medio de los JSON, XML, HTML
con los GET POST PUT y DELETE.

Los formatos mas importantes son los JSON y XML

La arquitectura:

Cliente - Servidor sin estado

* Cada mensaje HTTP contiene toda la información necesaria para comprender la petición.
* Como resultado, ni el cliente ni el servidor necesitan recordar ningún estado de las comunicaciones entre mensajes.
* Esta restricción mantiene al cliente ... incompleta

Temas a completar pq me quede corto
Operaciones comunes.
Interfaz Uniforme.
Utilización de hipermedios

MÉTODOS de petición GET, POST, PUT, DELETE.
los 4 que mas se utilizan son GET (recibe información sobre un recurso de la API), POST (Crea un recurso de la API), PUT (Actualiza un recurso de la API), DELETE (Borra un recurso de la API)

POSTMAN


*/
