const {Router} = require('express')
const router = Router()
const productos = []

router.get('/', ((req, res) => {
    res.json({productos})
}))
router.get('/:id', ((req, res) => {
    const id = req.params.id
    let resultado = productos.find((el)=>el.id == id)
    res.send(resultado)
}))
router.post('/', (req, res) => {
    const producto = req.body
    let newId
    productos.length> 0 ? newId = productos[productos.length-1].id + 1 : newId = 1;
    const newProd = { ...producto, id: newId }
    productos.push(newProd)
    res.send('producto guardado')
})
router.put('/:id', ((req, res) => {
    const id = req.params.id
    const {nombre, precio} = req.body
    let resultado = productos.find((el)=>el.id == id)
    resultado.nombre = nombre
    resultado.precio = precio
    res.send(productos)
}))
router.delete('/:id', ((req, res) => {
    const per = req.params.id
    let resultado = productos.filter((el)=>el.id !== per)
    res.send(resultado)
}))


module.exports = router