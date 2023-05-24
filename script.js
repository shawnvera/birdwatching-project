let btn = document.createElement('button');
btn.textContent = 'Darken';
document.body.appendChild(btn);
btn.addEventListener('click', () => {
    if (btn.textContent === 'Darken')
    btn.textContent = "Lighter"
    else
    btn.textContent = "Darken"
})