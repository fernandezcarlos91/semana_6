
// Definimos las variables 
let x = 2;
let y = 4;

// Mostrar e valor de cada variable
console.log('La variable de "x" tiene un valor de: ', x);
console.log("La variable de 'Y' tiene un valor de: ", y);

console.log("------------------------------------------");

// Operaciones matemáticas
console.log("Suma: ", x + y);
console.log("Resta: ", x - y);
console.log("División: ", x / y);
console.log("Multiplicación: ", x * y);

// Transformamos el int a string
console.log("Parse: " + (x * y));

// Muy interesante
let t = true;
let f = false;

// Comparación de valores Booleanos
console.log("Si comparamos T con T nos da: ", t == t);
console.log("Si comparamos T con F nos da: ", t == f);
console.log("Si comparamos F con F nos da: ", f == f);


console.log("------------------------------------------");

// Operadores de comparación - Comparativa una O la otra
console.log("Si es t o t  nos da: ", t || t);
console.log("Si es t o f  nos da: ", t || f);
console.log("Si es f o f  nos da: ", f || f);
console.log("Si es f o t  nos da: ", f || t);

console.log("------------------------------------------");

// Cumplir dos condiciones
console.log("Si tenemos t y t nos da: ", t && t);
console.log("Si tenemos t y f nos da: ", t && f);
console.log("Si tenemos f y f nos da: ", f && f);
console.log("Si tenemos f y t nos da: ", f && t);

console.log("------------------------------------------");

// Distinto
console.log( t != t );
console.log( t != f );
console.log( f != f );
