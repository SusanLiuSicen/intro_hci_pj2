am5.ready(function() {

var root = am5.Root.new("piediv");

root.setThemes([
  am5themes_Animated.new(root)
]);

var base_container = root.container.children.push(am5.Container.new(root, {
  layout: root.gridLayout,
  width: am5.percent(100),
  height: am5.percent(100),
  fixedWidthGrid: true,
  paddingTop: 10,
  paddingBottom: 0
}))


//pie chart for racial distribution
var chart = base_container.children.push( 
  am5percent.PieChart.new(root, {
    layout: root.verticalLayout,
    width: am5.percent(50),
    height: am5.percent(40)
  }) 
);

// Define data
var rdata = {
  "2019": [{
    race: "white",
    value: 24900402
  }, {
    race: "nhopi",
    value: 72601
  }, {
    race: "black",
    value: 8605302
  }, {
    race: "aian",
    value: 723185
  }, {
    race: "omultir",
    value: 3943009
  }, {
    race: "asian",
    value: 830475
  }, {
    race: "hispanic",
    value: 7499966
  }], 
  "2015": [{
    race: "white",
    value: 25268478
  }, {
    race: "nhopi",
    value: 79241
  }, {
    race: "black",
    value: 8320058
  }, {
    race: "aian",
    value: 784927
  }, {
    race: "omultir",
    value: 4119755
  }, {
    race: "asian",
    value: 844098
  }, {
    race: "hispanic",
    value: 7913247
  }],
};
// Create series
var series = chart.series.push(
  am5percent.PieSeries.new(root, {
    name: "Series",
    valueField: "value",
    categoryField: "race"
  })
);
series.data.setAll(rdata[2019]);
series.labels.template.setAll({
  fontSize: 15
});

// Add legend
var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.percent(50),
  x: am5.percent(50),
  height: am5.percent(10)
}));
legend.data.setAll(series.dataItems);
legend.labels.template.setAll({
  fontSize: 13,
  fontWeight: "400"
});
legend.valueLabels.template.setAll({
  fontSize: 13,
  fontWeight: "400"
});

//pie chart for age distribution
var agechart = base_container.children.push( 
  am5percent.PieChart.new(root, {
    layout: root.verticalLayout,
    width: am5.percent(50),
    height: am5.percent(40)
  }) 
);

// Define data
var agedata = {
"2019":  [{
  age: "kids",
  value: 9821599
}, {
  age: "seniors",
  value: 4945149
}, {
  age: "other",
  value: 24308226
}] ,
"2015":  [{
  age: "kids",
  value: 9923159
}, {
  age: "seniors",
  value: 4912682
}, {
  age: "other",
  value: 24580716
}] 
};

// Create series
var ageseries = agechart.series.push(
  am5percent.PieSeries.new(root, {
    name: "AgeSerious",
    valueField: "value",
    categoryField: "age"
  })
);
ageseries.data.setAll(agedata["2019"]);
ageseries.labels.template.setAll({
  fontSize: 15
});

// Add legend
var agelegend = agechart.children.push(am5.Legend.new(root, {
  centerX: am5.percent(50),
  x: am5.percent(50),
  height: am5.percent(10)
}));

agelegend.data.setAll(ageseries.dataItems);
agelegend.labels.template.setAll({
  fontSize: 13,
  fontWeight: "400"
});
agelegend.valueLabels.template.setAll({
  fontSize: 13,
  fontWeight: "400"
});

//pie chart for vehicle distribution
var vchart = base_container.children.push( 
  am5percent.PieChart.new(root, {
    layout: root.verticalLayout,
    width: am5.percent(50),
    height: am5.percent(40),
    y: am5.percent(50),
  }) 
);

// Define data
var vdata = {
"2019": [{
  key: "with vehicle",
  value: 13137282
}, {
  key: "no vehicle",
  value: 1406428
}],
"2015": [{
  key: "with vehicle",
  value: 13191689
}, {
  key: "no vehicle",
  value: 1412224
}],
};

// Create series
var vseries = vchart.series.push(
  am5percent.PieSeries.new(root, {
    name: "AgeSerious",
    valueField: "value",
    categoryField: "key"
  })
);
vseries.data.setAll(vdata["2019"]);
vseries.labels.template.setAll({
  fontSize: 15
});

// Add legend
var vlegend = vchart.children.push(am5.Legend.new(root, {
  centerX: am5.percent(50),
  x: am5.percent(50),
  layout: root.verticalLayout,
  height: am5.percent(10)
}));

vlegend.data.setAll(vseries.dataItems);
vlegend.labels.template.setAll({
  fontSize: 13,
  fontWeight: "400"
});
vlegend.valueLabels.template.setAll({
  fontSize: 13,
  fontWeight: "400"
});

//pie chart for low income distribution
var lichart = base_container.children.push( 
  am5percent.PieChart.new(root, {
    layout: root.verticalLayout,
    width: am5.percent(50),
    height: am5.percent(40),
    y: am5.percent(50),
  }) 
);

// Define data
var lidata = {
"2019": [{
  key: "low income",
  value: 18684794
}, {
  key: "others",
  value: 20390180
}],
"2015": [{
  key: "low income",
  value: 19649073
}, {
  key: "others",
  value: 19767484
}],
};

// Create series
var liseries = lichart.series.push(
  am5percent.PieSeries.new(root, {
    name: "AgeSerious",
    valueField: "value",
    categoryField: "key"
  })
);
liseries.data.setAll(lidata["2019"]);
liseries.labels.template.setAll({
  fontSize: 15
});

// Add legend
var lilegend = lichart.children.push(am5.Legend.new(root, {
  centerX: am5.percent(50),
  x: am5.percent(50),
  layout: root.verticalLayout,
  height: am5.percent(10)
}));

lilegend.data.setAll(liseries.dataItems);
lilegend.labels.template.setAll({
  fontSize: 13,
  fontWeight: "400"
});
lilegend.valueLabels.template.setAll({
  fontSize: 13,
  fontWeight: "400"
});

document.getElementById("selectyear").addEventListener("change", selectDataset);
function selectDataset(set) {
  series.data.setAll(rdata[this.value]);
  legend.data.setAll(series.dataItems);
  ageseries.data.setAll(agedata[this.value]);
  agelegend.data.setAll(ageseries.dataItems);
  vseries.data.setAll(vdata[this.value]);
  vlegend.data.setAll(vseries.dataItems);
  liseries.data.setAll(lidata[this.value]);
  lilegend.data.setAll(liseries.dataItems);
}
}); // end am5.ready()