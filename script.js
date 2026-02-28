let arr = ["Rock", "Paper", "Scissors"];

let usercount = 0;
let computercount = 0;
let Total_Round = 0;
let drawcount = 0;

function PlayGames(userchoice) {
  console.log(userchoice);

  let RandomChoice = Math.floor(Math.random() * 3);

  let ComputerChoice = arr[RandomChoice];

  let wins = "";
  let draw = "";
  

  if (
    (userchoice == "Rock" && ComputerChoice == "Scissors") ||
    (userchoice == "Paper" && ComputerChoice == "Rock") ||
    (userchoice == "Scissors" && ComputerChoice == "Paper")
  ) {
    wins = "User Win 😎";
    usercount++;
    Total_Round++;
  } else if (
    (userchoice == "Scissors" && ComputerChoice == "Rock") ||
    (userchoice == "Rock" && ComputerChoice == "Paper") ||
    (userchoice == "Paper" && ComputerChoice == "Scissors")
  ) {
    wins = "Computer Win 😒";
    computercount++;
    Total_Round++;
  } else {
    draw = "Draw !😑";
     Total_Round++;
     drawcount++;
  }



  let won = document.getElementById("won");
  won.innerText = wins;
  let userch = document.getElementById("userch");
  userch.innerText = "User Choice is : " + userchoice;

  let Computerch = document.getElementById("Computerch");
  Computerch.innerText = "Computer Choice is : " + ComputerChoice;

  let uWin = document.getElementById("uWin");

  uWin.innerText = "User Wins : " + usercount;
  let cWin = document.getElementById("cWin");

  cWin.innerText = "Computer Wins : " + computercount;

  let Draw = document.getElementById("Draw");

  Draw.innerText = draw;

  let round = document.getElementById("round");
  round.innerText = "Round : " + Total_Round;

  let draws = document.getElementById("draws");
  draws.innerText = "Draw : "+ drawcount;

  let play = document.getElementById("play");

  
}
