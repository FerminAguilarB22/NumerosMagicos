function numeroAleatorio(){
    const min = 0;
    const max = 100;
    function numero (min, max) {
        return Math.floor (Math.random() * (max - min) + min);
      }
      console.log(numero(min,max));
     
}
function adivinarNumero(){
    var botonAdivinar =parseInt( document.getElementById("numero").value);
    console.log(botonAdivinar);
}


// if (numeroAleatorio == adivinarNumero){
//     console.log("son iguales");
//     // let section = document.getElementsByTagName("section");
//     // section[1].innerHTML = `<h1 class="display-4 mt-5">LOS NUMEROS SON IGUALES</h1>`
// }else if(numeroAleatorio>adivinarNumero){
//     alert("El numero ingresado es menor al numero magico");
// }else{
//     alert("El numero ingresado es mayor al numero magico");
// }
