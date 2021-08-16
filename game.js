const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput==='scissors' || userInput==='bomb') {
  return userInput;
  } else {
  console.log("Error!");
}
};  

console.log(getUserChoice('Paper')); // should print 'paper'
console.log(getUserChoice('fork')); // should print 'Error!' and `undefined`

function  getComputerChoice (){
let getComputerChoice = Math.floor(Math.random() * 3);
switch (getComputerChoice) {
  case 0:
    return'rock';
   break;
  case 1:
    return 'paper';
    break;
  case 2:
    return 'scissors';
     break;
}
}

console.log(getComputerChoice()); 

//Now it’s time to determine a winner.Create a function named determineWinner that takes two parameters named userChoice and computerChoice. This function will compare the two choices played and then return if the human player won, lost, or tied.Let’s deal with the tie condition first. Within the determineWinner() function, write an if statement that checks if the userChoice parameter equals the computerChoice parameter. If so, return a string that the game was a tie
function  determineWinner(userChoice, computerChoice) {
  if (userChoice===computerChoice){
    return "The game is tie."
  } 

  if (userChoice==="bomb"){
    if (computerChoice){
    return "The game is over. You won. Nice trick!!!"}
  } 

  //Begin by writing an if statement that checks if the userChoice is 'rock'. Inside the if statement’s block, write another if/else statement. The inner if/else should check if the computerChoice is 'paper'. If so, return a message that the computer won. If not, return a message that the user won.
  if (userChoice=== "rock"){
  if(computerChoice==="paper") {
  return "Computer won."
  }else{
     return "User won!"
  }
  } 
//if statement for if the userChoice is 'paper'.Inside this if statement, the computerChoice must be either 'scissors' or 'rock'. Write logic that will return a winner.

   if (userChoice=== "paper"){
  if(computerChoice==="scissors") {
  return "Computer won."
  }else{
     return "You won!"
  }   
}
//if statement for if the userChoice is 'scissors'.Inside of this if statement, the computerChoice must either be 'rock' or 'paper'. Write logic that will return a winner.
 if (userChoice=== 'scissors'){
  if(computerChoice==="rock") {
  return "Computer won."
  }else{
     return "You won!"
  }
  } 
}

//The expected output depends on what you wrote in the determineWinner() function.

console.log(determineWinner());
console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'

//Create a function named playGame.Inside the playGame() function, create a variable named userChoice set equal to the result of calling getUserChoice(), passing in either 'rock', 'paper', or 'scissors' as an argument.Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice().Under both of these variables, use console.log to print them to the console.

const playGame= () =>{
  let userChoice=getUserChoice ('rock');
  let computerChoice=getComputerChoice();
 console.log('You threw: '+userChoice);
  console.log('The computer threw:'+computerChoice);

  console.log(determineWinner(userChoice,computerChoice));//You won!
};

//Then, to start the game, call the playGame() function on the last line of your program.
playGame();//You threw: rock The computer threw:paper Computer won.