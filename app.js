const green = document.getElementById('green').id;
const red = document.getElementById('red').id;
const blue = document.getElementById('blue').id;
const yellow = document.getElementById('yellow').id;
const buttons = [green, red, blue, yellow];
let color;
let nextMove;
let sound;
let step;
let winner = false;
let moves = [];
let playerMoves = [];
let strict = false;
let counter = document.getElementById('counter').innerHTML;
document.getElementById('resetButton').style.display = 'none';


let playGame = () => {
  checkWin();
  if (winner === true) {return;}
  if (winner === false) {
  nextMove = buttons[Math.floor(Math.random() * buttons.length)];
  moves.push(nextMove);
  setTimeout(function () {
    changeOpacity(moves);
  }, 800);
  setTimeout(function () {
    changeOpacityBack(moves);
  }, 1000);
  }
};

let resetGame = () => {
  step = 0;
  moves = [];
  counter = 0;
  strict = false;
  document.getElementById('counter').innerHTML = 0;
  document.getElementById('message').innerHTML = '';
  document.getElementById('startButton').style.display = '';
  document.getElementById('resetButton').style.display = 'none';
  document.getElementById('strictButton').disabled = false;
};

let startGame = () => {
  document.getElementById('green').style.pointerEvents = 'auto';
  document.getElementById('red').style.pointerEvents = 'auto';
  document.getElementById('blue').style.pointerEvents = 'auto';
  document.getElementById('yellow').style.pointerEvents = 'auto';
  document.getElementById('startButton').style.display = 'none';
  document.getElementById('resetButton').style.display = '';
  document.getElementById('strictButton').disabled = true;
  document.getElementById('counter').innerHTML++;
  strict = false;
  winner = false;
  step = 0;
  counter++;
  playGame();
};

let startStrict = () => {
  document.getElementById('green').style.pointerEvents = 'auto';
  document.getElementById('red').style.pointerEvents = 'auto';
  document.getElementById('blue').style.pointerEvents = 'auto';
  document.getElementById('yellow').style.pointerEvents = 'auto';
  document.getElementById('counter').innerHTML++;
  document.getElementById('resetButton').style.display = '';
  document.getElementById('startButton').style.display = 'none';
  document.getElementById('strictButton').disabled = true;
  winner = false;
  strict = true;
  step = 0;
  counter++;
  playGame();
};

let selectColor = (event) => {
  color = event.target.id;
  sound = document.getElementById(color + 'Audio');
  sound.play();
    if (color === moves[step]) {
      if (step === moves.length - 1) {
        step = 0;
        counter++;
        document.getElementById('counter').innerHTML++;
        document.getElementById('message').innerHTML = '';
        checkWin();
        playGame();
      }
        else {
          step++;
        }
  } else {
    if (strict === true) {
      document.getElementById('counter').innerHTML = 0;
      document.getElementById('message').innerHTML = 'You lost. Please re-start.';
      resetGame();
    } else {
      document.getElementById('message').innerHTML = 'Wrong, try again!';
      setTimeout(function () {
        changeOpacity(moves);
      }, 800);
      setTimeout(function () {
        changeOpacityBack(moves);
        document.getElementById('message').innerHTML = '';
      }, 1000);
      step = 0;
    }
  }
};

let checkWin = () => {
  if (counter === 20) {
    document.getElementById('strictButton').disabled = true;
    document.getElementById('message').innerHTML = 'You win!';
    document.getElementById('green').style.pointerEvents = 'none';
    document.getElementById('red').style.pointerEvents = 'none';
    document.getElementById('blue').style.pointerEvents = 'none';
    document.getElementById('yellow').style.pointerEvents = 'none';
    document.getElementById('resetButton').style.display = '';
    document.getElementById('startButton').style.display = 'none';
    winner = true;
    step = 0;
    counter = 0;
  }
};

let changeOpacity = (moves) => {
  let i = 0;
  let interval = setInterval(function () {
    document.getElementById(moves[i]).style.opacity = '.3';
    document.getElementById(moves[i] + 'Audio').play();
    i++;
    if (i >= moves.length) {
      clearInterval(interval);
    }
  }, 800);
};

let changeOpacityBack = (moves) => {
  let i = 0;
  let interval = setInterval(function () {
    document.getElementById(moves[i]).style.opacity = '1';
    i++;
    if (i >= moves.length) {
      clearInterval(interval);
    }
  }, 800);
};

document.getElementById(green).addEventListener('click', selectColor, false);
document.getElementById(red).addEventListener('click', selectColor, false);
document.getElementById(blue).addEventListener('click', selectColor, false);
document.getElementById(yellow).addEventListener('click', selectColor, false);

