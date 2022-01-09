'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  //When input is empty
  if (!guess) {
    displayMessage('Not a secretNumber!');
  }

  // When input is higher then 0
  else if (guess > 0) {
    // Check avaiable score
    if (score > 1) {
      // Guess is correct number
      if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        score = calculateScore(score, true);

        highScore = score > highScore ? (highScore = score) : highScore;
        document.querySelector('.highscore').textContent = highScore;
      } else {
        // Guess is higher then secret number
        if (guess > secretNumber) {
          displayMessage('To High!');
          score = calculateScore(score, false);
        }
        //Guess is lower then secret number
        else {
          displayMessage('To Low!');
          score = calculateScore(score, false);
        }
      }
    } else {
      // Game over when score is equal to 0
      displayMessage = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again function
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});

// Function calculate score
function calculateScore(score, correct) {
  //Check guess is corret or not
  const result = correct ? score : score - 1;
  return (document.querySelector('.score').textContent = result);
}
