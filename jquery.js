//Runs after the page has loaded
$(document).ready(function(){
    //Show alert box and profile picture
    $(window).on("load",function(){
        $(".alert").show(1000);
        $(".profilepic").show(1500);
    });
    //Increase the thickness of jumbotron lines
    $(window).on("load",function(){
        $(".jumbotron-hr1").animate({
            height: "10px",
            width: "100%"
        },1000,function(){
            $(".jumbotron-hr2").animate({
                height: "10px",
                width: "100%"
            },1000);
        });
    });
    //showing the about and services section
    if($(window).scrollTop()>960){
        $(window).on("scroll",function(){
            $(".about-card").show(1000);
        });
    }
    //Skillset bar loading
    $(".skills").hover(function(){
        $(".html-bar").animate({
            width: "80%"
        },1000);
        $(".css-bar").animate({
            width: "68%"
        },1100);
        $(".bootstrap-bar").animate({
            width: "60%"
        },1200);
        $(".javascript-bar").animate({
            width: "55%"
        },1300);
        $(".jquery-bar").animate({
            width: "50%"
        },1400);
        $(".php-bar").animate({
            width: "75%"
        },1500);
        $(".wordpress-bar").animate({
            width: "0%"
        },1600);
        $(".xml-bar").animate({
            width: "0%"
        },1700);
        $(".json-bar").animate({
            width: "0%"
        },1800);
        $(".restapi-bar").animate({
            width: "0%"
        },1900);
        $(".vue-bar").animate({
            width: "0%"
        },2000);
        $(".c-bar").animate({
            width: "10%"
        },2100);

    });
    //Pricing card hover effects
    $(".p-card").hover(function(){
        $(this).animate({
            marginTop: "-=10%",
            width: "+=10px",
        },300);
    },function(){
        $(this).animate({
            marginTop: "+=10%",
            width: "-=10px",
        }),100;
    });
    //My portfolio card hover effects
    $(".my-p-card").hover(function(){
        $(this).animate({
            marginTop: "-=10%"
        },500);
    },function(){
        $(this).animate({
            marginTop: "+=10%"
        },100);
    });
    //Scrolling to the sub-section page
    var page_link = window.location.href;
    var page_id = page_link.subString(page_link.lastIndexOf("#") + 1);
    if(page_id == "about"){
        $("body").animate({
            scrollTop: $("#scroll-" + page_id).offset().top
        },1000);
    }
    else if(page_id == "pricing"){
        $("body").animate({
            scrollTop: $("#scroll-" + page_id).offset().top
        }, 2000);
    }
    else if(page_id == "portfolio"){
        $("body").animate({
            scrollTop: $("#scroll-" + page_id).offset().top
        },3000);
    }
});
