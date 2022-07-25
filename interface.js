//Interface do game


//Reação ao click do usuário, qual quadrado ele clickou.
document.addEventListener('DOMContentLoaded', () => {

    //Selecionando os elementos dentro do square
    let squares = document.querySelectorAll(".square");

    //Separando todos os quadrados
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })


})



/*---------------------------------------------------------------*/



//Função criar o click do player
function handleClick(event) {

    //Determinando qual elemento sofreu o evento do click
    let square = event.target;
    let position = square.id;

  

    //Passando a poisição com um tempo
    if (handleMove(position)) {
        
        setTimeout(() => {
           // alert("O jogo acabou - O vencedor foi o jogador " + playerTime)
            if(playerTime == 0){
                alert ("O jogo acabou - O vencedor foi o" + "🛡️");
            }else{
                alert ("O jogo acabou - O vencedor foi o " + "⚔️");
            }
        }, 10);

        updateSquares();
    };

    updateSquare(position);

}


/*---------------------------------------------------------------*/

//Entregando a imagem quadrado por quadrado
function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}



/*Fazendo a atualização de todos os quadrados de uma vez assim que o jogo acabar*/
function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        if(square != ''){
            location.reload();
        }

    })

}


