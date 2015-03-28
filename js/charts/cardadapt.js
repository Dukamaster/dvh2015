var deptChart = AmCharts.makeChart("deptcard", {
    "type": "serial",
    "theme": "none",
    "pathToImages": "http://www.amcharts.com/lib/3/images/",
    "legend": {
        "equalWidths": false,
        "periodValueText": "total: [[value.sum]]",
        "position": "top",
        "valueAlign": "left",
        "valueWidth": 100
    },
   "dataProvider": [{
        "year": 2000,
        "balances": 1712,
        "baddebt": 121
    }, {
        "year": 2001,
        "balances": 2076.5,
        "baddebt": 146
    }, {
        "year": 2002,
        "balances": 2390.8,
        "baddebt": 138
    }, {
        "year": 2003,
        "balances": 2533.1,
        "baddebt": 127
    }, {
        "year": 2004,
        "balances": 2640.8,
        "baddebt": 105
    }, {
        "year": 2005,
        "balances": 2842.1,
        "baddebt": 109
    }, {
        "year": 2006,
        "balances": 2822.4,
        "baddebt": 112
    }, {
        "year": 2007,
        "balances": 2979.4,
        "baddebt": 101
    }, {
        "year": 2008,
        "balances": 3378.8,
        "baddebt": 97
    }, {
        "year": 2009,
        "balances": 3702.1,
        "baddebt": 93
    }, {
        "year": 2010,
        "balances": 4014.7,
        "baddebt": 111
    }, {
        "year": 2011,
        "balances": 4537.9,
        "baddebt": 87
    }, {
        "year": 2012,
        "balances": 4991.8,
        "baddebt": 79
    }, {
        "year": 2013,
        "balances": 5362.9,
        "baddebt": 81
    }, {
        "year": 2014,
        "balances": 5500.6,
        "baddebt": 75
    }],
    "valueAxes": [{
        "id": "distanceAxis",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left",
        "title": "distance"
    }, {
        "id": "durationAxis",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "inside": true,
        "position": "right",
        "title": "duration"
    }],
    "graphs": [{
        "balloonText": "<img src='http://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        "fillAlphas": 0.6,
        "lineAlpha": 0.4,
        "title": "Rollover balance",
        "valueField": "balances",
        "valueAxis": "distanceAxis"
    },{
        "bullet": "square",
        "bulletBorderAlpha": 1,
        "bulletBorderThickness": 1,
        "dashLengthField": "dashLength",
        "legendValueText": "[[value]]",
        "title": "duration",
        "fillAlphas": 0,
        "valueField": "baddebt",
        "valueAxis": "durationAxis"
    }],
    "chartCursor": {
        "categoryBalloonDateFormat": "DD",
        "cursorAlpha": 0.1,
        "cursorColor":"#000000",
         "fullWidth":true,
        "valueBalloonsEnabled": false,
        "zoomable": false
    },
    "categoryField": "year",
    "categoryAxis": {
        "autoGridCount": false,
        "axisColor": "#555555",
        "gridAlpha": 0.1,
        "gridColor": "#FFFFFF",
        "gridCount": 50
    },
});