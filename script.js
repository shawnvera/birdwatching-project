let btn = document.createElement('button');
btn.textContent = 'Dark';
document.body.appendChild(btn);
btn.addEventListener('click', () => {
    if (btn.textContent === 'Darken')
    darken();
    else
    lighten();
})

function changeColor(color) {
    document.body.style.background = color;
}

function darken() {
    btn.textContent = 'Light';
    changeColor('grey');
}

function lighten() {
    btn.textContent = 'Dark';
    changeColor('white');
}