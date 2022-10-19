const playerFactory = (userName, XorO) => {
  score = 0; 
  return{ userName, score, XorO } };

const firstUser = playerFactory("emin", "X");
const secondUser = playerFactory("faruk", "O");

let makeButtonsUnclickable = "no";

let currentUser = playerFactory(firstUser.userName, firstUser.XorO);


const gameboard = ( () => {
  let table = ["X", "X", "O","X", "X", "X", "O", "O", "X"]
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
    console.log("" + firstUser.userName + " wins!");
    makeButtonsUnclickable = "yes"
    firstUser.score++;
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
      console.log("" + secondUser.userName + " wins!");
      makeButtonsUnclickable = "yes"
      secondUser.score++;
      console.log(secondUser);
    }
}

const game = ( () => {
  updateTable();
  
  console.log(gameboard.table);
} )();

