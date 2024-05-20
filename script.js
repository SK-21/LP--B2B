WindowResize();



//WindowOnScroll
 window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").addClass("nav-active");
    } else {
        $("nav").removeClass("nav-active");
    }
}

//OnPressedClose
$(".close").on("click", function(){
    $(this).parent().hide('100', function(){ $(this).remove(); });
});



//IfWindowScreenSizeMatch
window.addEventListener('resize', function(event) {
    WindowResize();
});

function WindowResize(){
    if (window.matchMedia("(max-width: 920px)").matches === true) {
        $("nav").append('<a href="javascript:void(0)" class="ham"><iconify-icon icon="streamline:interface-setting-menu-parallel-hamburger-square-navigation-parallel-hamburger-buttonmenu-square"></iconify-icon></a>');
        $("nav ul li a").on("click", function(){
            if ($("nav ul li a").hasClass("active_sub_link")){ $("nav ul li a").removeClass("active_sub_link"); }
            $(this).addClass("active_sub_link");
        });
        
        //HamOnPressed
        $(".ham").on("click", function(){
            ham();
            overlay();
        });
    } else {
        if ($(".ham").length > 0) { $(".ham").remove(); }
        if ($(".overlay").length > 0) { overlay(); }
    }
}

function ham(){
    if ($("nav ul").css("left") < "0px"){
        $(".ham").html('<iconify-icon icon="gg:close-r"></iconify-icon>').fadeIn("slow");
        $(".ham").addClass("active");
        $("nav ul").css("left", "0");
    } else {
        $(".ham").html('<iconify-icon icon="streamline:interface-setting-menu-parallel-hamburger-square-navigation-parallel-hamburger-buttonmenu-square"></iconify-icon>').fadeIn("slow");
        $(".ham").removeClass("active");
        $("nav ul").css("left", "-100%");
    }
}

//Overlay
function overlay(){
    ham();
    $("body .overlay").length > 0 ? $(".overlay").remove() :  $("body").append('<div class="overlay" onclick="overlay()"></div>');
}