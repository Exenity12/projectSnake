function startGame() {
    console.log("Start!");
    timer = setInterval(moveSnake, state.speedSnakeGame);
    let food = document.querySelector(`#id_${state.foodDirectionTop}_${state.foodDirectionLeft}`);
    food.classList = "itemEat";
};

function moveSnake() {
    createItemActive();
    memorizeDrection();
    state.allSnakeMovies.push(state.snakeDirectionMove); 
    eatingFood();
    state.head[state.snakeDirection] += state.snakeSpeed;
    if(isGameOver()){
        clearTime();
        return;
    };
    accidentCheck();
    elem.style[state.snakeDirection] = state.head[state.snakeDirection] * sizeSquare + "px";
    moveTailSnake();
};

function isGameOver(){
    if((state.head.top >= 15) || (state.head.top < 0) || (state.head.left >= 25) || (state.head.left < 0)){
        console.log("условие работает");
        return true;
    };
    return false;
};

function memorizeDrection() {
    state.snakeBodyItems.push({top: state.head.top, left: state.head.left});
    if(state.snakeBodyItems[0].top == state.tail.top && state.snakeBodyItems[0].left == state.tail.left){
        state.snakeBodyItems.splice(0, 1);
    };
};

function accidentCheck(){
    state.snakeBodyItems.forEach((item) => {
        if(item.top == state.head.top && item.left == state.head.left){
            clearTime();
        };
    });
}

function createItemActive(){
    let item = document.querySelector(`#id_${state.head.left}_${state.head.top}`);
    if(!item){
        return;
    };
    item.classList = "itemActive";
};

function eatingFood() {
    if(`#id_${state.head.left}_${state.head.top}` == `#id_${state.foodDirectionTop}_${state.foodDirectionLeft}`){
    movingFood();
    state.allSnakeMovies.splice(state.r - 1, 0, "increase");
    state.speedSnakeGame = state.speedSnakeGame * 0.97;
    counter++;
    counterMeter.innerHTML = counter;
    };
};

function movingFood() {
    state.foodDirectionTop = getRandomIntInclusive(0, 24);
    state.foodDirectionLeft = getRandomIntInclusive(0, 14);
    let food = document.querySelector(`#id_${state.foodDirectionTop}_${state.foodDirectionLeft}`);
    food.classList = "itemEat";
};

function moveTailSnake() {
    switch(state.allSnakeMovies[state.r - 1]) {
        case 'up':
            disableItemActive()
            state.tail.top -= 1;
            elemTail.style.top = state.tail.top * sizeSquare + "px";
            break;
        case 'left':
            disableItemActive()
            state.tail.left -= 1;
            elemTail.style.left = state.tail.left * sizeSquare + "px";
            break;
        case 'right':
            disableItemActive()
            state.tail.left += 1;
            elemTail.style.left = state.tail.left * sizeSquare + "px";
            break;
        case 'down':
            disableItemActive()
            state.tail.top += 1;
            elemTail.style.top = state.tail.top * sizeSquare + "px";
            break;
        default:
            break;
    };
    state.r++;
};

function disableItemActive(){
    let item = document.querySelector(`#id_${state.tail.left}_${state.tail.top}`);
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