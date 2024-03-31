const fs = require(`fs`).promises

class ProductManager {

    constructor(filePath = `Products.json`) {
        this.products = []
        this.path = filePath;

    }


    async addProduct(title, description, price, thumbnail, code, stock) {

        try {
            await this.readProducts();
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
            if (!(title && description && price && thumbnail && code && stock)) {
                console.log('Todos los campos son obligatorios');
                return;
            }
            if (codigoRegistrado) {
                console.log(`El código ya está registrado`);
            } else {
                this.products.push(product);
                await fs.writeFile(this.path, JSON.stringify(this.products, null, 2));
                console.log(`Se ha agregado el producto`);
                console.log(this.products);
            }

        } catch (error) {

            console.error(`Problemas al crear el producto`, error)

        }

    }

    async readProducts() {

        try {

            const data = await fs.readFile(this.path, 'utf8');
            this.products = JSON.parse(data);

        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error
            } else {

                this.products = []

            }

        }

    }


    async getProducts() {


        try {

            await this.readProducts();

            return this.products.length === 0 ? `No hay productos` : this.products;


        } catch (error) {

            console.error(`Error al consultar productos`, error)
            return []

        }

    }
    async getProductId(productId) {
        try {

            await this.readProducts();


            const encontrarProductoPorId = this.products.find((prod) => prod.id === productId)
            return !encontrarProductoPorId ? console.log(`NOT FOUND: El producto no existe`) : `El producto seleccionado es ${encontrarProductoPorId.title} ${encontrarProductoPorId.description} con un stock es de ${encontrarProductoPorId.stock} unidades`;


        } catch (error) {

            console.error(`Error al consultar productos`, error)
            return []

        }

    }
    async updateProduct(productId, updatedFields) {

        try {
            await this.readProducts()
            const encontrarProductoPorId = this.products.find((prod) => prod.id === productId)
            if (encontrarProductoPorId) {
                Object.assign(encontrarProductoPorId, updatedFields)
                await fs.writeFile(this.path, JSON.stringify(this.products, null, 2));
                console.log('Producto actualizado correctamente');

            } else {

                console.log(`el producto buscado no existe o no esta disponible.`)
            }


        } catch (error) {

            console.error('Error al actualizar el producto:', error);

        }
    }

}
module.exports = ProductManager

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