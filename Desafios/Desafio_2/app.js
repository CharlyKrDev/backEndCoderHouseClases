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
