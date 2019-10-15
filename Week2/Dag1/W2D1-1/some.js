const numbers = [
    {getal: 1}, 
    {getal: 4}, 
    {getal: 3}, 
    {getal: 6}, 
    {getal: 9}, 
    {getal: 7}, 
    {getal: 11}
]

const someNum = numbers.some((number) => {
    return number.getal > 10
})
console.log (someNum);

// true