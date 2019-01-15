$(document).ready(function() {
  $('#main-nav a').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top -100
        }, 1200);
        return false;
    });
  $('.title').text(document.title);
  $('.project-window').attr('data-aos-duration', '1200');
	AOS.init();
});
