var columnsS = 7;
var rowsS = 6;

var rows = [];
var launch = [];

var launcher = document.createElement('table');
document.body.appendChild(launcher);

for (var i = 0; i < rowsS-5; i++) {

  var trL = document.createElement('tr');
  launcher.appendChild(trL);

  for (var j = 0; j < columnsS; j++) {

    var columns = [j];
    rows[i] = columns;
    var thL = document.createElement('th');
    trL.appendChild(thL);
    // columns.push(j);

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
    // columns.push(j);

  }

}


// console.log(columns);
