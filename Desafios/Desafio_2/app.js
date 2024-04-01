const fs = require(`fs`).promises

class ProductManager {

    constructor(filePath = `Products.json`) {
        this.products = []
        this.path = filePath;

    }

    async writeProduct() {
        try {
            const data = JSON.stringify(this.products, null, 2)
            await fs.writeFile(this.path, data);

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
                this.writeProduct()

                console.log(this.products);
            }

        } catch (error) {

            console.error(`Problemas al crear el producto`, error)

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
            const encontrarProductoPorId = this.products.findIndex(product => product.id === productId);
            console.log(encontrarProductoPorId)
            console.log(encontrarProductoPorId)


            if (encontrarProductoPorId !== -1) {

                this.products[encontrarProductoPorId] = { ...this.products[encontrarProductoPorId], ...updatedFields };
                this.writeProduct()
                console.log('Producto actualizado correctamente');

            } else {

                console.log(`el producto buscado no existe o no esta disponible.`)
            }


        } catch (error) {

            console.error('Error al actualizar el producto:', error);

        }
    }
    async deleteProduct(productId) {
        try {

            await this.readProducts()
            const encontrarProducto = this.products.findIndex(product => product.id === productId)
            if (encontrarProducto !== -1) {
                this.products.splice(encontrarProducto, 1);
                await fs.writeFile(this.path, JSON.stringify(this.products, null, 2));
                console.log('Producto eliminado correctamente');
                return true


            } else {
                console.log('Producto buscado no ha sido encontrado, recuerde que se busca por ID');

            }



        } catch (error) {

            console.error(`Error al acceder al archivo`, error)

        }
    }

}
module.exports = ProductManager


