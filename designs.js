//Javascript makegrid()
document.querySelector("#submitted").addEventListener("click", makeGrid);



function makeGrid() {
  //document.body.style.backgroundColor = "red";

  var height = document.getElementById("input_height").value;
  var width = document.getElementById("input_width").value;
  const table = document.getElementById("pixel_canvas");

  event.preventDefault();

  for (var x = 1; x <= height; x++) {
    var newTr = document.createElement("tr");
    table.appendChild(newTr);

    for (var i = 1; i <= width; i++) {
      var newTd = document.createElement("td");
      newTr.appendChild(newTd);
    }
  }

}
