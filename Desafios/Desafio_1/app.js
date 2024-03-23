class ProductManager {
    constructor() {
        this.products = []

    }




    addProduct(title, description, price, thumbnail, code, stock) {
        const productId = this.products.length + 1
        const codigoRegistrado = this.products.some(product => product.code === code);
        const product = {
            id: productId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('Todos los campos son obligatorios');
            return;
        }
        return codigoRegistrado ? console.log(`El código ya esta registrado`) : this.products.push(product), console.log(`Se ha agregado el producto`);

    }
    getProducts() {

        return this.products.length === 0 ? `No hay productos` : this.products;

    }
    getProductId(productId) {

        const encontrarProductoPorId = this.products.find((prod) => prod.id === productId)
        return !encontrarProductoPorId ? console.log(`NOT FOUND: El producto no existe`) : `El producto seleccionado es ${encontrarProductoPorId.title} ${encontrarProductoPorId.description} con un stock es de ${encontrarProductoPorId.stock} unidades`;

    }


}

const productManager = new ProductManager();
productManager.addProduct('Leche', 'La serenisima', 1500, `https://media.f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/i/m/imageedit_1_4837957539.png`, `lse3`, 10)

console.log(productManager.getProducts());

console.log(productManager.getProductId(1));

productManager.addProduct('Leche', 'La serenisima', 1500, `https://media.f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/i/m/imageedit_1_4837957539.png`)
productManager.addProduct('La campagnola', 'Mermelada de frutilla', 2500, `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnutC-MoSpAqdDf3VGm6YmmajggcTwpozAlajyZlnZw&s`, 'LCMF454', 5)
console.log(productManager.getProducts());
console.log(`Ternario`);
console.log(productManager.getProductId(2));
