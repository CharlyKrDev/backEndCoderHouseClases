import { ProductManager } from "./app.js";





const productManager = new ProductManager(`Products.json`);

//CARGA DE PRODUCTOS

// const addProducts = async () => {


//     await productManager.addProduct({title:'La serenisima', description:'Leche Entera', price:1500, thumbnail:`FOTO DEL PRODUCTO`, code:`lse3`, stock:10})
//     await productManager.addProduct({title:'La serenisima', description:'Leche Descremada', price:1500, thumbnail:`FOTO DEL PRODUCTO`, code:`lse1`, stock:10})
//     await productManager.addProduct({title:'La serenisima', description:'Leche Parcialemente', price:1500, thumbnail:`FOTO DEL PRODUCTO`, code:`ls55`, stock:10})
//     await productManager.addProduct({title:'La campagnola', description:'Mermelada de frutilla', price:2500, thumbnail:`FOTO DEL PRODUCTO`, code:'ls56', stock:5})
//     await productManager.addProduct({title:'Taragui', description:'Yerba Mate - 500gr', price:500, thumbnail:`FOTO DEL PRODUCTO`, code:'YMT500GC22', stock:5})
//     await productManager.addProduct({title:'Capitan del espacio', description:'Alfajor simple Chocolate', price:1500, thumbnail:`FOTO DEL PRODUCTO`, code:`alfcap1`, stock:10})
//     await productManager.addProduct({title:'La serenisima', description:'Dulce de Leche - 500gr', price:1500, thumbnail:`FOTO DEL PRODUCTO`, code:`Dlse1`, stock:10})
//     await productManager.addProduct({title:'Coca-Cola', description:'Gaseosa Coca - 2lts', price:1500, thumbnail:`FOTO DEL PRODUCTO`, code:`CC2lts`, stock:10})
//     await productManager.addProduct({title:'Pepsi', description:'Gaseosa Pepsi - 2lts', price:2500, thumbnail:`FOTO DEL PRODUCTO`, code:'PP2lts', stock:5})
//     await productManager.addProduct({title:'Havanna', description:'Alfajor con sal marina', price:22500, thumbnail:`FOTO DEL PRODUCTO`, code:'HvaAlMari', stock:5})
//     await productManager.addProduct({title:'La nonna', description:'Postre Flan', price:2500, thumbnail:`FOTO DEL PRODUCTO`, code:'Lnpf200', stock:5})
//     await productManager.addProduct({title:'Havanna', description:'Havannet', price:2500, thumbnail:`FOTO DEL PRODUCTO`, code:'Hvanet', stock:5})
        
        


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

const updateProducts = async (id, updateFields) => {

    productManager.updateProduct( id, updateFields)
    
}

updateProducts(3, {title: `Manteca`})

//BORRAR PRODUCTO POR ID

// const deleteProduct = async(ID)=>{


//     productManager.deleteProduct(ID)

// }
// deleteProduct(5)