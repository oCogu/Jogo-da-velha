const checkWinner = (buttonRefs, players) =>{
    if(
        //linhas-
        buttonRefs[0].innerText === players.player1.value && buttonRefs[1].innerText === players.player1.value && buttonRefs[2].innerText === players.player1.value ||
        buttonRefs[3].innerText === players.player1.value && buttonRefs[4].innerText === players.player1.value && buttonRefs[5].innerText === players.player1.value ||
        buttonRefs[6].innerText === players.player1.value && buttonRefs[7].innerText === players.player1.value && buttonRefs[8].innerText === players.player1.value ||
        //colunas
        buttonRefs[0].innerText === players.player1.value && buttonRefs[3].innerText === players.player1.value && buttonRefs[6].innerText === players.player1.value ||
        buttonRefs[1].innerText === players.player1.value && buttonRefs[4].innerText === players.player1.value && buttonRefs[7].innerText === players.player1.value ||
        buttonRefs[2].innerText === players.player1.value && buttonRefs[5].innerText === players.player1.value && buttonRefs[8].innerText === players.player1.value ||
        //diagonais
        buttonRefs[0].innerText === players.player1.value && buttonRefs[4].innerText === players.player1.value && buttonRefs[8].innerText === players.player1.value ||
        buttonRefs[6].innerText === players.player1.value && buttonRefs[4].innerText === players.player1.value && buttonRefs[2].innerText === players.player1.value
    ){
        console.log("1")
    }

    if(
        //linhas-
        buttonRefs[0].innerText === players.player2.value && buttonRefs[1].innerText === players.player2.value && buttonRefs[2].innerText === players.player2.value ||
        buttonRefs[3].innerText === players.player2.value && buttonRefs[4].innerText === players.player2.value && buttonRefs[5].innerText === players.player2.value ||
        buttonRefs[6].innerText === players.player2.value && buttonRefs[7].innerText === players.player2.value && buttonRefs[8].innerText === players.player2.value ||
        //colunas
        buttonRefs[0].innerText === players.player2.value && buttonRefs[3].innerText === players.player2.value && buttonRefs[6].innerText === players.player2.value ||
        buttonRefs[1].innerText === players.player2.value && buttonRefs[4].innerText === players.player2.value && buttonRefs[7].innerText === players.player2.value ||
        buttonRefs[2].innerText === players.player2.value && buttonRefs[5].innerText === players.player2.value && buttonRefs[8].innerText === players.player2.value ||
        //diagonais
        buttonRefs[0].innerText === players.player2.value && buttonRefs[4].innerText === players.player2.value && buttonRefs[8].innerText === players.player2.value ||
        buttonRefs[6].innerText === players.player2.value && buttonRefs[4].innerText === players.player2.value && buttonRefs[2].innerText === players.player2.value
    ){
        console.log("0")
    }

    return null
}

export default checkWinner