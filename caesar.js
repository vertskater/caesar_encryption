'use strict'
const btn = document.querySelector('.btn-cypher')
const btnReset = document.querySelector('.btn-reset-all')

const caesar = function (text, nr) {
  nr % 26 === 0 ? (nr = 26) : (nr = nr % 26)
  return text
    .split('')
    .map((letter) => shiftChar(letter, nr))
    .join('')
}
function shiftChar (letter, nr) {
  const charCode = letter.charCodeAt()
  if (charCode === 33 || charCode === 44 || charCode === 32) {
    return letter
  }
  let newNr = charCode + nr
  if (charCode >= 65 && charCode <= 90) {
    if (newNr > 90) {
      newNr = newNr - 90 + 64
    }
    if (newNr < 65) {
      newNr += 26
    }
  }
  if (charCode >= 97 && charCode <= 122) {
    if (newNr > 122) {
      newNr = newNr - 122 + 96
    }
    if (newNr < 97) {
      newNr += 26
    }
  }
  return (letter = String.fromCharCode(newNr))
}
btn.addEventListener('click', () => {
  const solution = document.querySelector('.solution')
  const text = document.querySelector('#inputtext').value
  const nr = document.querySelector('#number').value
  const cypherText = caesar(text, nr)
  solution.textContent = cypherText
})
btnReset.addEventListener('click', () => {
  document.querySelector('.solution').textContent = '###'
  document.querySelector('#inputtext').value = ''
  document.querySelector('#number').value = ''
})
