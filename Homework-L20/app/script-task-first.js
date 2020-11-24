//Узнаем у клиента параметры контейнера

const lengthCont = prompt('Введите размер длины контейнера.', '');
const heightCont = prompt('Введите размер высоты контейнера.', '');
const widthCont = prompt('Введите размер ширины контейнера.', '');

//Узнаем у клиента параметры трубы

const diameterPipe = prompt('Введите размер диаметра трубы.', '');

//Рассчитываем площадь одной трубы

let squarePipe = (Math.PI * Math.pow(diameterPipe, 2)) / 4;

//Рассчитываем площадь входного отверстия

let squareCont = heightCont * widthCont;

//Рассчитываем количество труб помещающихся в контейнер

let totalPipe = Math.floor(squareCont / squarePipe);

//Рассчитаем погонный метр

let runningMeter = totalPipe * lengthCont;

alert(`Количество погонного метра труб равняется ${runningMeter}.`);