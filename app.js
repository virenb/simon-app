// Each button has a sound associated with it
// Randomize button color
// Sound when you press a button
// Step counter
// Restart the game and the counter
// Use a strict button so if you mess up, counter resets
// If user hits 20 steps, do a win notifcation

const green = document.getElementById('green').id;
const red = document.getElementById('red').id;
const blue = document.getElementById('blue').id;
const yellow = document.getElementById('yellow').id;
const buttons = [green, red, blue, yellow];
let color;
let counter = document.getElementById('counter').innerHTML;
let moves = [];
let nextMove;
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
  console.log(counter);
  nextMove = buttons[Math.floor(Math.random() * buttons.length)];
  moves.push(nextMove);
  console.log('This is the starting off ' + moves);
  console.log('Moves: ' + moves + 'Color: ' + color);

};

let playGame = () => {
  if (color === moves[counter]) {
      nextMove = buttons[Math.floor(Math.random() * buttons.length)];
      moves.push(nextMove);
      console.log(moves);
      counter++;
      document.getElementById('counter').innerHTML++;
    document.getElementById('message').innerHTML = "";

    }
  else {
    color = "";
    document.getElementById('message').innerHTML = "Wrong, try again!"
    console.log('wrong');
  }
}

let resetGame = () => {
  moves = [];
  counter = 0;
  document.getElementById('counter').innerHTML = 0;
  document.getElementById('message').innerHTML = '';
  document.getElementById('startButton').style.display = '';
  document.getElementById('resetButton').style.display = 'none';
};