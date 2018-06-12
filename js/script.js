var rowsS = 6;
var columnsS = 7;

var rows = [];
var rowsL = [];
var launch = [];

var launcher = document.createElement('table');
document.body.appendChild(launcher);

for (var i = 0; i < rowsS - 5; i++) {

  var trL = document.createElement('tr');
  launcher.appendChild(trL);

  for (var j = 0; j < columnsS; j++) {

    var columnsL = [j];
    rowsL[i] = columnsL;
    var thL = document.createElement('th');
    trL.appendChild(thL);
    thL.innerText = j;
  }
}

var table = document.createElement('table');
document.body.appendChild(table);

for (var i = 0; i < rowsS; i++) {
  var slot = "";
  rows.push(i);
  var tr = document.createElement('tr');
  table.appendChild(tr);

  for (var j = 0; j < columnsS; j++) {

    var columns = [j];
    rows[i] = columns;
    var th = document.createElement('th');
    tr.appendChild(th);
  }
}

for (var i = 0; i < rowsL.length; i++) {
  this.addEventListener("click", function() {
      console.log('iypi');

    })
  }

function search(columns) {
  for (var i = 0; i < 6; i++) {
    console.log(columns + '>>' + i);
    if (rows[i][columns] != 0) {
      return i - 1;
    }
  }
}
