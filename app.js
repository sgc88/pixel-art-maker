
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
     //setting up our event to append to the pixel so we can change the color of it with using fillPixel function
     y.addEventListener("click", fillPixel);


    }
    //disable the submit button to prevent from resubmission
    document.getElementById("submit").disabled=true;
   }
}


var table =document.getElementById('myTable');
function clearGrid(){
    while (table.firstChild){
          //clear out the table
         table.removeChild(table.firstChild);
         //grab the gridWidth element and set the value
         var rowNum = document.getElementById("sizeW").value= "1";
         //grab the gridHight element and set the value
         var coNum = document.getElementById("sizeH").value= "1";
         //enable submit button back
         document.getElementById("submit").disabled=false;


    }

}

//grab a color-picker element from dom
var color = document.getElementById("color-picker");
//adding eventlistener so we can click on it to assign a value
color.addEventListener("onclick", function(){});

function fillPixel () {
  //setting an attribute to be able to style our pixels with chosen color
    this.setAttribute("style", `background-color: ${color.value}`);
}


function load() {

    console.log("Page load finished");

}
