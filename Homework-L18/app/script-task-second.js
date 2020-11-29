function sum(a) {
    let theSum = a;

    function func(b) {
        theSum += b;
        return func;
    }

    func.toString = function () {
        return theSum;
    }

    return func;
}

const x = sum(2)(5)(10);

alert(x); //выводит 17