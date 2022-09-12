const prompt = require ('prompt-sync')();


function main(){

const idade = Number (prompt('digite sua idade '))


 


if ( idade <= 14 ){

    console.log('voce esta na categoria INFANTL')
   
}else if  ( idade <= 17){
    console.log('voce esta na categoria JUVENIL')
    
}  
else if (idade <=25)   
    console.log('voce esta na categoria ADULTO')

}


main ()