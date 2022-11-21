const cells = document.querySelectorAll('.cell');
const field = document.querySelector('.wrapper');
const again = document.querySelector('.again');

field.addEventListener('contextmenu', (e) => {
    if (e.target.classList.contains('cell')) {
        e.preventDefault();
        const cell = e.target;
        if (!cell.textContent) cell.innerHTML = 'O';
    }
    
})
field.addEventListener('click', (e) => {
    if (e.target.classList.contains('cell')) {
        const cell = e.target;
        if (!cell.textContent) cell.textContent = 'X';
    }
    stepComputer();
    chekIsEnd();
})

function isEnd() {
    let cellsArr = [];

    cells.forEach( (cell) => {
        cellsArr.push(cell.textContent);
    } )
    
    if ( cellsArr.length >= 6 && ((cellsArr[0] == 'X' && cellsArr[1] == 'X' && cellsArr[2] == 'X')
      || (cellsArr[3] == 'X' && cellsArr[4] == 'X' && cellsArr[5] == 'X')
      || (cellsArr[6] == 'X' && cellsArr[7] == 'X' && cellsArr[8] == 'X')
      || (cellsArr[0] == 'X' && cellsArr[3] == 'X' && cellsArr[6] == 'X')
      || (cellsArr[1] == 'X' && cellsArr[4] == 'X' && cellsArr[7] == 'X')
      || (cellsArr[2] == 'X' && cellsArr[5] == 'X' && cellsArr[8] == 'X')
      || (cellsArr[0] == 'X' && cellsArr[4] == 'X' && cellsArr[8] == 'X')
      || (cellsArr[2] == 'X' && cellsArr[4] == 'X' && cellsArr[6] == 'X')) ) {

        const winnerX = document.createElement('div');
        winnerX.classList.add('end');
        winnerX.innerHTML = 'Выиграли крестики!';
        field.append(winnerX);

    } else if ( cellsArr.length >= 6 && ((cellsArr[0] == 'O' && cellsArr[1] == 'O' && cellsArr[2] == 'O')
             || (cellsArr[3] == 'O' && cellsArr[4] == 'O' && cellsArr[5] == 'O')
             || (cellsArr[6] == 'O' && cellsArr[7] == 'O' && cellsArr[8] == 'O')
             || (cellsArr[0] == 'O' && cellsArr[3] == 'O' && cellsArr[6] == 'O')
             || (cellsArr[1] == 'O' && cellsArr[4] == 'O' && cellsArr[7] == 'O')
             || (cellsArr[2] == 'O' && cellsArr[5] == 'O' && cellsArr[8] == 'O')
             || (cellsArr[0] == 'O' && cellsArr[4] == 'O' && cellsArr[8] == 'O')
             || (cellsArr[2] == 'O' && cellsArr[4] == 'O' && cellsArr[6] == 'O')) ) {

        const winnerO = document.createElement('div');
        winnerO.classList.add('end');
        winnerO.innerHTML = 'Выиграли нолики!';
        field.append(winnerO)

    } else if (cellsArr.length > 8) {

        const winner = document.createElement('div');
        winner.classList.add('end');
        winner.innerHTML = 'Ничья!';
        field.append(winner);
    }

    again.classList.remove('hidden');
}

function chekIsEnd() {
    let res = [];
    cells.forEach( (cell) => {
        if (cell.textContent) res.push(cell);
    })
    console.log(res.length);
    if (res.length >= 6) isEnd();
}

 again.onclick = function(e) {
     console.log(e.target.className);
    if (e.target.className = 'again') window.location.reload();
    e.stopPropagation();
 } 
 
 function stepComputer() {
    let cellsArr = [];

    cells.forEach( cell => {
        if (!cell.textContent) cellsArr.push(cell);
    })
    console.log(cellsArr);

    let indexRandom = Math.floor(Math.random() * (cellsArr.length));
      console.log(indexRandom);

    if (cellsArr[indexRandom].textContent != 'X')  {
        cellsArr[indexRandom].textContent = 'O';
    }
 }



// field.addEventListener('mousedown', (e) => {
//     if (e.target.classList.contains('cell')) {
//         stepComputer();
//     }
// })