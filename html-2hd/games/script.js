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

        // Формируем текст для prompt: вопрос + варианты + подсказка про ввод номера
        const optionsText = q.options.join("\n");
        const userInput = prompt(`${q.question}\n\n${optionsText}\n\nВведите номер правильного ответа (1, 2 или 3):`);

        // Если пользователь нажал «Отмена» в prompt, прерываем викторину
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