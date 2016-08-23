(function($) {

	$(function(){
		$('.custom-orielogo, .custom-cselogo, .custom-utlogo').click(function(){
			window.location=$(this).find("a").attr("href");
			return false;
		});
	});

	$(function() {
		$(".moduletable-mainnav > .menu > li.deeper, #left > .menu-subnav > li.deeper").mouseenter(function(){
			var navclass = $(this).attr("class");
		  $(this).addClass("showme");
		}).mouseleave(function(){
			var navclass = $(this).attr("class");
		  $(this).removeClass("showme");
		});
	});

	$(function(){
		$( '.menuhead h3' ).click(function(){
			$('#left .menu-subnav').slideToggle();
		});		
	});

	// *** ORIGINAL ***
	// $(function(){
	// 	$('.moduletable-mobilenav').click(function(){
	// 		$('.menu-mobile').slideToggle().toggleClass('expand');
	// 	})
	// });

	// $(function(){
	// 	$( '.moduletable-mobilenav h3' ).click(function(){
	// 		$(this).css({'z-index': '999'});
	// 		var docHeight = $(document).height();
	// 		$("body").append("<div id='overlay'></div>");
	// 		$("#overlay").height(docHeight); 
	// 	   	// $('#overlay').addClass('show');
	// 	   	$('#overlay').toggleClass('show');


	// 	});	
	// });

		// *** REFACTORED - STILL WORKS ***
		$(function(){
		$('.moduletable-mobilenav').click(function(){
			$(this).css({'z-index': '999'});
			var docHeight = $(document).height();
			$("body").append("<div id='overlay'></div>");
			$("#overlay").height(docHeight); 
		   	$('#overlay').toggleClass('show');
			$('.menu-mobile').slideToggle().toggleClass('expand');
		})
	});

	// $(function(){
	// 	$('.moduletable-mobilenav').click(function(e){

	// 		$(this).css({'z-index': '999'});
	// 		$('.menu-mobile').slideToggle().toggleClass('expand');
	// 		var docHeight = $(document).height();
	// 		$("body").append("<div id='overlay'></div>");
	// 		$("#overlay").height(docHeight); 
	// 		$('#overlay').toggleClass('show');

	// 		var target = $(e.target)	
	// 	   	if (target.hasClass('search-query')) {
	// 	   		// don't close menu or don't slideToggle .menu-mobile
	// 	   		$('.menu-mobile').remove()
	// 	   	}

	// 	   	else {
	// 	   	// link takes you to another page, or clicking on menu closes
	// 	   }
		   	
			
	// 	})
	// });

	$(function(){
		$( '.custom-flexcontrols p a.next, .custom-flexcontrols p a.prev' ).click(function(event){
			var n = $(this).attr('href').substring(1);
			if (n == 'null') {
				return false;
			} else {
				$('.'+ n).addClass('showme').removeClass('hideme');
				$('.custom-flex:not(.'+ n +')').addClass('hideme').removeClass('showme');
				switch (n) {
					case "one" :
						$('.custom-flexcontrols p a.next').attr('href', '#two');
						$('.custom-flexcontrols p a.prev').attr('href','#null').addClass('disabled');
						break;
					case "two" :
						$('.custom-flexcontrols p a.next').attr('href', '#three').removeClass('disabled');
						$('.custom-flexcontrols p a.prev').attr('href','#one').removeClass('disabled');
						break;
					case "three" :
						$('.custom-flexcontrols p a.next').attr('href','#null').addClass('disabled');
						$('.custom-flexcontrols p a.prev').attr('href','#two');
						break;
					}
			}
		});		
	});

	$(function() {

		$(".switch a").click(function(e) { 

			var link = $(this).attr("href");
			
			$(link).slideToggle();
			$(this).toggleClass('active');
			
			e.preventDefault(); 

		});
	});

	$(function() {
		$("dt a").click(function(event) { 
			event.preventDefault(); 
			$(this).parent().next('dd').slideToggle();
		});
	});

})(jQuery);