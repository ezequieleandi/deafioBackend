const express = require('express')
const app = express()
const productosRouter = require('./routes/productos.js')
const multer = require('multer')
const morgan = require('morgan')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(multer({
    dest:__dirname+'/public/files'
}).single('fileMulter'))
app.use('/productos', productosRouter)
app.use(express.static(__dirname+'/public'))

const PORT = process.env.PORT || 8082
const server = app.listen(PORT, ()=>{
    console.log(`Escuchando el puerto ${PORT}`)
})
server.on('error', error =>console.log(`Error: ${error}`))