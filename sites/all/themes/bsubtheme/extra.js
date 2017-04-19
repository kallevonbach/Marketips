jQuery(window).load(function(){

    
        jQuery('.row').each(function(){  
            
            var highestBox = 0;
            jQuery('.views-field-title', this).each(function(){
            
                if(jQuery(this).height() > highestBox) 
                   highestBox = jQuery(this).height(); 
            });  
            
            jQuery('.views-field-title',this).css('min-height', highestBox);
            
        console.log(highestBox);
    });     

});