Age como um Engenheiro de Software especializado em Vanilla JavaScript, arquitetura de estado e manipulação eficiente do DOM.

A tua tarefa é desenvolver um "Jogo da Forca - Modo Dueto" (inspirado na dinâmica do jogo Termo/Duotermo), utilizando HTML, CSS e JavaScript puros.

Deves implementar as seguintes regras de negócio e arquitetura:

1. Dicionário e Seleção:
- Cria uma base de dados local (um array no JS ou um JSON carregado via fetch) contendo 1000 palavras em português.
- No início de cada partida, seleciona aleatoriamente 2 palavras independentes (ex: `wordA` e `wordB`). As palavras não podem ser iguais.

2. Gestão de Estado Duplo (O Core do Jogo):
- O jogo tem duas palavras ativas em simultâneo, mas apenas uma forca (partilhando um limite máximo de 6 vidas/erros).
- Cria variáveis de estado claras para acompanhar o progresso de cada palavra de forma independente (ex: `guessedLettersA` e `guessedLettersB`, ou um único Set de `guessedLetters` testado contra ambas).

3. Lógica de Validação:
- Quando o jogador introduz uma letra (via teclado físico ou cliques na interface), o sistema testa essa letra contra a `wordA` e a `wordB`.
- Condição de Erro: O jogador **só perde uma vida** (e uma parte da forca é desenhada) se a letra testada não existir em **NENHUMA** das duas palavras.
- Se a letra existir apenas na `wordA`, ela é revelada apenas na `wordA`. A forca não sofre alterações.

4. Interface e DOM:
- HTML/CSS: Divide a secção da palavra (`word-display`) em dois painéis ou contentores distintos, colocados lado a lado ou um em cima do outro.
- Teclado Virtual: Mantém apenas um teclado no ecrã. Quando uma letra é escolhida, o botão deve ser desativado. Podes adicionar classes CSS para indicar se a letra foi um "acerto" (se estava em pelo menos uma palavra) ou um "erro" absoluto.
- Responsividade: O CSS deve garantir que os dois painéis de palavras não quebram o layout em ecrãs de telemóvel.

5. Condições de Fim de Jogo:
- Vitória: O jogador acerta todas as letras de ambas as palavras e as vidas são > 0.
- Derrota: As vidas chegam a 0 antes de as duas palavras serem totalmente reveladas. Exibe as duas palavras corretas no final.

Gera os ficheiros `index.html`, `style.css` e `script.js` completos e prontos a executar no browser. Foca-te num design limpo e moderno (Dark Mode) e num código JS modular com funções pequenas e bem nomeadas.