am5.ready(function() {

// Create root
var root = am5.Root.new("basic_map");

// Set themes
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
var chart = root.container.children.push(am5map.MapChart.new(root, {
  panX: "none",
  panY: "none",
  maxZoomLevel: 1,
  projection: am5map.geoAlbersUsa(),
  layout: root.horizontalLayout
}));

// Create polygon series
var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
  geoJSON: am5geodata_usaLow,
  valueField: "value",
  calculateAggregates: true
}));

polygonSeries.mapPolygons.template.setAll({
  tooltipText: "{name}: {value}%"
});

polygonSeries.set("heatRules", [{
  target: polygonSeries.mapPolygons.template,
  dataField: "value",
  min: am5.color(0x3b4994),
  max: am5.color(0xe8e8e8),
  key: "fill"
}]);

polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
  heatLegend.showValue(ev.target.dataItem.get("value"));
});


lilatracts_halfand10 = [
    {id: 'US-AL', value: 27.2},
    {id: 'US-AK', value: 23.4},
    {id: 'US-AZ', value: 37.3},
    {id: 'US-AR', value: 34.3},
    {id: 'US-CA', value: 28.4},
    {id: 'US-CO', value: 33.3},
    {id: 'US-CT', value: 25.2},
    {id: 'US-DE', value: 24.3},
    {id: 'US-DC', value: 27.6},
    {id: 'US-FL', value: 30.5},
    {id: 'US-GA', value: 32.4},
    {id: 'US-HI', value: 17.6},
    {id: 'US-ID', value: 25.1},
    {id: 'US-IL', value: 23.6},
    {id: 'US-IN', value: 29.1},
    {id: 'US-IA', value: 23.7},
    {id: 'US-KS', value: 30.2},
    {id: 'US-KY', value: 22.8},
    {id: 'US-LA', value: 33.2},
    {id: 'US-ME', value: 14.2},
    {id: 'US-MD', value: 27.6},
    {id: 'US-MA', value: 22.8},
    {id: 'US-MI', value: 27.6},
    {id: 'US-MN', value: 23.1},
    {id: 'US-MS', value: 38.7},
    {id: 'US-MO', value: 30.3},
    {id: 'US-MT', value: 20.9},
    {id: 'US-NE', value: 25.1},
    {id: 'US-NV', value: 27.2},
    {id: 'US-NH', value: 21.2},
    {id: 'US-NJ', value: 16.7},
    {id: 'US-NM', value: 42.8},
    {id: 'US-NY', value: 10.0},
    {id: 'US-NC', value: 27.0},
    {id: 'US-ND', value: 19.1},
    {id: 'US-OH', value: 29.2},
    {id: 'US-OK', value: 30.8},
    {id: 'US-OR', value: 31.5},
    {id: 'US-PA', value: 19.2},
    {id: 'US-RI', value: 24.0},
    {id: 'US-SC', value: 26.0},
    {id: 'US-SD', value: 23.3},
    {id: 'US-TN', value: 28.5},
    {id: 'US-TX', value: 37.1},
    {id: 'US-UT', value: 25.2},
    {id: 'US-VT', value: 12.2},
    {id: 'US-VA', value: 28.2},
    {id: 'US-WA', value: 29.4},
    {id: 'US-WV', value: 20.9},
    {id: 'US-WI', value: 21.9},
    {id: 'US-WY', value: 16.5}
];

lilatracts_1and10 = [
    {id: 'US-AL', value: 27.2},
    {id: 'US-AK', value: 23.4},
    {id: 'US-AZ', value: 37.3},
    {id: 'US-AR', value: 34.3},
    {id: 'US-CA', value: 28.4},
    {id: 'US-CO', value: 33.3},
    {id: 'US-CT', value: 25.2},
    {id: 'US-DE', value: 24.3},
    {id: 'US-DC', value: 27.6},
    {id: 'US-FL', value: 30.5},
    {id: 'US-GA', value: 32.4},
    {id: 'US-HI', value: 17.6},
    {id: 'US-ID', value: 25.1},
    {id: 'US-IL', value: 23.6},
    {id: 'US-IN', value: 29.1},
    {id: 'US-IA', value: 23.7},
    {id: 'US-KS', value: 30.2},
    {id: 'US-KY', value: 22.8},
    {id: 'US-LA', value: 33.2},
    {id: 'US-ME', value: 14.2},
    {id: 'US-MD', value: 27.6},
    {id: 'US-MA', value: 22.8},
    {id: 'US-MI', value: 27.6},
    {id: 'US-MN', value: 23.1},
    {id: 'US-MS', value: 38.7},
    {id: 'US-MO', value: 30.3},
    {id: 'US-MT', value: 20.9},
    {id: 'US-NE', value: 25.1},
    {id: 'US-NV', value: 27.2},
    {id: 'US-NH', value: 21.2},
    {id: 'US-NJ', value: 16.7},
    {id: 'US-NM', value: 42.8},
    {id: 'US-NY', value: 10.0},
    {id: 'US-NC', value: 27.0},
    {id: 'US-ND', value: 19.1},
    {id: 'US-OH', value: 29.2},
    {id: 'US-OK', value: 30.8},
    {id: 'US-OR', value: 31.5},
    {id: 'US-PA', value: 19.2},
    {id: 'US-RI', value: 24.0},
    {id: 'US-SC', value: 26.0},
    {id: 'US-SD', value: 23.3},
    {id: 'US-TN', value: 28.5},
    {id: 'US-TX', value: 37.1},
    {id: 'US-UT', value: 25.2},
    {id: 'US-VT', value: 12.2},
    {id: 'US-VA', value: 28.2},
    {id: 'US-WA', value: 29.4},
    {id: 'US-WV', value: 20.9},
    {id: 'US-WI', value: 21.9},
    {id: 'US-WY', value: 16.5}
];

