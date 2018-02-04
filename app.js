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

function makeGrid()
{
//grab the gridWidth element and store it in var
var rowNum = document.getElementById("sizeW").value;
//grab the gridHight element and store it in var
var coNum = document.getElementById("sizeH").value;
//using nested for loop to get the value of pixels input
 for(var row=0; row < parseInt(rowNum); row++)
  {
   var x=document.getElementById('myTable').insertRow(row);
   for(var col=0; col <parseInt(coNum); col++)
    {
     var y=  x.insertCell(col);
     y.width="25px";
     y.height="25px";
    }
   }
}

function load() {

    console.log("Page load finished");

}
