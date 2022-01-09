'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When input is empty
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a secretNumber!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    score = calculateScore(score, true);

    //When guess is higher then answer
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To High!';
      score = calculateScore(score, false, 'To High!');
    } else {
      gameOver();
    }
    //When guess is lower then answer
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To Low!';
      score = calculateScore(score, false, 'To Low!');
    } else {
      gameOver();
    }
  }
});

function calculateScore(score, answer) {
  const result = answer ? score + 1 : score - 1;
  return (document.querySelector('.score').textContent = result);
}

function gameOver() {
  const message = (document.querySelector('.message').textContent =
    'Game Over!');
  const score = (document.querySelector('.score').textContent = 0);
  return message, score;
}

console.log(secretNumber);
