const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0; 
diceEl.classList.add('hidden');

// Dice Rolling 
btnRoll.addEventListener('click', function(){
    // Generating a Random dice
    const dice = Math.trunc(Math.random() * 6) + 1; 
    //Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if(dice !== 1){
        //Add to dice current score
        currentScore += dice;
        current0El.textContent = currentScore;

    } else{
        //switch the next player 
    }
});