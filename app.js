const green = document.getElementById('green').id;
const red = document.getElementById('red').id;
const blue = document.getElementById('blue').id;
const yellow = document.getElementById('yellow').id;
const buttons = [green, red, blue, yellow];
let color;
let counter = document.getElementById('counter').innerHTML;
let moves = [];
let nextMove;
let strict = false;
document.getElementById('resetButton').style.display = 'none';

let selectColor = (event) => {
  color = event.target.id;
  playGame();
};

document.getElementById(green).addEventListener('click', selectColor, false);
document.getElementById(red).addEventListener('click', selectColor, false);
document.getElementById(blue).addEventListener('click', selectColor, false);
document.getElementById(yellow).addEventListener('click', selectColor, false);

let startGame = () => {
  document.getElementById('startButton').style.display = 'none';
  document.getElementById('resetButton').style.display = '';
  document.getElementById('strictButton').disabled = true;
  nextMove = buttons[Math.floor(Math.random() * buttons.length)];
  moves.push(nextMove);
};

let playGame = () => {
  if (color === moves[counter]) {
      nextMove = buttons[Math.floor(Math.random() * buttons.length)];
      moves.push(nextMove);
      counter++;
      document.getElementById('counter').innerHTML++;
      document.getElementById('message').innerHTML = '';
  } else if (strict) {
      counter = 0;
      document.getElementById('counter').innerHTML = 0;
      document.getElementById('message').innerHTML = 'You lost. Please re-start.';
  } else {
      color = '';
      document.getElementById('message').innerHTML = 'Wrong, try again!';
  }
}

let resetGame = () => {
  moves = [];
  counter = 0;
  document.getElementById('counter').innerHTML = 0;
  document.getElementById('message').innerHTML = '';
  document.getElementById('startButton').style.display = '';
  document.getElementById('resetButton').style.display = 'none';
  document.getElementById('strictButton').disabled = false;
};

let startStrict = () => {
  strict = true;
  document.getElementById('startButton').style.display = 'none';
  document.getElementById('resetButton').style.display = '';
  document.getElementById('strictButton').disabled = true;
  nextMove = buttons[Math.floor(Math.random() * buttons.length)];
  moves.push(nextMove);
};
