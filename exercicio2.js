const prompt = require ('prompt-sync')();

function main(){

const n1 = Number(prompt('digite um numero'));
const n2 = Number(prompt('digite um numero'));
const n3 = Number(prompt('digite um numero'));

let maior , menor , meio ;

if (n1 > n2  &&  n1 > n3){

    maior = n1 ;
    if ( n2 < n3){
        menor = n2;
        meio = n3;
    }else{
        menor = n3;
        meio = n2;
    }

}else if (n1 < n2 && n1 < n3){

    menor = n1;
    if ( n2 < n3){
        maior = n3;
        meio = n2;
    }else{
        maior = n2;
        meio = n3;
    }


}else{

    meio = n1;
    if ( n2 < n3){
        maior = n3;
        menor = n2;
    }else{
        maior = n2;
        menor = n3;
    }
}
 console.log(`odem ordem correda do menor  para o maior eh :${menor},${meio},${maior}`);

    
}
main();