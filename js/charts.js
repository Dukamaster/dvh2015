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
        "baddebt": 73.6
    }, {
        "year": 2001,
        "balances": 2076.5,
        "baddebt": 90.8
    }, {
        "year": 2002,
        "balances": 2390.8,
        "baddebt": 135.4
    }, {
        "year": 2003,
        "balances": 2533.1,
        "baddebt": 193.7
    }, {
        "year": 2004,
        "balances": 2640.8,
        "baddebt": 195.9
    }, {
        "year": 2005,
        "balances": 2842.1,
        "baddebt": 137.1
    }, {
        "year": 2006,
        "balances": 2822.4,
        "baddebt": 118.6
    }, {
        "year": 2007,
        "balances": 2979.4,
        "baddebt": 108.9
    }, {
        "year": 2008,
        "balances": 3378.8,
        "baddebt": 115.4
    }, {
        "year": 2009,
        "balances": 3702.1,
        "baddebt": 183.9
    }, {
        "year": 2010,
        "balances": 4014.7,
        "baddebt": 181.9
    }, {
        "year": 2011,
        "balances": 4537.9,
        "baddebt": 186.7
    }, {
        "year": 2012,
        "balances": 4991.8,
        "baddebt": 226.6
    }, {
        "year": 2013,
        "balances": 5362.9,
        "baddebt": 247.8
    }, {
        "year": 2014,
        "balances": 5500.6,
        "baddebt": 273.9
    }],
    "valueAxes": [{
        "id": "distanceAxis",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left",
        "title": "Millions"
    }, {
        "id": "durationAxis",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "inside": true,
        "position": "right",
        "title": "Millions"
    }],
    "graphs": [{
        "balloonText": "Rollover balances: <b>[[value]]</b>",
        "fillAlphas": 0.6,
        "lineAlpha": 0.4,
        "title": "Rollover balance",
        "valueField": "balances",
        "valueAxis": "distanceAxis"
    },{
        "balloonText": "Bad debts written off: <b>[[value]]</b>",
        "bullet": "square",
        "bulletBorderAlpha": 1,
        "bulletBorderThickness": 1,
        "dashLengthField": "dashLength",
        "legendValueText": "[[value]]",
        "title": "Bad debts written",
        "fillAlphas": 0,
        "valueField": "baddebt",
        "valueAxis": "durationAxis"
    }],
    "plotAreaBorderAlpha": 0,
    "marginTop": 10,
    "marginLeft": 0,
    "marginBottom": 0,
    "chartScrollbar": {},
    "chartCursor": {
        "cursorAlpha": 0
    },
    "categoryField": "year",
    "categoryAxis": {
        "startOnAxis": true,
        "axisColor": "#DADADA",
        "gridAlpha": 0.07,
    },
});


var cardadaptChart = AmCharts.makeChart("cardadapt", {
    "theme": "none",
    "type": "serial",
    "legend": {
        "markerType": "circle",
        "position": "bottom",
        "marginRight": 80,      
        "autoMargins": false
    },
    "dataProvider": [{
        "year": "2008",
        "workforce": 2939900,
        "card": 5055387
    }, {
        "year": "2009",
        "workforce": 3030000,
        "card": 5418553
    }, {
        "year": "2010",
        "workforce": 3135900,
        "card": 6141870
    }, {
        "year": "2011",
        "workforce": 3237100,
        "card": 6883993
    }, {
        "year": "2012",
        "workforce": 3361800,
        "card": 7843765
    }, {
        "year": "2013",
        "workforce": 3443700,
        "card": 7984608
    }, {
        "year": "2014",
        "workforce": 3530800,
        "card": 8183105
    }],
    "valueAxes": [{
        "unit": "",
        "position": "left",
        "title": "Count",
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "Number of work force in [[category]]: <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "Number of work force",
        "type": "column",
        "valueField": "workforce"
    }, {
        "balloonText": "Number of cards in [[category]]: <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "Number of cards",
        "type": "column",
        "clustered":false,
        "columnWidth":0.5,
        "valueField": "card"
    }],
    "plotAreaFillAlphas": 0.1,
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start"
    }
});


var expenditureChart = AmCharts.makeChart("expenditure", {
    "type": "serial",
    "theme": "none",
    "legend": {
        "autoMargins": false,
        "borderAlpha": 0.2,
        "equalWidths": false,
        "horizontalGap": 10,
        "useGraphSettings": true,
        "valueAlign": "left",
        "valueWidth": 0,
        "marginBottom": 10,  
    },
    "dataProvider": [{
        "income": "3,000 - 3,999",
        "lessequal": 86.8,
        "more": 13.2,
    }, {
        "income": "4,000 - 4,999",
        "lessequal": 89,
        "more": 11,
    }, {
        "income": "5,000 - 5,999",
        "lessequal": 90,
        "more": 10,
    }, {
        "income": "6,000 - 7,999",
        "lessequal": 96.2,
        "more": 3.8,
    }, {
        "income": "8,000 - 9,999",
        "lessequal": 96.2,
        "more": 3.8,
    }, {
        "income": "10,000 - 11,999",
        "lessequal": 96.9,
        "more": 3.1,    
    }, {
        "income": "12,000 - 14,999",
        "lessequal": 98.4,
        "more": 1.4,
    }],
    "valueAxes": [{
        "stackType": "100%",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "labelsEnabled": false,
        "position": "left"
    }],
    "graphs": [{
        "balloonText": "[[title]], [[category]]<br><span style='font-size:14px;'><b>[[value]]</b> ([[percents]]%)</span>",
        "fillAlphas": 0.9,
        "fontSize": 11,
        "labelText": "[[percents]]%",
        "lineAlpha": 0.5,
        "title": "Percentage of group that spend less than or equal to income",
        "type": "column",
        "valueField": "lessequal"
    }, {
        "balloonText": "[[title]], [[category]]<br><span style='font-size:14px;'><b>[[value]]</b> ([[percents]]%)</span>",
        "fillAlphas": 0.9,
        "fontSize": 11,
        "labelText": "[[percents]]%",
        "lineAlpha": 0.5,
        "title": "Percentage of group that spend more than income",
        "type": "column",
        "valueField": "more"
    }],
    "marginTop": 30,
    "marginRight": 0,
    "marginLeft": 0,
    "marginBottom": 80,
    "autoMargins": false,
    "categoryField": "income",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "labelRotation": 45
    }
});

var interestrateChart = AmCharts.makeChart("interestrate", {
    "type": "serial",
    "pathToImages": "http://cdn.amcharts.com/lib/3/images/",
    "categoryField": "loan",
    "rotate": true,
    "startDuration": 1,
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
    },
    "trendLines": [],
    "graphs": [
        {
            "balloonText": "interest rates:[[value]]",
            "fillAlphas": 0.8,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "",
            "type": "column",
            "valueField": "rates"
        },
    ],
    "guides": [],
    "valueAxes": [
        {
            "id": "ValueAxis-1",
            "position": "top",
            "axisAlpha": 0,
            "title": "Interest Rates (*)",
        }
    ],
    "allLabels": [],
    "amExport": {
        "right": 20,
        "top": 20
    },
    "balloon": {},
    "titles": [],
    "dataProvider": [
        {
            "loan": "House loan",
            "rates": 2.18,
        },
        {
            "loan": "Car loan",
            "rates": 2.88,
        },
        {
            "loan": "Personal loan",
            "rates": 19.8,
        },
        {
            "loan": "Credit card",
            "rates": 24,
        },
    ]
});
