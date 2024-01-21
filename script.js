const weaponsComputer = ['rock','paper','scissors'];
const userDisplay = document.getElementById('userDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const userScoreDisplay = document.getElementById('userScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let userScore = 0;
let computerScore = 0;
const newGame = document.getElementById('newGame');
const userComputerContainer = document.getElementById('userComputerContainer');

console.log(weaponsComputer);

const playGame = (weaponUser) => {
    raffleWeapon();
    console.log(weaponUser, randomWeapon);
    result = '';
    newGame.classList.remove('hide');

    if(weaponUser === randomWeapon) {
        result = 'Its a tie';
    } 
    else {
        switch(weaponUser) {
            case 'rock':
                result = (randomWeapon === 'scissors' ? 'You win' : 'You lose');
                break;
            case 'paper':
                result = (randomWeapon === 'rock' ? 'You win' : 'You lose');
                break;
            case 'scissors' :
                result = (randomWeapon == 'paper' ? 'You win' : 'You lose');
        }
    }
    console.log(result);
    userDisplay.innerText = `You: ${weaponUser}`;
    computerDisplay.innerText = `Computer: ${randomWeapon}`;
    resultDisplay.innerText = result;
 
    resultDisplay.classList.remove('colorGreen', 'colorRed');

    switch(result) {
        case 'You win': 
            userScore++;
            console.log(userScore);
            userScoreDisplay.textContent = userScore;
            resultDisplay.classList.add('colorGreen');
        break;
        case 'You lose':
            computerScore++;
            console.log(computerScore);
            computerScoreDisplay.textContent = computerScore;
            resultDisplay.classList.add('colorRed');
        break;
    }
}

const raffleWeapon = () => {
    let i = Math.floor(Math.random() * weaponsComputer.length);
    randomWeapon = weaponsComputer[i];
    /* console.log(randomWeapon); */
}

const removeClass = () => {
    userComputerContainer.classList.remove('inactive');
}

