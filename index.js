document.querySelector('main#main').remove();

const newHeader = document.createElement("h1");

document.body.append(newHeader);

newHeader.id = "victory";

newHeader.textContent = "Sam is the champion";