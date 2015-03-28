$(document).ready(function() {
    var rate = 0.0180876;
    var min = 50;


    $.fn.calculation = function(){ 
        var money = $(this).text().replace(/,/g,'').replace('S$','')
        money_reduction = money - minimum_payment(money);
        one_month = Math.round(rate * money_reduction);
        $("#one_month").text('S$' + one_month);

        var twelve_moth = 0;
        var total_rates = 0;
        var x = 1;
        var i = 1;
        while (x >= 0) {
            money_reduction = money - minimum_payment(money);
            money = money_reduction + (rate * money_reduction);           
            x = rate * money_reduction;
            if (i <= 12) {
                twelve_moth += rate * money_reduction;
            }
            total_rates += rate * money_reduction;
            i++;
        }
        $(".twelve_months").text('S$' + Math.round(twelve_moth));
        $(".total_rates").text('S$' + Math.round(total_rates));
        get_year_month(i-1);
    }

    one_percent_principle = function(money) {
        return 0.01 * money;
    }

    interest_rate = function(money) {
        return rate * money;
    }

    minimum_payment = function(money) {
        return Math.max(min, one_percent_principle(money) + interest_rate(money));
    }

    get_year_month = function(value) {
        var year = Math.floor(value/12);
        var month = value % 12;

        if (year.toString().length <= 1) year = '0' + year;
        if (month.toString().length <= 1) month = '0' + month;

        $('#year').text(year + ":" + month);
    }
});