/*
Abre el archivo index.html en tu navegador.
Introduce un número del 1 al 3 en el campo de entrada.
El juego se iniciará automáticamente con una cuenta atrás de 5 segundos.
Después de la cuenta atrás, el juego evaluará el número introducido.
Se mostrará un mensaje indicando si has salvado el mundo o si la bomba ha estallado.

    Puedes usar setTimeout() para generar la asincronía de 5 segundos
    Puedes usar setInterval() para generar la asincronía de 5 segundos (recuerda que es del 5 al 0, por tanto el intervalo debería ser uno más) 5, 4, 3, 2, 1, 0 ...
    Usa promesas para una vez pasado ese tiempo devuelva el resultado y puedas trabajar con él
    Crea un botón de reinicio del juego voviendo a iniciar la función inicial o reiniciando la página al pulsarlo.

*/

const contador = document.getElementById("countdown");
const userInput= document.getElementById("userInput");
const result= document.getElementById("result");
const restart= document.getElementById("restart");
let num;
let seconds = 6; 
let segundosRestantes=null;
restart.addEventListener("click",function(){
    clearTimeout(segundosRestantes);
    segundosRestantes=null;
    seconds = 6; 
    userInput.value="";
    contador.textContent="";
})


userInput.addEventListener("input",function(){
     segundosRestantes= setInterval("segundos()", 1000)
});


function randomizador() {
    return Math.floor(Math.random() * (3 - 1) + 1);
}


function segundos() { 
    seconds--; 
    if(seconds>-1){
        contador.textContent =`Quedan  ${seconds} segundos`
    }
    if(seconds==-1){
        let dato = userInput.value;
        num= randomizador();
        console.log("Random "+num+ " datoUsuario "+dato );
        if(num==dato){
            result.textContent=`Tu numero ${dato} es igual que el ${num}  Felicidades has ganado`;            
        }else{
            result.textContent=`Tu numero ${dato} es diferente que el ${num}  Lo sentimos has perdido`;     
        }
    }

   
} 





