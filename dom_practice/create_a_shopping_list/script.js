const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', buttonClicked);

function buttonClicked(e){
    e.preventDefault();
    let inputValue = input.value;
    input.value = '';
    let listItem = document.createElement('li');
    let span = document.createElement('span');
    let newButton = document.createElement('button');
    listItem.appendChild(span);
    listItem.appendChild(newButton);
    span.textContent = inputValue;
    newButton.textContent = 'Delete';
    list.appendChild(listItem);
    newButton.addEventListener('click', () => listItem.remove());
}

input.focus();