lilatracts_1and20 = [
  {id: 'US-AL', value: 15.5},
 {id: 'US-AK', value: 12.7},
 {id: 'US-AZ', value: 15.0},
 {id: 'US-AR', value: 19.0},
 {id: 'US-CA', value: 6.9},
 {id: 'US-CO', value: 12.5},
 {id: 'US-CT', value: 8.9},
 {id: 'US-DE', value: 12.8},
 {id: 'US-DC', value: 3.0},
 {id: 'US-FL', value: 13.6},
 {id: 'US-GA', value: 21.2},
 {id: 'US-HI', value: 9.3},
 {id: 'US-ID', value: 11.4},
 {id: 'US-IL', value: 7.3},
 {id: 'US-IN', value: 13.4},
 {id: 'US-IA', value: 10.8},
 {id: 'US-KS', value: 15.9},
 {id: 'US-KY', value: 10.8},
 {id: 'US-LA', value: 18.9},
 {id: 'US-ME', value: 7.4},
 {id: 'US-MD', value: 8.2},
 {id: 'US-MA', value: 7.0},
 {id: 'US-MI', value: 10.7},
 {id: 'US-MN', value: 9.1},
 {id: 'US-MS', value: 18.2},
 {id: 'US-MO', value: 13.7},
 {id: 'US-MT', value: 9.4},
 {id: 'US-NE', value: 8.3},
 {id: 'US-NV', value: 8.3},
 {id: 'US-NH', value: 13.6},
 {id: 'US-NJ', value: 5.3},
 {id: 'US-NM', value: 24.6},
 {id: 'US-NY', value: 3.1},
 {id: 'US-NC', value: 16.1},
 {id: 'US-ND', value: 6.2},
 {id: 'US-OH', value: 13.4},
 {id: 'US-OK', value: 14.3},
 {id: 'US-OR', value: 12.3},
 {id: 'US-PA', value: 5.6},
 {id: 'US-RI', value: 5.0},
 {id: 'US-SC', value: 17.2},
 {id: 'US-SD', value: 10.7},
 {id: 'US-TN', value: 16.4},
 {id: 'US-TX', value: 18.9},
 {id: 'US-UT', value: 9.8},
 {id: 'US-VT', value: 3.7},
 {id: 'US-VA', value: 11.9},
 {id: 'US-WA', value: 9.8},
 {id: 'US-WV', value: 8.9},
 {id: 'US-WI', value: 8.1},
 {id: 'US-WY', value: 10.6}
];

var all_data = {
    "halfand10": lilatracts_halfand10,
    "1and10": lilatracts_1and10,
    "1and20": lilatracts_1and20
};

polygonSeries.data.setAll(all_data['halfand10']);

var heatLegend = chart.children.push(am5.HeatLegend.new(root, {
  orientation: "vertical",
  startColor: am5.color(0x3b4994),
  endColor: am5.color(0xe8e8e8),
  startText: "Lowest",
  endText: "Highest",
  stepCount: 25
}));

heatLegend.startLabel.setAll({
  fontSize: 12,
  fill: heatLegend.get("startColor")
});

heatLegend.endLabel.setAll({
  fontSize: 12,
  fill: heatLegend.get("endColor")
});

// change this to template when possible
polygonSeries.events.on("datavalidated", function () {
  heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
  heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
});


document.getElementById('filter').addEventListener('change', function(ev) {
//  console.log(ev.target.value);
  console.log(polygonSeries.data);
//  console.log(all_data[ev.target.value])
  var new_data = all_data[ev.target.value];
  polygonSeries.data.push(new_data);
  chart.series.push(polygonSeries);
});

//////////////////////////////////////////////////////////

}); // end am5.ready()
