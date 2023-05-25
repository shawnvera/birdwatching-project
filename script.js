let btn = document.createElement('button');
btn.textContent = 'Darken';
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
    btn.textContent = 'Lighter';
    changeColor('grey');
}

function lighten() {
    btn.textContent = 'Darken';
    changeColor('white');
}