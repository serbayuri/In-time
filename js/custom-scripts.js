$(document).ready(function() {


/***************header-bottom********************** 
*************************************************/

    var h_hght = '107';
    var hght = '147';
    var h_mrg = '0';
    var asideMrg = '40';  
                 
    $(function(){
 
        var header = $('.header-bottom');
        var aside = $('aside');
        var top = $(this).scrollTop();
     
        if(top > h_hght){
            header.css('top', h_mrg + 'px');
        }

        if(top > hght){
            aside.css('top', h_mrg + 'px');
        }            
     
        $(window).scroll(function(){
            top = $(this).scrollTop();
         
            if (top + h_mrg < h_hght && h_hght - top > 0) {
                header.css('top', (h_hght - top) + 'px');
            } else {
                header.css('top', h_mrg + 'px');
            }
            
            if (top + asideMrg < hght && hght - top > 0) {
                if ($('body').prop('clientWidth') <= 1000) {
                	aside.css('top', (hght - top) + 'px');
                	aside.css({"margin-top": "0px"});
                } else {
                	aside.css({"top": "0px", "margin-top": "50px"});	
                }	               
            } else {
                aside.css('top', asideMrg + 'px');
                aside.css({"margin-top": "0px"});
            }
                
        });
 
    });

/**************burger****************************** 
*************************************************/

    $('.icon-burger').click(function() {
        $(this).toggleClass('active');
    });

    $('body').click(function () {
        $('.icon-burger').removeClass('active');
    });

    $('.icon-burger').click(function(e) {
        e.stopPropagation();
    });


/***************tabs****************************** 
*************************************************/

	$('.tabs-controls li').click(function(){
		if (!$(this).hasClass('active')) {

			var currentIndex = $(this).index();

			$(this).siblings().removeClass('active');
			$(this).addClass('active');

			$(this).parent().siblings('.tabs-items').find('li').slideUp(200);
			$(this).parent().siblings('.tabs-items').find('li').eq(currentIndex).slideDown(200);
		}

	});

/***************aside***************************** 
*************************************************/
	
	$('aside .fa-arrow-left').click(function() {
		$('aside').toggleClass('active');

	    });

	$(window).resize(function() {
		/*console.log($('body').prop('clientWidth'));*/
  		if ($('body').prop('clientWidth') > 1000) {
  			$('aside').css({"top": "0px", "margin-top": "50px"});
  		} else {
  			$('aside').css({"top": "147px", "margin-top": "0px"});
  		}
	});
});