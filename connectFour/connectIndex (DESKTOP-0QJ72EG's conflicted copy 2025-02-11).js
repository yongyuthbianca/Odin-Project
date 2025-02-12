const gridContainer = document.getElementById('grid-container');
const rows = 6;
const cols = 7;

for(let i = 0; i < rows * cols; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('cellIndex', i);
    gridContainer.appendChild(cell);
}

gridContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('cell')) {
      const cellIndex = event.target.getAttribute('cellIndex');
      console.log(`Clicked cell index: ${cellIndex}`);
    }
  });


