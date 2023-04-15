const arregloNombres = ["Fran", "Andrea", "Pau", "Vic"];
const arregloNumeros = [1, 2, 3, 4, 5, 6];

// map
// funcion dentro de funcion se llama callback
const nuevoArregloNumeros = arregloNumeros.map((numero) => {
    return numero * 2;
});

const nuevoArregloNombres = arregloNombres.map((nombre) => {
    return nombre + "-15";
})

console.log(nuevoArregloNumeros, "nuevoArregloNumeros")
console.log(nuevoArregloNombres, "nuevoArregloNombres")

// filter
const arregloNumerosFiltrado = arregloNumeros.filter((numero) => {
    return numero % 2 === 0;
});

const arregloNombresFiltrado = arregloNombres.filter((nombre) => {
    return nombre.length === 3;
})

console.log(arregloNumerosFiltrado, "arregloNumerosFiltrado");
console.log(arregloNombresFiltrado, "arregloNombresFiltrado");

// find
const numeroFiltrado = arregloNumeros.find((numero) => {
    return numero % 3 === 0;
});

const nombreFiltrado = arregloNombres.find((nombre) => {
    return nombre === "Vic";
})

console.log(numeroFiltrado);
console.log(nombreFiltrado);

// reduce
const numerosSumados = arregloNumeros.reduce((prevNum, num) => {
    return prevNum + num;
}, 0);

console.log(numerosSumados, "numerosSumados");

// findIndex
const indiceDeUnNumero = arregloNumeros.findIndex((numero) => {
    return numero % 3 === 0;
});

console.log(indiceDeUnNumero, "indiceDeUnNumero");
console.log(arregloNumeros[indiceDeUnNumero]);

// funciones
// contexto es la principal diferencia
function saludo() {
    // contexto global de JS = window
    console.log("Hola mundo");
    // this = window
}

const _saludo = () => {
    // funcion flecha tiene su propio contexto
    console.log("Saludo");
    // this = el espacio dentro de la funcion flecha
}
