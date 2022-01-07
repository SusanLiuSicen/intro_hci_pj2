am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("breakdowndiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create wrapper container
var container = root.container.children.push(am5.Container.new(root, {
  width: am5.p100,
  height: am5.p100,
  layout: root.horizontalLayout
}));

var data = [{'breakdown': [{'category': 'Median Family Income ($K)',
                 'full': 100,
                 'value': 52.54},
                {'category': 'Poverty Rate (%)', 'full': 100, 'value': 21.66},
                {'category': 'No vehicle @ half mile (%)',
                 'full': 100,
                 'value': 44.31},
                {'category': 'Households receiving SNAP benefits (%)',
                 'full': 100,
                 'value': 6.97}],
  'category': 'White',
  'value': 11.07},
 {'breakdown': [{'category': 'Median Family Income ($K)',
                 'full': 100,
                 'value': 39.59},
                {'category': 'Poverty Rate (%)', 'full': 100, 'value': 31.72},
                {'category': 'No vehicle @ half mile (%)',
                 'full': 100,
                 'value': 74.8},
                {'category': 'Households receiving SNAP benefits (%)',
                 'full': 100,
                 'value': 11.27}],
  'category': 'Black',
  'value': 26.95},
 {'breakdown': [{'category': 'Median Family Income ($K)',
                 'full': 100,
                 'value': 60.19},
                {'category': 'Poverty Rate (%)', 'full': 100, 'value': 26.25},
                {'category': 'No vehicle @ half mile (%)',
                 'full': 100,
                 'value': 33.33},
                {'category': 'Households receiving SNAP benefits (%)',
                 'full': 100,
                 'value': 3.81}],
  'category': 'Asian',
  'value': 1.2},
 {'breakdown': [{'category': 'Median Family Income ($K)',
                 'full': 100,
                 'value': 68.52},
                {'category': 'Poverty Rate (%)', 'full': 100, 'value': 17.0},
                {'category': 'No vehicle @ half mile (%)',
                 'full': 100,
                 'value': 100.0},
                {'category': 'Households receiving SNAP benefits (%)',
                 'full': 100,
                 'value': 9.13}],
  'category': 'NHOPI',
  'value': 10.0},
 {'breakdown': [{'category': 'Median Family Income ($K)',
                 'full': 100,
                 'value': 39.75},
                {'category': 'Poverty Rate (%)', 'full': 100, 'value': 36.03},
                {'category': 'No vehicle @ half mile (%)',
                 'full': 100,
                 'value': 50.45},
                {'category': 'Households receiving SNAP benefits (%)',
                 'full': 100,
                 'value': 8.53}],
  'category': 'AIAN',
  'value': 55.77},
 {'breakdown': [{'category': 'Median Family Income ($K)',
                 'full': 100,
                 'value': 61.09},
                {'category': 'Poverty Rate (%)', 'full': 100, 'value': 21.01},
                {'category': 'No vehicle @ half mile (%)',
                 'full': 100,
                 'value': 50.0},
                {'category': 'Households receiving SNAP benefits (%)',
                 'full': 100,
                 'value': 7.82}],
  'category': 'OMultiR',
  'value': 8.95},
 {'breakdown': [{'category': 'Median Family Income ($K)',
                 'full': 100,
                 'value': 43.55},
                {'category': 'Poverty Rate (%)', 'full': 100, 'value': 27.66},
                {'category': 'No vehicle @ half mile (%)',
                 'full': 100,
                 'value': 38.79},
                {'category': 'Households receiving SNAP benefits (%)',
                 'full': 100,
                 'value': 7.79}],
  'category': 'Hispanic',
  'value': 13.36}];

// ==============================================
// Column chart
// ==============================================

// Create chart
// https://www.amcharts.com/docs/v5/charts/radar-chart/
var chart = root.container.children.push(am5radar.RadarChart.new(root, {
  x: 0,
  width: am5.p50,
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  innerRadius: am5.percent(20),
  startAngle: -90,
  endAngle: 180
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
//var cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
//  behavior: "zoomX"
//}));

//cursor.lineY.set("visible", false);

// Create axes and their renderers
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
var xRenderer = am5radar.AxisRendererCircular.new(root, {
  //minGridDistance: 50
});

xRenderer.labels.template.setAll({
  radius: 10
});

xRenderer.grid.template.setAll({
  forceHidden: true
});

var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
  renderer: xRenderer,
  min: 0,
  max: 100,
  strictMinMax: true,
//  numberFormat: "#'%'",
//  tooltip: am5.Tooltip.new(root, {}),
  forceHidden: true,
}));


var yRenderer = am5radar.AxisRendererRadial.new(root, {
  minGridDistance: 20
});

yRenderer.labels.template.setAll({
  centerX: am5.p100,
  fontWeight: "500",
  fontSize: 14,
  templateField: "columnSettings"
});

yRenderer.grid.template.setAll({
  forceHidden: true
});

var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "category",
  renderer: yRenderer
}));

