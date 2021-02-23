//Создаем переменные для кнопок

const numbers = document.querySelectorAll(".number");
const clearBtns = document.querySelectorAll(".clear-btn");
const operations = document.querySelectorAll(".operator");
const decimal = document.getElementById("decimal");
const display = document.getElementById("display");

//Создаем переменные, необходимые для памяти нашего калькулятора

let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryNextOperation = "";

//Повесим обработчики событий на кнопки, чтобы запускать соответствующие функции при нажатии данных кнопок

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  number.addEventListener("click", function (e) {
    numberPress(e.target.textContent);
  });
}

for (let i = 0; i < clearBtns.length; i++) {
  let clearBtn = clearBtns[i];
  clearBtn.addEventListener("click", function (e) {
    clear(e.srcElement.id);
  });
}

for (let i = 0; i < operations.length; i++) {
  let operator = operations[i];
  operator.addEventListener("click", function (e) {
    operation(e.target.textContent);
  });
}

decimal.addEventListener("click", decimalFraction);

//Функции

function numberPress(number) {
  if (MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  } else {
    if (display.value === "0") {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}

function clear(id) {
  if (id === "ce") {
    display.value = "0";
    MemoryNewNumber = true;
  } else if (id === "c") {
    display.value = "0";
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryNextOperation = "";
  }
}

function operation(op) {
  let memoryLocalOperation = display.value;

  if (MemoryNewNumber && MemoryNextOperation !== "=") {
    display.value = MemoryCurrentNumber;
  } else {
    MemoryNewNumber = true;

    switch (MemoryNextOperation) {
      case "+":
        MemoryCurrentNumber += +memoryLocalOperation;
        break;
      case "-":
        MemoryCurrentNumber -= +memoryLocalOperation;
        break;
      case "*":
        MemoryCurrentNumber *= +memoryLocalOperation;
        break;
      case "/":
        MemoryCurrentNumber /= +memoryLocalOperation;
        break;
      default:
        MemoryCurrentNumber = +memoryLocalOperation;
    }
    display.value = MemoryCurrentNumber.toFixed(1);
    MemoryNextOperation = op;
  }
}

function decimalFraction() {
  let memoryLocalDecimal = display.value;

  if (MemoryNewNumber) {
    memoryLocalDecimal = "0.";
    MemoryNewNumber = false;
  } else {
    if (memoryLocalDecimal.indexOf(".") === -1) {
      memoryLocalDecimal += ".";
    }
  }
  display.value = memoryLocalDecimal;
}