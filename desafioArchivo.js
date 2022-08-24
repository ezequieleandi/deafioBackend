const fs = require('fs')
const productosArray = []
class Producto{
    constructor(prod){
        this.prod = prod
    }
    save(obj){
        fs.promises.writeFile(this.prod, JSON.stringify(obj))
        .then(()=>console.log("creado"))
        .catch((error)=>console.log(error))
    }
    getAll(){
        fs.promises.readFile(this.prod, 'utf-8')
        .then(contenido => {console.log(JSON.parse(contenido))})
        .catch(error=>console.log(error))
    }
    getById(id){
        fs.promises.readFile(this.prod, 'utf-8')
        .then(contenido => {const info = JSON.parse(contenido)
        let resultado = info.filter((el)=>el.id == id)
        if(resultado.length == 0){
            console.log("El producto no existe")
        }else{
            console.log(resultado)
        }
        })
        .catch(error=>console.log(error))
    }
    deleteAll(){
        fs.promises.unlink(this.prod)
        .then(()=>console.log("hecho. Se borro todo"))
        .catch(error=>console.log(error))
    }
    deleteById(id){
        fs.promises.readFile(this.prod, 'utf-8')
        .then(contenido => {const info = JSON.parse(contenido)
        let resultado = info.filter((el)=>el.id !== id)
        if(resultado.length < 1){
            console.log("no se encontro el producto")
        }else{
            this.save(resultado)
        }
        })
        .catch(error=>console.log(error))
    }
}
const producto1 = new Producto('./productos.txt')
productosArray.push({nombre:"planta", precio:1200, id:"1"})
productosArray.push({nombre:"hojas", precio:800, id:"2"})
productosArray.push({nombre:"tierra", precio:2300, id:"3"})
// producto1.save(productosArray)
// producto1.getAll();
// producto1.getById("8");
// producto1.getById("2");
// producto1.deleteAll()
// producto1.deleteById("2")