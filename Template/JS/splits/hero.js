
// Hero click fade animation -------------------------------------------------------------------------------------------------------------
    
// Remove all content boxes
$(".s-a-mod-section .hero .content").css("display", "none");

// On load show the first content box
$(".s-a-mod-section .hero .content.active").css("display", "block");

// Points onclick event
$(".s-a-mod-section .hero .points span").on("click", function(){

    var rel = $(this).attr("rel");

    if ( !$(this).hasClass("active") ) {

        $(".s-a-mod-section .hero .content.active").fadeOut(); 
        $(".s-a-mod-section .hero .content.active").removeClass("active");         
        $(".s-a-mod-section .hero #"+rel).addClass("active");
        $(".s-a-mod-section .hero #"+rel).fadeIn();

        $(".s-a-mod-section .hero .points span.active").removeClass("active");
        $(this).addClass("active");

    }


});