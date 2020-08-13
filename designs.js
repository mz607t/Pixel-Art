// Select color input
var color = document.getElementById("colorPicker");

// Select grid size
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
document.addEventListener("submit", function(event) {
  event.preventDefault();
  makeGrid();
});

// Make the Grid
function makeGrid() {
  const table = document.getElementById("pixelCanvas");
  table.innerHTML = "<table id='pixelCanvas'></table>";
  for (let i = 0; i < height.value; i++) {
    const row = table.insertRow();
    for (let j = 0; j < width.value; j++) {
      const cell = row.insertCell();
      cell.addEventListener("click", function respondToTheClick() {
        if (cell.bgColor==color.value) {
          cell.bgColor="#FFFFFF"
        }
        else {
          cell.bgColor=color.value;
        }
      });
    }
  }
}
