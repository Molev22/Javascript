const getUserChoice = userInput => {
userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
return userInput;
} else { 
  console.log('error'); 
  }
};

function getComputerChoice() {
  Math.random(Math.floor() * 3);
  switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
  }
}

function determineWinner (userChoice, computerChoice) { 
if (userChoice === computerChoice) {
    return 'Game was a tie.';
  }
}
if (userChoice === 'rock') { if (computerChoice === 'paper') 
  { return 'computer won';} else { 
    return 'You won!';}
}

if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}

if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
};


playGame(userChoice('paper'));