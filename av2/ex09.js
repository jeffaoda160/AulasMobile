const input = require('readline-sync');
const a = Number(input.question());
const b = Number(input.question());
function min(a, b){
    if(a > b){
        return b;
    }else{
        return a;
    }
}

console.log (min(a, b))
