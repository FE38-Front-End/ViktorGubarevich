//Узнаем у клиента параметры контейнера

const lengthCont = prompt('Введите размер длины контейнера.', '');
const heightCont = prompt('Введите размер высоты контейнера.', '');
const widthCont = prompt('Введите размер ширины контейнера.', '');

//Узнаем у клиента параметры трубы

const diameterPipe = prompt('Введите размер диаметра трубы.', '');

//Считаем сколько труб входит в ширину

let totalWidth = widthCont / diameterPipe;

//Считаем сколько труб входит в высоту

let totalHeight = heightCont / diameterPipe;

//Считаем сколько труб помещается в контейнер

let totalPipe = totalWidth * totalHeight * diameterPipe

alert(`Количество погонного метра труб равняется ${totalPipe}.`);