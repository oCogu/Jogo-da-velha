const checkWinner = (buttonRefs) =>{
    if(
        //linhas-
        buttonRefs[0].innerText === "1" && buttonRefs[1].innerText === "1" && buttonRefs[2].innerText === "1" ||
        buttonRefs[3].innerText === "1" && buttonRefs[4].innerText === "1" && buttonRefs[5].innerText === "1" ||
        buttonRefs[6].innerText === "1" && buttonRefs[7].innerText === "1" && buttonRefs[8].innerText === "1" ||
        //colunas
        buttonRefs[0].innerText === "1" && buttonRefs[3].innerText === "1" && buttonRefs[6].innerText === "1" ||
        buttonRefs[1].innerText === "1" && buttonRefs[4].innerText === "1" && buttonRefs[7].innerText === "1" ||
        buttonRefs[2].innerText === "1" && buttonRefs[5].innerText === "1" && buttonRefs[8].innerText === "1" ||
        //diagonais
        buttonRefs[0].innerText === "1" && buttonRefs[4].innerText === "1" && buttonRefs[8].innerText === "1" ||
        buttonRefs[6].innerText === "1" && buttonRefs[4].innerText === "1" && buttonRefs[2].innerText === "1"
    ){
        console.log("1")
    }

    if(
        //linhas-
        buttonRefs[0].innerText === "0" && buttonRefs[1].innerText === "0" && buttonRefs[2].innerText === "0" ||
        buttonRefs[3].innerText === "0" && buttonRefs[4].innerText === "0" && buttonRefs[5].innerText === "0" ||
        buttonRefs[6].innerText === "0" && buttonRefs[7].innerText === "0" && buttonRefs[8].innerText === "0" ||
        //colunas
        buttonRefs[0].innerText === "0" && buttonRefs[3].innerText === "0" && buttonRefs[6].innerText === "0" ||
        buttonRefs[1].innerText === "0" && buttonRefs[4].innerText === "0" && buttonRefs[7].innerText === "0" ||
        buttonRefs[2].innerText === "0" && buttonRefs[5].innerText === "0" && buttonRefs[8].innerText === "0" ||
        //diagonais
        buttonRefs[0].innerText === "0" && buttonRefs[4].innerText === "0" && buttonRefs[8].innerText === "0" ||
        buttonRefs[6].innerText === "0" && buttonRefs[4].innerText === "0" && buttonRefs[2].innerText === "0"
    ){
        console.log("0")
    }
}

export default checkWinner