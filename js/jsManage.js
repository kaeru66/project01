// Menu
$(document).ready(function(){
    if ($('.menu-button').is(':visible')) {
        $('.menu-main').appendTo('.menu');
    }
});

$(function() {
    $('.fas.fa-bars').click(function(){
        $('.fas.fa-bars').hide();
        $('.fas.fa-times').show();
        $('.menu').stop().slideDown();
        $('.menu-bg').show();
    });
    $('.fas.fa-times').click(function(){
        $('.fas.fa-times').hide();
        $('.fas.fa-bars').show();
        $('.menu').stop().slideUp();
        $('.menu-bg').hide();
    });

    $('.search-btn').click(function () {
        $('.menu-search input').show(); 
        $('.search-btn').addClass('search-btn-open');
        $('.search-a').addClass('search-open'); 
        $('.menu-language-options').slideUp(); 

    });

    $('.search-a').click(function () {
        $('.menu-search input').hide(); 
    });

    $('.faq-sidebar-btn').click(function() {
        $('.faq-sidebar').stop().slideToggle().end().toggleClass('open');
    });

    $('.products-sidebar-btn').click(function() {
        $('.products-sidebar').stop().slideToggle().end().toggleClass('open');
    });
});

function chk() {
  if(document.search_form.pro_name.value == ''){
      $(".search-a").stop().removeClass('search-open');
      $(".search-btn").stop().removeClass('search-btn-open');
      return false;
  }
  document.search_form.submit();
}


$(document).ready(function(){
    if ( $(window).width() > 1024 ) {
        $('.menu-main > li:nth-of-type(1)').mouseover(function () {
            $('#menu-pro').show();      
        });
        $('.menu-main > li:nth-of-type(1)').mouseout(function () {
            $('#menu-pro').hide();      
        });

        $('.menu-main > li:nth-of-type(2)').mouseover(function () {
            $('#menu-app').show();      
        });
        $('.menu-main > li:nth-of-type(2)').mouseout(function () {
            $('#menu-app').hide();      
        });

        $('.menu-language-btn').click(function() {
            $(this).next('.menu-language-options').stop().slideToggle().end().toggleClass('open');
            $('.menu-search input').hide();
            $(".search-a").stop().removeClass('search-open');
            $(".search-btn").stop().removeClass('search-btn-open');
        });

        $('.pro-icon-list a').click(function(){
            $('html,body').animate({scrollTop:$('#parentHorizontalTab').offset().top}, 300);
        });

        $('#solution-btn01').click(function(){
            $('html,body').animate({scrollTop:$('#step2').offset().top}, 300);
        });
        $('#solution-btn02').click(function(){
            $('html,body').animate({scrollTop:$('#step3').offset().top}, 300);
        });
        $('#solution-btn03').click(function(){
            $('html,body').animate({scrollTop:$('#step4').offset().top}, 300);
        });
        $('#solution-btn04').click(function(){
            $('html,body').animate({scrollTop:$('#step5').offset().top}, 300);
        });
        $('#solution-btn05').click(function(){
            $('html,body').animate({scrollTop:$('#step6').offset().top}, 300);
        });
    }else{
        $('.pro-icon-list a').click(function(){
            $('html,body').animate({scrollTop:$('#parentHorizontalTab').offset().top - 90}, 300);
        });

        $('#solution-btn01').click(function(){
            $('html,body').animate({scrollTop:$('#step2').offset().top - 90}, 300);
        });
        $('#solution-btn02').click(function(){
            $('html,body').animate({scrollTop:$('#step3').offset().top - 90}, 300);
        });
        $('#solution-btn03').click(function(){
            $('html,body').animate({scrollTop:$('#step4').offset().top - 90}, 300);
        });
        $('#solution-btn04').click(function(){
            $('html,body').animate({scrollTop:$('#step5').offset().top - 90}, 300);
        });
        $('#solution-btn05').click(function(){
            $('html,body').animate({scrollTop:$('#step6').offset().top - 90}, 300);
        });
    }
});

$(document).ready(function(){
    if ( $(window).width() <= 1024 ) {
        $('.footer-info-title').click(function() {
            $(this).next('.footer-information').stop().slideToggle();
        });
    }
});

// Edit
$(function() {
    $('.edit-box table').wrap('<div class="table_scroll"></div>');
});


// Go Top
$(document).ready(function() {      
    $(window).scroll(function() {
        var footertotop = ($('footer').position().top);
        var scrolltop = $(document).scrollTop() + window.innerHeight;
        var difference = scrolltop-footertotop;
        if (scrolltop > footertotop) {
          $('.go-top').css({'bottom' : difference});
        }else{
            $('.go-top').css({'bottom' : 10});
        };   

        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    $('.go-top').click(function(event) {
        event.preventDefault();
        $("html,body").animate({scrollTop:0},800);
        $('.menu-language-options').slideUp(); 
        $('.menu-search input').hide();
        $(".search-a").stop().removeClass('search-open');
        $(".search-btn").stop().removeClass('search-btn-open');
        return false;
    })
});


// Index
$(function(){
    $('.owl-index').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        navText:['',''],
        items:1,
        nav:true
    });
});


$(function(){
    $('.owl-aerospace').owlCarousel({
        loop:true,
        autoplay:true,
        dots:false,
        navText:['',''],
        responsive:{
            0:{
                items:3,
            },
            768:{
                items:5,
            },
            1024:{
                items:6,
            },
            1280:{
                items:8,
            }
        }
    });
});


$(function () {
  $("#slider1").responsiveSlides({
    auto: false,
    pager: true,
    nav: false,
    speed: 1000,
    manualControls: '#slider1-pager',
  });
});

$(document).ready(function(){
    $('.venobox').venobox({
        numeratio: true,
        infinigall: true,
        border: '0px',
    });
    $('.venoboxvid').venobox({
        bgcolor: '#000'
    });
    $('.venoboxframe').venobox({
        border: '6px'
    });
    $('.venoboxinline').venobox({
        framewidth: 'auto',
        frameheight: 'auto',
        border: '10px',
        bgcolor: '#000',
        titleattr: 'data-title',
    });
    $('.venoboxajax').venobox({
        border: '30px;',
        frameheight: '220px'
    });
})


$(function(){
    $('.owl-pro02').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        navText:['',''],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            570:{
                items:2,
                nav:true
            },
            1024:{
                items:3,
                nav:true
            },
            1280:{
                items:4,
                nav:true
            }
        }
    });
});


// Application
$(function(){
    $('.owl-application').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        navText:['',''],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            570:{
                items:2,
                nav:true
            },
            1024:{
                items:3,
                nav:true
            },
            1280:{
                items:4,
                nav:true
            }
        }
    });
});


// Company
$(function(){
    $('.owl-company').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        navText:['',''],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            570:{
                items:2,
                nav:true
            },
            1024:{
                items:3,
                nav:true
            },
            1280:{
                items:5,
                nav:true
            }
        }
    });
});


$(function() {
    //Horizontal Tab
    $('#parentHorizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
});

$(function() {
    //Horizontal Tab
    $('#parentHorizontalTab02').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
});

