// Randomize button color
// Each button has a sound associated with it
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
let counter = 0;
let moves = [];
let nextMove;

let selectColor = (event) => {
  color = event.target.id;
  console.log(color);
};

document.getElementById(green).addEventListener('click', selectColor, false);
document.getElementById(red).addEventListener('click', selectColor, false);
document.getElementById(blue).addEventListener('click', selectColor, false);
document.getElementById(yellow).addEventListener('click', selectColor, false);

let startGame = () => {
nextMove = buttons[Math.floor(Math.random() * buttons.length)];
moves.push(nextMove);
console.log(moves);
};
