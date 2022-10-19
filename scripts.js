const playerFactory = (userName, XorO) => {
  score = 0; 
  return{ userName, score, XorO } };

const firstUser = playerFactory("Player 1", "X");
const secondUser = playerFactory("Player 2", "O");
let currentUser = playerFactory(firstUser.userName, firstUser.XorO);
const result = document.querySelector("#result");

let makeButtonsUnclickable = "no";

const gameboard = ( () => {
  let table = []
  return { table };
} )();


function updateTable() {
  //Make buttons interactive
  for(i = 0; i < 9; i++){
    let currentBlock = document.getElementById(`${i}`);
    currentBlock.addEventListener("click", () => {
      if ((currentBlock.innerText == "") && (makeButtonsUnclickable != "yes")){
        if((currentUser.XorO) == "X"){
          gameboard.table[i] = "X";
          currentBlock.innerText = gameboard.table[i];
        }
        else if(currentUser.XorO == "O"){
          gameboard.table[i] = "O";
          currentBlock.innerText = gameboard.table[i];
        }
        for(i = 0; i < 9; i++) {
          let currentBlock = document.getElementById(`${i}`);
          gameboard.table[i] = currentBlock.innerText;
        }

        console.log(currentUser);

        if (currentUser.userName == firstUser.userName) {
          currentUser.userName = secondUser.userName;
          currentUser.XorO = secondUser.XorO;
        }
        else if (currentUser.userName == secondUser.userName) {
          currentUser.userName = firstUser.userName;
          currentUser.XorO = firstUser.XorO;
        }

        console.log(gameboard.table);
        setRaundWinner();
      }
      
    })
  }
}

function setRaundWinner(){
  //to write less:
  let gt = gameboard.table;

  if( 
  ((gt[0] == "X") && (gt[0] == gt[1]) && (gt[1] == gt[2])) || 
  ((gt[3] == "X") && (gt[3] == gt[4]) && (gt[4] == gt[5])) ||
  ((gt[6] == "X") && (gt[6] == gt[7]) && (gt[7] == gt[8])) ||
  ((gt[0] == "X") && (gt[0] == gt[3]) && (gt[3] == gt[6])) ||
  ((gt[1] == "X") && (gt[1] == gt[4]) && (gt[4] == gt[7])) ||
  ((gt[2] == "X") && (gt[2] == gt[5]) && (gt[5] == gt[8])) ||
  ((gt[0] == "X") && (gt[0] == gt[4]) && (gt[4] == gt[8])) ||
  ((gt[2] == "X") && (gt[2] == gt[4]) && (gt[4] == gt[6])) ) {
    result.innerText = "" + firstUser.userName + " wins!";
    makeButtonsUnclickable = "yes"
    firstUser.score++;
    document.querySelector("#player1score").innerText = firstUser.score;
    console.log(firstUser);
  }

  else if( 
    ((gt[0] == "O") && (gt[0] == gt[1]) && (gt[1] == gt[2])) || 
    ((gt[3] == "O") && (gt[3] == gt[4]) && (gt[4] == gt[5])) ||
    ((gt[6] == "O") && (gt[6] == gt[7]) && (gt[7] == gt[8])) ||
    ((gt[0] == "O") && (gt[0] == gt[3]) && (gt[3] == gt[6])) ||
    ((gt[1] == "O") && (gt[1] == gt[4]) && (gt[4] == gt[7])) ||
    ((gt[2] == "O") && (gt[2] == gt[5]) && (gt[5] == gt[8])) ||
    ((gt[0] == "O") && (gt[0] == gt[4]) && (gt[4] == gt[8])) ||
    ((gt[2] == "O") && (gt[2] == gt[4]) && (gt[4] == gt[6])) ) {
      result.innerText = "" + secondUser.userName + " wins!";
      makeButtonsUnclickable = "yes"
      secondUser.score++;
      document.querySelector("#player2score").innerText = secondUser.score;
      console.log(secondUser);
    }
  else {
    let x = 0;
    for(i = 0; i < 9; i++){
      if(gt[i] != "") {
        x++;
        }
      if(x == 9) {
        result.innerText = "Tie!";
      }
    }
  }
    
}

function setPlayerNames(){
  if ((document.querySelector("#player1").value == "") || (document.querySelector("#player2").value == "")){
    alert("Please enter valid values for player names")
  }
  else{
    firstUser.userName = document.querySelector("#player1").value;
    secondUser.userName = document.querySelector("#player2").value;
    console.log(firstUser.userName);
    console.log(secondUser.userName);
    currentUser = playerFactory(firstUser.userName, firstUser.XorO);
    document.querySelector("#player1").value = "";
    document.querySelector("#player2").value = "";
    document.querySelector("#player1header").innerText = "" + firstUser.userName;
    document.querySelector("#player2header").innerText = "" + secondUser.userName;
  }
  
}

const clearTable = function() {
  for (i = 0; i < 9; i++) {
    let blockToClear = document.getElementById(`${i}`);
    blockToClear.innerText = "";
  }
  makeButtonsUnclickable = "no"
  currentUser = playerFactory(firstUser.userName, firstUser.XorO);
  updateTable();
  result.innerText = "";
}

const clearScores = function(){
  document.querySelector("#player1score").innerText = "0";
  document.querySelector("#player2score").innerText = "0";
  firstUser.score = 0;
  secondUser.score = 0;
}

const game = ( () => {
  let setPlayerNamesButton = document.querySelector("#setPlayers");
  setPlayerNamesButton.addEventListener("click", setPlayerNames);
  let clearButton = document.querySelector("#reset");
  clearButton.addEventListener("click", clearTable)

  let resetButton = document.querySelector("#resetScores");
  resetButton.addEventListener("click", clearScores);

  updateTable();
  console.log(gameboard.table);
} )();