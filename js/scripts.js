// Contact Modal
$(function() {
    $("#contactModal").click(function(){
        $("#modalContactForm").contactModal("show")
    }); 
}); 

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Back to Top Button
const btnScrollToTop = document.querySelector("#btnScrollToTop"); 

btnScrollToTop.addEventListener("click", function() {
  $("html, body").animate({ scrollTop: 0 }, "slow"); 
}); 