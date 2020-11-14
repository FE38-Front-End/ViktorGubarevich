// Task B

let firstName = 'Viktor';
let age = 29;
let family = ['mother', 'father', 'sister', 'brother'];
let date = {
    lastName: 'Gubarevich',
    mother: 'Luyba',
    father: 'Gena',
    sister: 'Polina',
    brother: 'Denis'
};
let girlFriend = true;

alert(firstName);
console.log(firstName);
alert(age);
console.log(age);
alert(family);
console.log(family);
alert(date);
console.log(date);
alert(girlFriend);
console.log(girlFriend);

let showMessage = function showMessage(girlFriendFirstName, girlFriendLastName) {
    alert('Hi. I am Viktor!');
    console.log(`Welcome, ${girlFriendFirstName} ${girlFriendLastName}`);
}
showMessage('Masha', 'Kibalko!');