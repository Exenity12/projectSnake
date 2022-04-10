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

const tableElem = document.querySelector('.table');
const windows = document.querySelector('.window');
const elem = document.querySelector('.snakeHade');
const elemTail = document.querySelector('.snakeTail');
const counterMeter = document.querySelector('.counter');
const buttonUp = document.querySelector('.button-up');
const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');
const buttonDown = document.querySelector('.button-down');

const widthWindows = windows.getBoundingClientRect().width;
const hightWindows = windows.getBoundingClientRect().height;


while(tablePeremOne < tableSquareVertSize){
    tableElem.innerHTML += `<div class="string"></div>`;
    tablePeremOne++;
};
const tableString = document.querySelectorAll('.string');

while(tablePeremThree < tableSquareVertSize) {
    tablePeremTwo = 0;
    while(tablePeremTwo < tableSquareHorizonSize){
        tableString[tablePeremThree].innerHTML += `<div class="item" id="id_${tablePeremTwo}_${tablePeremThree}"></div>`
        tablePeremTwo++;
    };
    tablePeremThree++;
};
const item = document.querySelectorAll('.item');

var state = {
    tail: {top: 9, left: 12},
    head: {top: 8, left: 12},
    snakeDirection: "top",
    speedSnakeGame: 200,
    snakeSpeed: -1,
    allSnakeMovies: ["up"],
    snakeDirectionMove: "up",
    r: 1,
    directionSnakeBody: ["", ""],
    snakeBodyItems: [],
    item: [],
    foodDirectionTop: getRandomIntInclusive(0, 24),
    foodDirectionLeft: getRandomIntInclusive(0, 14),
};

state.item = item;
counterMeter.innerHTML = counter;