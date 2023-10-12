function getComputerChoice()
{
    var randomNum = Math.floor(Math.random() * 3);

    if(randomNum === 0)
    {
        return "rock";
    }else if(randomNum === 1)
    {
        return "paper";
    }else
    {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) 
{
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection)
    {
        return "It was a tie!";
    }

    if(playerSelection === "rock")
    {
        if(computerSelection === "paper")
        {
            return "You Lose! Paper beats Rock";
        }else{
            return "You Win! Rock beats Scissors"; 
        }
    }

    if(playerSelection === "paper")
    {
        if(computerSelection === "Scissor")
        {
            return "You Lose! Scissors beats Paper";
        }else{
            return "You Win! Paper beats Rock"
        }
    }

    if(playerSelection === "scissor" || playerSelection === "scissors")
    {
        if(computerSelection === "rock")
        {
            return "You Lose! Rock beats Scissors";
        }else{
            return "You Win! Scissors beats Paper"; 
        }
    }
}
function game()
{
    const playerSelection = "rock";
    
    for(let i = 0; i < 5; i++)
    {
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()


