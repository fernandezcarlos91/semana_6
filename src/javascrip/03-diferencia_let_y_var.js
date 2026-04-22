


//Definir una variale
var nombre = "Carlos"; // Var es una variable global y la podemos modificar y dará el valor último, modificado.

console.log("El nombre es: ", nombre);

// Vamos a usar un if
if (true){
    var nombre = "Abraham";
    console.log("El nombre es: ", nombre);
}

console.log("El nombre es: ", nombre);

console.log("-----------------------");

// Definimos variables con Let
let apellido = "Fernández";
console.log("El apellido es: ", apellido);

if (true){
    let apellido = "Noriega";
    console.log("El apellido es: ", apellido);
}

console.log("El apellido es: ", apellido);

console.log("-----------------------");
