const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput ==='paper' 
    || userInput ==='scissors' || userInput == 'bomb'){
      return userInput;
    } else {
      console.log('Please enter either rock, paper or scissors!');
    }
  }
  
  const getComputerChoice = () => {
    const num = Math.floor(Math.random() * 3);
    switch(num) {
      case 0:
      return 'rock';
      break;
  
      case 1:
      return 'paper';
      break;
  
      case 2:
      return 'scissors';
      break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) =>{
    if(userChoice === computerChoice){
      return 'The game is a tie';
    }
  
    if(userChoice === 'bomb'){
      return 'You won! The computer had no chance!!';
    } 
  
    if(userChoice === 'rock'){
      return (computerChoice === 'paper'?'Computer won!': 'You won!!');
    }
  
    if(userChoice === 'paper'){
      return (computerChoice === 'scissors'?'Computer won!': 'You won!!');
    }
  
    if(userChoice === 'scissors'){
      return (computerChoice === 'rock'? 'Computer won!': 'You won!!');
    }
  }
  
  function playGame(){
    const userChoice = getUserChoice('Bomb');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}!`);
    console.log(`The computer threw: ${computerChoice}!`);
    console.log(determineWinner(userChoice,
    computerChoice));
  }
  
  playGame();
  
  