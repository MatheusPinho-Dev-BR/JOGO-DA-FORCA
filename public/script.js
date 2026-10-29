"use strict";

const BASE_WORDS = `
casa apartamento cozinha quarto sala banheiro varanda corredor janela porta
parede telhado teto piso escada garagem jardim quintal portão mesa cadeira
sofá poltrona banco cama colchão travesseiro cobertor lençol armário gaveta
estante prateleira espelho quadro cortina tapete luminária lâmpada fogão forno
geladeira freezer liquidificador batedeira torradeira chaleira cafeteira panela frigideira
prato tigela copo xícara garfo faca colher concha toalha sabonete shampoo
escova pente balde vassoura rodo esponja detergente sabão varal pregador
ferro cabide cesto lixeira caixa envelope pacote chave fechadura campainha
relógio calendário telefone controle tomada interruptor extensão almofada vaso planta
flor vela fósforo ferramenta martelo parafuso arroz feijão macarrão farinha
pão bolo biscoito torrada tapioca milho trigo aveia cevada lentilha ervilha
soja quinoa cuscuz carne frango peixe porco carneiro peru linguiça presunto
bacon ovo queijo leite manteiga iogurte creme requeijão coalhada ricota muçarela
maçã banana laranja limão mamão manga abacaxi melancia morango uva pera
pêssego ameixa cereja figo goiaba jabuticaba caju kiwi coco acerola tomate
batata cenoura cebola alho abóbora pepino alface couve espinafre brócolis beterraba
mandioca inhame berinjela pimentão chuchu rabanete agrião repolho açúcar pimenta
canela cravo noz gengibre baunilha orégano cominho açafrão água suco café
chá refrigerante cerveja vinho sopa caldo salada sorvete pudim cachorro gato
cavalo vaca touro bezerro cabra bode ovelha coelho hamster rato camundongo
esquilo castor lontra raposa lobo urso panda leão tigre onça leopardo
guepardo elefante girafa zebra rinoceronte hipopótamo macaco gorila chimpanzé orangotango
veado cervo alce rena camelo dromedário lhama alpaca búfalo bisão canguru
coala wombat ornitorrinco tatu tamanduá preguiça gambá doninha furão texugo
águia falcão coruja papagaio arara tucano canário pardal pombo gaivota pinguim
avestruz ema cisne flamingo pelicano cegonha corvo rouxinol cobra lagarto iguana
camaleão jacaré crocodilo tartaruga jabuti lagartixa salamandra sapo rã perereca tritão
besouro formiga abelha vespa mosquito borboleta mariposa joaninha gafanhoto baleia
golfinho tubarão polvo lula camarão caranguejo lagosta ostra mexilhão estrela peixe
coração cabeça rosto cabelo olho orelha nariz boca dente língua pescoço
ombro braço cotovelo mão dedo unha peito costas barriga cintura quadril
perna joelho tornozelo pé calcanhar pele osso músculo sangue cérebro estômago
fígado pulmão rim garganta testa bochecha queixo cílio sobrancelha pulso veia
familia pessoa crianca adulto jovem idoso amigo amiga colega vizinho vizinha
pai mãe filho filha irmão irmã primo prima tio tia avó avô
neto neta marido esposa casal professor professora aluno aluna estudante médico médica
dentista enfermeiro enfermeira artista músico música pintor pintora escritor escritora poeta
ator atriz cantor cantora cozinheiro cozinheira padeiro padeira advogado advogada engenheiro engenheira
arquiteto arquiteta motorista piloto maquinista agricultor agricultora jardineiro jardineira pedreiro bombeiro
policial jornalista cientista pesquisador pesquisadora vendedor vendedora gerente secretário secretária veterinário
escola colégio universidade sala aula caderno livro revista jornal papel caneta
lápis borracha apontador mochila estojo carteira quadro giz mapa globo prova
teclado computador monitor tela mouse impressora câmera celular tablet internet programa
arquivo pasta senha código mensagem navegador aplicativo sistema rede servidor página site
cidade bairro rua avenida estrada rodovia ponte praça parque mercado loja farmácia
hospital clínica banco correio museu teatro cinema biblioteca restaurante padaria açougue
hotel fazenda sítio praia montanha floresta ilha campo deserto oceano rio
lago cachoeira riacho vale caverna vulcão planeta estrela cometa nuvem chuva
vento tempestade trovão raio neblina neve gelo fogo terra areia pedra
rocha árvore tronco folha raiz galho semente fruto bosque mata grama
capim bambu palmeira pinheiro carvalho cedro coqueiro floração paisagismo primavera verão
outono inverno manhã tarde noite madrugada semana mês ano dia hora minuto
segundo instante momento passado futuro presente inicio pausa final caminho destino viagem
carro bicicleta motocicleta ônibus caminhão trem metrô avião barco navio canoa
submarino patinete skate roda pneu motor volante banco farol buzina freio
capacete uniforme camisa camiseta calça bermuda vestido saia casaco jaqueta blusa
suéter meia sapato tênis bota sandália chinelo chapéu boné cachecol luva
bolsa mochila carteira cinto pulseira colar anel brinco óculos relógio tecido
algodão couro seda lã renda botão zíper bolso gola manga punho
musica canção ritmo melodia acorde instrumento violão guitarra piano bateria tambor
flauta trompete saxofone violino viola harpa coral banda concerto show palco
teatro pintura desenho escultura fotografia filme novela documentario romance poema historia
arte cultura festa aniversario casamento feriado carnaval natal pascoa presente surpresa
esporte futebol basquete vôlei tênis natação corrida ciclismo ginástica luta boxe
gol ponto equipe time jogador partida campeonato torcida bola raquete rede
campo quadra pista piscina medalha troféu treino jogo regra vitória derrota
número conta soma cálculo medida peso altura distância temperatura velocidade energia força
cor vermelho azul amarelo verde roxo laranja branco preto cinza marrom
rosa violeta dourado prateado claro escuro brilho sombra luz som silencio
alegria tristeza coragem medo calma pressa carinho respeito amizade saudade surpresa
ideia sonho plano projeto trabalho tarefa esforço escolha pergunta resposta dúvida
verdade mentira razão motivo exemplo detalhe problema solução segredo cuidado ajuda
abertura conversa palavra letra frase texto leitura escrita idioma língua nome
forma tipo jeito modo parte lado centro canto ponta linha ponto marca
material metal madeira vidro plástico papel pedra barro ouro prata cobre ferro
aço chumbo lata fio cabo corda corrente cadeado tecido espuma borracha mola
pilha bateria energia tomada plugue controle botao painel ferramenta chave alicate
serrote tesoura agulha linha fita cola tinta pincel rolo escada capacete
fruta legume verdura tempero ingrediente receita cozinha refeição café lanche almoço jantar
fome sede sabor cheiro gosto doce salgado azedo amargo picante fresco quente
frio calor secura umidade clima ambiente natureza animal pessoa objeto lugar
calor energia luz eletricidade gas combustivel gasolina diesel oleo gasolina bateria
navio porto aeroporto estação terminal plataforma passagem bilhete bagagem mala viagem
continente país estado capital fronteira mapa região planeta mundo universo galáxia
português espanhol inglês francês italiano alemão japonês árabe idioma palavra frase
pergunta resposta conversa diálogo notícia artigo reportagem entrevista anúncio cartaz aviso
lei direito dever liberdade justiça paz guerra governo cidade sociedade
economia dinheiro moeda nota preço valor custo compra venda troca lucro
empresa fabrica oficina escritorio loja comercio negocio servico produto cliente fornecedor
papelaria livraria mercado supermercado feira banca quiosque shopping vitrine prateleira
medicina saúde cuidado vacina remédio receita consulta exame sintoma febre tosse gripe
dor ferida curativo hospital paciente tratamento repouso dieta exercício higiene banho
computador notebook laptop monitor teclado mouse cabo carregador bateria tela aplicativo
fotografia imagem retrato paisagem desenho pintura cor pincel tela moldura galeria
escritorio agenda bloco planilha documento contrato formulario assinatura carimbo pasta arquivo
beleza sorriso gesto olhar voz fala passo movimento postura sinal simbolo
caráter pessoa talento aptidao habilidade pratica experiencia memoria atencao foco raciocinio
`
  .trim()
  .split(/\s+/u);

