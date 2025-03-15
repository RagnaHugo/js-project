console.log("Hello world");

let humanScore=0;
let computerScore=0;




const botones = document.querySelector(".container-button");
const scoreCpu= document.querySelector(".score-cpu");
const scorePlayer = document.querySelector(".score-human");
const main_text=document.querySelector("h2");


botones.addEventListener("click",(e)=>{

    const cpuChoice = getComputerChoice();
    playRound(e.target.textContent.toLowerCase(),cpuChoice);
   main_text.textContent=cpuChoice;
    scoreCpu.textContent="Cpu:"+computerScore;
   scorePlayer.textContent="Player:"+humanScore;

   if(humanScore==5){
    main_text.textContent="WIN"
    scoreCpu.textContent="Cpu:"+0;
   scorePlayer.textContent="Player:"+0;
   humanScore=0;
   computerScore=0;
   }else if(computerScore==5){
    main_text.textContent="LOSE";
    scoreCpu.textContent="Cpu:"+0;
   scorePlayer.textContent="Player:"+0;
   humanScore=0;
   computerScore=0;

   }

    
    


   
});






function getComputerChoice(){
    let choiceHuman=parseInt(Math.random()*3)
    
    if(choiceHuman==0){

        return "scissor";

    }else if(choiceHuman==1){
         return "paper";

    }else{
         return"rock";

    }

}


function playRound(humanChoice, computerChoice){


    if(humanChoice==computerChoice) return ;

    if( humanChoice=="scissor" && computerChoice=="paper"){
        humanScore++;
    }else if(humanChoice=="paper" && computerChoice=="rock"){
        humanScore++;
    }else if(humanChoice=="rock" && computerChoice=="scissor"){
        humanScore++;
    } else {
        computerScore++;
    }
   
}












