/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

;
var scores, roundScore = 0, activePlayer = 0, previousDice, gamePlaying;

init()



// Listen to click event of a button and execute a function
document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if (gamePlaying) {
        // 1. Random number
        
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
    
        // 2. Display the result
        
        // var diceDOM = document.querySelector('.dice'); // Used when there was only one dice
        
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        
        // diceDOM.style.display = 'block'; // Used when there was only one dice
        // diceDOM.src = 'dice-' + dice + '.png'; // Used when there was only one dice
    
        // 3. Update the round score IF the rolled numnber was not a 1
        
        /* Used when there was only one dice and after fist to coding challenges
        if (dice === 6 && previousDice === 6) {
            console.log(previousDice, dice);
            console.log('Changing Player');
                        
            scores[activePlayer] = 0;
            document.querySelector('#score-' +activePlayer).textContent = '0'
            
            // Next player
            nextPlayer()
        }
        
        else if (dice === 1) {
            console.log(previousDice, dice);
            console.log('Changing Player');
            
            // Next player
            nextPlayer()
        }
        else {
            // Add score
            console.log(previousDice, dice)
            roundScore += dice;
            previousDice = dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        */
        
        if (dice1 !== 1 && dice2 !== 1) {
            // Add score
            console.log(dice1, dice2)
            roundScore += dice1 + dice2;

            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
            console.log(dice1, dice2);
            console.log('Changing Player');
            
            // Next player
            nextPlayer()
        }
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if (gamePlaying) {
        // Add cuurent score to global score
        scores[activePlayer] += roundScore;
        
        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        // Undefined, O, NULL or "" arve COERCED to false
        // Anything else is COERCED to true
        if (input) {
            var winningScore = input
        }
        else {
            winningScore = 100
        }
        
        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        // Check if player has won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            
            // document.querySelector('.dice').style.display = 'none'; // Used when there was only one dice
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false
        }
        else {
            // Next player
            nextPlayer()
        }   
    }
})

function nextPlayer() {
     // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    previousDice = 0;
        
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    // document.querySelector('.dice').style.display = 'none'; // Used when there was only one dice
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    previousDice = 0
    gamePlaying = true;
    
    // document.querySelector('#current-' + activePlayer).textContent = dice;
    // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
    // var x = document.querySelector('#score-0').textContent;

    // Hide the dice
    // document.querySelector('.dice').style.display = 'none'; // Used when there was only one dice
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    // Get document element by ID
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}







































