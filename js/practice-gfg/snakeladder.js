const prompt = require('prompt-sync')();

function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

function getBoard(){
    return [
        ['N', 'S', 'N', 'N', 'S'],
        ['L', 'N', 'N', 'N', 'N'],
        ['N', 'N', 'S', 'L', 'N'],
        // [],
        ['N', 'N', 'N', 'N', 'L']
    ]
}

function setCurrentState(){}

function getCurrentState(){}

function startGame(){
    let 
    // while(true){
    //     let userInput = prompt('1. roll a dice\n0. exit game\n');
    //     if (userInput === '0') process.exit(0);
    //     console.log(rollDice()) 
    // }
    
}

startGame()
