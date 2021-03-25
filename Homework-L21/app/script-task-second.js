const n = prompt('Please, enter the your number.', '');

for (i = 1; i <= n; i++) {

    const ul = document.querySelector('ul');
    const li = document.createElement('li');

    li.innerHTML = i;
    ul.appendChild(li);

}

//Второй способ, как в 24 видео.

const fragment = document.createDocumentFragment();

const numbers = [];

for (i = 1; i <= n; i++) {
    numbers.push(i);
}

numbers.forEach(number => {
    const item = document.createElement('li');
    item.textContent = number;
    fragment.appendChild(item);
});

document.body.appendChild(fragment);