var $answer = $("#display_ans");
var $input = $("#input");
var $button = $("button");

$input.on("keyup",function(){
  var value =$input.val();
  // Set input value to display
  $answer.text(convertTemperature($input.val()));
});

function convertTemperature(F){
  //(F-32)*5/9
  return Math.round((F-32)*5/9);
}
