let number = Math.trunc(Math.random()*50+1);
let score = 50;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // İf the guess is empty
    if(!guess) {
        document.querySelector('.message').textContent = "Your Guess is emty!";
    }else if(guess === number){
        document.querySelector('.message').textContent = "Correct Answer";
        document.querySelector('.title').textContent = "Correct Answer!";
        document.querySelector('.titlebetween').textContent = "🥳️🥳️🥳️🥳️🥳️";
        document.querySelector('.row').style.backgroundColor = "green";
        document.querySelector('.number').textContent = number;
    // if score bigger then highscore    
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if(guess > number){
        // if the scrore bigger then 0
        if(score > 0){
            document.querySelector('.message').textContent = "Too High";
            score--;
            document.querySelector('.score').textContent = score;
        }else{ 
            // if the score is 0 message to "you are lost"
            document.querySelector('.message').textContent = "You Are Lost!";
            document.querySelector('body').style.backgroundColor = "red";
        }
    }else if(guess < number){
        document.querySelector('.message').textContent = "Too Low";
        score--;
        document.querySelector('.score').textContent = score;
    }
});
// Try again button 
document.querySelector('.again').addEventListener('click', function(){
    score = 50;
    number = Math.trunc(Math.random()*50+1);
    document.querySelector('.message').textContent = "Start Guesing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.row').style.backgroundColor = "#e74c3c";
    
});