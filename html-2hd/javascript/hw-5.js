//Задание 1.

const arrDe = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrDe.length; i++) {
  console.log(arrDe[i]);
  if (arrDe[i] === 10) {
    break;
  }
}

//Задание 2. 

const arrRe = [1, 5, 4, 10, 0, 3];
const index = arrRe.indexOf(4);
console.log(index); 

//Задание 3. 

const arrRi = [1, 3, 5, 10, 20];
const res = arrRi.join(' ');
console.log(res); 

//Задание 4.

const rows = 3;
const cols = 3;
const matrix = [];

for (let i = 0; i < rows; i++) {
  const row = [];
  for (let j = 0; j < cols; j++) {
    row.push(1);
  }
  matrix.push(row);
}

console.log(matrix);

//Задание 5.  

const arrJe = [1, 1, 1];
arrJe.push(2, 2, 2);
console.log(arrJe);

//Задание 6.



let arrKe = [9, 8, 7, 'a', 6, 5];

 arrKe = arrKe.filter(item => item !== 'a');


 arrKe.sort((a, b) => a - b);

console.log(arrKe); 
//Задание 7. 

const numbers = [9, 8, 7, 6, 5];
const userInput = prompt('Угадайте число из массива [9,8,7,6,5]:');
const guessedNumber = Number(userInput);

if (numbers.includes(guessedNumber)) {
  alert('Угадал');
} else {
  alert('Не угадал');
}
//Задание 8.

const str = 'abcdef';
const reversed = str.split('').reverse().join('');
console.log(reversed); 
//Задание 9. 

const nestd = [[1, 2, 3], [4, 5, 6]];
const flat = nestd.flat();
console.log(flat); 


const nested = [[1, 2, 3], [4, 5, 6]];
const result = [];
for (const sub of nested) {
  for (const item of sub) {
    result.push(item);
  }
}
console.log(result);

//Задание 10.

const arrNe = [3, 7, 2, 9, 4]; 

for (let i = 0; i < arrNe.length; i++) {
  if (i === arrNe.length - 1) {
    
    console.log(`Элемент ${arrNe[i]}: следующего нет`);
    continue;
  }
  const sum = arrNe[i] + arrNe[i + 1];
  console.log(`Сумма ${arrNe[i]} + ${arrNe[i + 1]} = ${sum}`);
}
//Задание 11. 

function getSquares(numbers) {
  return numbers.map(n => n * n);
}

const input = [1, 2, 3, 4];
console.log(getSquares(input)); 


//Задание 12. 

function getLengths(words) {
  return words.map(word => word.length);
}

const words = ['cat', 'dog', 'elephant'];
console.log(getLengths(words)); 

//Задание 13.

function getNegatives(numbers) {
  return numbers.filter(n => n < 0);
}

const nums = [3, -1, -5, 0, 7];
console.log(getNegatives(nums)); 
//Задание 14. 

const original = [];
const evens = [];


for (let i = 0; i < 10; i++) {
  const value = Math.floor(Math.random() * 11); 
  original.push(value);
}

for (const num of original) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}

console.log('Исходный массив:', original);
console.log('Чётные значения:', evens);

//Задание 15.

const arr = [];

for (let i = 0; i < 6; i++) {
  const value = Math.floor(Math.random() * 10) + 1; // 1..10
  arr.push(value);
}

let sum = 0;
for (const n of arr) {
  sum += n;
}
const average = sum / arr.length;

console.log('Массив:', arr);
console.log('Среднее арифметическое:', average);
