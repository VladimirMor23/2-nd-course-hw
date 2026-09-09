function minTwo(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(minTwo(8, 4)); 
console.log(minTwo(6, 6)); 

//задание 2 
function check(n) {
  if (n % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}

console.log(check(8));  
console.log(check(7));  
console.log(check(0));


//задание 3 
const print = (n) => console.log(n * n);
const get = (n) => n * n;

//Задание 4 

function correctAge(age) {
  const num = Number(age);

  if (isNaN(num) || num < 0) {
    return 'Вы ввели неправильное значение';
  }

  if (num >= 0 && num <= 12) {
    return 'Привет, друг!';
  }

  
  return 'Добро пожаловать!';
}

alert(correctAge(prompt('Сколько вам лет?')));
 
//Задание 5
function multi(a, b) {
  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    return 'Одно или оба значения не являются числом';
  }

  return numA * numB;
} 

console.log(multi(3, 4));       
console.log(multi('5', '2'));    
console.log(multi('abc', 2));

//Задание 6 
function cubeNumber() {
  const input = prompt('Введите число:');
  const num = Number(input);

  if (isNaN(num)) {
    return 'Переданный параметр не является числом';
  }

  const cubed = num ** 3; 

}


for (let i = 0; i <= 10; i++) {
  
  console.log(testCube(i));
}


function testCube(n) {
  const num = Number(n);
  if (isNaN(num)) {
    return 'Переданный параметр не является числом';
  }
  const cubed = num ** 3;
  return `${num} в кубе равняется ${cubed}`;
}

//Задание 7
const circle1 = {
  radius: 5,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 10,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};


console.log(circle1.getArea());     
console.log(circle1.getPerimeter()); 

console.log(circle2.getArea());      
console.log(circle2.getPerimeter()); 








