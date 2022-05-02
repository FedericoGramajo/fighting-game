function rectangularCollision({ rectangle1, rectangle2 }) {
    return (rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x
        && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width  // this 2 lines for colisions in the x axis
        && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y
        && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height)// this 2 lines for colisions in the y axis
}

function determinateWinner({ player, enemy, timerId }) {
    clearInterval(timerId)
    document.querySelector('#displayTie').style.display = 'flex'
    if (player.healt == enemy.healt) {
        document.querySelector('#displayTie').innerHTML = 'Tie'
    } else if (player.healt > enemy.healt) {
        document.querySelector('#displayTie').innerHTML = 'Player 1 Wins'
    } else if (player.healt < enemy.healt) {
        document.querySelector('#displayTie').innerHTML = 'Player 2 Wins'
    }
}
let timer = 60;
let timerId;
function decreaseTimer() {
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000);
        timer--
        document.querySelector('#timer').innerHTML = timer
    }
    if (timer == 0) {
        determinateWinner({ player, enemy })
    }
}