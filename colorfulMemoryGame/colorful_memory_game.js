const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = []; // Fixed variable name from selectCards to selectedCards
let score = 0;
let timeleft = 30;
let gameInterval;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}

function shuffle(array) {
    // Create a copy of the array to avoid modifying the original
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Fixed array swap syntax
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function handleCardClick(event) {
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

function startGame() {
    // Clear any existing interval first
    if (gameInterval) {
        clearInterval(gameInterval);
    }
    
    startbtn.disabled = true;
    score = 0; // Reset score to zero
    scoreElement.textContent = `Score: ${score}`;
    
    // Reset the global timeleft
    timeleft = 30;
    
    // Remove previous event listener to prevent duplicates
    gameContainer.removeEventListener('click', handleCardClick);
    
    // Shuffle cards and reset game container
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
    
    startGameTimer();
}

function startGameTimer() {
    // Use the global timeleft variable
    timerElement.textContent = `Time Left: ${timeleft}`;
    
    gameInterval = setInterval(() => {
        timeleft--;
        timerElement.textContent = `Time Left: ${timeleft}`;

        if (timeleft === 0) {
            clearInterval(gameInterval);
            alert(`Game Over`);
            startbtn.disabled = false;
            // Don't create a new local timeleft variable here
        }
    }, 1000);
}

startbtn.addEventListener('click', startGame);