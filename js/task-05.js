'use strict'

let countries = ['china', 'chili', 'australia', 'india', 'jamaica'];
const userSearch = prompt('Where do you want to ship?').toLocaleLowerCase();
// const product = 'SAMSUNG'.toLocaleLowerCase();

const passed = countries.includes(userSearch);

for(let i =0; i < countries.length; i++){
    if(countries[i].includes(userSearch)){
        if(userSearch.length < countries[i].length){
            console.log(`You looked for ${userSearch}`);
            const mean = confirm(`Did you mean ${countries[i]}?`);
            if(mean){
                const userChoice = String(countries[i]);
                switch(userChoice) {
                    case 'china':
                      calert('Shipping to china costs 100 credits');
                      break;
                    case 'chili':
                    alert('Shipping to chili costs 250 credits');
                    break;
                    case 'australia':
                    alert('Shipping to australia costs 170 credits');
                    break;
                    case 'india':
                    alert('Shipping to india costs 80 credits');
                    break;
                    case 'jamaica':
                    alert('Shipping to jamaica costs 120 credits');
                    break;
                  }
            }else{
                alert('Ohh snap');
            }
        }
    }else{
        console.log(`${userSearch} no such a country in our services list`);
    }
}

