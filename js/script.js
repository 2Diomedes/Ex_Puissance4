var columnsS = 7;
var rowsS = 6;
var rows = [];
var table = document.createElement('table');
document.body.appendChild(table);
var tr = document.createElement('tr');
var th = document.createElement('th');
for (var i = 0; i < rowsS; i++) {
    var slot = "";
    rows.push(i);
  for (var j = 0; j < columnsS; j++) {
    var columns = [j];
    slot += "( )";
    rows[i] = columns;
    // columns.push(j);
}
console.log(slot);
}
console.log(rows);
// console.log(columns);
