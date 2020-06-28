const numbers = [43, 56, 33, 23, 44, 36, 5];

const numbers2 = new Array(234,23,23,23,4343);

const fruit = ['apple', 'bannana', 'orange', 'pear'];

const mixed = [33, 'death', true, 44, {a:1}];

let val;

// val = numbers.length;
// val =Array.isArray(numbers);
// val = numbers[3];
// val = numbers.push(666,);

// val = numbers.indexOf(36);

// numbers.push(250);
// numbers.unshift(0001);
// val =numbers.pop();
// val = numbers.splice(3, 3);
// val = numbers.concat(numbers2);
// val = fruit.sort();
// val = numbers.sort();
// val = numbers.sort(function(x, y){
//     return x - y;
// });

function over50(num){
    return num > 50;
};

val = numbers.find(over50);

console.log(numbers);
console.log(val);