const REGULAR_AR_VERBS = `
amar andar acordar admirar adorar ajudar alegrar apagar apontar apertar arrumar
assinar assustar atacar atrapalhar avisar baixar bailar banhar batalhar beijar brilhar
buscar calcular caminhar cantar capacitar cuidar chamar chegar chutar circular colaborar
comemorar comparar completar comprar concentrar confirmar conquistar conversar cozinhar contar
continuar copiar cortar costurar cuidar danar decorar descansar desejar desenhar despertar
destacar estudar escutar esperar explicar explorar fabricar faltar festejar ficar filmar
finalizar formar fotografar ganhar gastar gostar guardar imaginar importar instalar jantar
jogar juntar lavar levantar ligar limpar lucrar machucar mandar marcar melhorar
misturar morar mudar nadar notar observar ocupar ofertar olhar operar organizar
orientar pagar parar participar pesquisar pintar planejar plantar praticar preparar sambar
procurar programar provar publicar puxar questionar realizar respirar retornar revelar revisar
rezar rodar salvar secar separar soltar sonhar superar telefonar terminar tocar
tomar trabalhar trocar usar variar viajar visitar votar zelar
`
  .trim()
  .split(/\s+/u);

const MAX_LIVES = 6;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SVG_NS = "http://www.w3.org/2000/svg";

