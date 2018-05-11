
// Quiz --------------------------------------------------------------------------------------------------------------------------------------
    
$(".s-a-mod-section .quiz-wrapper .quiz .answer").on("click", function(){

    if( $(this).attr("data-answer") === "1" ) {

        $(this).siblings(".answer").removeClass("active").css({"border": "2px solid #869eab", "opacity": 1});
        $(this).addClass("active").css({"border": "2px solid green", "opacity": 0.5});

    } else {

        $(this).siblings(".answer").removeClass("active").css({"border": "2px solid #869eab", "opacity": 1});
        $(this).addClass("active").css({"border": "2px solid red", "opacity": 0.5});

    }

});