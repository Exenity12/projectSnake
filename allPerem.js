function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};



var tablePeremOne = 0;
var tablePeremTwo = 0;
var tablePeremThree = 0;
var tableSquareVertSize = 15;
var tableSquareHorizonSize = 25;
var counter = 0;
var sizeSquare = 40;
var allSqyare = 375;

var tableElem = document.querySelector('.table');
var windows = document.querySelector('.window');
var elem = document.querySelector('.snakeHade');
var elemTail = document.querySelector('.snakeTail');
var counterMeter = document.querySelector('.counter');
var buttonUp = document.querySelector('.button-up');
var buttonLeft = document.querySelector('.button-left');
var buttonRight = document.querySelector('.button-right');
var buttonDown = document.querySelector('.button-down');

var widthWindows = windows.getBoundingClientRect().width;
var hightWindows = windows.getBoundingClientRect().height;


while(tablePeremOne < tableSquareVertSize){
    tableElem.innerHTML += `<div class="string"></div>`;
    tablePeremOne++;
};
var tableString = document.querySelectorAll('.string');

while(tablePeremThree < tableSquareVertSize) {
    tablePeremTwo = 0;
    while(tablePeremTwo < tableSquareHorizonSize){
        tableString[tablePeremThree].innerHTML += `<div class="item" id="id_${tablePeremTwo * sizeSquare}_${tablePeremThree * sizeSquare}"></div>`
        tablePeremTwo++;
    };
    tablePeremThree++;
};
var item = document.querySelectorAll('.item');

var state = {
    snakeDirection: "top",
    left: elem.getBoundingClientRect().x,
    top: elem.getBoundingClientRect().y,
    speedSnakeGame: 200,
    snakeSpeed: -1,
    allSnakeMovies: ["up"],
    snakeDirectionMove: "up",
    r: 1,
    snakeTailX: elemTail.getBoundingClientRect().x,
    snakeTailY: elemTail.getBoundingClientRect().y,
    directionSnakeBody: ["", ""],
    item: [],
    foodDirectionTop: getRandomIntInclusive(0, 24) * sizeSquare,
    foodDirectionLeft: getRandomIntInclusive(0, 14) * sizeSquare,
};

state.item = item;
counterMeter.innerHTML = counter;