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
    });
});

google.load("visualization", "1.1", {packages:["bar"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'No of work force', 'No of cards'],
      ['2008', '2939900', '5055387'],
      ['2009', '3030000', '5418553'],
      ['2010', '3135900', '6141870'],
      ['2011', '3237100', '6883993'],
      ['2012', '3361800', '7843765'],
      ['2013', '3443700', '7984608'],
      ['2014', '3530800', '8183105'],
    ]);

    var options = {
      'width':500,
      'height':400
    }
    var chart = new google.charts.Bar(document.getElementById('chart_div1'));

    chart.draw(data, options);
}