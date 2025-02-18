console.log("Hello world");


let humanScore=0;
let computerScore=0;


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


function getHumanChoice(){
  choice =prompt("Choose scissor, paper or rock").toLowerCase();
  return choice; 
}



for(let i=0;i<5;i++){

    let humanSelection= getHumanChoice();
    let computerSelection= getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(humanSelection);
    console.log(computerSelection);

}



(humanScore>computerScore)? alert("You Win !!"):alert("You lose :( ");





