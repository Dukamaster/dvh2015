var chart = AmCharts.makeChart("cardadapt", {
    "theme": "none",
    "type": "serial",
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
    }],
    "valueAxes": [{
        "unit": "",
        "position": "left",
        "title": "Number of people",
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "Number of work force in [[category]]: <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2004",
        "type": "column",
        "valueField": "workforce"
    }, {
        "balloonText": "Number of cards in [[category]]: <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2005",
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