

// Definir las varibles 
let edad = 30;
let limiteEdad = 18;

if ( edad >= limiteEdad){
    console.log("Es mayor de edad");
}else {
    console.log("Es menos de edad");
}

console.log("---------------------");

//If anidado
if ( edad >= limiteEdad){
    console.log("Es mayor de edad");

    if ( edad == 20 ) {
        console.log("El usuario tiene 20 años");
    }else if ( edad >= 21 ) {
        console.log("Es adulto en todos lados");
    }

}else {
    console.log("Es menos de edad");
}

console.log("---------------------");