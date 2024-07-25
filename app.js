// write code here
const array1 = [9, 17, 23, 5];
const array2 = [1, 2, 3, 4];
const array3 = [1, '1', 2, {}];

let result1 = array1.filter(x => x > 10);
let result2 = array2.filter(x => x%2 != 0);
let result3 = array3.filter(x => typeof x === 'number');

console.log(result1);
console.log(result2);
console.log(result3);