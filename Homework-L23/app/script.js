//Создадим функцию для выполнения условий

let distance;
let func = function () {
  distance = (square_input - circle_input) / 2;

  if (square_input < circle_input) {
    alert("Шар не может выходить за пределы квадрата!");
    square.style.visibility = "hidden";
    circle.style.visibility = "hidden";
    document.querySelector(".date-square-input").value = "";
    document.querySelector(".date-circle-input").value = "";
  } else {
    square.style.visibility = "visible";
    circle.style.visibility = "visible";
  }

  if (step_circle_input > distance && distance > 0) {
    alert("Шаг слишком велик.");
  }
};

//Создаем квадрат

const square = document.querySelector(".square");
let square_input = document.querySelector(".date-square-input");
const button_square = document.querySelector(".date-button-square");

button_square.addEventListener("click", (event) => {
  square_input = +document.querySelector(".date-square-input").value;

  if (!square_input || null) {
    alert("Введите значение!");
    document.querySelector(".date-square-input").value = "";
  } else {
    square.style.width = square_input + "px";
    square.style.height = square_input + "px";
    func();
  }
});

//Создаем LocalStorage для введенных данных квадрата

const lengthSquare = "lengthSquare";

function getSquare() {
  return localStorage.getItem(lengthSquare) || "";
}

function saveSquare(data) {
  localStorage.setItem(lengthSquare, data);
}

square_input.value = getSquare();

square_input.addEventListener("change", e => {
  saveSquare(e.target.value);
})


//Создаем шар внутри квадрата

const circle = document.querySelector(".circle");
let circle_input = document.querySelector(".date-circle-input");
const button_circle = document.querySelector(".date-button-circle");

button_circle.addEventListener("click", (event) => {
  circle_input = +document.querySelector(".date-circle-input").value;

  if (!circle_input || null) {
    alert("Введите значение!");
    document.querySelector(".date-circle-input").value = "";
  } else {
    circle.style.width = circle_input + "px";
    circle.style.height = circle_input + "px";
    func();
  }
});

//Создаем LocalStorage для введенных данных шара

const lengthCircle = "lengthCircle";

function getCircle() {
  return localStorage.getItem(lengthCircle) || "";
}

function saveCircle(data) {
  localStorage.setItem(lengthCircle, data);
}

circle_input.value = getCircle();

circle_input.addEventListener("change", e => {
  saveCircle(e.target.value);
})

//Создаем шаг шара внутри квадрата

let step_circle_input = document.querySelector(".date-step-input");
const button_step = document.querySelector(".date-button-step");

button_step.addEventListener("click", (event) => {
  step_circle_input = +document.querySelector(".date-step-input").value;

  if (!step_circle_input || null) {
    alert("Введите значение!");
    document.querySelector(".date-step-input").value = "";
  } else {
    func();
  }
});

//Создаем LocalStorage введенных данных для шага шара

const lengthStep = "lengthStep";

function getStep() {
  return localStorage.getItem(lengthStep) || "";
}

function saveStep(data) {
  localStorage.setItem(lengthStep, data);
}

step_circle_input.value = getStep();

step_circle_input.addEventListener("change", e => {
  saveStep(e.target.value);
})

//Создаем навигацию для движения шара

let navigX = 0;
let navigY = 0;

//Создаем навигацию для движения шара влево

const navigation_left = document.querySelector(".navigation-left");

navigation_left.addEventListener("click", (event) => {
  if (navigX > -distance + step_circle_input) {
    navigX -= step_circle_input;
    circle.style.transform = `translate(${navigX}px,${navigY}px)`;
    navigation_right.classList.remove("disabled");
    navigation_right.disabled = false;
  } else {
    navigX = -distance;
    circle.style.transform = `translate(${navigX}px,${navigY}px)`;
    navigation_left.classList.add("disabled");
    navigation_left.disabled = true;
  }
});

//Создаем навигацию для движения шара вправо

const navigation_right = document.querySelector(".navigation-right");

navigation_right.addEventListener("click", (event) => {
  if (distance - step_circle_input >= navigX) {
    navigX += step_circle_input;
    circle.style.transform = `translate(${navigX}px,${navigY}px)`;
    navigation_left.classList.remove("disabled");
    navigation_left.disabled = false;
  } else {
    navigX = distance;
    circle.style.transform = `translate(${navigX}px,${navigY}px)`;
    navigation_right.classList.add("disabled");
    navigation_right.disabled = true;
  }
});

//Создаем навигацию для движения шара вверх

const navigation_up = document.querySelector(".navigation-up");

navigation_up.addEventListener("click", (event) => {
  if (navigY > -distance + step_circle_input) {
    navigY -= step_circle_input;
    circle.style.transform = `translate(${navigX}px,${navigY}px)`;
    navigation_down.classList.remove("disabled");
    navigation_down.disabled = false;
  } else {
    navigY = -distance;
    circle.style.transform = `translate(${navigX}px,${navigY}px)`;
    navigation_up.classList.add("disabled");
    navigation_up.disabled = true;
  }
});

//Создаем навигацию для движения шара вниз

const navigation_down = document.querySelector(".navigation-down");

navigation_down.addEventListener("click", (event) => {
  if (distance - step_circle_input > navigY) {
    navigY += step_circle_input;
    circle.style.transform = `translate(${navigX}px,${navigY}px)`;
    navigation_up.classList.remove("disabled");
    navigation_up.disabled = false;
  } else {
    navigY = distance;
    circle.style.transform = `translate(${navigX}px,${navigY}px)`;
    navigation_down.classList.add("disabled");
    navigation_down.disabled = true;
  }
});