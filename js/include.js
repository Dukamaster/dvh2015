$(document).ready(function() {
    // $('#introduction').load('screen/screen1.html');
    // $('#month1').load('screen/screen2.html');
    // $('#month12').load('screen/screen3.html');
    // $('#total_rate').load('screen/screen4.html');
    // $('#equal_item').load('screen/screen5.html');
    // $('#hexagons').load('screen/screen6.html');
    // $('#video').load('screen/screen7.html');

    //Add comma to digits
    $.fn.digits = function(){ 
        return this.each(function(){ 
            $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
        })
    }

    $('#ex1').slider();
    $("#current_value").calculation();
    $("#ex1").on("slide", function(slideEvt) {
        $("#current_value").text("S$" + slideEvt.value);
        $("#current_value").calculation();
        $("#current_value").digits();
        $("#one_month").digits();
        $(".twelve_months").digits();
        $(".total_rates").digits();
    });

    $('#ex1').slider().on('slideStop', function(ev){
        var newVal = $('#ex1').data('slider').getValue();
        $("#current_value").text("S$" + newVal);
        $("#current_value").calculation();
        $("#current_value").digits();
        $("#one_month").digits();
        $(".twelve_months").digits();
        $(".total_rates").digits();
    });

    $('#cardadaptModal').on('shown.bs.modal', function (e) {
      chart.invalidateSize();
    })
});
