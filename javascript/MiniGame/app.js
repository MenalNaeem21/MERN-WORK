let userScore=0;
let compScore=0;
msg=document.querySelector("#msg")

const choices=document.querySelectorAll(".choice")
const userScorePara=document.querySelector("#userScore")
const compScorePara=document.querySelector("#compScore")

const genCompChoice=()=>{
    const options=['rock','paper','scissors']
    const randNumId=Math.floor(Math.random()*3)
    return options[randNumId]


}
const DrawGame=()=>{
    console.log("its a Draw!!!")
    msg.innerText="Game was draw, play again!"
    msg.style.backgroundColor="#081b31"
    
}
const showWinner=(userWin,user_choice,compChoice)=>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore
        msg.innerText=`User won!! your ${user_choice} beats ${compChoice}`
        msg.style.backgroundColor="green"
        //userScore+=1

    }
    else{
        compScore++
        compScorePara.innerText=compScore
        console.log("oops! Computer Won")
        msg.innerText=`Oops! Computer won!! ${compChoice} beats ${user_choice}`

        msg.style.backgroundColor="red"

    }
}
const playGame=(user_choice)=>{
     const compChoice=genCompChoice()
       console.log(`User chose, ${user_choice}`)
       console.log(`comp chose ${compChoice}`)
   
    if(user_choice===compChoice){
        //keep playing or draw
        DrawGame()
        return
    }
    else {
        let userWin=true
        if(user_choice==="rock") {
            userWin=compChoice==="paper"?false:true
          
        }
        else if(user_choice==="paper" ){
            userWin=compChoice==="scissors"?false:true
        }
        else{
            userWin=compChoice==='rock'?false:true
        }
        showWinner(userWin,user_choice,compChoice)

    }



}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const user_choice=choice.getAttribute("id")
        playGame(user_choice)

    })

})
