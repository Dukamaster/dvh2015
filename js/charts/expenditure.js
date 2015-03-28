var expenditureChart = AmCharts.makeChart("expenditure", {
    "type": "serial",
    "theme": "none",
    "legend": {
        "autoMargins": false,
        "borderAlpha": 0.2,
        "equalWidths": false,
        "horizontalGap": 10,
        "markerSize": 10,
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