let previousInput = document.getElementById('previous-input');
let currentInput = document.getElementById('current-input');

let buttons = Array.from(document.getElementsByClassName('button'));

console.log(buttons);

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            default:
                currentInput.innerText += e.target.innerText;
        }
    })
});