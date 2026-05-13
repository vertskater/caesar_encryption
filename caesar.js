const btnCypher = document.querySelector('.btn-cypher');
const btnReset = document.querySelector('.btn-reset-all');
const inputText = document.getElementById('inputtext');
const inputNumber = document.getElementById('number');
const solution = document.querySelector('.solution');

function caesarEncrypt(text, shift) {
    shift = ((shift % 26) + 26) % 26;
    return text.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
        }
        if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
        }
        return char;
    }).join('');
}

btnCypher.addEventListener('click', () => {
    const text = inputText.value;
    const shift = parseInt(inputNumber.value) || 0;
    if (!text) return;
    solution.textContent = caesarEncrypt(text, shift);
});

btnReset.addEventListener('click', () => {
    inputText.value = '';
    inputNumber.value = '';
    solution.textContent = '###';
});
