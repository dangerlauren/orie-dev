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

	$(function(){
		$('.moduletable-mobilenav').click(function(){
			$('.menu-mobile').slideToggle().toggleClass('expand');
		})
	});

	$(function(){
		$( '.moduletable-mobilenav h3' ).click(function(){
			$('.moduletable-mobilenav h3').css({'z-index': '999'});
			var docHeight = $(document).height();
			$("body").append("<div id='overlay'></div>");
			$('#mast .menu-mobile').slideToggle();
			$("#overlay").height(docHeight); 
		   	$('#overlay').toggleClass('show');
		});		
	});

	

	$(function(){
		$( '.moduletable-flexcontrols p a.next, .moduletable-flexcontrols p a.prev' ).click(function(event){
			var n = $(this).attr('href').substring(1);
			if (n == 'null') {
				return false;
			} else {
				$('.'+ n).addClass('showme').removeClass('hideme');
				$('.moduletable-flex:not(.'+ n +')').addClass('hideme').removeClass('showme');
				switch (n) {
					case "one" :
						$('.moduletable-flexcontrols p a.next').attr('href', '#two');
						$('.moduletable-flexcontrols p a.prev').attr('href','#null').addClass('disabled');
						break;
					case "two" :
						$('.moduletable-flexcontrols p a.next').attr('href', '#three').removeClass('disabled');
						$('.moduletable-flexcontrols p a.prev').attr('href','#one').removeClass('disabled');
						break;
					case "three" :
						$('.moduletable-flexcontrols p a.next').attr('href','#null').addClass('disabled');
						$('.moduletable-flexcontrols p a.prev').attr('href','#two');
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

})(jQuery);