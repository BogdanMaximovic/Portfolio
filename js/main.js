$(document).ready(function() {
  $('#main-nav a').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1200);
        return false;
    })
  var showText = function (target, message, index, interval) {    
	 if (index < message.length) { 
	    $(target).append(message[index++]); 
	    setTimeout(function () { showText(target, message, index, interval); }, interval); 
	  } 
	}
    
	$(function () { 
	 
	  showText("#msg", "Bogdan Maksimović", 0, 150);    
	 
	}); 
})
