function sum (...numbers) {

    return numbers.reduce (function(previous, current) {
        return previous + current;
    })
}

console.log (sum(1,2,3,4,5,6,7,8));

function sum2(x, y, z) {

    return x + y + z;
}

const numbs = [5,6,7,8];

console.log(sum2(...numbs));