const ProductManager = require("./app");





const productManager = new ProductManager(`Products.json`);

//CARGA DE PRODUCTOS

// const addProducts = async () => {


//     await productManager.addProduct({title:'Leche', description:'La serenisima', price:1500, thumbnail:`FOTO DEL PRODUCTO`, code:`lse3`, stock:10})
//     await productManager.addProduct({title:'Leche', description:'La serenisima', price:1500, thumbnail:`FOTO DEL PRODUCTO`, code:`lse1`, stock:10})
//     await productManager.addProduct({title:'Leche', description:'La serenisima', price:1500, thumbnail:`FOTO DEL PRODUCTO`, code:`ls55`, stock:10})
//     await productManager.addProduct({title:'La campagnola', description:'Mermelada de frutilla', price:2500, thumbnail:`FOTO DEL PRODUCTO`, code:'ls56', stock:5})
//     await productManager.addProduct({title:'Taragui', description:'Yerba Mate - 500gr', price:500, thumbnail:`FOTO DEL PRODUCTO`, code:'YMT500GC22', stock:5})
        


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

// getProductId(5)

//ACTUALIZACIÓN DE PRODUCTO

// const updateProducts = async (id, updateFields) => {

//     productManager.updateProduct( id, updateFields)
    
// }

// updateProducts(3, {title: `Manteca`})

//BORRAR PRODUCTO POR ID

// const deleteProduct = async(ID)=>{


//     productManager.deleteProduct(ID)

// }
// deleteProduct(5)