//yAxis.data.setAll(data);


// Create series
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
var series1 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  clustered: false,
  valueXField: "full",
  categoryYField: "category",
  fill: root.interfaceColors.get("alternativeBackground")
}));

series1.columns.template.setAll({
  width: am5.p100,
  fillOpacity: 0.08,
  strokeOpacity: 0,
  cornerRadius: 20
});

//series1.data.setAll(data);


var series2 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  clustered: false,
  valueXField: "value",
  categoryYField: "category"
}));

series2.columns.template.setAll({
  width: am5.p100,
  strokeOpacity: 0,
  tooltipText: "{category}: {valueX}",
  cornerRadius: 20,
  templateField: "columnSettings"
});


//series2.data.setAll(data);

// Animate chart and series in
// https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
series1.appear(1000);
series2.appear(1000);
chart.appear(1000, 100);

// ==============================================
// Column chart
// ==============================================

var pieChart = root.container.children.push(
  am5percent.PieChart.new(root, {
    width: am5.p50,
    x: am5.p50,
    innerRadius: am5.percent(50)
  })
);

// Create series
var pieSeries = pieChart.series.push(
  am5percent.PieSeries.new(root, {
    valueField: "value",
    categoryField: "category"
  })
);

pieSeries.slices.template.setAll({
  templateField: "sliceSettings",
  strokeOpacity: 0
});

var currentSlice;
pieSeries.slices.template.on("active", function(active, slice) {
  if (currentSlice && currentSlice != slice && active) {
    currentSlice.set("active", false)
  }

  var color = slice.get("fill");

  label1.setAll({
    fill: color,
    text: root.numberFormatter.format(slice.dataItem.get("valuePercentTotal"), "#.'%'")
  });

  label2.set("text", slice.dataItem.get("category"));

  series1.columns.template.setAll({
    fill: slice.get("fill"),
    stroke: slice.get("fill")
  });

  series1.data.setAll(slice.dataItem.dataContext.breakdown);
  series2.data.setAll(slice.dataItem.dataContext.breakdown);
  yAxis.data.setAll(slice.dataItem.dataContext.breakdown);

  currentSlice = slice;
});

pieSeries.labels.template.set("forceHidden", true);
pieSeries.ticks.template.set("forceHidden", true);

pieSeries.data.setAll(data);

// Add label
var label1 = pieChart.seriesContainer.children.push(am5.Label.new(root, {
  text: "",
  fontSize: 35,
  fontweight: "bold",
  centerX: am5.p50,
  centerY: am5.p50
}));

var label2 = pieChart.seriesContainer.children.push(am5.Label.new(root, {
  text: "",
  fontSize: 20,
  centerX: am5.p50,
  centerY: am5.p50,
  dy: 30
}));

// Pre-select first slice
pieSeries.events.on("datavalidated", function() {
  pieSeries.slices.getIndex(0).set("active", true);
});


});


//// Data
//var data = [{
//  category: "Research",
//  value: 80,
//  full: 100,
//  columnSettings: {
//    fill: chart.get("colors").getIndex(0)
//  }
//}, {
//  category: "Marketing",
//  value: 35,
//  full: 100,
//  columnSettings: {
//    fill: chart.get("colors").getIndex(1)
//  }
//}, {
//  category: "Distribution",
//  value: 92,
//  full: 100,
//  columnSettings: {
//    fill: chart.get("colors").getIndex(2)
//  }
//}, {
//  category: "Human Resources",
//  value: 68,
//  full: 100,
//  columnSettings: {
//    fill: chart.get("colors").getIndex(3)
//  }
//}];