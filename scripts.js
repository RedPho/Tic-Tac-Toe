const playerFactory = (userName, XorO) => {
  let score = 0; 
  return{ userName, score, XorO } };

const firstUser = playerFactory("emin", "X");
const secondUser = playerFactory("faruk", "O");

let currentUser = playerFactory(firstUser.userName, firstUser.XorO);


const gameboard = ( () => {
  let table = ["X", "X", "O","X", "X", "X", "O", "O", "X"]
  return { table };
} )();

const table = gameboard.table;

function updateTable() {
  //Make buttons interactive
  for(i = 0; i < 9; i++){
    let currentBlock = document.getElementById(`${i}`);
    currentBlock.addEventListener("click", () => {
      if (currentBlock.innerText == ""){
        if((currentUser.XorO) == "X"){
          gameboard.table[i] = "X";
          currentBlock.innerText = table[i];
        }
        else if(currentUser.XorO == "O"){
          gameboard.table[i] = "O";
          currentBlock.innerText = table[i];
        }
        for(i = 0; i < 9; i++) {
          let currentBlock = document.getElementById(`${i}`);
          gameboard.table[i] = currentBlock.innerText;
        }

        console.log(currentUser);
        
        if (currentUser.userName == firstUser.userName) {
          currentUser.userName = secondUser.userName;
          currentUser.XorO = secondUser.XorO;
          console.log(currentUser);
        }
        else if (currentUser.userName == secondUser.userName) {
          currentUser.userName = firstUser.userName;
          currentUser.XorO = firstUser.XorO;
          console.log(currentUser);
        }

        console.log(gameboard.table);
      }
      
    })
  }
}


const game = ( () => {
  updateTable()
  
  console.log(table);
} )();

