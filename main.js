$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['firstPage', 'secondPage'],
        scrollOverflow: true,
        continuousVertical: false,
        slidesNavigation: true
    });
    $('#profile-links').hide();
});

function expand() {
	$('#profile-links').toggle('slow');
}
