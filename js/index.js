$(document).ready(function() {
  $(document).on('click','.item', function(event){
    // console.log(event);
    if ($(this).hasClass('strikethrough')) {
      $(this).removeClass('strikethrough');
    } else {
        $(this).addClass('strikethrough');
    }

  });
});

$('#numberUsers').change(function(event){
  demo.setEndVal($('#numberUsers').val()*580);
});

var numberUsers = $('#numberUsers').val();
var price = (numberUsers * 500);

var options = {
  useEasing : true,
  useGrouping : true,
  separator : ',',
  decimal : '.',
  prefix : '€',
  suffix : ''
};

var demo = new CountUp("myTargetElement", 0, 2, 360000, options);

var clock = document.getElementById('clock');
var timer = document.getElementsByClassName('timerWrapper')[0];
var close = document.getElementById('close');

function showClock(){
  timer.style.display = "inline-flex";
}

function closeClock(){
  timer.style.display = "none";
  demo.reset();
  $("p").removeClass('strikethrough');
}
