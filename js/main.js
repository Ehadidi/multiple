$(window).on("load", function(){
    $('.loader').fadeOut("slow" , function (){
        $( '.loader' ).remove();
    });
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function (){
    var sideButtons = document.querySelector('.side_bar_ul').getElementsByTagName('li');
    for (var i = 0 ; i < sideButtons.length ;i++){
        const a = sideButtons[i].getElementsByTagName('a')[0];
        if(window.location.href == a.href){
            sideButtons[i].classList.add('act');
            break;
        }
    }
    if($('.side_bar_ul li.act').offset().top !== 0){
        $('.side-bar').animate({
            scrollTop: $('li.act').offset().top - 100
        } ,600);
    }else{
        $('.side_bar_ul').animate({
            scrollTop: $('li.act').parent().parent().offset().top - 100
        } ,600);
    }
})

$(function (){
    $(".user_drop_toggle,.drop_down_layer").on("click" , function (){
        $(".drop_down_layer").toggleClass("open")
    })
})

$(function (){
    $(".bars,.side_bar_layer").on("click" , function (){
        $(".side_bar_layer").toggleClass("open");
        $(".side_bar").toggleClass("open");
    });
});

$(function (){
    $(".filter_modal,.side_option_layer,.remove_modal").on("click" , function (){
        $(".side_option").toggleClass("open");
        $(".side_option_layer").toggleClass("open");
    })
})

$(function (){
    $(".filter_section").on("click" , function (){
        if(!$(this).hasClass('active')){
            $(".filter_section").removeClass("active")
            $(this).addClass("active")
        }else {
            $(this).removeClass("active")
        }
    })
})

$(document).ready(function (){
    $(".add_Q").on("click" , function (){
        $('<div class="col-12 appendQ_row">'+
            '<div class="row">'+
            '<div class="col-md-6 col-12">' +
            '<div class="form_input">' +
            '<label for="repeat_q" class="form_label">السؤال المتكرر عن المنتج</label>' +
            '<input id="repeat_q" type="text" placeholder="أدخل السؤال">' +
            '</div>' +
            '</div>' +
            '<div class="col-md-6 col-12">' +
            '<div class="form_input">' +
            '<label for="answer" class="form_label">الاجابة</label>' +
            '<input id="answer" type="text" placeholder="أدخل إجابة السؤال">'+
            '</div>' +
            '</div>' +
            '<div>'+
            '<a class="removeAppendForm btn">'+
            'x'+
            '</a>'+
            '<div>'
            ).insertBefore($(".addQ_col"));
    });
});
$(document).on("click" , ".removeAppendForm" , function (){
    $(this).parents(".appendQ_row").remove();
})

$(document).on("change" , ".checkAll" , function (){
    $(this).parents(".main_card").find(".check_order").prop('checked',$(this).is(":checked"));
});

$(document).ready(function (){
    $(".iti--allow-dropdown").append('<div class="tell_row row w-100 m-0"></div>');
    $(".iti--allow-dropdown .tell_row").append('<div class="country_tell_col col-1"></div><div class="input_tell_col col-11 p-0"></div>');
    var countrySelect = $(".iti__flag-container");
    var countryInput = $(".telephone_input");
    $(".country_tell_col").html(countrySelect);
    $(".input_tell_col").html(countryInput);
})

$(function (){
    $(".check_collapse_row").slideUp();
})
$(document).on("change" , ".marketing_coupon" , function(){
    if ($(this).is(':checked')){
        $(".check_collapse_row").slideDown();
    }else {
        $(".check_collapse_row").slideUp();
    }
})


$(".uniCampaignRow").slideUp();
$(document).on("change" , ".uniCampaign .radio-input" , function(){
    if ($(".selectTimeRadio").is(':checked')){
        $(".uniCampaignRow").slideDown();
    }else {
        $(".uniCampaignRow").slideUp();
    }
})


$(document).on("click" , ".remove_col_search" , function (e){
    e.preventDefault()
    $(this).parents(".col__search").remove();
})

$(function (){
    $(".offer_message").on("keyup" , function(){
        $(".txt__prev").html($(this).val());
    })
})

$(function (){
    $(".remove_condition_row").on("click" , function (){
        $(this).parent().remove();
    })
})

$(function (){
    $(".removeItemSelect").on("click" , function (){
        $(this).parent().remove();
    })
})

$(document).on("click",".remove_circle" , function (e){
    e.preventDefault();
    $(this).parent().remove();
})
$(function (){
    $(".btn_disable").on("click" , function (e){
        e.preventDefault();
    })
})

// avatar img prev
$('.input-img').change(function (event) {
    $(this).parents(".imgs-block").find(".uploaded-block").remove();
    for (var one = 0; one < event.target.files.length; one++) {
        $(this).parents('.imgs-block').find('.upload-area').append('' +
            '<div class="uploaded-block" data-count-order="' + one + '">' +
            '<img src="' + URL.createObjectURL(event.target.files[one]) + '">' +
            '<a type="button" class="btn remove_avatar round_btn_red"> ' +
            '<i class="fa fa-times"></i>' +
            '</a>' +
            '<a type="button" class="btn change_avatar round_btn_main"> ' +
            '<i class="fa-solid fa-pen-to-square"></i>' +
            '</a>' +
            '</div>');
        $(".uploaded-block img").hide().css({
            "border-radius" : "0",
            "width" : "0",
            "height" : "0",
        }).show().css({
            "border-radius" : "50%",
            "width" : "100%",
            "height" : "100%",
        })
    }
});
$(document).on("click", ".change_avatar" , function (){
    $(".input-img").click();
})
//end avatar img prev


$(document).ready(function() {
    $('.niceSelect').niceSelect();
});


$(document).ready(function() {
    $('.select2').select2();
});

$(function (){
    $(".flatpickr").flatpickr({
        dateFormat: "Y-m-d",
    });
})

$(function (){
    $(".timepicker").flatpickr(
        {
            altInput: false,
            enableTime: true,
            noCalendar: true,
            dateFormat: "h:i K",
        }
    );
})

$(function (){
    $(".daily__date").flatpickr({
        dateFormat: "Y-m-d",
        maxDate: "today",
        defaultDate:'today'
    });
})

// let x1 = true ;
// let formSearch = $(".search_form");

// if(window.innerWidth > 992){
//     x1 = false;
//     $(".user_nav .container-fluid .d-flex").prepend(formSearch);
// }else{
//     x1 = true;
//     $(".dashboard_header").append(formSearch);
// }
//
// window.onresize = function(){
//     if(window.innerWidth > 992){
//         if(x1){
//             x1 = false;
//             $(".user_nav .container-fluid .d-flex").prepend(formSearch);
//         }
//     }else{
//         if(!x1){
//             x1 = true;
//             $(".dashboard_header").append(formSearch);
//         }
//     }
// }
var formSearch = $(".search_form");


function myFunction(x) {
    if (x.matches) {
        $(".dashboard_header").append(formSearch);
    } else {
        $(".user_nav .container-fluid .d-flex").prepend(formSearch);
    }
}

var x = window.matchMedia("(max-width: 992px)")
myFunction(x)
x.addListener(myFunction)


