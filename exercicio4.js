const prompt = require('prompt-sync')();

function main (){

var numero = Number (prompt('digite um numero :   '));



 

if (numero % 2 == 0 ){

    numero =  Math. sqrt(numero)

    console.log(`seu numero  e  par e sua raiz e : ${numero}`) 

}else if (numero % 2 == 1 ) {
   
    numero = Math.pow (numero,2)

console.log(`seu numero  e  impar e ele elevado a 2   :${numero}  `)
}
}
main()