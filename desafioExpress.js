const fs = require('fs')
const express = require('express')
const app = express()

class Productos {
    constructor(fileProducts) {
        this.fileProducts = fileProducts
    }
    async save(product) {
        const products = await this.getAll();
        let newId;
        products.length> 0 ? newId = products[products.length-1].id + 1 : newId = 1;
        const newProd = { ...product, id: newId }
        products.push(newProd);
        try{
            await fs.promises.writeFile(this.fileProducts, JSON.stringify(products))
            return newId;
        }catch(error){
            throw new Error(`Error al guardar: ${error}`)
        }
    }
    async getAll() {
        try {
            const products = await fs.promises.readFile(this.fileProducts, 'utf-8')
            return JSON.parse(products)
          } catch (error) {
            return []
          }
    }
    async randomProduct() {
        const products = await this.getAll();
        return products[Math.floor((Math.random() * products.length))]
    }
}

const producto1 = new Productos('./productos.txt');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) =>{
    res.send('<h1 style="color:blue">bienvenido a la pagina</h1>')
})

app.get("/productos", async(req, res) => {
    res.send(await producto1.getAll())
})

app.get("/productoRandom", async(req, res) => {
    res.send(await producto1.randomProduct())
})

const PORT = 8080

app.listen(PORT, (req, res) => {
    console.log(`Escuchando al puerto ${PORT}`)
})