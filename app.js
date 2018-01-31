$(document).ready(function(){
$("#submit").on("click", function makeGrid(){
  var newWidth = $("#sizeWidth").val();
  var newHeigth = $("#sizeHeight").val();
  console.log("you picked the size")

  $("#cell").width(newWidth);
  $("#cell").height(newHeigth);


  console.log("welcome to art with pixels page!");

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
