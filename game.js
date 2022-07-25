//Iniciação do jogo

/*-----------------------CRIANDO VARIÁVEIS-----------------------*/

//Vai ser uma board de 9 posições vazias
let board = ['', '', '', '', '', '', '', '', ''];

//A vez do player (0 é o player 1) (1 é o player 2).
let playerTime = 0;
let symbols = ['o', 'x'];

//Acabou o game
let gameOver = false;


//Estados que dão a vitória
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]

var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {
    
    location.reload();
});


/*-----------------------CRIANDO FUNÇÕES-----------------------*/


//Função para eventuar o movimento do player
function handleMove(position) {
    //Verificando se o jogo acabou
    if (gameOver = false) {
        return
    }


    //Para não sobescrever a jogada dos players
    if (board[position] == "") {
        board[position] = symbols[playerTime];

        //Verificando se houve um vencedor
        gameOver = isWin();

        //Se não tivermos um vencedor, a vez é passada para o proximo player
        if (!gameOver) {
            //Passando a vez do jogador
            //Se isso for verdadeiro, mude, se não, permaneça
            playerTime = (playerTime == 0) ? 1 : 0;

            /*Forma fácil de entender
            if (playerTime == 0) {
                playerTime = 1;
            } else {
                playerTime = 0;
            }*/
        }

    }

    return gameOver;
}

//Função para o vencedor
function isWin() {

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        //Verificação dos elementos, determinando se são iguais
        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {

            return true;
        }

    }

    return false;


}