const gameStatus = document.querySelector("#game-status");
const pageTitle = document.querySelector("title");
const statusDot = gameStatus.querySelector(".status-dot");
const hangman = document.querySelector("#hangman");
const hangmanDescription = document.querySelector("#hangman-description");
const mistakesDisplay = document.querySelector("#mistakes");
const wordADisplay = document.querySelector("#word-a-display");
const wordBDisplay = document.querySelector("#word-b-display");
const wordBCard = wordBDisplay.closest(".word-card");
const wordPair = document.querySelector(".word-pair");
const wordSection = document.querySelector("#word-section");
const wordSectionTitle = document.querySelector("#word-section-title");
const wordSectionHint = document.querySelector("#word-section-hint");
const panelHint = document.querySelector("#panel-hint");
const letterButtons = document.querySelector("#letter-buttons");
const guessForm = document.querySelector("#guess-form");
const letterInput = document.querySelector("#letter");
const submitButton = guessForm.querySelector('button[type="submit"]');
const wrongLettersDisplay = document.querySelector("#wrong-letters");
const newGameButton = document.querySelector("#new-game");
const soloModeButton = document.querySelector("#solo-mode");
const duoModeButton = document.querySelector("#duo-mode");

function normalizeLetter(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .toLocaleUpperCase("pt-BR");
}

function conjugateRegularArVerb(infinitive) {
  const stem = infinitive.slice(0, -2);
  return [
    infinitive,
    `${stem}o`,
    `${stem}as`,
    `${stem}a`,
    `${stem}amos`,
    `${stem}ais`,
    `${stem}am`
  ];
}

const wordCandidates = [
  ...BASE_WORDS,
  ...REGULAR_AR_VERBS.flatMap(conjugateRegularArVerb)
];
const uniqueWords = new Map(
  wordCandidates.map((word) => [normalizeLetter(word), word])
);
const WORDS = Array.from(uniqueWords.values()).slice(0, 1000);

if (WORDS.length !== 1000) {
  throw new Error(`O dicionário precisa conter 1.000 palavras; contém ${WORDS.length}.`);
}

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

let wordA = "";
let wordB = "";
let gameMode = "duo";
let lives = MAX_LIVES;
let gameResult = null;
let guessedLetters = new Set();
let wrongLetters = [];

function getActiveWords() {
  return gameMode === "solo" ? [wordA] : [wordA, wordB];
}

function setStatus(message) {
  gameStatus.replaceChildren(statusDot, document.createTextNode(message));
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
  const mistakes = MAX_LIVES - lives;

  parts.slice(0, mistakes).forEach(([tagName, attributes]) => {
    body.append(createSvgShape(tagName, attributes));
  });

  mistakesDisplay.textContent = String(mistakes);
  hangmanDescription.textContent = `${mistakes} de ${MAX_LIVES} partes do boneco desenhadas.`;
  document.querySelectorAll(".life-indicators span").forEach((indicator, index) => {
    indicator.classList.toggle("is-lost", index >= lives);
  });
}

function renderWord(display, word, number) {
  const fragment = document.createDocumentFragment();
  const spokenLetters = [];

  Array.from(word).forEach((letter) => {
    const isRevealed =
      guessedLetters.has(normalizeLetter(letter)) || gameResult === "lost";
    const tile = document.createElement("span");
    tile.className = "letter-slot";
    tile.textContent = isRevealed ? letter.toLocaleUpperCase("pt-BR") : "";
    tile.setAttribute("aria-hidden", "true");
    fragment.append(tile);
    spokenLetters.push(isRevealed ? letter : "lacuna");
  });

  display.replaceChildren(fragment);
  display.setAttribute("aria-label", `Palavra ${number}: ${spokenLetters.join(", ")}`);
}

function renderWrongLetters() {
  wrongLettersDisplay.textContent = wrongLetters.length
    ? wrongLetters.join(", ")
    : "Ainda não há letras erradas.";
}

