const playerFactory = (userName, score) => { return{ userName, score } };
const ich = playerFactory("emin", 8);

const gameboard = ( () => {
  let table = ["x", "o","x", "x"]
  return { table };
} )();



const game = ( () => {
  console.log(gameboard.table);
  console.log("hey");
  
} )();