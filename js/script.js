const words = [
  { word: "ABACAXI", category: "Fruta" },
  { word: "BORBOLETA", category: "Natureza" },
  { word: "CHOCOLATE", category: "Comida" },
  { word: "ELEFANTE", category: "Animais" },
  { word: "GIRASSOL", category: "Natureza" },
  { word: "JANELA", category: "Casa" },
  { word: "MONTANHA", category: "Geografia" },
  { word: "PIPOCA", category: "Comida" },
  { word: "TELEFONE", category: "Objetos" },
  { word: "CORAÇÃO", category: "Corpo humano" },
  { word: "MÚSICA", category: "Arte" },
  { word: "AÇÚCAR", category: "Comida" },
  { word: "RELÓGIO", category: "Objetos" },
  { word: "FUTEBOL", category: "Desporto" },
  { word: "BIBLIOTECA", category: "Lugares" },
  { word: "PRAIA", category: "Natureza" },
  { word: "ESPELHO", category: "Casa" },
  { word: "DINOSSAURO", category: "Animais" },
  { word: "ESTRELA", category: "Espaço" },
  { word: "CAFÉ", category: "Comida" }
];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const maxMistakes = 6;

const wordElement = document.querySelector("#word");
const categoryElement = document.querySelector("#category");
const keyboardElement = document.querySelector("#keyboard");
const wrongLettersElement = document.querySelector("#wrong-letters");
const livesCountElement = document.querySelector("#lives-count");
const messageElement = document.querySelector("#game-message");
const restartButton = document.querySelector("#restart-button");
const personParts = document.querySelectorAll(".person-part");

let currentWord = "";
let guessedLetters = new Set();
let wrongLetters = [];
let gameOver = false;
let previousWord;

function normalizeLetter(letter) {
  return letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
}

function startGame() {
  const choices = words.filter(({ word }) => word !== previousWord);
  const selected = choices[Math.floor(Math.random() * choices.length)];
  currentWord = selected.word;
  previousWord = currentWord;
  guessedLetters = new Set();
  wrongLetters = [];
  gameOver = false;

  categoryElement.textContent = selected.category;
  messageElement.textContent = "Escolhe uma letra para começar.";
  messageElement.className = "game-message";
  renderKeyboard();
  renderGame();
}

function renderKeyboard() {
  keyboardElement.replaceChildren();

  for (const letter of alphabet) {
    const key = document.createElement("button");
    key.type = "button";
    key.className = "key";
    key.textContent = letter;
    key.setAttribute("aria-label", `Letra ${letter}`);
    key.addEventListener("click", () => guessLetter(letter));
    keyboardElement.append(key);
  }
}

function renderGame() {
  const normalizedWord = normalizeLetter(currentWord);
  const won = [...normalizedWord].every((letter) => !alphabet.includes(letter) || guessedLetters.has(letter));

  wordElement.replaceChildren();
  [...currentWord].forEach((character, index) => {
    const slot = document.createElement("span");
    const normalizedCharacter = normalizeLetter(character);
    const isLetter = alphabet.includes(normalizedCharacter);
    slot.className = "letter-slot";

    if (!isLetter) {
      slot.classList.add("is-space");
      slot.setAttribute("aria-hidden", "true");
    } else if (guessedLetters.has(normalizedCharacter) || (gameOver && !won)) {
      slot.classList.add("is-revealed");
      if (gameOver && !won && !guessedLetters.has(normalizedCharacter)) {
        slot.classList.add("is-missed");
      }
      slot.textContent = character;
    } else {
      slot.textContent = "";
    }

    slot.setAttribute("aria-label", isLetter && !guessedLetters.has(normalizedCharacter) && !gameOver
      ? `Letra ${index + 1}, oculta`
      : character);
    wordElement.append(slot);
  });

  wrongLettersElement.textContent = wrongLetters.length ? wrongLetters.join(" · ") : "Ainda nenhuma";
  wrongLettersElement.classList.toggle("is-empty", wrongLetters.length === 0);
  livesCountElement.innerHTML = `<strong>${maxMistakes - wrongLetters.length}</strong> <span>restantes</span>`;

  personParts.forEach((part, index) => {
    part.classList.toggle("is-visible", index < wrongLetters.length);
  });

  keyboardElement.querySelectorAll(".key").forEach((key) => {
    const letter = key.textContent;
    key.disabled = gameOver || guessedLetters.has(letter);
    key.classList.toggle("is-correct", guessedLetters.has(letter) && normalizedWord.includes(letter));
    key.classList.toggle("is-wrong", wrongLetters.includes(letter));
  });

  if (won) {
    finishGame(true);
  } else if (wrongLetters.length >= maxMistakes) {
    finishGame(false);
  }
}

function guessLetter(letter) {
  const normalizedLetter = normalizeLetter(letter);
  if (gameOver || !alphabet.includes(normalizedLetter) || guessedLetters.has(normalizedLetter)) {
    return;
  }

  guessedLetters.add(normalizedLetter);
  if (!normalizeLetter(currentWord).includes(normalizedLetter)) {
    wrongLetters.push(normalizedLetter);
  }
  renderGame();
}

function finishGame(won) {
  gameOver = true;
  messageElement.textContent = won
    ? "Parabéns! Adivinhaste a palavra. 🎉"
    : `Fim de jogo! A palavra era ${currentWord}.`;
  messageElement.className = `game-message ${won ? "is-win" : "is-loss"}`;
  keyboardElement.querySelectorAll(".key").forEach((key) => {
    key.disabled = true;
  });
}

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey || event.metaKey || event.altKey || event.repeat) {
    return;
  }
  if (/^[a-záàâãéêíóôõúüç]$/i.test(event.key)) {
    guessLetter(event.key);
  }
});

restartButton.addEventListener("click", startGame);
startGame();
