// Entrada
var jugadas = prompt("Insert the amount of times that you wish to play.");
var usuario = 0;
var centinela = 0;

/* Opciones >>> 1: Rock | 2: Paper | 3: Scissors */

// Proceso
/* Variables >>> máximo 4 mínimo 1 para que el rango de resultados sea solo de 1 a 3, ocupando Math.floor más abajo */
var max = 4;
var min = 1;

while(centinela<jugadas) {
    var random = Math.random()*(max-min)+min;
    var maquina = Math.floor(random);
    /* Solicitud al usuario para ingresar un número */
    usuario = parseInt(prompt("Insert your choice. 1: Rock, 2: Paper, 3: Scissors."));
    /* Validación de opción ingresada */
    if(usuario>3 || usuario<0) {
        alert("Invalid option. Try again.");
    }
    else {
        /* Número ingresado es entre 1 y 3 */
        /* Gana Rock a Scissors */
        if(usuario==1&&maquina==3){
            alert(`You've won! You played ${usuario} Rock and the AI played ${maquina} Scissors.`);
        }
        /* Pierde Rock a Paper */
        else if(usuario==1&&maquina==2){
            alert(`You've lost! You played ${usuario} Rock and the AI played ${maquina} Paper.`);
        }
        /* Gana Paper a Rock */
        else if(usuario==2&&maquina==1){
            alert(`You've won! You played ${usuario} Paper and the AI played ${maquina} Rock.`);
        }
        /* Pierde Paper a Scissors */
        else if(usuario==2&&maquina==3){
            alert(`You've lost! You played ${usuario} Paper and the AI played ${maquina} Scissors.`);
        }
        /* Gana Scissors a Paper */
        else if(usuario==3&&maquina==2){
            alert(`You've won! You played ${usuario} Scissors and the AI played ${maquina} Paper.`);
        }
        /* Pierde Scissors a Rock */
        else if(usuario==3&&maquina==1){
            alert(`You've lost! You played ${usuario} Scissors and the AI played ${maquina} Rock.`);
        }
        /* Empate */
        else {
            alert(`It's a tie! (1: Rock, 2: Paper, 3: Scissors) You played ${usuario} and so did the AI..`);
        }
    }
    centinela++;
}