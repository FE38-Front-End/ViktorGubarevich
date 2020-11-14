// Task C

const years = prompt('How old are you?', '');

if (years == '' || years == null) {
    alert('Error. Enter how old are you.');
    console.log('Error. Enter how old are you.');
} else {
    alert('Congratulation to you full ' + years + ' years!');
    console.log('Congratulation to you full ' + years + ' years!');

    if (years >= 18) {
        alert('You are an adult!');
        console.log('You are an adult!');
    } else {
        alert('You are underage!');
        console.log('You are underage!');
    };
}