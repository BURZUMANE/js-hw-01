'use strict'

const countries = ['china', 'chili', 'australia', 'india', 'jamaica'];
let userSearch = prompt('Where do you want to ship?');
if (userSearch === null) {
    alert('canceled by user');
} else {
    userSearch = userSearch.toLowerCase();
    if (countries.indexOf(userSearch) === -1) {
        for (const country of countries) {
            if (country.includes(userSearch)) {
                if (confirm(`Did you mean ${country}`)) {
                    userSearch = country;
                    break;
                } else {
    
                    continue;
                }
            }
            userSearch = 'none'
        }
        
    }
    
    switch (userSearch) {
        case 'china':
            alert('Shipping to China costs 100 credits');
            break;
        case 'chili':
            alert('Shipping to Chili costs 250 credits');
            break;
        case 'australia':
            alert('Shipping to Australia costs 170 credits');
            break;
        case 'india':
            alert('Shipping to India costs 80 credits');
            break;
        case 'jamaica':
            alert('Shipping to Jamaica costs 120 credits');
            break;
        case 'none':
            alert('Unfortunetly we do not ship to that country');
            break;
    }
    
}


