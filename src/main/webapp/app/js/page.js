$(document).ready(function() {
	// Activate Carousel
	$("#myCarousel").carousel();

	// Enable Carousel Indicators
	$(".item1").click(function() {
		$("#myCarousel").carousel(0);
	});
	$(".item2").click(function() {
		$("#myCarousel").carousel(1);
	});
	$(".item3").click(function() {
		$("#myCarousel").carousel(2);
	});
	$(".item4").click(function() {
		$("#myCarousel").carousel(3);
	});

	// Enable Carousel Controls
	$(".left").click(function() {
		$("#myCarousel").carousel("prev");
	});
	$(".right").click(function() {
		$("#myCarousel").carousel("next");
	});

	$('.carousel-control').click(function(e) {
		e.preventDefault();
	});

	// show scroll-up
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 200) {
			$(".arrow-up i").show();
		} else {
			$(".arrow-up i").hide();
		}
	});

	/* scroll to top */
	$(".arrow-up").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		return false;
	});

	/* image hover effect */

	$('.explore-row .col-sm-3').hover(function() {
		$(this).find('.arrow').show();

	}, function() {
		$(this).find('.arrow').hide();
	});

	// pagination
	$('#pagination').pagination({
		pages: 10,
		
		cssStyle: 'light-theme',
		displayedPages:3,
		currentPage: 1
	});
        
        var row_width = $('.service-row').find('.col-sm-8').height();
	var width = $(window).width();
	var doc_width = $(document).width();
	if (width < 650) {
                $(".main_search_bar").find("#title").css('font-size' , '2em');
		$('#screenbg').find('.search_big').text("");
		$('.search_index').css('padding-top', '70px')
	} else {
                $(".main_search_bar").find("#title").css('font-size' , '5em');
		$('#screenbg').find('.search_big').text("Search");
		$('.search_index').css('padding-top', '30px');
	}

	$('.service-row').find('.col-sm-3').css('height', row_width);
	


	/* add review */
	$("#add-review ,#cancel-review").click(function(){
		$('#review-form').toggle();
	});
        
        var url = "http://localhost:8081/#/" || "http://traviewdev.herokuapp.com/#/" ||"http://traviewdemo.herokuapp.com/#/"
        || "http://localhost:8080/#/";
        $(window).bind('hashchange', function() {
		if(window.location.href==url) {
                        
                        $('.head').css('display','block');   
		}else{
                    $(".main_search_bar>div").removeClass("top animated fadeInDown");
                    $('.main_search_bar>div').find('p').hide();
                    $('.search_index').css({
                        'padding-top':'10px'
                    });
                }
        });
		if(window.location.href==url) {         
                        $('.head').css('display','block');
                        $('.search_index').addClass("top animated fadeInUp");
		}else{
                    $(".main_search_bar>div").removeClass("top animated fadeInDown");
                    $('.main_search_bar>div').find('p').hide();
                    $('.search_index').css({
                        'padding-top':'10px'
                    });
                }
	


});