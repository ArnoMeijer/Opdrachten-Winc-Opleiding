const numbers = [
    {a:1}, {a:4}, {a:3}, {a:6}, {a:9}, {a:7}, {a:11}]

/*const numbDouble = numbers.forEach ((number) =>{
return (number.a) * 2

})
console.log (numbDouble);*/

const showDouble = function numbDouble(numbers){
    return numbers.map(number => {
		number * 2
		})
}
console.log (showDouble);


