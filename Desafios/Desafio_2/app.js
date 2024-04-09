const fs = require('fs').promises;

class ProductManager {
    constructor(filePath = 'Products.json') {
        this.products = [];
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


    async addProduct(newProduct) {
        const { title, description, price, thumbnail, code, stock } = newProduct;
        try {
            await this.readProducts();

            const codigoRegistrado = this.products.some(product => product.code === code);

            if (!(title && description && price && thumbnail && code && stock)) {
                console.log('Todos los campos son obligatorios');
                return;
            }
            if (codigoRegistrado) {
                console.log(`El código ya está registrado`);
            } else {
                const lastId = this.products.length > 0 ? this.products[this.products.length - 1].id : 0
                const newId = lastId + 1;
                newProduct.id = newId;
                this.products.push(newProduct);
                this.writeProduct()
                console.log(`El producto ha sido agregado correctamente`)

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

            const consultarIndexPorId = this.products.findIndex(product => product.id === productId);


            if (consultarIndexPorId !== -1) {
                const keys = Object.keys(this.products[consultarIndexPorId])
                const updatedKeys = Object.keys(updatedFields);

                const allKeysExist = updatedKeys.every(key => keys.includes(key));
                if (updatedFields.id) {


                    console.log(`El ID no se puede cambiar, las keys son: title, description, price, thumbnail, code y stock`)

                }
                else if (!allKeysExist) {


                    console.log(`Para actualizar productos las keys son: title, description, price, thumbnail, code y stock`)


                } else {

                    this.products[consultarIndexPorId] = { ...this.products[consultarIndexPorId], ...updatedFields };
                    this.writeProduct()
                    console.log('Producto actualizado correctamente');

                }
            } else {
                console.log(`El producto buscado no existe.`);
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


