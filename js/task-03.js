'use strict'

let message;
const passwordInput = prompt('Enther password:');
const passswordActual = 'allahu akbar'

if(passwordInput === passswordActual){
    message = 'Access granted';
}else if(message === null){
    message = 'Attempt canceled';
}else{
    message = 'Access denied';
}

alert(message);