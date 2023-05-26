let btn = document.createElement('button');
btn.textContent = 'Dark';
document.body.appendChild(btn);
btn.style.position = 'absolute';
btn.addEventListener('click', () => {
    if (btn.textContent === 'Dark')
    darken();
    else
    lighten();
})

function changeColor(color) {
    document.body.style.background = color;
}

function darken() {
    btn.textContent = 'Light';
    changeColor('black');
    btn.style.color = 'white'
}

function lighten() {
    btn.textContent = 'Dark';
    changeColor('white');
    btn.style.color = 'black'
}