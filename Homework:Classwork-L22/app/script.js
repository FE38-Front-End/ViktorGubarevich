const addList = document.getElementById('addList');
const addElementList = document.getElementById('addElementList');
const removeLastElement = document.getElementById('removeLastElement');

let ul;
let li;

addList.addEventListener('click', (event) => {

    if (ul) {
        alert('Список уже создан.')
    } else {
        ul = document.createElement('ul');
        document.body.appendChild(ul);
        ul.textContent = 'Список элементов:'
    }
});

addElementList.addEventListener('click', (event) => {

    if (!ul) {
        alert('Список не создан. Создать элемент нельзя.')
    } else {
        const link = document.querySelector('ul');
        li = document.createElement('li');
        document.body.appendChild(li);
        li.innerHTML = new Date().toLocaleString();
    }
});

removeLastElement.addEventListener('click', (event) => {

    const remove = document.getElementsByTagName('li');

    if (remove.length === 0) {
        alert('Удалить элемент невозможно т.к. его не существует.');
    } else {
        remove[remove.length - 1].remove();
    }
});