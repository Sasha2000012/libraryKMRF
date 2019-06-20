(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $("#make-order-button").click(function(e) {
    console.log("order button");
    $.ajax({
      url: "/order",
      type: "POST",
      data: {
        number: $("#stud").val(),
        bookID: $("#book-id").val(),
        title: $("#book-title").text()
      },
      success: function(result) {
        $("#zakazbook").modal("hide");
        if (result) {
          $("#zakazOK").modal("show");
        } else {
          $("#zakazErr").modal("show");
        }
      }
    })
  })

  $("#catalog-select-sort").change(function()
  {
     
      console.log(2);
      if($("#catalog-select-sort").val()=="none"){
        $("#catalog-button").click();
      }else {
        window.location.href="/"+$("#catalog-select-sort").val();
      }
    
  })
  
})(jQuery); // End of use strict
