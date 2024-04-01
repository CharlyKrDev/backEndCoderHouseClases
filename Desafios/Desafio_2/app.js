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

            const consultarIndexPorId = this.products.findIndex(product => product.id === productId);
            console.log(consultarIndexPorId)


            if (consultarIndexPorId !== -1) {
                const keys = Object.keys(this.products[consultarIndexPorId])
                console.log(keys)
                const updatedKeys = Object.keys(updatedFields);
                console.log(updatedKeys)

                const allKeysExist = updatedKeys.every(key => keys.includes(key));
                if (!allKeysExist) {


                    console.log(`Para actualizar productos los keys son: title, descripcion, price, thumbnail, code y stock`)


                }else {

                    this.products[consultarIndexPorId] = { ...this.products[consultarIndexPorId], ...updatedFields };
    
                    console.log(this.products[consultarIndexPorId])
    
                    this.writeProduct()
    
                    console.log('Producto actualizado correctamente');   

            } }else {
                console.log(`El producto buscado no existe.`);}


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


