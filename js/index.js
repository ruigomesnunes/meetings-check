var options = {
  useEasing : true,
  useGrouping : true,
  separator : ',',
  decimal : '.',
  prefix : '&euro;',
  suffix : ''
};

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
var demo = new CountUp("myTargetElement", 0, 2, 360000, options);
demo.setEndVal(580);

$('#numberUsers').change(function(event){
  demo.setEndVal($('#numberUsers').val()*580);
});

var clock = document.getElementById('clock');
var timer = document.getElementsByClassName('timerWrapper')[0];
var close = document.getElementById('close');
var time = document.getElementById('myTargetElement').innerHTML;

function showClock(){
  timer.style.display = "inline-flex";
}

function closeClock(){
  timer.style.display = "none";
  demo.reset();
  $("p").removeClass('strikethrough');
}




var myDate = new Date();
var greeting = document.getElementById('greeting');

/* hour is before noon */
if ( myDate.getHours() < 12 )
{
    greeting.innerHTML = "Good Morning!";
}
else
{
    greeting.innerHTML = "Hi there 👋!";
}
