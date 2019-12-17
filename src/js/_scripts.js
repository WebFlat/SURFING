$(document).ready(function(){
	'use strict';



	$('.owl-carousel').owlCarousel({
		loop:true,
		items:1,
		autoplay: true,
		smartSpeed: 1000
	});


	$('#btn-about').click(function(e) {
		e.preventDefault();
		$('#home-block').css('display','none');
		$('#news-block').css('display','none');
		$('#blog-block').css('display','none');
		$('#gallery-block').css('display','none');
		$('#contacts-block').css('display','none');
		$('#blog-block').css('display','none');
		$('#about-block').fadeTo(200,0.1,function() { 
             $(this).css('display','grid').fadeTo(900,1);
            });
	});
	$('#btn-home').click(function(e) {
		e.preventDefault();
		$('#about-block').css('display','none');
		$('#news-block').css('display','none');
		$('#blog-block').css('display','none');
		$('#gallery-block').css('display','none');
		$('#contacts-block').css('display','none');
		$('#blog-block').css('display','none');
		$('#home-block').fadeTo(200,0.1,function() { 
             $(this).css('display','block').fadeTo(900,1);
            });
	});
	$('#btn-news').click(function(e) {
		e.preventDefault();
		$('#about-block').css('display','none');
		$('#home-block').css('display','none');
		$('#blog-block').css('display','none');
		$('#gallery-block').css('display','none');
		$('#contacts-block').css('display','none');
		$('#blog-block').css('display','none');
		$('#news-block').fadeTo(200,0.1,function() { 
             $(this).css('display','grid').fadeTo(900,1);
            });
	});
	$('#btn-blog').click(function(e) {
		e.preventDefault();
		$('#about-block').css('display','none');
		$('#home-block').css('display','none');
		$('#news-block').css('display','none');
		$('#gallery-block').css('display','none');
		$('#contacts-block').css('display','none');
		$('#blog-block').fadeTo(200,0.1,function() { 
             $(this).css('display','grid').fadeTo(900,1);
            });
	});
	$('#btn-gallery').click(function(e) {
		e.preventDefault();
		$('#about-block').css('display','none');
		$('#home-block').css('display','none');
		$('#news-block').css('display','none');
		$('#blog-block').css('display','none');
		$('#contacts-block').css('display','none');
		$('#gallery-block').fadeTo(200,0.1,function() { 
             $(this).css('display','block').fadeTo(900,1);
            });
	});

//Block-unblock scroll background modal window****************************************
	$('.nav--submenu__link').click(function () { 
		$('body').css('overflow', 'hidden');		
	});
	$('.modal__close').click(function() { 
		$('body').css('overflow', 'auto');
	}); 


//Show big image********************************************************
	$('.gallery__popup img').click(function() {
		$('.popup__img').attr('src', $(this).attr('src'));
		$('body').css('overflow', 'hidden');
	});
	
	
});