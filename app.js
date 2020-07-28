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
    const gameArray = emptyArray.concat(bombsArray);
    const shuffledArray = gameArray.sort(() => Math.random() - 0.5);

    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div');
      square.setAttribute('id', i);
      square.classList.add(shuffledArray[i]);
      grid.appendChild(square);
      squares.push(square);
    }

    // add numbers
    for (let i = 0; i < squares.length; i++) {
      let total = 0;
      const isLeftEdge = i % width === 0;
      const isRightEdge = i % width === width - 1;

      if (squares[i].classList.contains('valid')) {
        if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb'))
          total++;
        if (
          i > 9 &&
          !isRightEdge &&
          squares[i + 1 - width].classList.contains('bomb')
        )
          total++;

        squares[i].setAttribute('data', total);
        console.log(squares[i]);
      }
    }
  }

  createBoard();
});
