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
            $('.cc').addClass('animated wobble');
            $('.cc').removeClass('display_none');
        },1200);
        setTimeout(function(){
            $('#slider').addClass('animated bounceIn');
            $('#slider').removeClass('display_none');
        },1800);
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

    $('#total_rate').waypoint(function() {    
        setTimeout(function(){
            $('.t1').addClass('animated swing'); 
            $('.t1').removeClass('display_none');
        },400);
        setTimeout(function(){
            $('.t2').addClass('animated fadeInLeft'); 
            $('.t2').removeClass('display_none');
        },800);
        setTimeout(function(){
            $('.t3').addClass('animated swing'); 
            $('.t3').removeClass('display_none');
        },1200);
        setTimeout(function(){
            $('.t4').addClass('animated flash'); 
            $('.t4').removeClass('display_none');
        },1800);
    }, { offset: '65%' });

    $('#equal_item').waypoint(function() {    
        setTimeout(function(){
            $('.e1').addClass('animated fadeInLeftBig'); 
            $('.e1').removeClass('display_none');
        },400);
        setTimeout(function(){
            $('.e2').addClass('animated fadeInDown'); 
            $('.e2').removeClass('display_none');
        },800);
        setTimeout(function(){
            $('.e3').addClass('animated fadeInRight'); 
            $('.e3').removeClass('display_none');
        },1200);
        setTimeout(function(){
            $('.e4').addClass('animated fadeInUp'); 
            $('.e4').removeClass('display_none');
        },1800);
    }, { offset: '65%' });

    $('#hexagons').waypoint(function() {    
        setTimeout(function(){
            $('.h1').addClass('animated fadeInLeftBig'); 
            $('.h1').removeClass('display_none');
        },400);
        setTimeout(function(){
            $('.h2').addClass('animated flipInY'); 
        },800);
    }, { offset: '65%' });

    $('#video').waypoint(function() {    
        setTimeout(function(){
            $('.v1').addClass('animated rollIn'); 
            $('.v1').removeClass('display_none');
        },400);
    }, { offset: '65%' });
        
});