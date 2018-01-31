$(document).ready(function(){
$("#submit").on("click", function makeGrid(){
  console.log("welcome to art with pixels page!");
});

var canvas, ctx,
    brush = {
        x: 0,
        y: 0,
        color: '#000000',
        size: 10,
        click: false,
    },


$('#color-picker').on('input', function () {
    brush.color = this.value;
});




});
