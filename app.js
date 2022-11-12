const generateBtn = document.querySelector('button');
const color = document.querySelector('.color-hex');
const hexValues = [0, 'a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5, 'f', 6, 7, 8, 9];

let randomNumber;
generateBtn.addEventListener('click', () => {
  generateHex();
});

function generateHex() {
  let hexNumber = '#';
  for (let i = 0; i < 6; i++) {
    hexNumber += hexValues[generateRandomNumber()];
  }
  console.log(hexNumber);
  color.textContent = hexNumber;
  document.body.style.backgroundColor = hexNumber;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * hexValues.length);
}
