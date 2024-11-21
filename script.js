let element = document.getElementById('sketch-container')
let isPressed = false;
element.addEventListener('mousedown', ()=>{isPressed = true})
element.addEventListener('mouseup', ()=>{isPressed = false})
element.addEventListener('mousemove', (e)=>{isPressed ? e.target.style.backgroundColor ='green': e.target.style.backgroundColor = 'blue'})
for(let i = 0; i < 26896; i++){element.appendChild(document.createElement('div'))}