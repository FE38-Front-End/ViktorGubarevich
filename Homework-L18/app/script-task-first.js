function sequence(start = 0, step = 1) {
    let callStart = start;

    return function () {
        let returnNumber = callStart;
        callStart += step;
        return returnNumber;
    };
}

let generator = sequence(10, 3);

alert(generator()); //10
alert(generator()); //13
alert(generator()); //16