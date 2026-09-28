const piple = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

piple.sort((a, b) => a.age - b.age);

console.log(piple);

// Задание 2 
function isPositive(num) {
  return num > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(arr, ruleFunction) {
  const result = [];
  for (const item of arr) {
    if (ruleFunction(item)) {
      result.push(item);
    }
  }
  return result;
}

const numbers = [3, -4, 1, 9];
console.log(filter(numbers, isPositive)); 
// [3, 1, 9]

const people = [
  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];
console.log(filter(people, isMale)); 


// Задание 3 
let count = 0;
const intervalId = setInterval(() => {
  count += 3;
  console.log(new Date().toLocaleString());
  if (count >= 30) {
    clearInterval(intervalId);
    console.log('30 секунд прошло');
  }
}, 3000);

// Задание 4 
function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

// Задание 5 

function delayForSecond(cb) {
  setTimeout(() => {
    console.log('Прошла одна секунда');
    if (cb) { cb(); }
  }, 1000)
}


function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));

