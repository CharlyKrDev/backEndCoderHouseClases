const objetos = [
    {
        id: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },

    {
        id: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }]


const obj = (x, y) => {
    const encontrar = objetos.findIndex(prod => prod.id === x);
    if (encontrar !== -1) {
        console.log(encontrar)
        console.log("hola")
        console.log(objetos[encontrar])
        objetos[encontrar] = { ...objetos[encontrar], ...y }
    }
}

obj(1, { sandias: 4 })