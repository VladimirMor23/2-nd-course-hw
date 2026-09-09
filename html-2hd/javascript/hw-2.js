//Задание 1 
let password = 'пароль';
let userInput = prompt('Введите пароль');

if (userInput === password) {
  alert('Пароль введен верно');
} else {
  alert('Пароль введен неправильно');
}
// Задание 2 
let c = 2; 
if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
//Задание 3
let d = 2;
let e = 102; 
if ( d > 100 || e > 100 ){
  console.log('Верно');
} else {
  console.log('Неверно')
}
//задание 4 
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert( Number(a) + Number(b));
//Задание 5 
let monthNumber = 12;
if (monthNumber < 1 || monthNumber > 12){
  console.log('команда невыполняется')
}
else{
  let month 
  switch(monthNumber){
      case 12:
      case 1:
         case 2:
      month = 'Зима';
      break;
      case 3:
      case 4:
      case 5:
      month = 'Весна';
        break;
      case 6:
      case 7:
      case 8:
      month = 'Лето';
        break;
      case 9:
      case 10:
      case 11:
      month = 'Осень';
        break;
  }
  
  console.log(`Месяц номер ${monthNumber} — это ${month}.`);
}
  
