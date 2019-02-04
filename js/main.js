$(document).ready(function() {
    $('#main-nav a').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 1200);
        return false;
    });

    $('.project-window').attr('data-aos-duration', '900');
    AOS.init();

    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    $('a').click(function() {
        $('#toggle').toggleClass('active');
        $('#overlay').toggleClass('open');
    });

});