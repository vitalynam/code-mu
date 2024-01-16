// №1
// Код должен вывести элемент объекта:

let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']);
console.log(obj.x);

// №2
// Код должен вывести элемент объекта по ключу из переменной:

let obj2 = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj2[key]);


// №3
// Код должен вывести сумму элементов объекта:

let obj3 = {x: 1, y: 2, z: 3};
let sum = obj3['x'] + obj3['y'] + obj3['x'];
console.log(sum);

// №4
// Код должен вывести количество элементов объекта:

let obj4 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj4).length);