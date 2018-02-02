$(document).ready(function(){
var canvas, ctx,
    brush = {
        x: 0,
        y: 0,
        color: '#000000',
        size: 10,
        click: false,
    }


$('#color-picker').on("input", function(){
    brush.color = this.value;

  });

});

function addTable() {

    var myTable = document.getElementById("myDynamicTable");

    var table = document.createElement('TABLE');
    table.border='1';

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    var sizeWidth = document.getElementById("sizeWidth").value;
    var sizeHeight = document.getElementById("sizeHeight").value;

    for (var i=0; i<= sizeWidth; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);

       for (var j=0; j<= sizeHeight; j++){
           var td = document.createElement('TD');
           td.width="25";
           td.height = "25"
           tr.appendChild(td);
       }
    }
    myTable.appendChild(table);
       return false;
}

function load() {

    console.log("Page load finished");

}
