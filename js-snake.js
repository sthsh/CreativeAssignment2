// Workaround javascript modulo bug. see: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
Number.prototype.mod = function (n) {
    return ((this % n) + n) % n;
};

function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const GRID_CELL_WIDTH = 10;
const GRID_CELL_HEIGHT = 10;
const GRID_WIDTH = 30;
const GRID_HEIGHT = 30;
const canvas = document.getElementById("game");

const ctx = canvas.getContext("2d");
let snake = [];
let snacks = [];
let score = 0;

let highscore = 0;

let direction = {x: 0, y: -1};

initGame();

document.addEventListener('keydown', function (event) {
    switch (event.code) {
        case "ArrowUp":
            direction = {x: 0, y: -1};
            break;
        case "ArrowDown":
            direction = {x: 0, y: 1};
            break;
        case "ArrowLeft":
            direction = {x: -1, y: 0};
            break;
        case "ArrowRight":
            direction = {x: 1, y: 0};
            break;
    }
});

window.setInterval(update, 0.2 * 1000);

function createSnacks() {
    if (snacks.length === 0) {
        snacks.push({x: getRandom(GRID_WIDTH), y: getRandom(GRID_HEIGHT)});
    }
}

function eatSnacks() {
    let indexOf = myIndexOf(snacks, snake[0]);
    if (indexOf > -1) {
        snacks = snacks.splice(indexOf + 1);
        score += 1;
        return true;
    }
    return false;
}

function updateScore() {
    document.getElementById("score").innerText = score;
}

function updateHighscore() {
    document.getElementById("highscore").innerText = highscore;
}

function update() {
    createSnacks();
    moveSnake(snake, direction);
    if (!eatSnacks(snake, snacks)) {
        snake.pop();
    }
    checkCollision(snake);

    ctx.fillStyle = "#c0c5ce";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawSnacks(ctx, snacks, GRID_CELL_WIDTH, GRID_CELL_HEIGHT);
    drawSnake(ctx, GRID_CELL_WIDTH, GRID_CELL_HEIGHT, snake);
    updateScore();
    updateHighscore();
}

function initGame() {
    snake = [{x: 5, y: 5}];
    direction = {x: 0, y: -1};
    snacks = [];
    highscore = Math.max(highscore, score);
    score = 0;
}

function moveSnake(snake, direction) {
    let newX = (snake[0].x + direction.x).mod(GRID_HEIGHT);
    let newY = (snake[0].y + direction.y).mod(GRID_WIDTH);
    snake.unshift({x: newX, y: newY});
}

function checkCollision(snake) {
    if (myIndexOf(snake, snake[0]) > 0) {
        initGame();
    }
}

function drawSnacks(ctx, snacks, gridWidth, gridHeight) {
    ctx.fillStyle = "#343d46";
    for (const snacksElement of snacks) {
        ctx.fillRect(snacksElement.x * gridWidth, snacksElement.y * gridHeight, gridWidth, gridHeight);
    }
}

function myIndexOf(arr, obj) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].x === obj.x && arr[i].y === obj.y) {
            return i;
        }
    }
    return -1;
}

function drawSnake(ctx, gridWidth, gridHeight, snake) {
    ctx.fillStyle = "#4f5b66";
    for (const snakeElement of snake) {
        ctx.fillRect(snakeElement.x * gridWidth, snakeElement.y * gridHeight, gridWidth, gridHeight);
        ctx.fillStyle = "#343d46";
    }
}

//Added Mouse controls


document.getElementById("js-up-button").addEventListener("mousedown", function(event) {
        direction = {x: 0, y: -1};
    });
document.getElementById("js-down-button").addEventListener("mousedown", function(event) {
        direction = {x: 0, y: 1};
    });
document.getElementById("js-left-button").addEventListener("mousedown", function(event) {
        direction = {x: -1, y: 0};
    });
document.getElementById("js-right-button").addEventListener("mousedown", function(event) {
        direction = {x: 1, y: 0};
    });