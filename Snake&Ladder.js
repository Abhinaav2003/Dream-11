const board = document.getElementById('board');
const rollDiceBtn = document.getElementById('rollDice');
const diceResult = document.getElementById('diceResult');
const currentPlayerDisplay = document.getElementById('currentPlayer');

const boardSize = 10;
const players = [
    { id: 1, position: 1, color: 'red' },
    { id: 2, position: 1, color: 'blue' }
];
let currentPlayerIndex = 0;

const snakesAndLadders = {
    16: 6,
    47: 26,
    49: 11,
    56: 53,
    62: 19,
    64: 60,
    87: 24,
    93: 73,
    95: 75,
    98: 78,
    1: 38,
    4: 14,
    9: 31,
    21: 42,
    28: 84,
    36: 44,
    51: 67,
    71: 91,
    80: 100
};

function createBoard() {
    for (let i = 100; i >= 1; i--) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `cell-${i}`;
        cell.textContent = i;
        board.appendChild(cell);
    }
}

function movePlayer(player, position) {
    const playerElements = document.querySelectorAll(`.player${player.id}`);
    playerElements.forEach(element => element.remove());

    const newPosition = document.getElementById(`cell-${position}`);
    const playerElement = document.createElement('div');
    playerElement.classList.add('player', `player${player.id}`);
    newPosition.appendChild(playerElement);
}

function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    diceResult.textContent = `Dice: ${diceValue}`;

    let player = players[currentPlayerIndex];
    player.position += diceValue;

    if (player.position > 100) {
        player.position = 100;
    }

    if (snakesAndLadders[player.position]) {
        player.position = snakesAndLadders[player.position];
    }

    movePlayer(player, player.position);
    currentPlayerDisplay.textContent = `Player ${player.id} Position: ${player.position}`;

    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    currentPlayerDisplay.textContent = `Player ${players[currentPlayerIndex].id}'s turn`;
}

createBoard();
players.forEach(player => movePlayer(player, player.position));

rollDiceBtn.addEventListener('click', rollDice);
