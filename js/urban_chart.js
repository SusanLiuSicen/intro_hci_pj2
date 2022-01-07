am5.ready(function () {
    // ===========================================================
    // Root and wrapper container
    // ===========================================================

    // Create root and chart
    var root = am5.Root.new("urbandiv")

    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    // Create wrapper container
    var base_container = root.container.children.push(am5.Container.new(root, {
        layout: root.verticalLayout,
        width: am5.p100,
        height: am5.p100,
        paddingTop: 10,
        paddingBottom: 0
    }))

    var container = base_container.children.push(am5.Container.new(root, {
        layout: root.horizontalLayout,
        width: am5.p100,
        height: am5.p100,
        paddingTop: 0,
        paddingBottom: 0
    }))

    // Set themes

    var chart = container.children.push(
        am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "zoomY",
            wheelY: "zoomY",
            layout: root.verticalLayout,
            width: am5.percent(50),
            height: am5.percent(100)
        }));

    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "zoomX"
    }));
    cursor.lineY.set("visible", false);

    chart.children.unshift(am5.Label.new(root, {
        text: "Urban Food Deserts, Child Population",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        x: am5.percent(50),
        centerX: am5.percent(50),
        paddingTop: 0,
        paddingBottom: 20
    }));


    var yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
            min: 0,
            max: 50,
            renderer: am5xy.AxisRendererY.new(root, {

            })
        })
    );

    var xAxis = chart.yAxes.push(
        am5xy.CategoryAxis.new(root, {
            categoryField: "date",
            renderer: am5xy.AxisRendererX.new(root, {

            })
        })
    );

    xAxis.children.push(
        am5.Label.new(root, {
            text: "Distance to Nearest Supermarket",
            x: am5.p50,
            centerX: am5.p50
        })
    );

    yAxis.children.unshift(
        am5.Label.new(root, {
            rotation: -90,
            text: "Number of People (in Millions)",
            y: am5.p50,
            centerX: am5.p50
        })
    );

    xAxis.data.setAll([{
        'date': '>1/2 Mile'
    }, {
        'date': '>1 Mile'
    }, {
        'date': '>10 Miles'
    }, {
        'date': '>20 Miles'
    }]);

    var series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
            name: "Series",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            categoryXField: "distance",
            fill: am5.color(0xF169C5),
            stroke: am5.color(0x8B0D89),
            clustered: false
        })
    );

    series.columns.template.set("tooltipText", "{valueY} Million");

    series.columns.template.setAll({
        fillOpacity: 0.9,
        strokeWidth: 2
    });

    series.columns.template.setAll({
        width: am5.percent(80)
    });

    series.data.setAll([{
        'distance': '>1/2 Mile',
        'value': 36.88125235328984
    }, {
        'distance': '>1 Mile',
        'value': 16.12387149327879
    }, {
        'distance': '>10 Miles',
        'value': 0.030851181300156995
    }, {
        'distance': '>20 Miles',
        'value': 0.009183378886790999
    }]);

    //SECOND CHART

    var chart2 = container.children.push(
        am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "zoomY",
            wheelY: "zoomY",
            layout: root.verticalLayout,
            width: am5.percent(50),
            height: am5.percent(100)
        }));

    var cursor2 = chart2.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "zoomX"
    }));
    cursor2.lineY.set("visible", false);

    chart2.children.unshift(am5.Label.new(root, {
        text: "Urban Food Deserts, Senior Population",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        x: am5.percent(50),
        centerX: am5.percent(50),
        paddingTop: 0,
        paddingBottom: 20
    }));


    var yAxis = chart2.yAxes.push(
        am5xy.ValueAxis.new(root, {
            min: 0,
            max: 50,
            renderer: am5xy.AxisRendererY.new(root, {

            })
        })
    );

    var xAxis = chart2.yAxes.push(
        am5xy.CategoryAxis.new(root, {
            categoryField: "date",
            renderer: am5xy.AxisRendererX.new(root, {

            })
        })
    );

    xAxis.children.push(
        am5.Label.new(root, {
            text: "Distance to Nearest Supermarket",
            x: am5.p50,
            centerX: am5.p50
        })
    );

    yAxis.children.unshift(
        am5.Label.new(root, {
            rotation: -90,
            text: "Number of People (in Millions)",
            y: am5.p50,
            centerX: am5.p50
        })
    );


    xAxis.data.setAll([{
        'date': '>1/2 Mile'
    }, {
        'date': '>1 Mile'
    }, {
        'date': '>10 Miles'
    }, {
        'date': '>20 Miles'
    }]);


    var series = chart2.series.push(
        am5xy.ColumnSeries.new(root, {
            name: "Series",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            categoryXField: "distance",
            fill: am5.color(0xF169C5),
            stroke: am5.color(0x8B0D89),
            clustered: false
        })
    );

    series.columns.template.set("tooltipText", "{valueY} Million");

    series.columns.template.setAll({
        fillOpacity: 0.9,
        strokeWidth: 2
    });

    series.columns.template.setAll({
        width: am5.percent(80)
    });

    series.data.setAll([{
        'distance': '>1/2 Mile',
        'value': 19.10211497398163
    }, {
        'distance': '>1 Mile',
        'value': 8.151493681098202
    }, {
        'distance': '>10 Miles',
        'value': 0.014340498526918008
    }, {
        'distance': '>20 Miles',
        'value': 0.002193144447951
    }]);

    //THIRD CHART

    var container2 = base_container.children.push(am5.Container.new(root, {
        layout: root.horizontalLayout,
        width: am5.p100,
        height: am5.p100,
        paddingTop: 20,
        paddingBottom: 0
    }))

    var chart3 = container2.children.push(
        am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "zoomY",
            wheelY: "zoomY",
            layout: root.verticalLayout,
            width: am5.percent(50),
            height: am5.percent(100)
        }));

    var cursor3 = chart3.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "zoomX"
    }));
    cursor3.lineY.set("visible", false);

    chart3.children.unshift(am5.Label.new(root, {
        text: "Urban Food Deserts, Low Income Population",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        x: am5.percent(50),
        centerX: am5.percent(50),
        paddingTop: 0,
        paddingBottom: 20
    }));


    var yAxis = chart3.yAxes.push(
        am5xy.ValueAxis.new(root, {
            min: 0,
            max: 50,
            renderer: am5xy.AxisRendererY.new(root, {

            })
        })
    );

    var xAxis = chart3.yAxes.push(
        am5xy.CategoryAxis.new(root, {
            categoryField: "date",
            renderer: am5xy.AxisRendererX.new(root, {

            })
        })
    );

    xAxis.children.push(
        am5.Label.new(root, {
            text: "Distance to Nearest Supermarket",
            x: am5.p50,
            centerX: am5.p50
        })
    );

    yAxis.children.unshift(
        am5.Label.new(root, {
            rotation: -90,
            text: "Number of People (in Millions)",
            y: am5.p50,
            centerX: am5.p50
        })
    );

    xAxis.data.setAll([{
        'date': '>1/2 Mile'
    }, {
        'date': '>1 Mile'
    }, {
        'date': '>10 Miles'
    }, {
        'date': '>20 Miles'
    }]);


    var series = chart3.series.push(
        am5xy.ColumnSeries.new(root, {
            name: "Series",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            categoryXField: "distance",
            fill: am5.color(0xF169C5),
            stroke: am5.color(0x8B0D89),
            clustered: false
        })
    );

    series.columns.template.set("tooltipText", "{valueY} Million");

    series.columns.template.setAll({
        fillOpacity: 0.9,
        strokeWidth: 2
    });

    series.columns.template.setAll({
        width: am5.percent(80)
    });

    series.data.setAll([{
        'distance': '>1/2 Mile',
        'value': 47.72605310522284
    }, {
        'distance': '>1 Mile',
        'value': 18.169548388302342
    }, {
        'distance': '>10 Miles',
        'value': 0.05247287433485198
    }, {
        'distance': '>20 Miles',
        'value': 0.015701334343585
    }]);

    //FOURTH CHART

    var chart4 = container2.children.push(
        am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "zoomY",
            wheelY: "zoomY",
            layout: root.verticalLayout,
            width: am5.percent(50),
            height: am5.percent(100)
        }));

    chart4.children.unshift(am5.Label.new(root, {
        text: "Urban Food Deserts, SNAP Housing Units",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        x: am5.percent(50),
        centerX: am5.percent(50),
        paddingTop: 0,
        paddingBottom: 20
    }));

    var cursor4 = chart4.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "zoomX"
    }));
    cursor4.lineY.set("visible", false);


    var yAxis = chart4.yAxes.push(
        am5xy.ValueAxis.new(root, {
            min: 0,
            max: 50,
            renderer: am5xy.AxisRendererY.new(root, {

            })
        })
    );

    var xAxis = chart4.yAxes.push(
        am5xy.CategoryAxis.new(root, {
            categoryField: "date",
            renderer: am5xy.AxisRendererX.new(root, {

            })
        })
    );

    xAxis.children.push(
        am5.Label.new(root, {
            text: "Distance to Nearest Supermarket",
            x: am5.p50,
            centerX: am5.p50
        })
    );

    yAxis.children.unshift(
        am5.Label.new(root, {
            rotation: -90,
            text: "Number of Housing Units (in Millions)",
            y: am5.p50,
            centerX: am5.p50
        })
    );

    xAxis.data.setAll([{
        'date': '>1/2 Mile'
    }, {
        'date': '>1 Mile'
    }, {
        'date': '>10 Miles'
    }, {
        'date': '>20 Miles'
    }]);


    var series = chart4.series.push(
        am5xy.ColumnSeries.new(root, {
            name: "Series",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            categoryXField: "distance",
            fill: am5.color(0xF169C5),
            stroke: am5.color(0x8B0D89),
            clustered: false
        })
    );

    series.columns.template.set("tooltipText", "{valueY} Million");

    series.columns.template.setAll({
        fillOpacity: 0.9,
        strokeWidth: 2
    });

    series.columns.template.setAll({
        width: am5.percent(80)
    });

    series.data.setAll([{
        'distance': '>1/2 Mile',
        'value': 6.7800992294182425
    }, {
        'distance': '>1 Mile',
        'value': 2.523370929301164
    }, {
        'distance': '>10 Miles',
        'value': 0.0064628720809370025
    }, {
        'distance': '>20 Miles',
        'value': 0.0020574189125430005
    }]);

});