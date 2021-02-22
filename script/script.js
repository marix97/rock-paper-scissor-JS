$(function(){
  var playerChoice;
  var computerChoice = ['paper', 'scissor', 'rock'];

 $('.paper-button').click(function(){
   playerChoice = 'paper';
   generateWinner();
 })

 $('.scissor-button').click(function(){
   playerChoice = 'scissor';
   generateWinner();
 })

 $('.rock-button').click(function(){
   playerChoice = 'rock';
   generateWinner();
 })

 function generateWinner() {
   let computerGeneratedChoice = randomComputerChoice(computerChoice);
   changePictureOfChosenElementForPlayer(playerChoice);
   changePictureOfChosenElementForComputer(computerGeneratedChoice);

   if(playerChoice === 'paper'){
     if(computerGeneratedChoice === 'paper'){
       $('.winner').text('It is a tie.');
     }
     else if(computerGeneratedChoice === 'rock'){
       $('.winner').text('You win.');
     }
     else{
       $('.winner').text('Computer wins.');
     }
   }

   else if(playerChoice === 'scissor'){
     if(computerGeneratedChoice === 'scissor'){
       $('.winner').text('It is a tie.');
     }
     else if(computerGeneratedChoice === 'paper'){
       $('.winner').text('You win.');
     }
     else{
       $('.winner').text('Computer wins.');
     }
   }

   else{
     if(computerGeneratedChoice === 'rock'){
       $('.winner').text('It is a tie.');
     }
     else if(computerGeneratedChoice === 'scissor'){
       $('.winner').text('You win.');
     }
     else{
       $('.winner').text('Computer wins.');
     }
   }
 }

 function changePictureOfChosenElementForPlayer(choiceOfPlayer) {
   if(choiceOfPlayer === 'paper')
       $('.player1-img').attr('src', 'icons/paper.png');
   else if(choiceOfPlayer === 'scissor')
       $('.player1-img').attr('src', 'icons/scissor.png');
   else
       $('.player1-img').attr('src', 'icons/rock.png');
 }

 function changePictureOfChosenElementForComputer(choiceOfComputer){
   if(choiceOfComputer === 'paper')
       $('.player2-img').attr('src', 'icons/paper.png');
   else if(choiceOfComputer === 'scissor')
       $('.player2-img').attr('src', 'icons/scissor.png');
   else
       $('.player2-img').attr('src', 'icons/rock.png');
  }

 //Returns random computer choice of the 3 specified in the array
 function randomComputerChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
 }


})
