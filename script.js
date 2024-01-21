const weaponsComputer = ['rock','paper','scissors'];
const userDisplay = document.getElementById('userDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');

console.log(weaponsComputer);

const playGame = (weaponUser) => {
    raffleWeapon();
    console.log(weaponUser, randomWeapon);
    result = '';

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
    userDisplay.innerText = `User: ${weaponUser}`;
    computerDisplay.innerText = `Computer: ${randomWeapon}`;
    resultDisplay.innerText = result;
}


const raffleWeapon = () => {
    let i = Math.floor(Math.random() * weaponsComputer.length);
    randomWeapon = weaponsComputer[i];
    /* console.log(randomWeapon); */
}

