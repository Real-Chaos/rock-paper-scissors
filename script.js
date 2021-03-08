// Create function
function computerPlay() {
    // Make Variable for computers choice
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    // Use switch to decide what each number represents
    switch (computerChoice === true) {
        case computerChoice === 1:
            computerChoice = 'Rock'
            break;

        case computerChoice === 2:
            computerChoice = 'Paper'
            break;

        case computerChoice === 3:
            computerChoice = 'Scissors'
            break;
  
    }
    return computerChoice;
}
function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === computerSelection) {
        alert(`It's a tie! Computer chose ${computerSelection}`);
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        alert(`You lost ;C Computer chose ${computerSelection}`);
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        alert(`You Lost! ;C  Computer chose ${computerSelection}`);
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        alert(`You Lost :C ! Computer chose ${computerSelection}`);
    }
    else {
        alert('Please enter "Rock", "Paper", or "Scissors" to play!')
    }
    
    switch (computerSelection) {
        case computerSelection === 'Rock':
            case playerSelection === 'Paper':
                alert(`You Won! Computer Chose ${computerSelection}`)
                break;
        case computerSelection === 'Paper':
            case playerSelection === 'Scissors':
                alert(`You Won! Computer Chose ${computerSelection}`)
                break;
                
        case computerSelection === 'Scissors':
            case playerSelection === 'Rock':
                alert(`You Won! Computer Chose ${computerSelection}`)
                break;
    }
    

    
}

playerSelection = prompt('Enter "Rock", "Paper", or "Scissors" to play!');
computerSelection = computerPlay();
playRound(playerSelection, computerSelection);


