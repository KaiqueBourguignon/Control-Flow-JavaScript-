const prompt = require ('prompt-sync')();

function main(){
const number1 = Number (prompt('digite um numero'));
const number2 = Number(prompt('digite outro numero'));
const number3 = Number(prompt ('digite outro numero'));

let maior = number1


if (number2 > maior){
    maior = number2

} if (number3>maior){
maior = number3
    
}
console.log(` valor  e ;  ${maior}`)
       

}
main()

