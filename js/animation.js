/*----------------------------------------------------*/
/*  Template Animations
/* Author: Canh Tran
/*----------------------------------------------------*/
    
$(document).ready(function(){
    
        "use strict";
    
        $('#introduction').waypoint(function() {       
            setTimeout(function(){
                $('.couple').addClass('animated bounceIn');
                $('.couple').removeClass('display_none');
            },200);            
            setTimeout(function(){
                $('.cloud-bag').addClass('animated fadeInRight');
                $('.cloud-bag').removeClass('display_none');
            },600);
            setTimeout(function(){
                $('.cloud-cook').addClass('animated fadeInRight');
                $('.cloud-cook').removeClass('display_none');
            },600);
            setTimeout(function(){
                $('.cloud-plane').addClass('animated fadeInRight');
                $('.cloud-plane').removeClass('display_none');
            },600);
            setTimeout(function(){
                $('.cc').addClass('animated bounceIn');
                $('.cc').removeClass('display_none');
            },1200);
        }, { offset: '85%' });
    
        $('#month1').waypoint(function() {    
            setTimeout(function(){
                $('.r1').addClass('animated fadeInRight'); 
                $('.r1').removeClass('display_none');
            },800);
            setTimeout(function(){
                $('.m1').addClass('animated fadeInLeft'); 
                $('.m1').removeClass('display_none');
            },800);
        }, { offset: '85%' });
        
        $('#month12').waypoint(function() {    
            setTimeout(function(){
                $('.r2').addClass('animated fadeInRight'); 
                $('.r2').removeClass('display_none');
            },800);
            setTimeout(function(){
                $('.m2').addClass('animated fadeInLeft'); 
                $('.m2').removeClass('display_none');
            },800);
        }, { offset: '65%' });
        
});