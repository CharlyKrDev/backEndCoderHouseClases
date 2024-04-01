const ProductManager = require("./app");





const productManager = new ProductManager();

//CARGA DE PRODUCTOS

// const addProducts = async () => {


//     await productManager.addProduct('Leche', 'La serenisima', 1500, `FOTO DEL PRODUCTO`, `lse3`, 10)
//     await productManager.addProduct('Leche', 'La serenisima', 1500, `FOTO DEL PRODUCTO`, `lse1`, 10)
//     await productManager.addProduct('Leche', 'La serenisima', 1500, `FOTO DEL PRODUCTO`, `ls55`, 10)
//     await productManager.addProduct('La campagnola', 'Mermelada de frutilla', 2500, `FOTO DEL PRODUCTO`, 'ls56', 5)
//     await productManager.addProduct('Taragui', 'Yerba Mate - 500gr', 500, `FOTO DEL PRODUCTO`, 'YMT500GC', 5)



// }

// addProducts()

// //OBTENCIÓN DE TODOS LOS PRODUCTOS
// const getProducts = async () => {

//     productManager.getProducts()
//         .then(productos => {
//             console.log(productos);
//         })
//         .catch(error => {
//             console.error('Error al obtener productos:', error);
//         });

// }
// getProducts()



// //OBTENCIÓN DE PRODUCTO POR ID
// const getProductId = async (ID) => {

//     productManager.getProductId(ID)
//         .then(productos => {
//             console.log(productos);
//         })
//         .catch(error => {
//             console.error('Error al obtener productos:', error);
//         });
// }

// getProductId(1)

//ACTUALIZACIÓN DE PRODUCTO

const updateProducts = async (id, updateFields) => {

    productManager.updateProduct( id, updateFields)
    
}

updateProducts(3, {title:`perro`})

//BORRAR PRODUCTO POR ID

// const deleteProduct = async(ID)=>{


//     productManager.deleteProduct(ID)

// }
// deleteProduct(1)