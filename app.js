
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
      //insert row in column
     var y=  x.insertCell(col);
     //set a size for pixels
     y.width="25px";
     y.height="25px";
    }
   }
}

//grab a color-picker element from dom
var color = document.getElementById("color-picker");
//adding eventlistener so we can click on it to assign a value
color.addEventListener("onclick", function(){});


function load() {

    console.log("Page load finished");

}
