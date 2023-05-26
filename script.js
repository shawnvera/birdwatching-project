let btn = document.createElement('button');
btn.textContent = 'Dark';
document.body.appendChild(btn);
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
    changeColor('grey');
}

function lighten() {
    btn.textContent = 'Dark';
    changeColor('white');
}

let vid = createElement('video');
vid.src ='https://player.vimeo.com/external/377005507.sd.mp4?s=c9f1b7be7875c42bd81d65898d425b75703183ce&profile_id=165&oauth2_token_id=57447761';
document.body.appendChild(vid);