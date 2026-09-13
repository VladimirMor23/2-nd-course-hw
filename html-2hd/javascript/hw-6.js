const str = 'js';
const upper = str.toUpperCase();
console.log(upper); 

// Задание 2 
function filterBy(arr, prefix) {
  const lowerPrefix = prefix.toLowerCase();
  return arr.filter(item => item.toLowerCase().startsWith(lowerPrefix));
}

const words = ['Apple', 'apricot', 'Banana', 'avocado', 'Application'];
console.log(filterBy(words, 'ap')); 


// Задание 3 
const num = 32.58884;

const floor = Math.floor(num);  
const ceil = Math.ceil(num);    
const round = Math.round(num);  

console.log(floor, ceil, round);

// Задание 4 
const numbers = [52, 53, 49, 77, 21, 32];

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log('Минимум:', min); 
console.log('Максимум:', max); 

// Задание 5
function printRandomNumber() {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  console.log(randomNum);
}
printRandomNumber();

// Задание 6 
function random(n) {
  if (n <= 1) return []; 

  const length = Math.floor(n / 2);
  const result = [];

  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * (n + 1));
    result.push(randomNum);
  }

  return result;
}

console.log(random(10)); 

// Задание 7 
function Ranger(min, max) {
  if (min > max) {
    throw new Error('Минимальное значение не может быть больше максимального.');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(Ranger(5, 10)); 

//Задание 8 DATE
const now = new Date();
console.log(now);

// Задание 9 72 дня 
const current = new Date();
const future = new Date(current);
future.setDate(current.getDate() + 73);

console.log('Текущая дата:', current);
console.log('Дата через 73 дня:', future);
// Задание 10 
function formatDate(dateInput) {
  const date = new Date(dateInput);

  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];

  const daysw = [
    'воскресенье', 'понедельник', 'вторник', 'среда',
    'четверг', 'пятница', 'суббота'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = daysw[date.getDay()];

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));





