document.querySelector("title").innerHTML="Dice Game | Rules"
document.querySelector("#second").style.display="none";
document.querySelector(".back").style.display="none";
document.querySelector(".dice1").style.visibility = "hidden";
document.querySelector(".dice2").style.visibility = "hidden";
document.querySelector(".winner").style.visibility = "hidden";
document.querySelector(".but-btn").style.visibility="visible";


var  dice ,dice1,dice2,score, lastValue=0;
var Player=1;
var mainScore1=0;
var mainScore2=0;
var ply1,ply2;
var claps=new Audio("/audio/claps.3gpp");
function startgame(){ 
    document.querySelector("title").innerHTML="Dice Game | Play"  
    ply1= document.getElementById("player1").value;
    ply2= document.getElementById("player2").value;
    score= document.getElementById("score").value;
    if(ply1 =='' ){
        ply1='Player 1';
    } 
    if(ply2 ==''){
        ply2='Player 2';
    }
    if(score ==''){
        score=100;
    }
    document.querySelector(".ply1").textContent= ply1;
    document.querySelector(".ply2").textContent= ply2;
    document.querySelector("#first").style.display="none";
    document.querySelector("#second").style.display="";
    document.querySelector(".back").style.display="";
}
function back(){
    newGame();
    document.querySelector("title").innerHTML="Dice Game | Rules"
    document.querySelector(".back").style.display="none";
    document.querySelector("#first").style.display="";
    document.querySelector("#second").style.display="none";  
}

function diceRandom(){
    dice1 = Math.floor(Math.random()*6)+1;
    dice2 = Math.floor(Math.random()*6)+1;
    document.querySelector(".dice1").src="Images/dice-"+dice1+".png";
    document.querySelector(".dice2").src="Images/dice-"+dice2+".png";
    document.querySelector(".dice1").style.visibility="visible";
    document.querySelector(".dice2").style.visibility="visible";
    if (Player===1) {
        player1();
    } else{
        player2();
    }
    
}
function player1(){
    
    if (dice1===1 || dice2===1 || dice1===6 && dice2===6) {
        document.querySelector(".current-score1").textContent = '0'; 
        lastValue=0;
        Player=0;
        document.querySelector(".player2").style.background='#ffd152';
        document.querySelector(".player1").style.background='#efdab9';
        
    } else{
        document.querySelector(".player1").style.background='#ffd152';
        document.querySelector(".player2").style.background='#efdab9';
        dice=dice1 + dice2;
        lastValue+=eval(dice);
        document.querySelector(".current-score1").textContent = lastValue;    
    }
}
function player2(){
    if (dice1===1 || dice2===1 || dice1===6 && dice2===6) {
        document.querySelector(".current-score2").textContent = '0'; 
        lastValue=0;
        Player=1;
        document.querySelector(".player1").style.background='#ffd152';
        document.querySelector(".player2").style.background='#efdab9';
    } else{
        document.querySelector(".player2").style.background='#ffd152';
        document.querySelector(".player1").style.background='#efdab9';
        dice=dice1 + dice2;
        lastValue+=eval(dice);
        document.querySelector(".current-score2").textContent = lastValue;
    }
}

function hold(){
    if(Player===1)
    {
        
        mainScore1+=eval(lastValue);
        document.querySelector(".main-score1").textContent=mainScore1;
        document.querySelector(".current-score1").textContent = '0'; 
        lastValue=0;
        Player=2;
        document.querySelector(".player2").style.background='#ffd152';
        document.querySelector(".player1").style.background='#efdab9';
        if(mainScore1>=score)
        {
            claps.play();
            document.querySelector(".ply").textContent = ply1;
            document.querySelector(".winner").style.display="";
            document.querySelector(".winner").style.visibility="visible";
            document.querySelector(".but-btn").style.visibility="hidden";
            document.querySelector(".player1").style.background='#ffd152';
            document.querySelector(".player2").style.background='#efdab9';
        }
    }else{
        mainScore2+=eval(lastValue);
        document.querySelector(".main-score2").textContent=mainScore2;
        document.querySelector(".current-score2").textContent = '0'; 
        lastValue=0;
        Player=1;
        document.querySelector(".player1").style.background='#ffd152';
        document.querySelector(".player2").style.background='#efdab9';
        if(mainScore2>=score)
        {
            claps.play();
            document.querySelector(".player2").style.background='#ffd152';
            document.querySelector(".player1").style.background='#efdab9';
            document.querySelector(".ply").textContent = ply2;
            document.querySelector(".winner").style.display="";
            document.querySelector(".winner").style.visibility="visible";
            document.querySelector(".but-btn").style.visibility="hidden";
        }
    }
}
function newGame(){
    claps.pause();
    document.querySelector(".player1").style.background='#ffd152';
    document.querySelector(".player2").style.background='#efdab9';
    document.querySelector(".but-btn").style.visibility="visible";
    document.querySelector(".dice1").style.visibility="hidden";
    document.querySelector(".dice2").style.visibility="hidden";
    document.querySelector(".main-score1").textContent = '0'; 
    document.querySelector(".main-score2").textContent = '0'; 
    document.querySelector(".current-score2").textContent = '0'; 
    document.querySelector(".current-score1").textContent = '0';
    document.querySelector(".winner").style.visibility="hidden";
    lastValue=0;
    Player=1;
    mainScore2=0;
    mainScore1=0;
}





