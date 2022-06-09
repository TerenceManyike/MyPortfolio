//Runs after the page has loaded
$(document).ready(function(){

    //Shows bootstrap cards
    $(window).on("load",function(){
        $(".cards").show(1500);
    });
    //Scrolling event
    $(window).on( "scroll", function(){
        $( "nav" ).css({backgroundColor: "lightgrey" });
    });
});

