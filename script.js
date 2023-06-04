'use strict';

const difference = (guess, secretNumber) => {
  if (guess > secretNumber) return guess - secretNumber;
  else return secretNumber - guess;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //No input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
  // out of range input
  else if (guess > 20 || guess < 1)
    document.querySelector('.message').textContent =
      '⚠ Out of range (give input again)';
  // input given but score is more than 1
  else if (guess && score > 1) {
    //different situations in the game
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Answer';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent =
        difference(guess, secretNumber) > 3 ? '📈 Too High' : '📈 High';
      score--;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent =
        difference(guess, secretNumber) > 3 ? '📉 Too Low' : '📉 Low';
      score--;
    }
  }
  //Losing situation in the game
  else {
    document.querySelector('.message').textContent = '💥 You lost the Game';
    score = 0;
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Star guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = highScore;
});
