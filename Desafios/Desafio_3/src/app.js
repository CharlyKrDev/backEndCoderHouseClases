const ProductManager = require("./productsManager.js");

const express = require("express");
const app = express();
const PORT = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const productManager = new ProductManager(this.path);

//Endpoints
app.get("/products", async (req, res) => {
    const limit = parseInt(req.query.limit);
        try {
           const productos = await productManager.getProducts()
           !isNaN(limit) ? mostrar = productos.slice(0, limit) : mostrar = productos
                const prodDisplay = mostrar
                    .map(
                        (prod) =>
                            `<section style="display: flex; flex-direction: column; align-items: center; border: 2px solid black ; background-color: rgba(128, 128, 128, 0.555);">
                        <img style="height: 100px; width: 100px; aspect-ratio: 1;" src=${prod.thumbnail} alt="">
                        <h2 style="color:black; font-weight: bold;">${prod.title}</h2>
                        <section style="display: flex; flex-direction: column; justify-items: left>
                        <p style="font-weight:500">${prod.description}</p>
                        <p style="font-weight:500 text-align: left">Stock: ${prod.stock}</p>
                        <p style="color: red; font-weight:bold; font-size=16px">$ ${prod.price}</p>
                        </section>
                        </section>`
                    )
                    .join("");
                    const prodGrid = `
                    <h1>Productos</h1>
                    <main style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); width: 100%; gap:8px;">
                            ${prodDisplay}    
                    </main>`;
    
                    res.setHeader("Content-Type", "text/html");
                    res.send(prodGrid);
        } catch (error) {

            console.error("Error al obtener productos:", error);
            res.status(500).send(`Error al obtener productos`, error);
            
        }

    
});

app.get("/products/:pid", async (req, res) => {
    const id = parseInt(req.params.pid);
        try {

            const productos = await productManager.getProductId(id)
            

                if (!productos) return res.status(404).send(`El id: ${id} no pertenece a ningún producto`);
                

                const prodCard =
                    `<main>
                <h2>Resultado:<h2/>
                <section style=" padding:10px; display: flex; flex-direction: column; max-width:300px; margin:auto; align-items: center; border: 2px solid black ; background-color: rgba(128, 128, 128, 0.555);">
                <img style="height: 100px; width: 100px; aspect-ratio: 1;" src=${productos.thumbnail} alt="">
                    <h2 style="color:black; font-weight: bold;">${productos.title}</h2>
                    <p style="font-weight:500">${productos.description}</p>
                    <p style="font-weight:200">Stock: ${productos.stock}</p>
                    <p style="color: red; font-weight: bold; font-size=16px;">$ ${productos.price}</p>
                    </section>
                </main>`


                res.setHeader("Content-Type", "text/html");
                res.send(prodCard);
            
        } catch (error) {

            console.error(`Error al obtener el producto`, error);
            res.status(500).send(`Error al obtener el producto por ID`, error);
            
        }
                
                       
    });


app.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`);
});
