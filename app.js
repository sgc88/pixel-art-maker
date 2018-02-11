
function makeGrid()
{
//grab the gridWidth element and store it in const
const rowNum = document.getElementById("size-w").value;
//grab the gridHight element and store it in const
const coNum = document.getElementById("size-h").value;
//using nested for loop to get the value of pixels input
 for(let row=0; row < parseInt(rowNum); row++)
  {
   const x=document.getElementById('my-table').insertRow(row);
   for(let col=0; col <parseInt(coNum); col++)
    {
      //insert row in column
     const y=  x.insertCell(col);
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


const table =document.getElementById('my-table');
function clearGrid(){
    while (table.firstChild){
          //clear out the table
         table.removeChild(table.firstChild);
         //grab the gridWidth element and set the value
         const rowNum = document.getElementById("size-w").value= "1";
         //grab the gridHight element and set the value
         const coNum = document.getElementById("size-h").value= "1";
         //enable submit button back
         document.getElementById("submit").disabled=false;


    }

}

//grab a color-picker element from dom
const color = document.getElementById("color-picker");
//adding eventlistener so we can click on it to assign a value
color.addEventListener("onclick", function(){});

function fillPixel () {
  //setting an attribute to be able to style our pixels with chosen color
    this.setAttribute("style", `background-color: ${color.value}`);
}
