// script.js

// Updated sample player data with names
const players = [
    { id: 1, name: 'Virat Kohli', role: 'Batsman' },
    { id: 2, name: 'Jasprit Bumrah', role: 'Bowler' },
    { id: 3, name: 'Hardik Pandya', role: 'All-Rounder' },
    { id: 4, name: 'MS Dhoni', role: 'Wicket-Keeper' },
    { id: 5, name: 'Rohit Sharma', role: 'Batsman' },
    { id: 6, name: 'Ravindra Jadeja', role: 'All-Rounder' },
    { id: 7, name: 'Rishabh Pant', role: 'Wicket-Keeper' },
    { id: 8, name: 'Shikhar Dhawan', role: 'Batsman' },
    { id: 9, name: 'Bhuvneshwar Kumar', role: 'Bowler' },
    { id: 10, name: 'Yuzvendra Chahal', role: 'Bowler' },
];

// Function to create player list item
function createPlayerItem(player) {
    const li = document.createElement('li');
    li.textContent = `${player.name} (${player.role})`;

    const button = document.createElement('button');
    button.textContent = 'Add to Team';
    button.onclick = () => addToTeam(player);
    li.appendChild(button);

    return li;
}

// Function to add player to team
function addToTeam(player) {
    const teamList = document.getElementById('team-list');
    const li = createPlayerItem(player);
    li.querySelector('button').textContent = 'Remove';
    li.querySelector('button').onclick = () => removeFromTeam(player.id);
    teamList.appendChild(li);

    // Disable button in the players list
    document.getElementById(`player-${player.id}`).disabled = true;
}

// Function to remove player from team
function removeFromTeam(playerId) {
    const teamList = document.getElementById('team-list');
    const playerItem = Array.from(teamList.children).find(item => item.textContent.includes(`Player ${playerId}`));
    teamList.removeChild(playerItem);

    // Enable button in the players list
    document.getElementById(`player-${playerId}`).disabled = false;
}

// Initialize player list
function init() {
    const playerList = document.getElementById('player-list');
    players.forEach(player => {
        const li = createPlayerItem(player);
        const button = li.querySelector('button');
        button.id = `player-${player.id}`;
        playerList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', init);
