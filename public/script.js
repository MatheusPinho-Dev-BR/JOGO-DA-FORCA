"use strict";

const WORDS = [
  "forca",
  "javascript",
  "navegador",
  "acessibilidade",
  "programa",
  "computador",
  "teclado",
  "desenvolvimento"
];
const MAX_LIVES = 6;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SVG_NS = "http://www.w3.org/2000/svg";

const gameStatus = document.querySelector("#game-status");
const hangman = document.querySelector("#hangman");
const hangmanDescription = document.querySelector("#hangman-description");
const mistakesDisplay = document.querySelector("#mistakes");
const wordDisplay = document.querySelector("#word-display");
const letterButtons = document.querySelector("#letter-buttons");
const guessForm = document.querySelector("#guess-form");
const letterInput = document.querySelector("#letter");
const submitButton = guessForm.querySelector('button[type="submit"]');
const wrongLettersDisplay = document.querySelector("#wrong-letters");
const newGameButton = document.querySelector("#new-game");

const scaffold = document.createElementNS(SVG_NS, "g");
scaffold.setAttribute("stroke", "currentColor");
scaffold.setAttribute("stroke-width", "4");
scaffold.setAttribute("stroke-linecap", "round");

[
  ["line", { x1: "20", y1: "170", x2: "140", y2: "170" }],
  ["line", { x1: "50", y1: "170", x2: "50", y2: "15" }],
  ["line", { x1: "50", y1: "15", x2: "110", y2: "15" }],
  ["line", { x1: "110", y1: "15", x2: "110", y2: "35" }]
].forEach(([tagName, attributes]) => {
  const shape = document.createElementNS(SVG_NS, tagName);
  Object.entries(attributes).forEach(([name, value]) => shape.setAttribute(name, value));
  scaffold.append(shape);
});

const body = document.createElementNS(SVG_NS, "g");
body.setAttribute("fill", "none");
body.setAttribute("stroke", "currentColor");
body.setAttribute("stroke-width", "4");
body.setAttribute("stroke-linecap", "round");
hangman.append(scaffold, body);

let secretWord = "";
let lives = MAX_LIVES;
let gameOver = false;
let guessedLetters = new Set();
let wrongLetters = [];

function normalizeLetter(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleUpperCase("pt-PT");
}

function createSvgShape(tagName, attributes) {
  const shape = document.createElementNS(SVG_NS, tagName);
  Object.entries(attributes).forEach(([name, value]) => shape.setAttribute(name, value));
  return shape;
}

function renderHangman() {
  body.replaceChildren();

  const parts = [
    ["circle", { cx: "110", cy: "48", r: "13" }],
    ["line", { x1: "110", y1: "61", x2: "110", y2: "105" }],
    ["line", { x1: "110", y1: "72", x2: "90", y2: "91" }],
    ["line", { x1: "110", y1: "72", x2: "130", y2: "91" }],
    ["line", { x1: "110", y1: "105", x2: "92", y2: "135" }],
    ["line", { x1: "110", y1: "105", x2: "128", y2: "135" }]
  ];

  parts.slice(0, MAX_LIVES - lives).forEach(([tagName, attributes]) => {
    body.append(createSvgShape(tagName, attributes));
  });

  mistakesDisplay.textContent = String(MAX_LIVES - lives);
  hangmanDescription.textContent =
    `${MAX_LIVES - lives} de ${MAX_LIVES} partes do boneco desenhadas.`;
  document.querySelectorAll(".life-indicators span").forEach((indicator, index) => {
    indicator.classList.toggle("is-lost", index >= lives);
  });
}

function renderWord() {
  const visibleLetters = Array.from(secretWord, (letter) =>
    guessedLetters.has(normalizeLetter(letter)) ? letter.toLocaleUpperCase("pt-PT") : "_"
  );
  wordDisplay.textContent = visibleLetters.join(" ");
  wordDisplay.setAttribute(
    "aria-label",
    `Palavra: ${visibleLetters.map((letter) => letter === "_" ? "lacuna" : letter).join(", ")}`
  );
}

function renderWrongLetters() {
  wrongLettersDisplay.textContent = wrongLetters.length
    ? wrongLetters.join(", ")
    : "Ainda não há letras erradas.";
}

function renderLetterButtons() {
  letterButtons.replaceChildren();

  Array.from(ALPHABET).forEach((letter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = letter;
    button.setAttribute("aria-label", `Tentar a letra ${letter}`);
    button.disabled = gameOver || guessedLetters.has(letter);
    button.addEventListener("click", () => makeGuess(letter));
    letterButtons.append(button);
  });
}

function updateGame() {
  renderWord();
  renderWrongLetters();
  renderHangman();
  renderLetterButtons();

  letterInput.disabled = gameOver;
  submitButton.disabled = gameOver;
}

function finishGame(won) {
  gameOver = true;
  gameStatus.textContent = won
    ? `Vitória! A palavra era "${secretWord.toLocaleUpperCase("pt-PT")}".`
    : `Fim do jogo. A palavra era "${secretWord.toLocaleUpperCase("pt-PT")}".`;
  updateGame();
}

function makeGuess(value) {
  const letter = normalizeLetter(value.trim());
  if (!/^[A-Z]$/.test(letter)) {
    gameStatus.textContent = "Introduz uma letra válida.";
    return;
  }
  if (gameOver || guessedLetters.has(letter)) {
    return;
  }

  guessedLetters.add(letter);
  const isCorrect = Array.from(secretWord).some(
    (secretLetter) => normalizeLetter(secretLetter) === letter
  );

  if (isCorrect) {
    gameStatus.textContent = `Boa! A letra ${letter} existe na palavra.`;
  } else {
    lives -= 1;
    wrongLetters.push(letter);
    gameStatus.textContent = `A letra ${letter} não está na palavra. Perdes uma vida.`;
  }

  updateGame();

  const hasWon = Array.from(secretWord).every(
    (secretLetter) => guessedLetters.has(normalizeLetter(secretLetter))
  );

  if (hasWon) {
    finishGame(true);
  } else if (lives === 0) {
    finishGame(false);
  }
}

function startNewGame() {
  const availableWords = WORDS.length > 1
    ? WORDS.filter((word) => word !== secretWord)
    : WORDS;
  secretWord = availableWords[Math.floor(Math.random() * availableWords.length)];
  lives = MAX_LIVES;
  gameOver = false;
  guessedLetters = new Set();
  wrongLetters = [];
  letterInput.value = "";
  gameStatus.textContent = "Introduz uma letra para começar.";
  updateGame();
}

guessForm.addEventListener("submit", (event) => {
  event.preventDefault();
  makeGuess(letterInput.value);
  letterInput.value = "";
});

document.addEventListener("keydown", (event) => {
  const target = event.target;
  if (
    event.ctrlKey ||
    event.altKey ||
    event.metaKey ||
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target.isContentEditable
  ) {
    return;
  }

  if (/^\p{L}$/u.test(event.key)) {
    makeGuess(event.key);
  }
});

newGameButton.addEventListener("click", startNewGame);

startNewGame();
