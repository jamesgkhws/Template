
// Header - name -------------------------------------------------------------------------------------------------------------
    
var modTitle = $("#BodyContent_subheadercontent_1_pnlHero h2").text();

$(".s-a-mod-section #q-heading .mod-title").append( modTitle );

// Create three span elements on load

/*function moduleLevel(level) {

    $("#q-heading .dots").append("<span></span><span></span><span></span>");

    // Add class to number of spans based on the difficulty
    $.each($("#q-heading .dots span:nth-child(-n+"+level+")"), function() {

        $(this).addClass("teal");

    });

}*/

// Menu and tabs ----------------------------------------------------------------------------------------------------------------------


// Create menu tabs based on the data-menu attribute for each section

$.each( $(".s-a-mod-section[data-menu]"), function(){

    var rel = $(this).attr("data-menu");
    var title = $(this).attr("data-menu-title").replace(/[^a-z0-9\s]/gi, ' ');

    $(".s-a-mod-section #q-menu ul").append("<li rel="+rel+" class='tabs'>"+title+"</li>");

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

$(".s-a-mod-section #q-menu .mobile h2").text( function(){
    return $(".s-a-mod-section #q-menu .mobile ul li:first-child").text();
});

// ?????

$(".s-a-mod-section #q-menu .mobile ul li").on("click", function(){

    $(".s-a-mod-section #q-menu .mobile h2").html($(this));

});

// ?????

var headerHeight = $("#q-heading").outerHeight() + $(".subMenuBack").outerHeight() + $("#header").outerHeight();
var menuHeight = $("#q-menu").outerHeight();

$("#q-menu").css("top", headerHeight+"px");
$(".hero").css("padding-top", menuHeight+"px");

// Sticky menu on scroll

$(window).on("scroll", stickyNav);

function stickyNav(){

    if ( $(window).scrollTop() > $("#q-heading").offset().top + $("#q-heading").outerHeight() ) {

        $("#q-menu").addClass("sticky");

    } else {

        $("#q-menu").removeClass("sticky");

    }

}

// Mobile menu change on scroll



// Menu tabs click and scroll to related section

$(".s-a-mod-section #q-menu ul li").on("click", scrollElem);

function scrollElem(event) {

    var id = $(event.target).attr("rel");
    var elem = $(".s-a-mod-section ."+id);

    $('html,body').animate({
        scrollTop: $(elem).offset().top - $("#q-menu").outerHeight()
    }, 1500);

}

// Mobile menu click

$(".s-a-mod-section #q-menu .mobile").on("click", function(){

    $(".s-a-mod-section #q-menu .mobile ul").slideToggle();

});