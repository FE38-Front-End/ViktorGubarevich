const data = [{
    firstName: 'Ashton',
    lastName: 'Kutcher',
    age: 40
}, {
    firstName: 'Bradley',
    lastName: 'Pitt',
    age: 54
}, {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age: 24
}];

const lastName = prompt('Please, enter your last name.', '');
const noResult = '"No results found for your request"';

let userData = null;

for (let i = 0; i < data.length; i++) {

    if (data[i].lastName.toLowerCase() == lastName.toLowerCase()) {
        userData = (`${'user name: '}${data[i].firstName + '.'}
        ${'user age: '}${data[i].age + '.'}`);
        break;
    }
}

if (userData) {
    alert(userData)
} else {
    alert(noResult)
}