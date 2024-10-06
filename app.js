let gameSeq = [] ;
let userSeq = [] ;

let btns = ["green","yellow","red","blue"];

let started = false ; 
let level = 0 ;

let hS = 0 ;    //  by me
let h3 = document.querySelector("h3");  //by me
h3.innerText = `High Score ${hS}`; //by me

let h2 = document.querySelector('h2');

let body = document.querySelector("body");

document.addEventListener("keypress", function(){
    if(started == false){
        started = true ; 
        
        levelUp();

    }
});

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // Random btn choose
    let randIdx = Math.floor(Math.random()*3) ;
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);

}


function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to restart`;
        body.classList.add("danger");
        setTimeout(function(){
            body.classList.remove("danger")
        },100);
        reset();
    }
}

function btnPress(){
    let btn = this ;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

function reset(){

    // by me
    if(level > hS){
        hS = level ;
        h3.innerText = `High Score ${hS}`; 
    }
    // by me


    started = false ;
    gameSeq = [] ;
    userSeq = [] ;
    level = 0 ;
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}