

var tableElem = document.querySelector('.table');
var tablePeremOne = 0;
var tablePeremTwo = 0;
var tablePeremThree = 0;
var tableSquareVertSize = 15;
var tableSquareHorizonSize = 25;

while(tablePeremOne < tableSquareVertSize){
    tableElem.innerHTML += '<div class="string"></div>';
    tablePeremOne++;
};

var tableString = document.querySelectorAll('.string');

while(tablePeremThree < tableSquareVertSize) {
    tablePeremTwo = 0;
    while(tablePeremTwo < tableSquareHorizonSize){
        tableString[tablePeremThree].innerHTML += '<div class="item"></div>'
        tablePeremTwo++;
    };
    tablePeremThree++;
};

const isPlaceForEat = true;

var state = {
    snakeDirection: "y",
    x: 480,
    y: 320,
    speedSnakeGame: 200,
    snakeSpeed: -40,
    allSnakeMovies: ["up"],
    snakeDirectionMove: "up",
    r: 1,
    snakeTailX: 480,
    snakeTailY: 360,
    directionSnakeBody: ["", ""],
    item: [],
};

var item = document.querySelectorAll('.item');
state.item = item;

var windows = document.querySelector('.window');
var eat = document.querySelector('.eat');
var elem = document.querySelector('.snakeHade');
var elemTail = document.querySelector('.snakeTail');

var counter = 0;
var counterMeter = document.querySelector('.counter');
counterMeter.innerHTML = `${counter}`;

var timer;

var sizeSquare = 40;
var allSqyare = 375;

var buttonUp = document.querySelector('.button-up');
var buttonLeft = document.querySelector('.button-left');
var buttonRight = document.querySelector('.button-right');
var buttonDown = document.querySelector('.button-down');



function startGame() {
    console.log("Start!");
    timer = setInterval(moveSnake, state.speedSnakeGame);
};

function moveSnake() {
    var t = 0;
    while(t < 375){
        if(state.x == state.item[t].getBoundingClientRect().x && state.y == state.item[t].getBoundingClientRect().y) {
            state.item[t].classList = "itemActive";
            state.directionSnakeBody.push(state.item[t].getBoundingClientRect().x);
            state.directionSnakeBody.push(state.item[t].getBoundingClientRect().y);
        };
        t++;
    };
    state.allSnakeMovies.push(state.snakeDirectionMove);
    switch(state.snakeDirection) {
        case "y":
            state.y += state.snakeSpeed;
            if((state.y > windows.getBoundingClientRect().height - 42) || (state.y < 0) || (state.x > windows.getBoundingClientRect().width - 42) || (state.x < 0)){
                console.log("условие работает");
                clearTime();
                break;
            };
            helper()
            elem.style.top = state.y + "px";
            moveBodySnake();
            break;
        case "x":
            state.x += state.snakeSpeed;
            if((state.y > windows.getBoundingClientRect().height - 42) || (state.y < 0) || (state.x > windows.getBoundingClientRect().width - 42) || (state.x < 0)){
                console.log("условие работает");
                clearTime()
                break;
            };
            helper();
            elem.style.left = state.x + "px";
            moveBodySnake();
            break;
        default: 
            break;
    };
    eating(); 
};

function helper() {
    var peremX = 0;
    while(peremX <= state.directionSnakeBody.length) {
        if(state.x == state.directionSnakeBody[peremX] && state.y == state.directionSnakeBody[peremX + 1]){
            clearTime()
            console.log("Игра окончена");
        };
    peremX += 2;
    };
};

function eating() {
    if (elem.style.left == eat.style.left && elem.style.top == eat.style.top) {
        counter++;
        counterMeter.innerHTML = `${counter}`;
        eat.style.top = getRandomIntInclusive(0, 14) * sizeSquare + "px";
        eat.style.left = getRandomIntInclusive(0, 24) * sizeSquare + "px";
        state.speedSnakeGame = state.speedSnakeGame * 0.97;
        state.allSnakeMovies.splice(state.r - 1, 0, "increase");
    }; 
};



function moveBodySnake() {
    switch(state.allSnakeMovies[state.r - 1]) {
        case 'up':
            state.snakeTailY -= sizeSquare;
            elemTail.style.top = state.snakeTailY + "px";
            helperWhile()
            break;
        case 'left':
            state.snakeTailX -= sizeSquare;
            elemTail.style.left = state.snakeTailX + "px";
            helperWhile()
            break;
        case 'right':
            state.snakeTailX += sizeSquare;
            elemTail.style.left = state.snakeTailX + "px";
            helperWhile()
            break;
        case 'down':
            state.snakeTailY += sizeSquare;
            elemTail.style.top = state.snakeTailY + "px";
            helperWhile()
            break;
        default:
            break;
    };
    state.r++;
};

function helperWhile() {
    var i = 0;
    while(i < allSqyare){
        if(state.snakeTailX == state.item[i].getBoundingClientRect().x && state.snakeTailY == state.item[i].getBoundingClientRect().y) {
            state.item[i].classList = "item";
            state.directionSnakeBody.splice(0, 2);
        };
    i++;
    };
};





function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clearTime() {
    var z = clearInterval(timer);
};





function changeDirection(peremOne, peremTwo, peremThree) {
    state.snakeDirection = peremOne;
    state.snakeSpeed = peremTwo;
    state.snakeDirectionMove = peremThree;
};

function up() {
    changeDirection('y', -sizeSquare, 'up');
};
function left() {
    changeDirection('x', -sizeSquare, 'left');
};
function right() {
    changeDirection('x', sizeSquare, 'right');
};
function down() {
    changeDirection('y', sizeSquare, 'down');
};

buttonUp.addEventListener('click', up);
buttonLeft.addEventListener('click', left);
buttonRight.addEventListener('click',right);
buttonDown.addEventListener('click', down);

document.addEventListener('keydown', function(event){
    if (event.code == "ArrowLeft") {
        changeDirection('x', -sizeSquare, 'left');
    }
});
document.addEventListener('keydown', function(event){
    if (event.code == "ArrowUp") {
        changeDirection('y', -sizeSquare, 'up');
    }
});
document.addEventListener('keydown', function(event){
    if (event.code == "ArrowRight") {
        changeDirection('x', sizeSquare, 'right');
    }
});
document.addEventListener('keydown', function(event){
    if (event.code == "ArrowDown") {
        changeDirection('y', sizeSquare, 'down');
    }
});

function moving(){
    eat.style.top = getRandomIntInclusive(0, 14) * sizeSquare + "px";
    eat.style.left = getRandomIntInclusive(0, 24) * sizeSquare + "px";
    state.speedSnakeGame = state.speedSnakeGame * 0.97;
};

moving();