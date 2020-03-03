'use strict'
let total = 0;
let running = true;

while(running){
    let input = prompt(`now the total is ${total}, enter a number:`)
    if(input){
        total += Number(input); 
    }else{
        running = false;
        alert('Done');
    }
}