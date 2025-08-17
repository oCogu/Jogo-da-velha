const buttons = document.querySelector(".grid").querySelectorAll("button")
const reset = document.getElementById("reset")
import checkWinner from "./checkWinner.js"
import { players } from "./players.js"

const buttonRefs = []
let currentPlayer = players.player1


buttons.forEach(button => {

    buttonRefs.push(button)

    button.addEventListener("click", e => {

        if(e.currentTarget.innerText === ""){
            e.currentTarget.innerText = currentPlayer.value

            checkWinner(buttonRefs, players)

            currentPlayer = currentPlayer === players.player1 ? players.player2 : players.player1;
            
        }else{
            console.log("casa já preenchida")
        }
        
    })

})

reset.addEventListener("click", e => {
    e.preventDefault()
    buttons.forEach(button => {
        button.innerText = ""
    })

    currentPlayer = players.player1
})