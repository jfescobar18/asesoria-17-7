var elementos = [];

function agregarElemento() {
    const elemento = prompt("Ingresa un numero");
    // push sirve para agregar elementos a un arreglo de izquerda a derecha
    elementos.push(elemento);

    mostrarElementos();
}

function eliminarElemento() {
    const elemento = prompt("Ingresa el numero que quieres eliminar");
    elementos = elementos.filter((numero) => {
        return numero != elemento;
    });

    mostrarElementos();
}

function mostrarElementos() {
    const elementosString = elementos.map((numero) => {
        return `- ${numero}`;
    }).join("\n");
    // \n = salto de linea
    alert(elementosString);
}
