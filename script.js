// Define the animals array with their names and image file paths
const animals = [
    { name: 'Bird', image: 'bird.jpg' },
    { name: 'Cat', image: 'cat.jpg' },
    { name: 'Dog', image: 'dog.jpg' },
    { name: 'Elephant', image: 'elephant.jpg' },
    { name: 'Fish', image: 'fish.jpg' },
    { name: 'Horse', image: 'horse1.jpg' },
    { name: 'Lion', image: 'lion.jpg' },
    { name: 'Monkey', image: 'monkey1.jpg' },
    { name: 'Penguin', image: 'penguin1.jpg' },
    { name: 'Rabbit', image: 'rabbit.jpg' },
    { name: 'Giraffe', image: 'giraffe.jpg' },
    { name: 'Zebra', image: 'zebra.jpg' },
    { name: 'Panda', image: 'panda.jpg' },
    { name: 'Tiger', image: 'tiger.jpg' },
    { name: 'Koala', image: 'koala.jpg' },
    { name: 'Deer', image: 'deer.jpg' },
    { name: 'Crocodile', image: 'crocodile.jpg' },
    { name: 'Fox', image: 'fox.jpg' },
    { name: 'Dolphin', image: 'dolphin.jpg' },
    { name: 'Shark', image: 'shark.jpg' },
    { name: 'Bear', image: 'bear.jpg' },
    { name: 'Wolf', image: 'wolf1.jpg' },
    { name: 'Kangaroo', image: 'kangaroo.jpg' },
    { name: 'Lion', image: 'lion.jpg' },
    { name: 'Snake', image: 'snake.jpg' },
    { name: 'Turtle', image: 'turtle.jpg' },
    { name: 'Pig', image: 'pig.jpg' },
    { name: 'Owl', image: 'owl.jpg' },
    { name: 'Frog', image: 'frog.jpg' },
    { name: 'Leopard', image: 'leopard.jpg' },
    { name: 'Bat', image: 'bat.jpg' },
    { name: 'Hippopotamus', image: 'hippo.jpg' },
    { name: 'Camel', image: 'camel.jpg' },
    { name: 'Chicken', image: 'chicken.jpg' },
    { name: 'Duck', image: 'duck.jpg' },
    { name: 'Sheep', image: 'sheep.jpg' },
    { name: 'Goat', image: 'goat.jpg' },
    { name: 'Parrot', image: 'parrot.jpg' },
    { name: 'Bee', image: 'bee.jpg' },
    { name: 'Mouse', image: 'mouse.jpg' },
    { name: 'Squirrel', image: 'squirrel.jpg' },
    { name: 'Water buffalo', image: 'waterbuffalo.jpg' },
    { name: 'Goose', image: 'goose.jpg' },
    { name: 'Porcupine', image: 'image.png' }
    
];

// Variables for tracking the current level and shuffled order of animals
let currentLevel = 0;
let shuffledLevels = shuffleArray([...Array(animals.length).keys()]);
let clickCount = 0;  // Counter for image clicks

// Function to start the game
function startGame() {
    loadLevel(currentLevel);
    // Add click event listener to animal image for speech
    document.getElementById('animalImage').addEventListener('click', speakAnimalName);
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
    // Reset click count for the new level
    clickCount = 0;

    document.getElementById('gameMessage').textContent = '';
}

// Function to make the browser say the animal name when image is clicked
function speakAnimalName() {
    if (clickCount < 3) {  // Allow speaking the name only if clicked less than 3 times
        const animal = animals[shuffledLevels[currentLevel]];
        const utterance = new SpeechSynthesisUtterance(animal.name);
        speechSynthesis.speak(utterance);
        clickCount++;  // Increment click count
    }
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

// Example function to change the image dynamically
function changeAnimalImage(animalName) {
    const animalImage = document.getElementById('animalImage');
    animalImage.src = `resource/${animalName}.jpg`; // dynamically setting the image source
    animalImage.alt = animalName; // update the alt text
}

// Call this function to change the image to an elephant, for example:
changeAnimalImage('Elephant');
changeAnimalImage('Bird');
changeAnimalImage('Cat');
changeAnimalImage('Dog');
changeAnimalImage('Fish');
changeAnimalImage('Horse');
changeAnimalImage('Lion');
changeAnimalImage('Monkey');
changeAnimalImage('Penguin');
changeAnimalImage('Rabbit');
changeAnimalImage('Giraffe');
changeAnimalImage('Zebra');
changeAnimalImage('Kangaroo');
changeAnimalImage('Panda');
changeAnimalImage('Tiger');
changeAnimalImage('Koala');
changeAnimalImage('Deer');
changeAnimalImage('Crocodile');
changeAnimalImage('Fox');
changeAnimalImage('Dolphin');
changeAnimalImage('Shark');
changeAnimalImage('Bear');
changeAnimalImage('Wolf');
changeAnimalImage('Snake');
changeAnimalImage('Turtle');
changeAnimalImage('Pig');
changeAnimalImage('Owl');
changeAnimalImage('Frog');
changeAnimalImage('Leopard');
changeAnimalImage('Bat');
changeAnimalImage('Hippo');
changeAnimalImage('Camel');
changeAnimalImage('Chicken');
changeAnimalImage('Duck');
changeAnimalImage('Sheep');
changeAnimalImage('Goat');
changeAnimalImage('Parrot');
changeAnimalImage('Bee');
changeAnimalImage('Mouse');
changeAnimalImage('Squirrel');
changeAnimalImage('Water Buffalo');
changeAnimalImage('Goose');
changeAnimalImage('Porcupine');

// Start the game once the window loads
window.onload = startGame;
