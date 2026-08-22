let i = 0;
while ( i < 3){
    console.log('Привет')
    i++;
}
// задание 2
let p = 1;
while (p <= 5) {
    console.log(p);
     p++;
}
// Задание 3
let z = 7;
while (z <= 22) {
    console.log(z);
     z++;
}
//задание 4 
const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
};
for (const name in obj) {
    if (obj.hasOwnProperty(name)) {
    const salary = obj[name];
    console.log(`${name} — зарплата ${salary} долларов`);
  }
}
//задание 5 
let n = 1000;
let num = 0; 
    while (n >= 50) {
    n = n / 2;
    num++;
}
    console.log('Число получится в результате:', n);      
    console.log('Количество:', num); 
//задание 6 
const first = 4; 
const days = 31;
let week = first;

while (week <= days) {
  console.log(`Сегодня пятница, ${week}-е число. Необходимо подготовить отчет.`);

  week += 7;
}