function renderLetterButtons() {
  letterButtons.replaceChildren();
  const correctLetters = new Set(
    getActiveWords().flatMap((word) => Array.from(word, normalizeLetter))
  );

  Array.from(ALPHABET).forEach((letter) => {
    const button = document.createElement("button");
    const wasGuessed = guessedLetters.has(letter);
    button.type = "button";
    button.textContent = letter;
    button.setAttribute("aria-label", `Tentar a letra ${letter}`);
    button.disabled = Boolean(gameResult) || wasGuessed;

    if (wasGuessed) {
      button.classList.add(correctLetters.has(letter) ? "is-correct" : "is-wrong");
    }

    button.addEventListener("click", () => makeGuess(letter));
    letterButtons.append(button);
  });
}

function updateGame() {
  const isSolo = gameMode === "solo";
  pageTitle.textContent = `Jogo da Forca — ${isSolo ? "Solo" : "Dupla"}`;
  renderWord(wordADisplay, wordA, 1);
  if (!isSolo) {
    renderWord(wordBDisplay, wordB, 2);
  }
  wordBCard.hidden = isSolo;
  wordPair.classList.toggle("is-solo", isSolo);
  wordSection.setAttribute("aria-label", isSolo ? "Palavra para adivinhar" : "Palavras para adivinhar");
  wordSectionTitle.textContent = isSolo ? "A palavra" : "As palavras";
  wordSectionHint.textContent = isSolo ? "DESCUBRA A PALAVRA" : "DESCUBRA AS DUAS";
  panelHint.textContent = isSolo
    ? "Descubra a palavra antes de acabar suas seis vidas."
    : "Um erro só acontece quando a letra não aparece em nenhuma palavra.";
  soloModeButton.setAttribute("aria-pressed", String(isSolo));
  duoModeButton.setAttribute("aria-pressed", String(!isSolo));
  renderWrongLetters();
  renderHangman();
  renderLetterButtons();

  letterInput.disabled = Boolean(gameResult);
  submitButton.disabled = Boolean(gameResult);
}

function hasWon() {
  return getActiveWords().every((word) =>
    Array.from(word).every((letter) => guessedLetters.has(normalizeLetter(letter)))
  );
}

function finishGame(result) {
  gameResult = result;
  setStatus(
    result === "won"
      ? gameMode === "solo"
        ? "Você venceu! Descobriu a palavra."
        : "Você venceu! Descobriu as duas palavras."
      : `Fim de jogo. ${gameMode === "solo" ? "A palavra era" : "As palavras eram"} ${getActiveWords()
          .map((word) => word.toLocaleUpperCase("pt-BR"))
          .join(" e ")}.`
  );
  updateGame();
}

function makeGuess(value) {
  const letter = normalizeLetter(value.trim());
  if (!/^[A-Z]$/u.test(letter)) {
    setStatus("Digite uma letra válida.");
    return;
  }
  if (gameResult || guessedLetters.has(letter)) {
    return;
  }

  guessedLetters.add(letter);
  const isCorrect = getActiveWords().some((word) =>
    Array.from(word).some((wordLetter) => normalizeLetter(wordLetter) === letter)
  );

  if (isCorrect) {
    setStatus(
      gameMode === "solo"
        ? `Boa! A letra ${letter} está na palavra.`
        : `Boa! A letra ${letter} aparece em pelo menos uma palavra.`
    );
  } else {
    lives -= 1;
    wrongLetters.push(letter);
    setStatus(
      gameMode === "solo"
        ? `A letra ${letter} não está na palavra. Você perdeu uma vida.`
        : `A letra ${letter} não aparece em nenhuma palavra. Você perdeu uma vida.`
    );
  }

  updateGame();

  if (hasWon()) {
    finishGame("won");
  } else if (lives === 0) {
    finishGame("lost");
  }
}

function startNewGame(mode = gameMode) {
  gameMode = mode;
  const firstIndex = Math.floor(Math.random() * WORDS.length);
  wordA = WORDS[firstIndex];
  if (gameMode === "duo") {
    let secondIndex = Math.floor(Math.random() * (WORDS.length - 1));
    if (secondIndex >= firstIndex) {
      secondIndex += 1;
    }
    wordB = WORDS[secondIndex];
  } else {
    wordB = "";
  }
  lives = MAX_LIVES;
  gameResult = null;
  guessedLetters = new Set();
  wrongLetters = [];
  letterInput.value = "";
  setStatus("Escolha uma letra para começar.");
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
    event.repeat ||
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
soloModeButton.addEventListener("click", () => startNewGame("solo"));
duoModeButton.addEventListener("click", () => startNewGame("duo"));

startNewGame();
