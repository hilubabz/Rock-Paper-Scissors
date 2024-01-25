let move = document.querySelector('.move')
let scoreCount=document.querySelector('.score')
let reset=document.querySelector('.reset')
let result=document.querySelector('.result')


reset.addEventListener('click',function(){
    resetScore();
})
 const score=JSON.parse(localStorage.getItem('score'))||
 {
    win:0,
    loss:0,
    draw:0
 };
    
    
    function displayScore(user_choice,comp_choice) {
        move.innerHTML = `User <img src="Pictures/${user_choice}.png" class="image"> - <img src="Pictures/${comp_choice}.png" class="image"> Computer`
        scoreCount.innerText = "Win:" + score.win + " Tie:" + score.draw + " Loss:" + score.loss
    }
function play(user_choice) {


    let comp_choice = Math.random();
    if (comp_choice >= 0 && comp_choice < 1 / 3)
        comp_choice = 'Rock';

    else if (comp_choice >= 1 / 3 && comp_choice < 2 / 3)
        comp_choice = 'Paper';

    else if (comp_choice >= 2 / 3 && comp_choice < 1)
        comp_choice = 'Scissors';

    if (comp_choice === user_choice) {
        
        score.draw++;
        result.innerText='Tie'
        displayScore(user_choice,comp_choice)
        return;
    }
    if (user_choice === 'Rock') {
        if (comp_choice === 'Scissors') {
            
            score.win++;
            result.innerHTML='You Win'
            displayScore(user_choice,comp_choice)
        }
        else {
          
            score.loss++;
            result.innerHTML='You Lose'
            displayScore(user_choice,comp_choice)
        }
    }
    if (user_choice === 'Paper') {
        if (comp_choice === 'Scissors') {
            
            score.loss++;
            result.innerHTML='You Lose'
            displayScore(user_choice,comp_choice)
        } else {
           
            score.win++;
            reset.innerHTML='You Win'
            displayScore(user_choice,comp_choice)
        }
    }
    if (user_choice === 'Scissors') {
        if (comp_choice === 'Paper') {
            
            score.win++;
            result.innerHTML="You Win"
            displayScore(user_choice,comp_choice)
        }
        else {
        
            score.loss++;
            reset.innerHTML="You Lose"
            displayScore(user_choice,comp_choice)
        }
    }
    localStorage.setItem('score',JSON.stringify(score));
}

function resetScore(){
    score.win=0
    score.loss=0
    score.draw=0
    localStorage.removeItem('score');
}