$(document).ready(function(){
    $(".card").hover(function(){
        $(".card-img").animate({height: '30%'},"fast"); 
        $(".card-content").animate({height: '70%'},"fast"); 
        $(this).closest(".card").css("z-index",1);
        $(this).animate({
        	left: '-=55',
        	top: '-=55',
        	height: '380px',
        	width: '300px'
     	   }, "fast");
        }, function(){
       	    $(".card-img").animate({height: '50%'},"fast"); 
    	    $(".card-content").animate({height: '50%'},"fast"); 
        	$(this).closest(".card").css("z-index",0); 
       		$(this).animate({
       			left: '+=55',
        		right: '+=55',
        		height: '300px',
        		width: '300px'
      		  }, "fast");
        } );
});

$(document).ready(function(){
    $(".row-title").hover(function(){
        if($(".row-title-back").is(":hidden")){
          $(".row-title-back").slideDown("slow");
        } 
    }, function(){
      if($(".row-title-back").is(":hidden")){
          $(".row-title-back").slideDown("slow");
        } else {
          $(".row-title-back").slideUp("slow");
        }
   });
});