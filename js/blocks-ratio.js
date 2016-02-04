$(document).ready(function(){
  var cw = $('.about-block').width();
  $('.about-block').css({'height':(cw*1)+'px'});

  var cw = $('#stats-container').width();
  $('#stats-container').css({'height':(cw/3)+'px'});

  var sw = $(".separator").width();
  $(".vert-separator").css({'height':sw+'px'});

  var cw = $('.member-picture').width();
  $('.member-picture').css({'height':(cw*0.8)+'px'});

  var cw = $('.sponsor-box').width();
  $('.sponsor-box').css({'height':cw+'px'});
  $('.sponsor-img').css({'height':cw+'px'});

  var cw = $('.contact-box').width();
  $('.contact-box').css({'height':(cw*2/3)+'px'});
  $('.contact-separator').css({'height':(cw*3/4)+'px'});
  $('.contact-separator').css({'top':(cw*1/4)+'px'});

  var cw = $('.txtarea').width();
  $('.message-box').css({'height':(cw*2/4)+'px'});
})
