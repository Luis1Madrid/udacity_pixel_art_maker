//Javascript makegrid()
document.querySelector("#submitted").addEventListener("click", makeGrid);



function makeGrid() {
  //document.body.style.backgroundColor = "red";

  var height = document.getElementById("input_height").value;
  var width = document.getElementById("input_width").value;
  const table = document.getElementById("pixel_canvas");
// event prevent default, prevents the original values for being overplaced.
  event.preventDefault();

  for (var x = 1; x <= height; x++) {
    var newTr = document.createElement("tr");
    table.appendChild(newTr);

    for (var i = 1; i <= width; i++) {
      var newTd = document.createElement("td");
      newTr.appendChild(newTd);
    }
  }
  document.querySelector("#pixel_canvas").addEventListener("click", colorGrid);
}

function colorGrid(evt) {
  var color = document.getElementById("colorPicker");
  evt.target.style.backgroundColor = "red";
}
