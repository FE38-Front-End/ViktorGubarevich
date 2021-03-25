let array = [];

while (array.length < 7) {

    let number = Math.floor(Math.random() * 10);
    let x = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            x = true;
            break;
        }
    }

    if (!x) {
        array[array.length] = number;
    }
}

console.log(array);

let arrayNumbers = array.sort();

console.log(arrayNumbers);