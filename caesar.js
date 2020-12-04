'use strict'
let btn = document.querySelector('.btn-cypher');
let btnReset = document.querySelector('.btn-reset-all');

const caesar = function (text, nr) {
    (nr % 26 == 0 ? nr = 26 : nr = nr % 26);
    return text
        .split("")
        .map(letter => shiftChar(letter, nr))
        .join("");
};

function shiftChar(letter, nr) {
    let newNr = letter.charCodeAt();
    if (newNr == 33 || newNr == 44 || newNr == 32) {
        return letter;
    }
    if (nr > 0) {
        if (newNr > 96) {
            newNr += nr;
            if (newNr > 122) {
                newNr -= 26
            }
            return letter = String.fromCharCode(newNr);
        } else if (newNr > 64) {
            newNr += nr;
            if (newNr > 90) {
                newNr -= 26;
            }
            return letter = String.fromCharCode(newNr);
        }
    }else{
        if(newNr > 96){
            newNr += nr;
            if(newNr < 97){
                newNr = 122 - (96 - newNr);
            }
            return letter = String.fromCharCode(newNr);
       } else if((newNr > 64)/* && (newNr < 90)*/){
            newNr += nr;
            if(newNr < 65){
                newNr = 90 - (64 - newNr);
            }
            return letter = String.fromCharCode(newNr);
        }
    }
}



btn.addEventListener('click', ()=>{
    let solution = document.querySelector('.solution');
    let text = document.getElementById('inputtext').value;
    let nr = document.getElementById('number').value;
    let cypherText = caesar(text, nr);
    solution.textContent = cypherText;
})
btnReset.addEventListener('click', () =>{
    document.querySelector('.solution').textContent = '###';
    document.getElementById('inputtext').value = '';
    document.getElementById('number').value = '';
})