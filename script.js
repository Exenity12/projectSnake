function startGame() {
    console.log("Start!");
    timer = setInterval(moveSnake, state.speedSnakeGame);
    let food = document.querySelector(`#id_${state.foodDirectionTop}_${state.foodDirectionLeft}`);
    food.classList = "itemEat";
};

function moveSnake() {
    checkGameOver();
    createItemActive();
    state.allSnakeMovies.push(state.snakeDirectionMove); 
    eatingFood();
    state[state.snakeDirection] += state.snakeSpeed * sizeSquare;
    elem.style[state.snakeDirection] = state[state.snakeDirection] + "px";
    moveTailSnake();
};

function checkGameOver(){
    if((state.top >= hightWindows) || (state.top < 0) || (state.left >= widthWindows) || (state.left < 0)){
        console.log("условие работает");
        clearTime();
    };
};

function createItemActive(){
    let item = document.querySelector(`#id_${state.left}_${state.top}`);
    if(!item){
        return;
    };
    item.classList = "itemActive";
};

function eatingFood() {
    if(`#id_${state.left}_${state.top}` == `#id_${state.foodDirectionTop}_${state.foodDirectionLeft}`){
    movingFood();
    state.allSnakeMovies.splice(state.r - 1, 0, "increase");
    state.speedSnakeGame = state.speedSnakeGame * 0.97;
    counter++;
    counterMeter.innerHTML = counter;
    };
};

function movingFood() {
    state.foodDirectionTop = getRandomIntInclusive(0, 24) * sizeSquare;
    state.foodDirectionLeft = getRandomIntInclusive(0, 14) * sizeSquare;
    let food = document.querySelector(`#id_${state.foodDirectionTop}_${state.foodDirectionLeft}`);
    console.log(food);
    food.classList = "itemEat";
};

function moveTailSnake() {
    switch(state.allSnakeMovies[state.r - 1]) {
        case 'up':
            disableItemActive()
            state.snakeTailY -= sizeSquare;
            elemTail.style.top = state.snakeTailY + "px";
            break;
        case 'left':
            disableItemActive()
            state.snakeTailX -= sizeSquare;
            elemTail.style.left = state.snakeTailX + "px";
            break;
        case 'right':
            disableItemActive()
            state.snakeTailX += sizeSquare;
            elemTail.style.left = state.snakeTailX + "px";
            break;
        case 'down':
            disableItemActive()
            state.snakeTailY += sizeSquare;
            elemTail.style.top = state.snakeTailY + "px";
            break;
        default:
            break;
    };
    state.r++;
};

function disableItemActive(){
    let item = document.querySelector(`#id_${state.snakeTailX}_${state.snakeTailY}`);
    if(!item){
        return;
    };
    item.classList = "item";
}

function clearTime() {
    var z = clearInterval(timer);
};

function changeDirection(direction, snakeSpeed, peremThree) {
    state.snakeDirection = direction;
    state.snakeSpeed = snakeSpeed;
    state.snakeDirectionMove = peremThree;
};

function up() {
    changeDirection('top', -1, 'up');
};
function left() {
    changeDirection('left', -1, 'left');
};
function right() {
    changeDirection('left', 1, 'right');
};
function down() {
    changeDirection('top', 1, 'down');
};

buttonUp.addEventListener('click', up);
buttonLeft.addEventListener('click', left);
buttonRight.addEventListener('click',right);
buttonDown.addEventListener('click', down);

document.addEventListener('keydown', function(event){
    if (event.code == "ArrowLeft") {
        changeDirection('left', -1, 'left');
    }
});
document.addEventListener('keydown', function(event){
    if (event.code == "ArrowUp") {
        changeDirection('top', -1, 'up');
    }
});
document.addEventListener('keydown', function(event){
    if (event.code == "ArrowRight") {
        changeDirection('left', 1, 'right');
    }
});
document.addEventListener('keydown', function(event){
    if (event.code == "ArrowDown") {
        changeDirection('top', 1, 'down');
    }
});