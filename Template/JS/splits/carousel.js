
// Carousel effects ---------------------------------------------------------------------------------------------------------------------
    
// Declaring the slides array & Setting count variable to index default
var slidesContainer = $(".s-a-mod-section .carousel-container");
var slides = $(".s-a-mod-section .carousel-container .slide");
var dotsWrapper = $(".s-a-mod-section .carousel-container .dots");
var slidesCount = 0;

slides.eq(0).show();

// Creating spans for each slides

$.each(slides, function(index){

    // If it is the first dot add a active class

    if ( index === 0 ) {

        dotsWrapper.append("<span class='btn active'>&nbsp;</span>");

    } else {

        dotsWrapper.append("<span class='btn'>&nbsp;</span>");

    }

}); // Each function

// Declaring dots variable
var dots = $(".s-a-mod-section .carousel-container .dots span");

// Raising on click event for all elemtns with .btn class in .carousel-container       
$(".carousel-container .btn").on("click", function(){

    if ( $(this).hasClass("right") ) {

       if (slidesCount === slides.length - 1) {
           slidesCount = 0;
           slidesAddRemove();
        } else {
            slidesCount++;
            slidesAddRemove();
        }


    } else if ( $(this).hasClass("left") ) {

        if (slidesCount === 0) {
            slidesCount = slides.length - 1; 
            slidesAddRemove();
        } else {
            slidesCount--;
            slidesAddRemove();       
        }            

    } else {

        slidesCount = $(this).index();
        slidesAddRemove();

    }

});

// Raising on mobile touch events for all elemtns with .btn class in .carousel-container
slidesContainer.on("swipeleft", function(){
    if (slidesCount === slides.length - 1) {
       slidesCount = 0;
       slidesAddRemove();
    } else {
        slidesCount++;
        slidesAddRemove();
    }        
});

slidesContainer.on("swiperight", function(){
    if (slidesCount === 0) {
        slidesCount = slides.length - 1; 
        slidesAddRemove();
    } else {
        slidesCount--;
        slidesAddRemove();       
    } 
});

//Reusable add and remove code snippet
function slidesAddRemove() {
    slides.filter(".active").hide();
    slides.eq(slidesCount).addClass("active").show().siblings().removeClass("active");
    dots.eq(slidesCount).addClass("active").show().siblings().removeClass("active");
}