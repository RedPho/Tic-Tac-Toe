const playerFactory = (userName, score) => { 
  return{ userName, score } };

const gameboard = ( () => {
  let table = ["o", "x", "o","x", "x", "x", "o","x", "x"]
  return { table };
} )();

const table = gameboard.table;

const updateTable = () =>  {
  for(i = 0; i < table.length; i++){
    let currentblock = document.getElementById(`${i}`);
    currentblock.innerText = table[i];
  }
}

const game = ( () => {
  console.log(table);
  updateTable();
} )();

