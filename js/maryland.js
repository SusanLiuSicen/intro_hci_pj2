am4core.ready(function () {

    var map = am4core.create("marylanddiv", am4maps.MapChart);

    var county = "Allegany";

    map.maxZoomLevel = 1;
    map.seriesContainer.draggable = false;
    map.seriesContainer.resizable = false;

    // Set map definition
    map.geodata = am4geodata_region_usa_mdLow;

    // Set projection
    map.projection = new am4maps.projections.Miller();

    // Create map polygon series
    var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());

    polygonSeries.heatRules.push({
        "property": "fill",
        "target": polygonSeries.mapPolygons.template,
        "dataField": "value",
        "max": am4core.color("#3b4994"),
        "min": am4core.color("#e8e8e8"),
    });

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    polygonSeries.data = [{
        'id': 24001,
        'name': 'Allegany',
        'value': '44.20%'
    }, {
        'id': 24003,
        'name': 'Anne Arundel',
        'value': '5.09%'
    }, {
        'id': 24005,
        'name': 'Baltimore',
        'value': '7.51%'
    }, {
        'id': 24009,
        'name': 'Calvert',
        'value': '8.15%'
    }, {
        'id': 24011,
        'name': 'Caroline',
        'value': '24.09%'
    }, {
        'id': 24013,
        'name': 'Carroll',
        'value': '0.00%'
    }, {
        'id': 24015,
        'name': 'Cecil',
        'value': '27.98%'
    }, {
        'id': 24017,
        'name': 'Charles',
        'value': '7.65%'
    }, {
        'id': 24019,
        'name': 'Dorchester',
        'value': '47.06%'
    }, {
        'id': 24021,
        'name': 'Frederick',
        'value': '5.74%'
    }, {
        'id': 24023,
        'name': 'Garrett',
        'value': '20.55%'
    }, {
        'id': 24025,
        'name': 'Harford',
        'value': '4.78%'
    }, {
        'id': 24027,
        'name': 'Howard',
        'value': '0.00%'
    }, {
        'id': 24029,
        'name': 'Kent',
        'value': '0.00%'
    }, {
        'id': 24031,
        'name': 'Montgomery',
        'value': '3.91%'
    }, {
        'id': 24033,
        'name': 'Prince George\'s',
        'value': '10.94%'
    }, {
        'id': 24035,
        'name': 'Queen Anne\'s',
        'value': '0.00%'
    }, {
        'id': 24037,
        'name': 'St. Mary\'s',
        'value': '12.71%'
    }, {
        'id': 24039,
        'name': 'Somerset',
        'value': '19.84%'
    }, {
        'id': 24041,
        'name': 'Talbot',
        'value': '14.80%'
    }, {
        'id': 24043,
        'name': 'Washington',
        'value': '23.05%'
    }, {
        'id': 24045,
        'name': 'Wicomico',
        'value': '42.04%'
    }, {
        'id': 24047,
        'name': 'Worcester',
        'value': '35.26%'
    }, {
        'id': 24510,
        'name': 'Baltimore City',
        'value': '2.57%'
    }];

    //polygonTemplate.propertyFields.fill = "fill";
    console.log(polygonSeries.data)

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}%";
    polygonTemplate.fill = am4core.color("#74B266");

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#7D83E9");

    var title = map.titles.create();
    title.text = "Maryland";
    title.weight = "bold";
    title.fontSize = 25;
    title.y = 20;
    title.background = new am4core.RoundedRectangle();
    title.background.cornerRadius(5, 5, 5, 5);
    title.background.fillOpacity = 0.5;

    /////////XY CHART///////////////////////////

    // Create chart instance
    var chart = am4core.create("marylandracediv", am4charts.XYChart);
    chart.panX = false;
    chart.panY = false;
    chart.wheelX = "none";
    chart.wheelY = "none";
    chart.width = am4core.percent(100)

    var title2 = chart.titles.create();
    title2.text = "Allegany County Race Distribution";
    title2.fontSize = 25;
    title2.fontWeight = "bold";
    title2.textAlign = "center";
    title2.paddingTop = 20;
    title2.paddingBottom = 20;

    function returnData(county) {
        console.log(county);
        switch (county) {
            case 'Allegany':

                return [{
                    "category": "White",
                    "total": 89.20,
                    "value": 84.14
                }, {
                    "category": "Black",
                    "total": 8.03,
                    "value": 12.87
                }, {
                    "category": "Asian",
                    "total": 0.76,
                    "value": 1.00
                }, {
                    "category": "NHOPI",
                    "total": 0.04,
                    "value": 0.06
                }, {
                    "category": "AIAN",
                    "total": 0.14,
                    "value": 0.14
                }, {
                    "category": "OMultiR",
                    "total": 1.83,
                    "value": 1.79
                }, {
                    "category": "Hispanic",
                    "total": 1.44,
                    "value": 1.15
                }];
            case 'Anne Arundel':

                return [{
                    "category": "White",
                    "total": 75.41,
                    "value": 53.75
                }, {
                    "category": "Black",
                    "total": 15.53,
                    "value": 29.42
                }, {
                    "category": "Asian",
                    "total": 3.41,
                    "value": 3.50
                }, {
                    "category": "NHOPI",
                    "total": 0.09,
                    "value": 0.19
                }, {
                    "category": "AIAN",
                    "total": 0.31,
                    "value": 0.45
                }, {
                    "category": "OMultiR",
                    "total": 5.25,
                    "value": 12.69
                }, {
                    "category": "Hispanic",
                    "total": 6.12,
                    "value": 17.66
                }];
            case 'Baltimore':

                return [{
                    "category": "White",
                    "total": 64.62,
                    "value": 39.02
                }, {
                    "category": "Black",
                    "total": 26.05,
                    "value": 51.40
                }, {
                    "category": "Asian",
                    "total": 4.98,
                    "value": 3.65
                }, {
                    "category": "NHOPI",
                    "total": 0.04,
                    "value": 0.05
                }, {
                    "category": "AIAN",
                    "total": 0.33,
                    "value": 0.39
                }, {
                    "category": "OMultiR",
                    "total": 3.99,
                    "value": 5.50
                }, {
                    "category": "Hispanic",
                    "total": 4.19,
                    "value": 5.75
                }];
            case 'Calvert':

                return [{
                    "category": "White",
                    "total": 81.40,
                    "value": 79.53
                }, {
                    "category": "Black",
                    "total": 13.44,
                    "value": 13.95
                }, {
                    "category": "Asian",
                    "total": 1.42,
                    "value": 1.01
                }, {
                    "category": "NHOPI",
                    "total": 0.05,
                    "value": 0.07
                }, {
                    "category": "AIAN",
                    "total": 0.37,
                    "value": 0.54
                }, {
                    "category": "OMultiR",
                    "total": 3.32,
                    "value": 4.91
                }, {
                    "category": "Hispanic",
                    "total": 2.75,
                    "value": 4.41
                }];
            case 'Caroline':

                return [{
                    "category": "White",
                    "total": 79.83,
                    "value": 68.52
                }, {
                    "category": "Black",
                    "total": 13.87,
                    "value": 26.93
                }, {
                    "category": "Asian",
                    "total": 0.57,
                    "value": 0.83
                }, {
                    "category": "NHOPI",
                    "total": 0.16,
                    "value": 0.03
                }, {
                    "category": "AIAN",
                    "total": 0.37,
                    "value": 0.31
                }, {
                    "category": "OMultiR",
                    "total": 5.20,
                    "value": 3.38
                }, {
                    "category": "Hispanic",
                    "total": 5.49,
                    "value": 2.81
                }];
            case 'Carroll':

                return [{
                    "category": "White",
                    "total": 92.91,
                    "value": 0.00
                }, {
                    "category": "Black",
                    "total": 3.19,
                    "value": 0.00
                }, {
                    "category": "Asian",
                    "total": 1.45,
                    "value": 0.00
                }, {
                    "category": "NHOPI",
                    "total": 0.03,
                    "value": 0.00
                }, {
                    "category": "AIAN",
                    "total": 0.20,
                    "value": 0.00
                }, {
                    "category": "OMultiR",
                    "total": 2.22,
                    "value": 0.00
                }, {
                    "category": "Hispanic",
                    "total": 2.61,
                    "value": 0.00
                }];
            case 'Cecil':

                return [{
                    "category": "White",
                    "total": 89.20,
                    "value": 86.19
                }, {
                    "category": "Black",
                    "total": 6.22,
                    "value": 8.51
                }, {
                    "category": "Asian",
                    "total": 1.08,
                    "value": 1.16
                }, {
                    "category": "NHOPI",
                    "total": 0.05,
                    "value": 0.03
                }, {
                    "category": "AIAN",
                    "total": 0.29,
                    "value": 0.28
                }, {
                    "category": "OMultiR",
                    "total": 3.16,
                    "value": 3.83
                }, {
                    "category": "Hispanic",
                    "total": 3.37,
                    "value": 3.98
                }];
            case 'Charles':

                return [{
                    "category": "White",
                    "total": 50.27,
                    "value": 48.92
                }, {
                    "category": "Black",
                    "total": 40.96,
                    "value": 41.21
                }, {
                    "category": "Asian",
                    "total": 2.98,
                    "value": 2.44
                }, {
                    "category": "NHOPI",
                    "total": 0.07,
                    "value": 0.12
                }, {
                    "category": "AIAN",
                    "total": 0.65,
                    "value": 0.87
                }, {
                    "category": "OMultiR",
                    "total": 5.06,
                    "value": 6.44
                }, {
                    "category": "Hispanic",
                    "total": 4.27,
                    "value": 5.15
                }];
            case 'Dorchester':

                return [{
                    "category": "White",
                    "total": 67.65,
                    "value": 55.31
                }, {
                    "category": "Black",
                    "total": 27.72,
                    "value": 39.39
                }, {
                    "category": "Asian",
                    "total": 0.92,
                    "value": 1.09
                }, {
                    "category": "NHOPI",
                    "total": 0.03,
                    "value": 0.03
                }, {
                    "category": "AIAN",
                    "total": 0.34,
                    "value": 0.40
                }, {
                    "category": "OMultiR",
                    "total": 3.34,
                    "value": 3.77
                }, {
                    "category": "Hispanic",
                    "total": 3.46,
                    "value": 4.03
                }];
            case 'Frederick':

                return [{
                    "category": "White",
                    "total": 81.54,
                    "value": 90.56
                }, {
                    "category": "Black",
                    "total": 8.63,
                    "value": 4.46
                }, {
                    "category": "Asian",
                    "total": 3.83,
                    "value": 1.40
                }, {
                    "category": "NHOPI",
                    "total": 0.05,
                    "value": 0.01
                }, {
                    "category": "AIAN",
                    "total": 0.31,
                    "value": 0.34
                }, {
                    "category": "OMultiR",
                    "total": 5.63,
                    "value": 3.23
                }, {
                    "category": "Hispanic",
                    "total": 7.34,
                    "value": 3.81
                }];
            case 'Garrett':

                return [{
                    "category": "White",
                    "total": 97.82,
                    "value": 98.30
                }, {
                    "category": "Black",
                    "total": 1.00,
                    "value": 0.45
                }, {
                    "category": "Asian",
                    "total": 0.25,
                    "value": 0.39
                }, {
                    "category": "NHOPI",
                    "total": 0.00,
                    "value": 0.00
                }, {
                    "category": "AIAN",
                    "total": 0.14,
                    "value": 0.19
                }, {
                    "category": "OMultiR",
                    "total": 0.79,
                    "value": 0.66
                }, {
                    "category": "Hispanic",
                    "total": 0.73,
                    "value": 0.70
                }];
            case 'Harford':

                return [{
                    "category": "White",
                    "total": 81.19,
                    "value": 53.48
                }, {
                    "category": "Black",
                    "total": 12.69,
                    "value": 37.47
                }, {
                    "category": "Asian",
                    "total": 2.38,
                    "value": 1.10
                }, {
                    "category": "NHOPI",
                    "total": 0.08,
                    "value": 0.16
                }, {
                    "category": "AIAN",
                    "total": 0.25,
                    "value": 0.37
                }, {
                    "category": "OMultiR",
                    "total": 3.42,
                    "value": 7.42
                }, {
                    "category": "Hispanic",
                    "total": 3.52,
                    "value": 6.16
                }];
            case 'Howard':

                return [{
                    "category": "White",
                    "total": 62.18,
                    "value": 0.00
                }, {
                    "category": "Black",
                    "total": 17.48,
                    "value": 0.00
                }, {
                    "category": "Asian",
                    "total": 14.36,
                    "value": 0.00
                }, {
                    "category": "NHOPI",
                    "total": 0.04,
                    "value": 0.00
                }, {
                    "category": "AIAN",
                    "total": 0.30,
                    "value": 0.00
                }, {
                    "category": "OMultiR",
                    "total": 5.63,
                    "value": 0.00
                }, {
                    "category": "Hispanic",
                    "total": 5.83,
                    "value": 0.00
                }];
            case 'Kent':

                return [{
                    "category": "White",
                    "total": 80.06,
                    "value": 0.00
                }, {
                    "category": "Black",
                    "total": 15.13,
                    "value": 0.00
                }, {
                    "category": "Asian",
                    "total": 0.82,
                    "value": 0.00
                }, {
                    "category": "NHOPI",
                    "total": 0.03,
                    "value": 0.00
                }, {
                    "category": "AIAN",
                    "total": 0.21,
                    "value": 0.00
                }, {
                    "category": "OMultiR",
                    "total": 3.76,
                    "value": 0.00
                }, {
                    "category": "Hispanic",
                    "total": 4.49,
                    "value": 0.00
                }];
            case 'Montgomery':

                return [{
                    "category": "White",
                    "total": 57.46,
                    "value": 47.18
                }, {
                    "category": "Black",
                    "total": 17.22,
                    "value": 25.34
                }, {
                    "category": "Asian",
                    "total": 13.94,
                    "value": 12.01
                }, {
                    "category": "NHOPI",
                    "total": 0.05,
                    "value": 0.07
                }, {
                    "category": "AIAN",
                    "total": 0.37,
                    "value": 0.67
                }, {
                    "category": "OMultiR",
                    "total": 10.96,
                    "value": 14.72
                }, {
                    "category": "Hispanic",
                    "total": 17.02,
                    "value": 25.00
                }];
            case 'Prince George\'s':

                return [{
                    "category": "White",
                    "total": 19.23,
                    "value": 28.83
                }, {
                    "category": "Black",
                    "total": 64.47,
                    "value": 53.48
                }, {
                    "category": "Asian",
                    "total": 4.07,
                    "value": 7.47
                }, {
                    "category": "NHOPI",
                    "total": 0.06,
                    "value": 0.06
                }, {
                    "category": "AIAN",
                    "total": 0.49,
                    "value": 0.39
                }, {
                    "category": "OMultiR",
                    "total": 11.67,
                    "value": 9.77
                }, {
                    "category": "Hispanic",
                    "total": 14.94,
                    "value": 12.09
                }];
            case 'Queen Anne\'s':

                return [{
                    "category": "White",
                    "total": 88.70,
                    "value": 0.00
                }, {
                    "category": "Black",
                    "total": 6.90,
                    "value": 0.00
                }, {
                    "category": "Asian",
                    "total": 0.98,
                    "value": 0.00
                }, {
                    "category": "NHOPI",
                    "total": 0.03,
                    "value": 0.00
                }, {
                    "category": "AIAN",
                    "total": 0.31,
                    "value": 0.00
                }, {
                    "category": "OMultiR",
                    "total": 3.08,
                    "value": 0.00
                }, {
                    "category": "Hispanic",
                    "total": 3.04,
                    "value": 0.00
                }];
            case 'St. Mary\'s':

                return [{
                    "category": "White",
                    "total": 78.59,
                    "value": 52.18
                }, {
                    "category": "Black",
                    "total": 14.29,
                    "value": 35.40
                }, {
                    "category": "Asian",
                    "total": 2.47,
                    "value": 3.85
                }, {
                    "category": "NHOPI",
                    "total": 0.07,
                    "value": 0.13
                }, {
                    "category": "AIAN",
                    "total": 0.40,
                    "value": 0.62
                }, {
                    "category": "OMultiR",
                    "total": 4.18,
                    "value": 7.83
                }, {
                    "category": "Hispanic",
                    "total": 3.78,
                    "value": 7.56
                }];
            case 'Somerset':

                return [{
                    "category": "White",
                    "total": 53.53,
                    "value": 47.36
                }, {
                    "category": "Black",
                    "total": 42.28,
                    "value": 51.59
                }, {
                    "category": "Asian",
                    "total": 0.70,
                    "value": 0.30
                }, {
                    "category": "NHOPI",
                    "total": 0.03,
                    "value": 0.00
                }, {
                    "category": "AIAN",
                    "total": 0.32,
                    "value": 0.11
                }, {
                    "category": "OMultiR",
                    "total": 3.14,
                    "value": 0.63
                }, {
                    "category": "Hispanic",
                    "total": 3.26,
                    "value": 0.78
                }];
            case 'Talbot':

                return [{
                    "category": "White",
                    "total": 81.38,
                    "value": 70.36
                }, {
                    "category": "Black",
                    "total": 12.78,
                    "value": 17.51
                }, {
                    "category": "Asian",
                    "total": 1.25,
                    "value": 1.06
                }, {
                    "category": "NHOPI",
                    "total": 0.06,
                    "value": 0.09
                }, {
                    "category": "AIAN",
                    "total": 0.17,
                    "value": 0.25
                }, {
                    "category": "OMultiR",
                    "total": 4.36,
                    "value": 10.73
                }, {
                    "category": "Hispanic",
                    "total": 5.49,
                    "value": 14.63
                }];
            case 'Washington':

                return [{
                    "category": "White",
                    "total": 85.09,
                    "value": 83.25
                }, {
                    "category": "Black",
                    "total": 9.59,
                    "value": 10.68
                }, {
                    "category": "Asian",
                    "total": 1.39,
                    "value": 1.24
                }, {
                    "category": "NHOPI",
                    "total": 0.04,
                    "value": 0.04
                }, {
                    "category": "AIAN",
                    "total": 0.21,
                    "value": 0.25
                }, {
                    "category": "OMultiR",
                    "total": 3.67,
                    "value": 4.54
                }, {
                    "category": "Hispanic",
                    "total": 3.46,
                    "value": 3.53
                }];
            case 'Wicomico':

                return [{
                    "category": "White",
                    "total": 68.65,
                    "value": 59.74
                }, {
                    "category": "Black",
                    "total": 24.18,
                    "value": 32.82
                }, {
                    "category": "Asian",
                    "total": 2.50,
                    "value": 2.47
                }, {
                    "category": "NHOPI",
                    "total": 0.05,
                    "value": 0.06
                }, {
                    "category": "AIAN",
                    "total": 0.24,
                    "value": 0.22
                }, {
                    "category": "OMultiR",
                    "total": 4.38,
                    "value": 4.69
                }, {
                    "category": "Hispanic",
                    "total": 4.54,
                    "value": 5.22
                }];
            case 'Worcester':

                return [{
                    "category": "White",
                    "total": 82.00,
                    "value": 72.29
                }, {
                    "category": "Black",
                    "total": 13.65,
                    "value": 22.61
                }, {
                    "category": "Asian",
                    "total": 1.11,
                    "value": 1.08
                }, {
                    "category": "NHOPI",
                    "total": 0.02,
                    "value": 0.01
                }, {
                    "category": "AIAN",
                    "total": 0.28,
                    "value": 0.34
                }, {
                    "category": "OMultiR",
                    "total": 2.93,
                    "value": 3.68
                }, {
                    "category": "Hispanic",
                    "total": 3.15,
                    "value": 3.81
                }];
            case 'Baltimore City':

                return [{
                    "category": "White",
                    "total": 29.60,
                    "value": 50.01
                }, {
                    "category": "Black",
                    "total": 63.74,
                    "value": 42.66
                }, {
                    "category": "Asian",
                    "total": 2.34,
                    "value": 1.83
                }, {
                    "category": "NHOPI",
                    "total": 0.04,
                    "value": 0.07
                }, {
                    "category": "AIAN",
                    "total": 0.37,
                    "value": 0.53
                }, {
                    "category": "OMultiR",
                    "total": 3.91,
                    "value": 4.90
                }, {
                    "category": "Hispanic",
                    "total": 4.18,
                    "value": 4.27
                }];
        }
    }

    var marylandData = {
        'TX': [{ 'race': 'White', 'total': 70.3, 'share': 17.8 },
        { 'race': 'Black', 'total': 11.8, 'share': 28.7 },
        { 'race': 'Asian', 'total': 3.8, 'share': 10.3 },
        { 'race': 'NHOPI', 'total': 0.0, 'share': 22.5 },
        { 'race': 'AIAN', 'total': 0.6, 'share': 20.9 },
        { 'race': 'OMultiR', 'total': 13.1, 'share': 23.5 },
        { 'race': 'Hispanic', 'total': 37.6, 'share': 27.0 }],
        'UT': [{ 'race': 'White', 'total': 86.0, 'share': 7.8 },
        { 'race': 'Black', 'total': 1.0, 'share': 12.6 },
        { 'race': 'Asian', 'total': 2.0, 'share': 8.7 },
        { 'race': 'NHOPI', 'total': 0.8, 'share': 9.2 },
        { 'race': 'AIAN', 'total': 1.1, 'share': 27.8 },
        { 'race': 'OMultiR', 'total': 8.7, 'share': 11.7 },
        { 'race': 'Hispanic', 'total': 12.9, 'share': 12.2 }],
    };


    // Add data
    chart.data = returnData(county);

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "category";
    series.stroke = am4core.color("#383C76");

    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "total";
    series2.dataFields.categoryX = "category";
    series2.stroke = am4core.color("#323C76");

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.stroke = am4core.color("#8F3985");
    chart.cursor.lineX.strokeWidth = 4;
    chart.cursor.lineX.strokeOpacity = 0.2;
    chart.cursor.lineX.strokeDasharray = "";
    series.columns.template.tooltipText = "Race: {categoryX}\nFood Desert Pop: {value}%\nOverall Pop: {total}%";

    var activePolygon;
    polygonTemplate.events.on("hit", function (ev) {
        console.log("Click");
        if (activePolygon) {
            activePolygon = false;
        }
        activePolygon = ev.target;
        activePolygon = true;
        let name = ev.target.dataItem.dataContext.name;
        let val = ev.target.dataItem.dataContext.value;
        title.text = name + ": " + val + " with Low Income and Low Access";  // "{name}: {value}% Low Income, Low Access");
        title.fontSize = 15;
        county = name;
        chart.data = returnData(county);
        title2.text = county + " County Race Distribution";
    });



}); // end am5.ready()
