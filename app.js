let userScore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepp=document.querySelector("#userScore");
const compscorep=document.querySelector("#computerscore");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randomidx= Math.floor(Math.random()*3);
    return options[randomidx];
};
const drawgame=()=>{
    console.log("Game was draw");
    msg.innerText="It's a Draw :| Play Again!"
    msg.style.backgroundColor="Grey";
    msg.style.color="Black";
};
const showWiner=(userwin, userchoice, compchoice)=>{
    if(userwin){
        userScore++;
        userscorepp.innerText=userScore;
        msg.innerText=`You Win!! ${userchoice} beats ${compchoice} ;) `;
        msg.style.backgroundColor="Purple";
        msg.style.color="white";
    }
    else{
        computerscore++;
        compscorep.innerText=computerscore;
        msg.innerText=`You Lose.. ${compchoice} beats ${userchoice} :)`;
        msg.style.backgroundColor="Green";
        msg.style.color="white";
    }
};
const playgame=(userchoice)=>{
    console.log("user choice = ", userchoice);
    //computer choice
    const compchoice=gencompchoice();
    console.log("Compter choice = ",compchoice);

    if(userchoice===compchoice){
        //Draw
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showWiner(userwin,userchoice,compchoice);
    }
};
choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("Choice was clicked",userchoice);
        playgame(userchoice);
    });
});