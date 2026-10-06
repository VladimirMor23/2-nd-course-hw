const quiz = [
      {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
      },
      {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
      },
      {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
      }
    ];

    function gameVictory() {
      let score = 0;

      for (let i = 0; i < quiz.length; i++) {
        const q = quiz[i];     
        const optionsText = q.options.join("\n");
        const userInput = prompt(`${q.question}\n\n${optionsText}\n\nВведите номер правильного ответа (1, 2 или 3):`);
         
        if (userInput === null) {
          alert("Викторина прервана.");
          return;
        }

        const userAnswer = Number(userInput.trim());

        if (userAnswer === q.correctAnswer) {
          score++;
        } else {
          alert(`Неверно! Правильный ответ: ${q.correctAnswer}.`);
        }
      }

      alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
    }

//игра угадай число
    function guessNumber() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  while (true) {
    const input = prompt('Угадай число от 1 до 100 (или нажми Отмена, чтобы выйти):');
    if (input === null) {
      alert('Ты вышел из игры.');
      return;
    }

    const guess = Number(input);
    if (Number.isNaN(guess)) {
      alert('Пожалуйста, введи число.');
      continue;
    }

    attempts++;

    if (guess < secretNumber) {
      alert('Загаданное число БОЛЬШЕ. Попробуй ещё раз.');
    } else if (guess > secretNumber) {
      alert('Загаданное число МЕНЬШЕ. Попробуй ещё раз.');
    } else {
      alert(`Поздравляю! Ты угадал число ${secretNumber} за ${attempts} попыток.`);
      return;
    }
  }
}

//Игра простая арифметика
function Arithmetic() {
  const operations = ['+', '-', '*', '/'];
  const op = operations[Math.floor(Math.random() * operations.length)];

  let a, b, correct;

  if (op === '/') {
    b = Math.floor(Math.random() * 9) + 1;
    const multiplier = Math.floor(Math.random() * 10) + 1; 
    a = b * multiplier;
    correct = a / b;
  } else {
    a = Math.floor(Math.random() * 10) + 1; 
    b = Math.floor(Math.random() * 10) + 1; 

    if (op === '+') correct = a + b;
    if (op === '-') correct = a - b;
    if (op === '*') correct = a * b;
  }

  const userInput = prompt(`Реши пример: ${a} ${op} ${b}`);
  if (userInput === null) {
    alert('Ты вышел из игры.');
    return;
  }

  const userAnswer = Number(userInput);
  if (Number.isNaN(userAnswer)) {
    alert('Пожалуйста, введи число.');
    return;
  }

  if (userAnswer === correct) {
    alert('Верно! Молодец! 🎉');
  } else {
    alert(`Ошибка. Правильный ответ: ${correct}`);
  }
}

// Игра переверни текст 
function reverse() {
  const text = prompt('Введи текст, который нужно перевернуть:');
  if (text === null) {
    alert('Ты вышел из игры.');
    return;
  }

  const rever = text.split('').reverse().join('');
  alert(`Перевёрнутый текст: ${rever}`);
}

// Игра камень, ножницы, бумага 
 document.getElementById("ramdonBu").addEventListener("click", ramdonBul);

 function computerPlay() {
            const options = ["камень", "ножницы", "бумага"];
            const randomIndex = Math.floor(Math.random() * 3);
            return options[randomIndex];
        }

        function ramdonBul() {
            const player = prompt("камень, ножницы или бумага").trim().toLowerCase();
            
            if (!player) return; 

            const computer = computerPlay();
            
            const winner = {
                камень: "ножницы",
                бумага: "камень",
                ножницы: "бумага"
            };

            if (player === computer) {
                alert("Ничья!");
            } else if (winner[player] === computer) {
                alert("Вы победили!");
            } else {
                alert("Компьютер победил!");
            }
        }

        // Генератор случайных цветов 
          function getRandomColor() {
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          return `rgb(${r}, ${g}, ${b})`;
        }

        document.addEventListener('DOMContentLoaded', () => {
          const button = document.getElementById('changeColorBtn');
          const card = document.getElementById('randomColor');

          if (button && card) {
            button.addEventListener('click', () => {
              card.style.backgroundColor = getRandomColor();
            });
    }
  });
       
      
    


