const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const text = document.createElement("p");
text.style.color = 'red';
text.textContent = "Hey I'm red!"

const h3 = document.createElement("h3");
h3.style.color = 'blue';
h3.textContent = "Hey I'm blue!";

const innerContainer = document.createElement("div");
innerContainer.style.border = '5px black solid';
innerContainer.style.backgroundColor = 'pink';

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!"

const innerContainerText = document.createElement("p");
innerContainerText.textContent = "ME TOO!";

container.appendChild(content);
container.appendChild(text);
container.appendChild(h3);

container.appendChild(innerContainer);

innerContainer.appendChild(h1);
innerContainer.appendChild(innerContainerText);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('contextmenu', (e) => {e.preventDefault()});
    button.addEventListener("mousedown", (e) =>{
        console.log(e.button);
        e.stopPropagation();
    })
})

// document.body.addEventListener('mousedown', () => console.log('the body was clicked'));

let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    let target = event.target;
    console.log(event.target);
    console.log(target.id);

    switch(target.id) {
        case 'home':
            console.log('Home menu item was clicked');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            break;
        case 'report':
            console.log('Report menu item was clicked');
            break;
    }
});

let btn3 = document.querySelector('.btn3');

 btn3.addEventListener('click', function () {
        alert('Mouse Clicked');
 });

let clickEvent = new Event('click');
btn.dispatchEvent(clickEvent);

menu.addEventListener('highlight')

let event = new CustomEvent('highlight', {
    detail: { backgroundColor: yellow }
});
btn3.dispatchEvent('highlight');