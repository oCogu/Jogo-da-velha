const buttons = document.querySelectorAll("button")
import checkWinner from "./checkWinner.js"

const buttonRefs = []


buttons.forEach(button => {

    buttonRefs.push(button)

    button.addEventListener("click", e => {

        if(e.currentTarget.innerText === ""){
            e.currentTarget.innerText = 0
            checkWinner(buttonRefs)
        }else{
            console.log("casa já preenchida")
        }
        
    })

})

