var finalScore = [0,0], score, activePlayer,diceDOM,isPlaying;
console.log('Correctectly Working');

init();

document.querySelector('.btn-roll').addEventListener('click',function(e){
    e.preventDefault();
    if(isPlaying)
    {
        var score = Math.floor((Math.random() * 6)) + 1;
        diceDOM.style.display = 'block';
        diceDOM.src = '../images/dice-' + score + '.png';
        if(score != 1)
        {
            currentScore += score; 
            document.querySelector('#current-' + activePlayer).textContent = currentScore;
        }
        else{
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(e){
    e.preventDefault();
    if(isPlaying)
    {
        finalScore[activePlayer] += currentScore;
        document.querySelector('#score-' + activePlayer).textContent = finalScore[activePlayer];
        if(finalScore[activePlayer] >= 100)
        {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            isPlaying = false;
        }
        else{
            nextPlayer();
        }
    }
});

function nextPlayer(){
    currentScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = currentScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;  
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    isPlaying = true;
    finalScore = [0,0];
    currentScore = 0;
    activePlayer = 0;
    diceDOM = document.querySelector('#dice-2');
    diceDOM.style.display = 'none';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
}
