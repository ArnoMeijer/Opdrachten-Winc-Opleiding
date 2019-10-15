let person = {
    name: 'Arno',
    age: 47
};

console.log(person);

console.log(person.age);
console.log(person.name);

console.log(person['name']);
console.log(person['age']);

let selectedColors = ['groen', 'blauw', 'rood'];
selectedColors[3] = 'geel';
selectedColors[4] = '5';

console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length);