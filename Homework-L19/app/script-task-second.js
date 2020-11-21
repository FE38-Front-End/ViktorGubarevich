let array = [];

while (array.length < 7) {

    let numbers = Math.floor(Math.random() * 10);
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

let arrayNumbers = array.sort();

console.log(arrayNumbers);