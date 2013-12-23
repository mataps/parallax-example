$(document).ready(function() {
    
	/*
	 **************** Paralax code ****************
	 */
    
	var scroll_ok = true;
	setInterval(function () {
	    scroll_ok = true;
	}, 33);//33ms is 30fps
	$(window).bind('scroll', function (e) {
	    if (scroll_ok === true) {
	        scroll_ok = false;
	       	//scroll Listener
	        parallaxScroll();
	        console.log($(window).scrollTop());
	    }
	});
    
    //Scroll parallax layers
	function parallaxScroll(){
		var scrolled = $(window).scrollTop();
		// $('#parallax-bg1').css('top',(0-(scrolled*.05))+'px');
		$('#parallax-bg2').css('top',(0-(scrolled*.10))+'px');
		$('#parallax-bg3').css('top',(0-(scrolled*.25))+'px');
		$('#parallax-bg4').css('top',(0-(scrolled*1))+'px');
		
		//TODO: Addition anim.
		if(scrolled > 500 && scrolled < 600)
		{
			console.log('some animation triggered here.');
		}
	}
	
	//anchor animations
	$('a.standing-out').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll();
		});
    	return false;
	});
    $('a.awards').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#second').offset().top
    	}, 1000, function() {
	    	parallaxScroll();
		});
    	return false;
    });
    $('a.sponsors').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#third').offset().top
    	}, 1000, function() {
	    	parallaxScroll();
		});
    	return false;
    });
	$('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#fourth').offset().top
    	}, 1000, function() {
	    	parallaxScroll();
		});
    	return false;
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*
     * ************ this code is for smooth scrolling on cross-browser **************
     */
    var top = 0,
        step = 60,
        viewport = $(window).height(),
        body = $.browser.webkit ? $('body') : $('html'),
        wheel = false;


    $('body').mousewheel(function(event, delta) {

        wheel = true;

        if (delta < 0) {

            top = (top+viewport) >= $(document).height() ? top : top+=step;

            body.stop().animate({scrollTop: top}, 400, function () {
                wheel = false;
            });
        } else {

            top = top <= 0 ? 0 : top-=step;

            body.stop().animate({scrollTop: top}, 400, function () {
                wheel = false;
            });
        }

        return false;
    });

    $(window).on('resize', function (e) {
        viewport = $(this).height();
    });

    $(window).on('scroll', function (e) {
        if (!wheel)
            top = $(this).scrollTop();
    });
});
