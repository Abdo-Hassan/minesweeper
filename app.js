document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  let width = 10;
  let bombAmout = 20;
  let squares = [];
  //create Board
  function createBoard() {
    // get shuffled array with random bombs
    const bombsArray = Array(bombAmout).fill('bomb');
    const emptyArray = Array(width * width - bombAmout).fill('valid');
    console.log('bomb array', bombsArray);
    console.log('empty array', emptyArray);
    const gameArray = emptyArray.concat(bombsArray);
    console.log('game array', gameArray);
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div');
      square.setAttribute('id', i);
      grid.appendChild(square);
      squares.push(square);
    }
  }

  createBoard();
});
