'use strict'

const checkBtn = document.querySelector('.checkBtn');
const againBtn = document.querySelector('.againBtn');


const answerText = document.querySelector('.answer');
    
    //lucky number 
    let luckyNumber = Math.floor(Math.random() * (20 - 1) + 1);

    let score = 20;
    let highScore = 0;
  
//check button
checkBtn.addEventListener('click',() =>{
    const inputValue = document.querySelector('.inputValue').value;
    const validationText =  document.querySelector('.validationText');
    const guessingContent = document.querySelector('.guessingContent');

    const scoreText = document.querySelector('.score');
    const highScoreText = document.querySelector('.highScore');

   
    if(inputValue == luckyNumber){
        guessingContent.textContent = `Wow Congratulation!!`;
        document.body.style.background = "green";
        document.body.style.color = "white";
        answerText.textContent = luckyNumber;
        if(score > highScore){
            highScore = score;
            highScoreText.textContent = highScore;
        }
        
    }else if(inputValue === ''){
        validationText.style.display = 'block';

    }else if(inputValue !== luckyNumber){
        if(score > 0){
            guessingContent.textContent = inputValue > luckyNumber ? 'too high number' :  'too low number' ;
            validationText.style.display = 'none';
            score--;
            scoreText.textContent = score;
        }else{
            guessingContent.textContent = 'You lose the game';
            validationText.style.display = 'none';
            scoreText.textContent = 0;
        }
        
    }
})

//again button
againBtn.addEventListener('click',()=>{
    score = 20;
    highScore = 0;
    document.querySelector('.highScore').textContent = highScore;
    document.querySelector('.score').textContent = score;
    document.body.style.background = "black";
    document.body.style.color = "grey";
    answerText.textContent = '?';
    document.querySelector('.inputValue').value = '';
    document.querySelector('.guessingContent').textContent = 'Start guessing.....';
    luckyNumber = Math.floor(Math.random() * (20 - 1) + 1);
    
})