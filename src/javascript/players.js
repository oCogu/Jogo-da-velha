export const players = {

    player1 : {
        "name": "Player 1",
        "value": "X"
    },
    player2 : {
        "name": "Player 2",
        "value": "O"
    }

}

//player 1 form inputs
const player1NameInput = document.getElementById("player-1-name")
const player1ValueInput = document.getElementById("player-1-value")

//player 2 form inputs
const player2NameInput = document.getElementById("player-2-name")
const player2ValueInput = document.getElementById("player-2-value")

//form submit
document.getElementById("player-form").addEventListener("submit", e => {
    e.preventDefault()

    //player 1 set
    players.player1.name = player1NameInput.value || "Player 1"
    players.player1.value = player1ValueInput.value || "X"

    //player 2 set
    players.player2.name = player2NameInput.value || "Player 2"
    players.player2.value = player2ValueInput.value || "O"

    document.querySelector(".grid").querySelectorAll("button").forEach(button =>{
        button.innerText = ""
    })

})