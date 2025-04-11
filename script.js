// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
word.innerText = words[Math.floor(Math.random()*words.length)];

//Initializing score
let score = 0;

//Initializing time
let time = 10;

function addWordToDOM () {; 
  let addWord = words[Math.floor(Math.random()*words.length)];
  word.innerText = addWord;
}

function updateScore () {
++score; 
scoreEl.innerText = score; 
}

let timeout = setInterval(updateTime, 1000);

function updateTime () {
  time--;
  timeEl.innerText = time;
    if (time < 0) {
      clearInterval (timeout)
      gameOver(); 
    }
  }

text.addEventListener("keypress", function (e) {
  let userInput = document.querySelector("input").value; 
  if (e.key === "Enter" && userInput === word.innerText) {
    // call updateScore
    updateScore(),
    // give the user a new word by calling addWordToDom
    addWordToDOM();
    // increment time by 5 seconds
    timeEl.innerText = time += 5; 
    // reset input to empty string
    let newWord = this.value; 
    this.value = ""; 
  }
});

function gameOver () {
  document.getElementById("end-game-container").style.display = "block"; 
  const finalScore = document.getElementById("final-score");
  finalScore.innerText = `${score}`;
  }