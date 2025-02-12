const hello = document.querySelector("#hello");
const red = document.createElement("p");
red.classList.add("container");
red.textContent = "Hey I'm red!"
red.style.cssText = "color: red";

hello.appendChild(red);


const blue = document.createElement("h3");
blue.classList.add("container");
blue.textContent = "I'm a blue H3";
blue.style.cssText = "color: blue";
red.appendChild(blue);

const border = document.createElement("div");
border.classList.add("border-container");
border.style.cssText = "border: 1px solid black; background: pink";

const mini = document.createElement("div");
mini.textContent = "I'm in a div";
const me = document.createElement("p");
me.textContent = "ME TOO!";

border.appendChild(mini);
border.appendChild(me);

blue.appendChild(border);
