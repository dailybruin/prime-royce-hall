$(document).ready(function() {

    $("#profile-links").hide();
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

    $(document).scroll(function(){
		var top=$(this).scrollTop();
		if(top<5000){
		    var dif=top/5000;
		    var dif2= top/5000 - .2;
		    $("#danger-zone").css({opacity:dif});
		    $(".path-textBackground").css({opacity:dif2});
		}
	})

});


function expand() {
	$('#profile-links').toggle('slow');
}

