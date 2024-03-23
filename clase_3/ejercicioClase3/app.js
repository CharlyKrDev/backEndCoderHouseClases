/**REGISTRADOR DE TICKETS DE EVENTOS 
 * Debe contar con un metodo 'agregarUsuario' el cual recibira:
 *  -Id del evento 9debe existir, agregar validaciones)
 *  -id del usuario
*/

class TicketManager {
    constructor() {
        this.eventos = []
        this.precioBaseDeGanancia = 0
    }

    getEventos() {

        return this.eventos
    }

    agregarEventos(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {

        precio += precio * 0.15
        const eventoId = this.eventos.length + 1
        const participantes = []
        const evento = {
            id: eventoId,
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes
        }
        this.eventos.push(evento)
    }
    agregarUsuario(eventoId, usuarioId) {
        const eventoEncontrado = this.eventos.find((evento) => evento.id === eventoId)
        console.log(`prueba`);

        console.log(eventoEncontrado)
        console.log(`prueba`);
        if (!eventoEncontrado) {
            console.log('El Evento no fue encontrado')
            return
        }

        const participantes = eventoEncontrado.participantes
        const usuarioRegistrado = participantes.includes(usuarioId)
        if (usuarioRegistrado) {
            console.log(`El usuario ya esta registrado en este evento`)
            return
        }
        participantes.push(usuarioId)
        console.log(`El usuario ha sido agregado al evento`)

    }
    ponerEventoGira(eventoId, nuevaLocalidad, nuevaFecha) {
        const eventoEncontrado = this.eventos.find((evento) => evento.id === eventoId)
        if (!eventoEncontrado) {
            console.log(`El evento proporcionado no existe`)
            return
        }
        const eventoCopiado = { ...eventoEncontrado }
        eventoCopiado.id = this.eventos.length + 1
        eventoCopiado.lugar = nuevaLocalidad
        eventoCopiado.fecha = nuevaFecha
        eventoCopiado.participantes = []

        this.eventos.push(eventoCopiado)
        console.log('El evento ha sido puesto en gira correctamente')
    }
}

//creando evento
const conciertos = new TicketManager()

// Agregar eventos

conciertos.agregarEventos('Concierto de rock', 'Estadio Kempes', 100, 200, new Date(2024 - 12 - 20))
conciertos.agregarEventos("Concierto de Pop", "Estadio Belgrano", 200, 3000, new Date("2024-10-20"))

const eventos = conciertos.getEventos()
console.log(eventos)

//agregar usuario

conciertos.agregarUsuario(1, "usuario 1")
conciertos.agregarUsuario(2, "usuario 2")
conciertos.agregarUsuario(1, "usuario 3")

//Poner en gira
conciertos.ponerEventoGira(1, "Microestadio Talleres", new Date("2024-12-20"))

const eventosActualizados = conciertos.getEventos()
console.log(eventosActualizados)