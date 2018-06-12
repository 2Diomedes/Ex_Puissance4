var rowsS = 6;
var columnsS = 7;

var rows = [];
var rowsL = [];

var launcher = document.createElement('table');
document.body.appendChild(launcher);

for (var i = 0; i < rowsS - 5; i++) {

  var trL = document.createElement('tr');
  launcher.appendChild(trL);

  var thL = [];
  for (var j = 0; j < columnsS; j++) {

    columnsL = [j];

    thL[j] = document.createElement('th');
    trL.appendChild(thL[j]);

    select = thL[j];

    thL[j].innerText = j;

    select.addEventListener('click', function(){
      console.log(this.innerText);
      slot[1][5].style.background = 'red';
    })

  }
}

var table = document.createElement('table');
document.body.appendChild(table);

var slot = [];

for (var i = 0; i < rowsS; i++) {
  rows.push(i);
  slot[i] = document.createElement('tr');
  table.appendChild(slot[i]);

  for (var j = 0; j < columnsS; j++) {

    var columns = [j];
    rows[i] = columns;

    slot[i][j] = document.createElement('th');
    slot[i].appendChild(slot[i][j]);
  }
}
