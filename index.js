let currentInput = document.getElementById('current-input');

let buttons = Array.from(document.getElementsByClassName('button'));

console.log(buttons);

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C':
                currentInput.innerText = '0';
                break;
            case '←':
                currentInput.innerText = currentInput.innerText.slice(0, -1);
                if (currentInput.innerText == '') {
                    currentInput.innerText = '0';
                }
                break;
            case '=':
                currentInput.innerText = Function("return " + currentInput.innerText)();
                console.log(currentInput.innerText);
                break;
            case '.':
                if (!currentInput.innerText.includes('.')) {
                    currentInput.innerText += e.target.innerText;
                } else {
                    break;
                }
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                if (!currentInput.innerText.includes('+')
                    && !currentInput.innerText.includes('-')
                    && !currentInput.innerText.includes('*')
                    && !currentInput.innerText.includes('/')) {
                    currentInput.innerText += e.target.innerText;
                } else {
                    break;
                }
                break;
            default:
                if (currentInput.innerText == '0') {
                    currentInput.innerText = e.target.innerText;
                } else {
                    currentInput.innerText += e.target.innerText;
                }
        }
    })
});