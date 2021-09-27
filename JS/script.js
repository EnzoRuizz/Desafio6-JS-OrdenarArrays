class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
}

const Productos = [
    new Producto("Televisor 32' ", 2000),
    new Producto("Celular" , 2500),
    new Producto("Pc Gamer" , 3000),
    new Producto("Tablet", 1500),
    new Producto("Pasto", 100)
]

// Ordenar de mayor a menor
Productos.sort((a, b) =>{
    if (a.precio > b.precio) {
        return -1;
    }
    if (a.precio < b.precio) {
        return 1;
    } else {
        return 0;
    }
})

console.log(Productos);