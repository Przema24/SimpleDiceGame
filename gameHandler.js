"use strict"

// Create array for dices 
const diceArray = [];

let fPlayerScore = 0;
let fPlayerPoints = 0;

let sPlayerScore = 0;
let sPlayerPoints = 0;

prepareDiceArea();
setStartConditions();


function prepareDiceArea() {
    const dice1 = document.createElement('img');
    dice1.src = 'pictures/dice1.png';
    const dice2 = document.createElement('img');
    dice2.src = 'pictures/dice2.png';
    const dice3 = document.createElement('img');
    dice3.src = 'pictures/dice3.png';
    const dice4 = document.createElement('img');
    dice4.src = 'pictures/dice4.png';
    const dice5 = document.createElement('img');
    dice5.src = 'pictures/dice5.png';
    const dice6 = document.createElement('img');
    dice6.src = 'pictures/dice6.png';

    diceArray.push(dice1);
    diceArray.push(dice2);
    diceArray.push(dice3);
    diceArray.push(dice4);
    diceArray.push(dice5);
    diceArray.push(dice6);
}

function setStartConditions() {
    document.getElementById('firstPlayerScore').textContent = 'Score: ' + 0;
    document.getElementById('firstPlayerPoints').textContent = 'Points: ' + 0;;

    document.getElementById('secondPlayerScore').textContent = 'Score: ' + 0;
    document.getElementById('secondPlayerPoints').textContent = 'Points: ' + 0;

    if (document.getElementById('firstPlayer').classList.contains('activePlayer') == false) {
        document.getElementById('firstPlayer').classList.toggle('activePlayer');
        document.getElementById('secondPlayer').classList.toggle('activePlayer');
    }

    const diceArea = document.getElementById('diceK6');
    diceArea.src = diceArray[0].src;
}

function switchPlayerActivity() {
    document.getElementById('firstPlayer').classList.toggle('activePlayer');
    document.getElementById('secondPlayer').classList.toggle('activePlayer');
}

function rollFirstPlayerDice() {
    
    if (document.getElementById('firstPlayer').classList.contains('activePlayer')) {
        let diceArea = document.getElementById('diceK6');
        let randomIndex = Math.floor(Math.random()*6);
        diceArea.src = diceArray[randomIndex].src;

        if (randomIndex == 0)
            {
                fPlayerPoints = 0;
                updateFirstPlayerPoints();
                switchPlayerActivity();
            }
        else {
            fPlayerPoints += randomIndex + 1;
            updateFirstPlayerPoints();
        }
    }
}

function updateFirstPlayerPoints() {
    document.getElementById('firstPlayerPoints').textContent = 'Points: ' + fPlayerPoints;
}


function rollSecondPlayerDice() {
    
    if (document.getElementById('secondPlayer').classList.contains('activePlayer')) {
        let diceArea = document.getElementById('diceK6');
        let randomIndex = Math.floor(Math.random()*6);
        diceArea.src = diceArray[randomIndex].src;

        if (randomIndex == 0)
            {
                sPlayerPoints = 0;
                updateSecondPlayerPoints();
                switchPlayerActivity();
            }
        else {
            sPlayerPoints += randomIndex + 1;
            updateSecondPlayerPoints();
        }
    }
}

function updateSecondPlayerPoints() {
    document.getElementById('secondPlayerPoints').textContent = 'Points: ' + sPlayerPoints;
}

function holdFirstPlayerPoints() {
    if (document.getElementById('firstPlayer').classList.contains('activePlayer')) {
        fPlayerScore += fPlayerPoints;
        document.getElementById('firstPlayerScore').textContent = 'Score: ' + fPlayerScore;
        fPlayerPoints = 0;
        updateFirstPlayerPoints();
        switchPlayerActivity();
        checkWinning();
    }
}

function holdSecondPlayerPoints() {
    if (document.getElementById('secondPlayer').classList.contains('activePlayer')) {
        sPlayerScore += sPlayerPoints;
        document.getElementById('secondPlayerScore').textContent = 'Score: ' + sPlayerScore;
        sPlayerPoints = 0;
        updateSecondPlayerPoints();
        switchPlayerActivity();
        checkWinning();
    }
}

function checkWinning() {
    if (fPlayerScore >= 100)
    {
        alert('first player win!');
        setStartConditions();
    }
    if (sPlayerScore >= 100)
    {
        alert('second player win!');
        setStartConditions();
    }
}