const fs = require('fs')
const express = require('express')
const app = express()

app.get('/', ((req, res) =>{
    res.send('<h1 style="color:blue">bienvenido a la pagina</h1>')
}))

app.get("/productos", (req, res) => {
    res.send(producto1.getAll())
})

app.get("/productoRandom", (req, res) => {
    res.send(producto1.randomProduct())
})

const PORT = 8080

app.listen(PORT, (req, res) => {
    console.log(`Escuchando al puerto ${PORT}`)
})


class Productos {
    constructor(fileProducts) {
        try {
            this.fileProducts = fileProducts,
            this.products = JSON.parse(fs.readFileSync(fileProducts, "utf-8"))
        } catch (e) {
            fs.writeFileSync(fileProducts, JSON.stringify([]));
            this.products = [];
        }
    }

    save(product) {
        let id = this.products.length> 0 ? this.products[this.products.length-1].id + 1 : 1;
        product.id = id;
        this.products.push(product);

        return fs.promises.writeFile(this.fileName, JSON.stringify(this.products))
        .then(() => {return id})
        .catch((err) => { return err})
    }

    getAll() {
        return this.products
    }

    randomProduct() {
        return this.products[Math.floor((Math.random() * this.products.length))]
    }
}

const producto1 = new Productos('./productos.txt');