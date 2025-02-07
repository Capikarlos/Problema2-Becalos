// Evaluador de Notas con Mensajes Personalizados
//Proyecto2
//Carlos Antonio López Prieto
// Asigno un valor a la variable nota.
// Ejemplo: 85. Prueba con 45, 60, 75, 0, etc.
let nota = 85; 
let nota2 = 45;
let nota3 = 75;
let nota4 = 0;
let nota5 = 100;
// Validamos que la nota sea un número entre 0 y 100
function evaluarNota(nota){//Como crear una función en .c
    if (typeof nota === 'number' && nota >= 0 && nota <= 100) {
        console.log(`La nota obtenida es: ${nota}`);//${nota} es una forma de concatenar
        
        if (nota >= 90){
            console.log("Excelente");
        } else if (nota >= 75 && nota <= 89) {
            console.log("Bien");
        } else if (nota >= 60 && nota <= 74) {
            console.log("Suficiente");
        } else {
            console.log("No aprueba");
        }
    } else {
        console.log("La nota ingresada no es válida. Debe ser un número entre 0 y 100.");
    }
}

// Llamadas a la función para cada nota
evaluarNota(nota);
evaluarNota(nota2);
evaluarNota(nota3);
evaluarNota(nota4);
evaluarNota(nota5);

