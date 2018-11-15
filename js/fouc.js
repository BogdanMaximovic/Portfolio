$(document).ready(function() {
	document.documentElement.className = 'no-fouc';
 $(window).on("load", function() {
    $('.no-fouc').removeClass('no-fouc');
 });
} 