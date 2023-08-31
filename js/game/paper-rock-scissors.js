const prompt = require('prompt-sync')();
// const initRockPaperScissors = ({rockCount = 3, paperCount = 3, scissorsCount = 3}) => {}

const getComputerChoice = (rps) => {
    const index = Math.round(Math.random() * (rps.length-1));

    return rps[index];
}

const getHumanChoice = (rps) => {
    process.stdout.write('\n1. Rock \n2. Paper \n3. Scissors \n');
    
    const rpsChoice = prompt('What is your choice ? ');

    if (rpsChoice === 0 || rpsChoice > rps.length) return false;
    
    return rps[rpsChoice - 1];
}

const getResult = (playerOneChoice, playerTwoChoice) => {
    let result = null;

    console.log(playerOneChoice, playerTwoChoice);
    
    switch (`${playerOneChoice} - ${playerTwoChoice}`) {
        case 'rock - rock':
            break;
        case 'paper - paper':
            break;
        case 'scissors - scissors':
            break;
        case 'rock - paper':
            result = 'paper';
            break;
        case 'rock - scissors':
            result = 'rock';
            break;
        case 'paper - scissors':
            result = 'scissors';
            break;
        default:
            break;
    }

    if (!result) return { playerOne: 0, playerTwo: 0 }
    
    let playerOne = playerOneChoice === result ? 1 : 0
    let playerTwo = playerTwoChoice === result ? 1 : 0
    
    return { playerOne , playerTwo }
}

const startGame = () => {
    const rpsLists = ['rock', 'paper', 'scissors'];

    const machineInput = getComputerChoice(rpsLists);

    const humanInput = getHumanChoice(rpsLists);

    const result = getResult(machineInput, humanInput);

    console.log(result);
}

startGame();