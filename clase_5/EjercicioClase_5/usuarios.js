const ManagerUsuarios = require("./app");

const managerUsuarios = new ManagerUsuarios()




managerUsuarios.crearUsuario({
    nombre: `Jose`,
    edad: 38,
    curso: `js`
})

managerUsuarios.consultarUsuarios()
.then(usuarios => console.log(`Usuarios`, usuarios))
.catch(error => console.log(`error`, error))