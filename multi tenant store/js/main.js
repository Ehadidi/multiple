
$(window).on("load", function(){
    $('.loader').fadeOut("slow" , function (){
        $( '.loader' ).remove();
    });
})

$(".bars,.nav-layer").click(function(){
    $(".bars").toggleClass("x-bars");
    $(".nav-layer").toggleClass("open");
    $(".navbar").toggleClass("open");
    // $(".bars").css("z-index" , "99")
});
$(".profile-drop,.profile-menu-layer").on("click" , function(){
    $(".profile-menu-layer").toggleClass("open");
    $(".profile-menu").toggleClass("open");
    // $(".bars").css("z-index" , "99")
});

var ls = 0;
$(window).scroll(function (){
    var win = $(window).scrollTop();
    if(win > ls ) {
        $(".bottom-nav").addClass("bottom-nav_scroll")
    }else {
        $(".bottom-nav").removeClass("bottom-nav_scroll")
    }
    ls = win
});

$(".nav-bar ul li").on("click" , function (){
    $(".nav-bar ul li").removeClass("act");
    $(this).addClass("act");
})

$(".removed").on("click" , function(){
    $(this).parent().remove();
})
$(".navItemList").on("click" , function(){
    $(".product-col").addClass("cardDisplayList").removeClass("cardDisplaygraid");
    // $(".card-img-top").addClass("cardImgTop");
})

$(".navItemGriad").on("click" , function(){
    $(".product-col").addClass("cardDisplaygraid").removeClass("cardDisplayList");
    // $(".card-img-top").removeClass("cardImgTop")
})


$(".megaToggle,.closemega").on("click" , function(){
    $(this).find(".megaDrob").toggleClass("open")
    $(".megadrob-layer").toggleClass("open")
    $(this).find(".closemega").toggleClass("x-mega")
  })

  $(".fevorite").on("click" , function(){
      $(this).toggleClass("loved");
  })

$(document).on("click" , ".view-options .btn" , function (){
    $(".view-options .btn").removeClass("act");
    $(this).addClass("act");
})

$(document).ready(function() {
    $('.niceSelect').niceSelect();
});