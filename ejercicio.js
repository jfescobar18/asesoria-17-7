var elementos = []

function mostrarElementos() {
    const elementosString = elementos
        .map((numero) => {
            return `- ${numero}`
        })
        .join("\n")

    // [1,3,4,5].join("\n") => "1,2,3,4,5" => 
    // 1
    // 2
    // 3 ...
    // \n = salto de linea
    alert(elementosString)
}

function agregarElemento() {
    const elemento = prompt("Ingresa un numero")
    // push sirve para agregar elementos a un arreglo de izquerda a derecha
    elementos.push(elemento)

    mostrarElementos()
}

function eliminarElemento() {
    const elemento = prompt("Ingresa el numero que quieres eliminar")
    elementos = elementos.filter((numero) => {
        return numero != elemento
    })

    mostrarElementos()
}
