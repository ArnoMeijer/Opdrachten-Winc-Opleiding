/* const winc = ('Winc Winc, nudge nudge');
const numbers = [1, 2, 4, 0];

const isArray = winc((item) => {
    return winc.isArray(item)
    
})

console.log(isArray);

function isArray(item) {
    return numbers.isArray(item) 
};

console.log(isArray);*/


function isArray(input) {
    return Array.isArray(input)   
   };

console.log(isArray('Winc Winc, nudge nudge')); // false
console.log(isArray([1, 2, 4, 0])); // true