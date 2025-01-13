// Задание 1

// Генерация числа
const numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0; // Это у нас будет счетчик попыток

console.log("Добро пожаловать в игру 'Угадай число'!");
console.log("Загадано число от 1 до 100. Попробуй угадать его.");

function guessTheNumber() {
  const userInput = prompt("Введите ваше число: ");
  const userGuess = parseInt(userInput, 10);
  attempts++;

  if (isNaN(userGuess)) {
    console.log("Пожалуйста, введите корректное число.");
  } else if (userGuess < numberToGuess) {
    console.log("Загаданное число больше.");
    guessTheNumber();
  } else if (userGuess > numberToGuess) {
    console.log("Загаданное число меньше.");
    guessTheNumber();
  } else {
    console.log(`Поздравляем, вы угадали число за ${attempts} попыток!`);
  }
}

guessTheNumber();

// Задание 2

// Функция для обработки массива чисел
function analyzeArray(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    console.log("Пожалуйста, введите непустой массив чисел.");
    return;
  }

  let max = numbers[0];
  let min = numbers[0];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num > max) {
      max = num;
    }

    if (num < min) {
      min = num;
    }

    sum += num;
  }

  const average = sum / numbers.length;

  console.log(`Наибольшее число: ${max}`);
  console.log(`Наименьшее число: ${min}`);
  console.log(`Среднее арифметическое число: ${average}`);
}

// Использование
const exampleArray = [25, 44, 7, 89, 134, 23];
analyzeArray(exampleArray);

// Задание 3

// Создание и вывод таблицы
function createMultiplicationTable() {
  const size = 10; // Размер таблицы 10x10

  console.log("Таблица умножения:");

  for (let i = 1; i <= size; i++) {
    let row = ""; // Строка для текущей строки таблицы

    for (let j = 1; j <= size; j++) {
      row += (i * j).toString().padStart(4, " "); // Равномерное отображение
    }

    console.log(row); // Вывод
  }
}

// Вызываем функцию
createMultiplicationTable();

// Задание 4

// Анализ строки
function analyzeString(inputString) {
  let letterCount = 0;
  let digitCount = 0;
  let spaceCount = 0;

  // Анализ каждого символа строки
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (/[a-zA-Z]/.test(char)) {
      // Если символ - буква
      letterCount++;
    } else if (/[0-9]/.test(char)) {
      // Если символ - цифра
      digitCount++;
    } else if (char === " ") {
      // Если символ - пробел
      spaceCount++;
    }
  }

  // Вывод результатов
  console.log(`Количество букв: ${letterCount}`);
  console.log(`Количество цифр: ${digitCount}`);
  console.log(`Количество пробелов: ${spaceCount}`);
}

// Использование
const userInput = prompt("Введите строку для анализа: ");
analyzeString(userInput);

// Задание 5

// Вычисленяем факториал с использованием цикла while
function calculateFactorial(number) {
  if (typeof number !== 'number' || number < 0 || !Number.isInteger(number)) {
    return "Пожалуйста, введите положительное целое число.";
  }

  let factorial = 1;
  let i = number;

  while (i > 0) {
    factorial *= i;
    i--;
  }

  return factorial;
}

// Пример использования
const userInput2 = parseInt(prompt("Введите положительное целое число: "), 10);
if (!isNaN(userInput)) {
  const result = calculateFactorial(userInput);
  console.log(`Факториал числа ${userInput2} равен ${result}`);
} else {
  console.log("Введено некорректное значение. Пожалуйста, введите число.");
}

// Задание 6

// Объект студента
const student = {
  name: "Алдияр Байзак",
  age: 22,
  course: 1,
  grades: [80, 85, 70, 80, 70],
};

// Функция для анализа студента
function analyzeStudent(student) {
  // Подсчет среднего балла
  const averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;

  // Добавление "статус"
  student.status = averageGrade >= 50 ? "сдал" : "не сдал";

  // Вывод информации
  console.log(`Имя: ${student.name}`);
  console.log(`Возраст: ${student.age}`);
  console.log(`Средний балл: ${averageGrade.toFixed(2)}`);
  console.log(`Статус: ${student.status}`);
}

// Итог
analyzeStudent(student);