/*--- User Vs Computer ---*/
const weaponsComputer = ['rock','paper','scissors'];
let userScore = 0;
let computerScore = 0;
console.log(weaponsComputer);

const playGame = (weaponUser) => {
    const userDisplay = document.getElementById('userDisplay');
    const computerDisplay = document.getElementById('computerDisplay');
    const resultDisplay = document.getElementById('resultDisplay');
    const userScoreDisplay = document.getElementById('userScoreDisplay');
    const computerScoreDisplay = document.getElementById('computerScoreDisplay');
    const newGame = document.getElementById('newGame');

    raffleWeapon();
    console.log(weaponUser, randomWeapon);
    result = '';
    newGame.classList.remove('hide');

    if(weaponUser === randomWeapon) {
        result = 'Its a draw';
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

/*--- Computer Vs Computer ---*/
let computerAScore = 0;
let computerBScore = 0;

const playGame2 = () => {
    const computerAdisplay = document.getElementById('computerAdisplay');
    const computerBdisplay = document.getElementById('computerBdisplay');
    const resultDisplay2 = document.getElementById('resultDisplay2');
    const computerAScoreDisplay = document.getElementById('computerAScoreDisplay');
    const computerBScoreDisplay = document.getElementById('computerBScoreDisplay');

    raffleWeapon();
    let randomWeaponA = randomWeapon;
    computerAdisplay.innerText = `Computer A: ${randomWeaponA}`;
    raffleWeapon();
    let randomWeaponB = randomWeapon;
    computerBdisplay.innerText = `Computer B: ${randomWeaponB}`;
    console.log(randomWeaponA, randomWeaponB);

    result2 = '';
    newGame.classList.remove('hide');

    if(randomWeaponA === randomWeaponB) {
        result2 = 'Its a draw';
    } 
    else {
        switch(randomWeaponA) {
            case 'rock':
                result2 = (randomWeaponB === 'scissors' ? 'Computer A Wins' : 'Computer B Wins');
                break;
            case 'paper':
                result2 = (randomWeaponB === 'rock' ? 'Computer A Wins' : 'Computer B Wins');
                break;
            case 'scissors':
                result2 = (randomWeaponB === 'paper' ? 'Computer A Wins' : 'Computer B Wins');
                break;
        }
    }
    console.log(result2);
    resultDisplay2.innerText = result2;

    switch (result2) {
        case 'Computer A Wins':
            computerAScore++;
            computerAScoreDisplay.textContent = computerAScore;
            break;
        case 'Computer B Wins':
            computerBScore++;
            computerBScoreDisplay.textContent = computerBScore;
            break;
    }
}

// refresh contend
const openPage = (indice, target) => {
    const url = './content' + indice + '.html';
    console.log(indice, target, url);

    const xml = new XMLHttpRequest();
    xml.onreadystatechange = function() {
        if(xml.readyState == 4 && xml.status == 200) {
            document.getElementById(target).innerHTML = xml.responseText;
        }
    }

    xml.open('GET', url);
    xml.send();
}