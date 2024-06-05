
const playerMove = process.argv[2];
const moves = ['rock', 'paper', 'scissors'];
const computerMove = moves[Math.floor(Math.random() * moves.length)];

let result;
if (playerMove === computerMove) {
result = 'Again!';
} else if (
(playerMove === 'rock' && computerMove === 'scissors') ||
(playerMove === 'paper' && computerMove === 'rock') ||
(playerMove === 'scissors' && computerMove === 'paper')
) {
result = 'Winner!';
} else {
result = 'JS wins!';
}

console.log(`You chose ${playerMove}. Computer chose ${computerMove}. ${result}`);