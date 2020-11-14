//Параметры дома пользователя.

const floor = prompt('Please, enter the number of floors.', '');
const entrance = prompt('Please, enter the number of entrance.', '');
const stairCase = prompt('Please, enter the number of flat per floor.', '');
const apartment = prompt('Please, enter apartment number.', '');

/*
Вычисляем: 
1. количество квартир в доме пользователя; 
2. количество квартир в одном подъезде;
3. в каком подъезде находится введенная квартира.
*/

const sumFlats = floor * entrance * stairCase; //1.
alert(`Amount of apartments in your house: ${sumFlats}.`);

const sumFlatsEntrance = floor * stairCase; //2.
const numEntrance = Math.ceil(apartment / sumFlatsEntrance); //3.


// console.log(`Apartment number ${153} is located in the ${4}th entrance on the ${9}th floor.`);