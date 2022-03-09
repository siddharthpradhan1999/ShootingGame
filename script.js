'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnHold1 = document.querySelector('.btn--hold1')
const btnNew = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');
var disp0 = document.querySelector('#display0'); 
var disp1 = document.querySelector('#display1')
var windisp0 = document.querySelector('#player0wins');
var windisp1 = document.querySelector('#player1wins');

// starting conditions

let scores, playing, currentScore, activePlayer, player0count, player1count;

const init = function () {
  player0count = 0;
  player1count = 0;
  playing = true;
  currentScore = 0;
  activePlayer = 0;
 
  disp0.textContent = 0;
  disp1.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 100;
  current1El.textContent = 100;
  windisp0.textContent = 0;
  windisp1.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const initBulletsAndLife = function () {
  console.log("inside init bullets and life");
  player0count = 0;
  player1count = 0;
  disp0.textContent = 0;
  disp1.textContent = 0;
  current0El.textContent = 100;
  current1El.textContent = 100;
}

let winCount0 = 0;
let winCount1 = 0;

const player0dead = function () {
  winCount1++;
  windisp1.innerHTML = winCount1;
  if (winCount1 >= 3){
    alert("Player2 Wins the Tournament!", init());
  }
  else{
    finals();
  }
  initBulletsAndLife();
}

const player1dead = function () {
  winCount0++;
  windisp0.innerHTML = winCount0;
  if (winCount0 >= 3){
    alert("Player1 Wins the Tournament!", init());
  }
  else {
    finals();
  }
  initBulletsAndLife();
}

const fireplayer0 = function () {
  current1El.textContent -= 20;
  // console.log(current1El.textContent);
  let x = current0El.textContent;
  let y = current1El.textContent;
  if (x <= 0){
    alert("Player1 is dead!", player0dead());
  }
  if (y <= 0){
    alert("Player2 is dead!", player1dead());
  }
};
const fireplayer1 = function () {
  current0El.textContent -= 20;
  // console.log("fired");
  let x = current0El.textContent;
  let y = current1El.textContent;
  if (x <= 0){
    alert("Player1 is dead!", player0dead());
  }
  if (y <= 0){
    alert("Player2 is dead!", player1dead());
  }
};

const finals = function() {
  console.log("finals called")
  if (winCount0 + winCount1 == 5){
    if(winCount0 > winCount1){
      alert("player1 wins the tournament and game ends here!")
    }
    else{
      alert("Player 2 wins the tournament and game ends here!")
    }
  }
}


btnHold.addEventListener('click', fireplayer0);
btnHold.onclick = function () { 
  player0count++; 
  disp0.innerHTML = player0count;
  if (player0count >= 6){
    alert("Player1 is Out of Bullets", init());
  }
} 
btnHold1.addEventListener('click', fireplayer1);
btnHold1.onclick = function () {
  player1count++;
  disp1.innerHTML = player1count;
  if (player1count >= 6){
    alert("Player2 is Out of Bullets", init());
  }
}
btnNew.addEventListener('click', init);
