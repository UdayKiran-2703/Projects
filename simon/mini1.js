let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let max=0;
let h2=document.querySelector("h2");
let btns=["yellow","green","red","purple"];
let levelseq=[];

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
       
       
        levelUp();
      
    }
       
    });

function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},150);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },150);
}
function levelUp(){
    userseq=[];
    
    level++;
    levelseq.push(level);
    console.log(levelseq);
for(let i=0;i<=levelseq.length;i++){
    if(max<levelseq[i]){
        max=levelseq[i];
    }
}
    let h3=document.querySelector("h3");
    h3.innerText=`Your Highest Score is ${max}`;
    h2.innerText=`level:${level}`;
    let randomidx=Math.floor(Math.random()*3);
    let randomcolor=btns[randomidx];
    let randombtn=document.querySelector(`.${randomcolor}`);
    gameFlash(randombtn);
    gameseq.push(randomcolor );

}
function checkAnswer(idx){
    
    if(userseq[idx]===gameseq[idx]){
     if(userseq.length==gameseq.length){
       setTimeout(levelUp,1000) ;
     }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);       
        reset();
    }
}
    function btnPress(){
    let btn=this;
    userFlash(btn);
    userseq.push(btn.getAttribute("id"));
    console.log(userseq);
    checkAnswer(userseq.length-1);
    
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnPress);
}
function reset(){
    gameseq=[];
    userseq=[];
    started=false;
    level=0;
}
