const ProductManager = require("./app");





const productManager = new ProductManager();

const addProducts = async () => {


    await productManager.addProduct('Leche', 'La serenisima', 1500, `https://media.f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/i/m/imageedit_1_4837957539.png`, `lse3`, 10)

    await productManager.addProduct('Leche', 'La serenisima', 1500, `https://media.f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/i/m/imageedit_1_4837957539.png`, `ls55`, 10)
    await productManager.addProduct('La campagnola', 'Mermelada de frutilla', 2500, `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnutC-MoSpAqdDf3VGm6YmmajggcTwpozAlajyZlnZw&s`, 'LCMF454', 5)
    await productManager.addProduct('Taragui', 'Yerba Mate - 500gr', 500, `https://www.google.com/url?sa=i&url=https%3A%2F%2Fyerbamateitalia.it%2Fyerba-mate-%2F16-yerba-mate-taragui-.html&psig=AOvVaw0T8wwks58mD2bm9sK37ZRa&ust=1711317795276000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIipgOKxi4UDFQAAAAAdAAAAABAE`, 'YMT500GC', 5)


}

addProducts()

const getProducts = async () => {

    productManager.getProducts()
        .then(productos => {
            console.log(productos);
        })
        .catch(error => {
            console.error('Error al obtener productos:', error);
        });

}
getProducts()




const getProductId = async () => {

    productManager.getProductId(1)
        .then(productos => {
            console.log(productos);
        })
        .catch(error => {
            console.error('Error al obtener productos:', error);
        });
}

getProductId()

const updateProducts = async () => {

    productManager.updateProduct(1, {
        title: 'Leche',
        description: 'Ilolai',
        price: 2500,
        thumbnail: 'imagendeleche.jpg',
        code: 'IlolaiLeche',
        stock: 20
    });

}

updateProducts()