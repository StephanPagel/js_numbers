const button = document.querySelector('button');
const div = document.querySelector('.umwickeln');
let counter = 0;

button.addEventListener('click', createDiv = () => {
    const newDiv = document.createElement('div');
    counter % 10 === 0 ? newDiv.classList.add('weiss', 'rechteck') : newDiv.classList.add('rechteck');
    const textNode = document.createTextNode(counter);
    newDiv.appendChild(textNode);
    div.appendChild(newDiv);
    counter++;
})
