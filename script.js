// Define the animals array with their names and image file paths
const animals = [
    { name: 'Bird', image: 'bird.jpg' },
    { name: 'Cat', image: 'cat.jpg' },
    { name: 'Dog', image: 'dog.jpg' },
    { name: 'Elephant', image: 'elephant.jpg' },
    { name: 'Fish', image: 'fish.jpg' },
    { name: 'Horse', image: 'horse.jpg' },
    { name: 'Lion', image: 'lion.jpg' },
    { name: 'Monkey', image: 'monkey.jpg' },
    { name: 'Penguin', image: 'penguin.jpg' },
    { name: 'Rabbit', image: 'rabbit.jpg' }
];

// Variables for tracking the current level and shuffled order of animals
let currentLevel = 0;
let shuffledLevels = shuffleArray([...Array(animals.length).keys()]);

// Function to start the game
function startGame() {
    loadLevel(currentLevel);
}

// Function to load each level randomly
function loadLevel(levelIndex) {
    const level = shuffledLevels[levelIndex];
    const animal = animals[level];
    const wrongOptions = animals.filter(a => a !== animal);

    document.getElementById('animalImage').src = animal.image;

    const options = shuffleArray([animal.name, ...getRandomOptions(wrongOptions, 3)]);
    options.forEach((option, index) => {
        document.getElementById(`option${index}`).textContent = option;
    });

    document.getElementById('gameMessage').textContent = '';
}


// Function to check if the selected answer is correct
function checkAnswer(selectedIndex) {
    const selectedOption = document.getElementById(`option${selectedIndex}`).textContent;
    const correctAnswer = animals[shuffledLevels[currentLevel]].name;

    if (selectedOption === correctAnswer) {
        document.getElementById('gameMessage').textContent = 'Correct!';
        setTimeout(() => {
            nextLevel();
        }, 1000);
    } else {
        document.getElementById('gameMessage').textContent = 'Try again!';
    }
}
// Function to play the sound if correct
function checkAnswer(selectedIndex) {
    const selectedOption = document.getElementById(`option${selectedIndex}`).textContent;
    const correctAnswer = animals[shuffledLevels[currentLevel]].name;

    if (selectedOption === correctAnswer) {
        document.getElementById('gameMessage').textContent = 'Correct!';
        // Play the correct answer sound
        document.getElementById('correctSound').play();
        setTimeout(() => {
            nextLevel();
        }, 1000);
    } else {
        document.getElementById('gameMessage').textContent = 'Try again!';
    }
}

// Function to move to the next random level
function nextLevel() {
    currentLevel = (currentLevel + 1) % animals.length;
    if (currentLevel === 0) shuffledLevels = shuffleArray([...Array(animals.length).keys()]);
    loadLevel(currentLevel);
}

// Helper function to get random options from the wrong answers
function getRandomOptions(arr, count) {
    const shuffled = shuffleArray(arr);
    return shuffled.slice(0, count).map(item => item.name);
}

// Helper function to shuffle an array
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Start the game once the window loads
window.onload = startGame;
