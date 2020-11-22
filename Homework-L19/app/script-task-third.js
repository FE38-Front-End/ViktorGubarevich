let array = [];

while (array.length < 10) {

    let numbers = Math.floor(Math.random() * 100);
    let x = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === numbers) {
            x = true;
            break;
        }
    }

    if (!x) {
        array[array.length] = numbers;
    }
}

console.log(array);

let str = array.join(' ');
let result = "";

for (let i = 0; i < str.length; i++) {
    let resultArray = str[i];

    if (resultArray === '0') {
        result += 'zero';
    } else {
        result += resultArray;
    }
}

let resultArray = result.split(' ');

console.log(resultArray);