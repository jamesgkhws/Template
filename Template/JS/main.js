
$(document).ready(function(){
    
    "use strict";
    
    // Header - name -------------------------------------------------------------------------------------------------------------
    
    var modTitle = $("#BodyContent_subheadercontent_1_pnlHero h2").text();
    
    $(".s-a-mod-section #q-heading .mod-title, .s-a-mod-section #q-menu .mod-title").append( modTitle );
    
    // Menu and tabs ----------------------------------------------------------------------------------------------------------------------

    
    // Create menu tabs based on the data-menu attribute for each section
    
    $.each( $(".menu-tab[data-menu]"), function(){
        
        var rel = $(this).attr("data-menu");
        var title = $(this).attr("data-menu-title").replace(/-/g, ' ');
        
        if( $(this).hasClass("carousel-item") ) {
        
            $(".s-a-mod-section #q-menu ul").append("<li rel="+rel+" class='tabs carousel'>"+title+"</li>");
            
        } else {
            
            $(".s-a-mod-section #q-menu ul").append("<li rel="+rel+" class='tabs'>"+title+"</li>");
            
        }
        
    });
    
    // Create a take test button using the same url from the existing button at the bottom of the page
    
    if ( $("#BodyContent_subheadercontent_1_hlTakeTestFooter").length ) {
    
        var testLink = $("#BodyContent_subheadercontent_1_hlTakeTestFooter").attr("href");

        $(".s-a-mod-section #q-menu ul").append("<li><a href="+testLink+" class='test-btn'>Take Test</a></li>");
        
    }
    
    // Set even width for each menu tab based on the amount that have been created
    
    var tabCount = $(".s-a-mod-section #q-menu ul.desktop li").length;
    
    $(".s-a-mod-section #q-menu ul.desktop li").css("width", 100 / tabCount -1+"%");
    
    
    // Set value to first tab in drop down
    
    var headerHeight = $("#q-heading").outerHeight();
    var menuHeightMobile = $("#q-menu .mobile").outerHeight();
    var menuHeightDesktop = $("#q-menu .desktop").outerHeight();
    
    if ( $(window).width() < 960 ) {
        
        $(".s-a-mod-section.first").css("padding-top", menuHeightMobile+"px");
        
    } else {
        
        $(".s-a-mod-section.first").css("padding-top", menuHeightDesktop+"px");
        
    }
    
    $(window).resize(function(){
    
        var headerHeight = $("#q-heading").outerHeight();
        var menuHeightMobile = $("#q-menu .mobile").outerHeight();
        var menuHeightDesktop = $("#q-menu .desktop").outerHeight();
        
        if ( $(window).width() < 960 ) {
        
            $(".s-a-mod-section.first").css("padding-top", menuHeightMobile+"px");
        
        } else {

            $(".s-a-mod-section.first").css("padding-top", menuHeightDesktop+"px");

        }
        
    });
    
    // Sticky menu on scroll
    
	$(window).on("scroll", stickyNav);
    
    function stickyNav(){
        
        if ( $(window).width() < 960 ) {
        
            if ( $(window).scrollTop() > 100 ) {
                
                $(".s-a-mod-section #q-menu").addClass("sticky");
                
            } else {
                
                $(".s-a-mod-section #q-menu").removeClass("sticky");
                
            }
            
        } else {
            
            if ( $(window).scrollTop() > $(".s-a-mod-section #q-heading").offset().top + $(".s-a-mod-section #q-heading").outerHeight() ) {

                $(".s-a-mod-section #q-menu").addClass("sticky");

            } else {

                $(".s-a-mod-section #q-menu").removeClass("sticky");

            }                
            
        }
        
    }
    
    // Mobile menu change on scroll
    
    
    
    // Menu tabs click and scroll to related section
    
    $(".s-a-mod-section #q-menu ul li").on("click", scrollElem);
    
    function scrollElem(event) {
	
		var id = $(event.target).attr("rel");
		var elem = $(".s-a-mod-section ."+id);
        
        if( $(window).width() > 960 ) {
            
            $('html,body').animate({
                scrollTop: $(elem).offset().top - $(".s-a-mod-section #q-menu ul.desktop").outerHeight()
            }, 1500);

        } else {

            $('html,body').animate({
                scrollTop: $(elem).offset().top - $(".s-a-mod-section #q-menu .mobile .inner").outerHeight() - 20
            }, 1500);
            
        }
	
	}
    
    // Mobile menu click
    
    $(".s-a-mod-section #q-menu .mobile").on("click", function(){
        
        $(".s-a-mod-section #q-menu .mobile ul").slideToggle();
        
    });
    
    
    // Interactive element
    
    var interactiveCount = 0;
    var timer = setInterval(function() {
        
        interactiveCount++;
        
        console.log(interactiveCount);
        
        var screenLength = $(".s-a-mod-section .interactive-element .screens .screen").length;
        
        if ( interactiveCount < screenLength ) {
            
            if ( interactiveCount === 1 ) {
                
                $(".s-a-mod-section .interactive-element .play-btn").fadeOut(1500);        
                $(".s-a-mod-section .interactive-element .play-btn").removeClass("active"); 
                
            }
            
            $(".s-a-mod-section .interactive-element .screens img.active").fadeOut(1500);        
            $(".s-a-mod-section .interactive-element .screens img.active").removeClass("active");        
            $(".s-a-mod-section .interactive-element .screens img").eq(interactiveCount).fadeIn(1500);
            $(".s-a-mod-section .interactive-element .screens img").eq(interactiveCount).addClass("active");
            
        } 
        
        if (interactiveCount === screenLength) { 
        
            interactiveCount = 0;
            
            console.log(interactiveCount);
            
            clearInterval(timer);
                        
            $(".s-a-mod-section .interactive-element .screens img.active").fadeOut(1500);        
            $(".s-a-mod-section .interactive-element .screens img.active").removeClass("active");        
            $(".s-a-mod-section .interactive-element .screens img").eq(0).fadeIn(1500);
            $(".s-a-mod-section .interactive-element .screens img").eq(0).addClass("active");
            $(".s-a-mod-section .interactive-element .play-btn").fadeIn(1500);        
            $(".s-a-mod-section .interactive-element .play-btn").addClass("active"); 
            
        }
        
    }, 2000);
    
    $(".s-a-mod-section .interactive-element .play-btn").click(function(){
  
        var timer = setInterval(function() {
        
        interactiveCount++;
        
        console.log(interactiveCount);
        
        var screenLength = $(".s-a-mod-section .interactive-element .screens .screen").length;
        
        if ( interactiveCount < screenLength ) {
            
            if ( interactiveCount === 1 ) {
                
                $(".s-a-mod-section .interactive-element .play-btn").fadeOut(1500);        
                $(".s-a-mod-section .interactive-element .play-btn").removeClass("active"); 
                
            }
            
            $(".s-a-mod-section .interactive-element .screens img.active").fadeOut(1500);        
            $(".s-a-mod-section .interactive-element .screens img.active").removeClass("active");        
            $(".s-a-mod-section .interactive-element .screens img").eq(interactiveCount).fadeIn(1500);
            $(".s-a-mod-section .interactive-element .screens img").eq(interactiveCount).addClass("active");
            
        } 
        
        if (interactiveCount === screenLength) { 
        
            interactiveCount = 0;
            
            console.log(interactiveCount);
            
            clearInterval(timer);
                        
            $(".s-a-mod-section .interactive-element .screens img.active").fadeOut(1500);        
            $(".s-a-mod-section .interactive-element .screens img.active").removeClass("active");        
            $(".s-a-mod-section .interactive-element .screens img").eq(0).fadeIn(1500);
            $(".s-a-mod-section .interactive-element .screens img").eq(0).addClass("active");
            $(".s-a-mod-section .interactive-element .play-btn").fadeIn(1500);        
            $(".s-a-mod-section .interactive-element .play-btn").addClass("active"); 
            
        }
        
    }, 2000);
        
        
    });
    
    // Carousel effects ---------------------------------------------------------------------------------------------------------------------
    
    // l-8 v1-------------------------------------------------------------------------
    // Declaring the slides array & Setting count variable to index default
    
    var slidesContainerV1 = $(".s-a-mod-section .l-8.v1 .carousel-container");
    var slidesV1 = $(".s-a-mod-section .l-8.v1 .carousel-container .slide");
    var imagesV1 = $(".s-a-mod-section .l-8.v1 .carousel-container .hiw-images");
    var dotsWrapperV1 = $(".s-a-mod-section .l-8.v1 .carousel-container .dots");
    var slidesCountV1 = 0;
    
    slidesV1.eq(0).show();
    
    // Creating spans for each slides
    
    $.each(slidesV1, function(index){
        
        // If it is the first dot add a active class
        
        if ( index === 0 ) {
        
            dotsWrapperV1.append("<span class='btn active'>&nbsp;</span>");
            
        } else {
            
            dotsWrapperV1.append("<span class='btn'>&nbsp;</span>");
            
        }
        
    }); // Each function
    
    // Declaring dots variable
    var dotsV1 = $(".s-a-mod-section .l-8.v1 .carousel-container .dots span");

    // Raising on click event for all elemtns with .btn class in .carousel-container       
    $(".s-a-mod-section .l-8.v1 .btn").on("click", function(){
        
        if ( $(this).hasClass("right") ) {
            
           if (slidesCountV1 === slidesV1.length - 1) {
               slidesCountV1 = 0;
               slidesAddRemoveV1();
            } else {
                slidesCountV1++;
                slidesAddRemoveV1();
            }
            
                        
        } else if ( $(this).hasClass("left") ) {
            
            if (slidesCountV1 === 0) {
                slidesCountV1 = slidesV1.length - 1; 
                slidesAddRemoveV1();
            } else {
                slidesCountV1--;
                slidesAddRemoveV1();       
            }            
            
        } else {

            slidesCountV1 = $(this).index();
            slidesAddRemoveV1();
            
        }
        
    });
    
    //Reusable add and remove code snippet
    function slidesAddRemoveV1() {
        slidesV1.filter(".active").hide();
        slidesV1.eq(slidesCountV1).addClass("active").show().siblings().removeClass("active");
        dotsV1.eq(slidesCountV1).addClass("active").show().siblings().removeClass("active");
        imagesV1.eq(slidesCountV1).addClass("active").show().siblings().removeClass("active");
    }
    
    // l-8 v1-------------------------------------------------------------------------
    // Declaring the slides array & Setting count variable to index default
    
    var slidesContainerV2 = $(".s-a-mod-section .l-8.v2 .carousel-container");
    var slidesV2 = $(".s-a-mod-section .l-8.v2 .carousel-container .slide");
    var dotsWrapperV2 = $(".s-a-mod-section .l-8.v2 .carousel-container .dots");
    var slidesCountV2 = 0;
    
    slidesV2.eq(0).show();
    
    // Creating spans for each slides
    
    $.each(slidesV2, function(index){
        
        // If it is the first dot add a active class
        
        if ( index === 0 ) {
        
            dotsWrapperV2.append("<span class='btn active'>&nbsp;</span>");
            
        } else {
            
            dotsWrapperV2.append("<span class='btn'>&nbsp;</span>");
            
        }
        
    }); // Each function
    
    // Declaring dots variable
    var dotsV2 = $(".s-a-mod-section .l-8.v2 .carousel-container .dots span");

    // Raising on click event for all elemtns with .btn class in .carousel-container       
    $(".s-a-mod-section .l-8.v2 .btn").on("click", function(){
        
        if ( $(this).hasClass("right") ) {
            
           if (slidesCountV2 === slidesV2.length - 1) {
               slidesCountV2 = 0;
               slidesAddRemove();
            } else {
                slidesCountV2++;
                slidesAddRemove();
            }
            
                        
        } else if ( $(this).hasClass("left") ) {
            
            if (slidesCountV2 === 0) {
                slidesCountV2 = slidesV2.length - 1; 
                slidesAddRemove();
            } else {
                slidesCountV2--;
                slidesAddRemove();       
            }            
            
        } else {

            slidesCountV2 = $(this).index();
            slidesAddRemove();
            
        }
        
    });
    
    //Reusable add and remove code snippet
    function slidesAddRemove() {
        slidesV2.filter(".active").hide();
        slidesV2.eq(slidesCountV2).addClass("active").show().siblings().removeClass("active");
        dotsV2.eq(slidesCountV2).addClass("active").show().siblings().removeClass("active");
    }
    
    // l-9 -------------------------------------------------------------------------
    // Declaring the slides array & Setting count variable to index default
    var slidesContainer2 = $(".s-a-mod-section .l-12 .carousel-container");
    var slides2 = $(".s-a-mod-section .l-12 .carousel-container .slide");
    var dotsWrapper2 = $(".s-a-mod-section .l-12 .carousel-container .dots");
    var slidesCount2 = 0;
    
    slides2.eq(0).show();
    
    // Creating spans for each slides
    
    $.each(slides2, function(index){
        
        // If it is the first dot add a active class
        
        if ( index === 0 ) {
        
            dotsWrapper2.append("<span class='btn active'>&nbsp;</span>");
            
        } else {
            
            dotsWrapper2.append("<span class='btn'>&nbsp;</span>");
            
        }
        
    }); // Each function
    
    // Declaring dots variable
    var dots2 = $(".s-a-mod-section .l-12 .carousel-container .dots span");

    // Raising on click event for all elemtns with .btn class in .carousel-container       
    $(".s-a-mod-section .l-12 .btn").on("click", function(){
        
        if ( $(this).hasClass("right") ) {
            
           if (slidesCount2 === slides2.length - 1) {
               slidesCount2 = 0;
               slidesAddRemove2();
            } else {
                slidesCount2++;
                slidesAddRemove2();
            }
            
                        
        } else if ( $(this).hasClass("left") ) {
            
            if (slidesCount2 === 0) {
                slidesCount2 = slides2.length - 1; 
                slidesAddRemove2();
            } else {
                slidesCount2--;
                slidesAddRemove2();       
            }            
            
        } else {

            slidesCount2 = $(this).index();
            slidesAddRemove2();
            
        }
        
    });
    
    //Reusable add and remove code snippet
    function slidesAddRemove2() {
        slides2.filter(".active").hide();
        slides2.eq(slidesCount2).addClass("active").show().siblings().removeClass("active");
        dots2.eq(slidesCount2).addClass("active").show().siblings().removeClass("active");
    }
    
    
    // Drop down effects -------------------------------------------------------------------------------------------------------------------------
    
    if( $(window).width() > 768 ) {
    
        $(".s-a-mod-section .drop-downs").on("click", function() {   
            $(this).children(".copy").slideToggle();
        });  
    
    }
    
    // How to demo -------------------------------------------------------------------------------------------------------------------------
    
    $(".s-a-mod-section .list-one li").on("click", function() {
        
        $(".s-a-mod-section .list-one li.active").removeClass("active");
        $(".s-a-mod-section .list-one-img-wrap img.active").removeClass("active");
        
        $(this).addClass("active");
        $(".s-a-mod-section .list-one-img-wrap img."+$(this).attr("rel")).addClass("active");
        
    });
    
    $(".s-a-mod-section .list-two li").on("click", function() {
        
        $(".s-a-mod-section .list-two li.active").removeClass("active");
        $(".s-a-mod-section .list-two-img-wrap img.active").removeClass("active");
        
        $(this).addClass("active");
        $(".s-a-mod-section .list-two-img-wrap img."+$(this).attr("rel")).addClass("active");
        
    });
    
});