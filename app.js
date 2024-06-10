let userScore=0;
let compScore=0;

const generateComputerChoice=()=>{
     const options=["Paper","Rock","Scissors"];
     const i=Math.floor(Math.random()*3);
     return options[i];
}

const choices= document.querySelectorAll(".choice");
let playerWins=0;
let computerWins=0;

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        const computerChoice=generateComputerChoice();
        
       let winner=playGame(userChoice,computerChoice);
       if(winner==="draw"){
        window.document.querySelector("#msg").innerText=`It's a Draw Play again. Player plays ${userChoice}. Comp plays ${computerChoice}.`;
        window.document.querySelector("#msg").style.backgroundColor="yellow";
       }else if(winner==="true"){
        window.document.querySelector("#msg").innerText=`Player wins!!Player plays ${userChoice}. Comp plays ${computerChoice}.`;
        window.document.querySelector("#msg").style.backgroundColor="green";
        playerWins+=1;
        window.document.querySelector("#userScore").innerText=playerWins.toString();
       }else{
        window.document.querySelector("#msg").innerText=`Computer wins!!Player plays ${userChoice}. Comp plays ${computerChoice}.`;
        window.document.querySelector("#msg").style.backgroundColor="red";
        computerWins+=1;
        window.document.querySelector("#computerScore").innerText=computerWins.toString();
       }
        
    });

});

//OR
// function EventTeller(){
//     for( let choice of choices){
//         console.log(choice);
//         choice.addEventListener("click",()=>{
//             console.log("clicked",choice);
//         });
//     };
// };


function playGame(userChoice,computerChoice){
    console.log("user choice",userChoice,computerChoice);
    if (userChoice===computerChoice){
        return "draw";
    }else if(userChoice==="Rock" && computerChoice==="Scissors" ){
    return "true";
    }else if (userChoice==="Paper" && computerChoice==="Rock"){
        return "true";
    }else if(userChoice==="Scissors" && computerChoice==="Paper"){
        return "true";
    }else{
        return "false";
    }
}
