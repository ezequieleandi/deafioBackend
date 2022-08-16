class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName(){
        return `el nombre completo es: ${this.nombre} ${this.apellido}`
    }
    addMascota(nuevaMascota){
        this.mascotas.push(nuevaMascota)
    }
    countMascotas(){
        return `la cantidad de mascotas es: ${this.mascotas.length}`
    }
    addBook(nombre, autor){
        this.libros.push({nombre:nombre, autor:autor})
    }
    getBookNames(){
        return this.libros.map(libro => `${libro.nombre}`)
    }
}
const usuario1 = new Usuario("Fran", "Roll", [{nombre:"gitano", autor:"federico"}], ["lala"])
const usuario2 = new Usuario("Celeste", "Cop", [{nombre:"educacion", autor:"flaubert"}], ["kela", "pipo"])

usuario1.addMascota("firu")
usuario1.addBook("cien años", "marquez")
usuario2.addMascota("taira")
usuario2.addMascota("blanca")
usuario2.addBook("el extranjero", "albert camus")

console.log(usuario1.getFullName())
console.log(usuario1.countMascotas())
console.log( `Libros: ${usuario1.getBookNames()}`)

console.log(usuario2.getFullName())
console.log(usuario2.countMascotas())
console.log( `Libros: ${usuario2.getBookNames()}`)