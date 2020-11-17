//Параметры дома пользователя.

const floor = Number(prompt('Please, enter the number of floors.', ''));
const entrance = Number(prompt('Please, enter the number of entrance.', ''));
const stairCaseFlat = Number(prompt('Please, enter the number of flat per floor.', ''));
const apartment = Number(prompt('Please, enter apartment number.', ''));

// Вычисляем количество квартир в доме пользователя.
const sumFlats = floor * entrance * stairCaseFlat;

// Проверяем верно ли введены данные, заданные по условию задачи.

if (floor > 25) {
    alert('Mistake. Enter the number of floors from 1 to 25.');
} else if (entrance > 10) {
    alert('Mistake. Enter the number of entrance from 1 to 10.');
} else if (stairCaseFlat > 20) {
    alert('Mistake. Enter the number of flat per floor from 1 to 20.');
} else if (apartment > 5000) {
    alert('Mistake. Enter apartment number from 1 to 5000.');
} else {
    alert(`Amount of apartments in your house: ${sumFlats}.`);
}

/* Вычисляем:
1. количество квартир в одном подъезде;
2. в каком подъезде находится введенная квартира;
3. на каком этаже находится введенная квартира.
*/

const sumFlatsEntrance = floor * stairCaseFlat; //1
const numEntrance = Math.ceil(apartment / sumFlatsEntrance); //2
const numFlatsEntrance = Math.ceil((apartment % sumFlatsEntrance) / stairCaseFlat); //3


alert(`Apartment number ${apartment} is located in the ${numEntrance}th entrance on the ${numFlatsEntrance}th floor.`);