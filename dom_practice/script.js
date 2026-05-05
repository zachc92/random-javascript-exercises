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

