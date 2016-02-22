$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['firstPage', 'secondPage'],
        scrollOverflow: true,
        continuousVertical: false,
        slidesNavigation: true
    });
    $('#profile-links').hide();
    $("button.less").hide();
    $("div.extra").hide();

      $(".less").click(function(){
          var classNum = $(this).attr('class').split(' ')[1];
          $("div.extra." + classNum).hide();
          $("button.less." + classNum).hide();
          $("button.more." + classNum).show();
      });
      $(".more").click(function(){
          var classNum = $(this).attr('class').split(' ')[1];
          $("div.extra." + classNum).show();
          $("button.less." + classNum).show();
          $("button.more." + classNum).hide();
      });
});



function expand() {
	$('#profile-links').toggle('slow');
}