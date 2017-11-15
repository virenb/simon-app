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
let sound;
document.getElementById('resetButton').style.display = 'none';

let selectColor = (event) => {
  color = event.target.id;
  sound = document.getElementById(color + 'Audio');
  sound.play();
  playGame();
  console.log('Selected color: ' + color);
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
  setTimeout(() => {
    document.getElementById(nextMove).style.backgroundColor = "black";
    setTimeout(() => {
      document.getElementById(nextMove).style.backgroundColor = nextMove;
    }, 1200);
  }, 1200);
  sound = document.getElementById(nextMove + 'Audio');
  sound.play();
  console.log(moves);
};

let playGame = () => {
  if (color === moves[counter]) {
      nextMove = buttons[Math.floor(Math.random() * buttons.length)];
      moves.push(nextMove);
      setTimeout(function() {
        sound = document.getElementById(nextMove + 'Audio');
        sound.play();
        document.getElementById(nextMove).style.backgroundColor = "pink";
        setTimeout(() => {
          document.getElementById(nextMove).style.backgroundColor = nextMove;
        }, 1200);
      }, 1500);
      counter++;
      document.getElementById('counter').innerHTML++;
      document.getElementById('message').innerHTML = '';
      console.log('Updated moves: ' + moves);
  } else if (strict) {
      counter = 0;
      document.getElementById('counter').innerHTML = 0;
      document.getElementById('message').innerHTML = 'You lost. Please re-start.';
  } else {
      color = '';
      document.getElementById('message').innerHTML = 'Wrong, try again!';
    setTimeout(function () {
      sound.play();
    }, 1500);
  }
};

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
  sound = document.getElementById(nextMove + 'Audio');
  setTimeout(() => {
    document.getElementById(nextMove).style.backgroundColor = "black";
    sound.play();
    setTimeout(() => {
      document.getElementById(nextMove).style.backgroundColor = nextMove;
    }, 1200);
  }, 1200);


  console.log(moves);
};
