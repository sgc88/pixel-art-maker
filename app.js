$(document).ready(function(){
$("#submit").on("click", function makeGrid(){
  
  var newWidth = $("#sizeWidth").val();
  var newHeigth = $("#sizeHeight").val();
  console.log("you picked the size");
for(i=0; i <= newWidth.length && newHeigth.length; i++ ){

}
  var cell= $("#pixelCanvas").append("<tr><td></td></tr>");
  $(cell).addClass("cell");


  return false;

});


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
