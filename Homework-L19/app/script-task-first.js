const palindrom = prompt('Please, enter the your word.', '');

function reverseStr(str) {
    return str.split("").reverse().join("");
}

if (palindrom.toLowerCase() === reverseStr(palindrom).toLowerCase()) {
    alert('The entered word is a palindrome.');
} else {
    alert('The entered word is are not palindrome.');
}