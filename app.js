const green = document.getElementById('green').id;
const red = document.getElementById('red').id;
const blue = document.getElementById('blue').id;
const yellow = document.getElementById('yellow').id;
const buttons = [green, red, blue, yellow];
let color;
let nextMove;
let sound;
let moves = [];
let step;
let playerMoves = [];
let strict = false;
let counter = document.getElementById('counter').innerHTML;
document.getElementById('resetButton').style.display = 'none';


let playGame = () => {
  nextMove = buttons[Math.floor(Math.random() * buttons.length)];
  moves.push(nextMove);
  console.log(moves);
  setTimeout(function () {
    changeOpacity(moves);
  }, 800);
  setTimeout(function () {
    changeOpacityBack(moves);
  }, 1000);
};

let resetGame = () => {
  step = 0;
  moves = [];
  counter = 0;
  strice = false;
  document.getElementById('counter').innerHTML = 0;
  document.getElementById('message').innerHTML = '';
  document.getElementById('startButton').style.display = '';
  document.getElementById('resetButton').style.display = 'none';
  document.getElementById('strictButton').disabled = false;
};


let startGame = () => {
  strict = false;
  document.getElementById('startButton').style.display = 'none';
  document.getElementById('resetButton').style.display = '';
  document.getElementById('strictButton').disabled = true;
  document.getElementById('counter').innerHTML++;
  step = 0;
  counter++;
  playGame();
};

let startStrict = () => {
  strict = true;
  document.getElementById('counter').innerHTML++;
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
        playGame();}
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
      }, 1000);
    }
  }
};

let checkWin = () => {
  if (counter === 20 && step === moves.length - 1) {
    counter = 0;
    step = 0;
    document.getElementById('message').innerHTML = 'You win!';
  }
};

document.getElementById(green).addEventListener('click', selectColor, false);
document.getElementById(red).addEventListener('click', selectColor, false);
document.getElementById(blue).addEventListener('click', selectColor, false);
document.getElementById(yellow).addEventListener('click', selectColor, false);

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
