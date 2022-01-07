am5.ready(function() {
// ===========================================================
// Root and wrapper container
// ===========================================================

// Create root and chart
var root = am5.Root.new("chartdiv")

// Set themes
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

// Set up formats
root.numberFormatter.setAll({
  numberFormat: "#.##as"
});

// ===========================================================
// Data
// ===========================================================
// Data from 1-and-10 categorization of food desert
var usData = [{'race': 'White', 'total': 72.4, 'share': 11.3},
 {'race': 'Black', 'total': 12.6, 'share': 21.3},
 {'race': 'Asian', 'total': 4.7, 'share': 5.7},
 {'race': 'NHOPI', 'total': 0.1, 'share': 14.6},
 {'race': 'AIAN', 'total': 0.9, 'share': 26.7},
 {'race': 'OMultiR', 'total': 9.1, 'share': 14.6},
 {'race': 'Hispanic', 'total': 16.3, 'share': 15.6}];

var stateData = {
'AL': [{'race': 'White', 'total': 68.5, 'share': 11.8},
  {'race': 'Black', 'total': 26.1, 'share': 33.3},
  {'race': 'Asian', 'total': 1.1, 'share': 14.9},
  {'race': 'NHOPI', 'total': 0.0, 'share': 21.9},
  {'race': 'AIAN', 'total': 0.5, 'share': 16.1},
  {'race': 'OMultiR', 'total': 3.5, 'share': 23.4},
  {'race': 'Hispanic', 'total': 3.8, 'share': 24.5}],
 'AK': [{'race': 'White', 'total': 66.6, 'share': 8.8},
  {'race': 'Black', 'total': 3.2, 'share': 13.1},
  {'race': 'Asian', 'total': 5.3, 'share': 10.0},
  {'race': 'NHOPI', 'total': 1.0, 'share': 6.3},
  {'race': 'AIAN', 'total': 14.7, 'share': 42.1},
  {'race': 'OMultiR', 'total': 8.8, 'share': 11.3},
  {'race': 'Hispanic', 'total': 5.5, 'share': 11.3}],
 'AZ': [{'race': 'White', 'total': 73.0, 'share': 14.3},
  {'race': 'Black', 'total': 4.0, 'share': 15.6},
  {'race': 'Asian', 'total': 2.7, 'share': 7.6},
  {'race': 'NHOPI', 'total': 0.1, 'share': 12.6},
  {'race': 'AIAN', 'total': 4.6, 'share': 53.0},
  {'race': 'OMultiR', 'total': 15.3, 'share': 20.3},
  {'race': 'Hispanic', 'total': 29.6, 'share': 20.6}],
 'AR': [{'race': 'White', 'total': 76.9, 'share': 21.8},
  {'race': 'Black', 'total': 15.4, 'share': 43.3},
  {'race': 'Asian', 'total': 1.2, 'share': 21.0},
  {'race': 'NHOPI', 'total': 0.2, 'share': 58.3},
  {'race': 'AIAN', 'total': 0.7, 'share': 22.4},
  {'race': 'OMultiR', 'total': 5.3, 'share': 34.0},
  {'race': 'Hispanic', 'total': 6.3, 'share': 35.9}],
 'CA': [{'race': 'White', 'total': 57.5, 'share': 7.2},
  {'race': 'Black', 'total': 6.1, 'share': 8.2},
  {'race': 'Asian', 'total': 13.0, 'share': 3.2},
  {'race': 'NHOPI', 'total': 0.3, 'share': 7.1},
  {'race': 'AIAN', 'total': 0.9, 'share': 11.7},
  {'race': 'OMultiR', 'total': 21.8, 'share': 9.2},
  {'race': 'Hispanic', 'total': 37.6, 'share': 9.3}],
 'CO': [{'race': 'White', 'total': 81.3, 'share': 12.8},
  {'race': 'Black', 'total': 4.0, 'share': 21.6},
  {'race': 'Asian', 'total': 2.7, 'share': 9.0},
  {'race': 'NHOPI', 'total': 0.1, 'share': 18.6},
  {'race': 'AIAN', 'total': 1.1, 'share': 22.4},
  {'race': 'OMultiR', 'total': 10.6, 'share': 22.0},
  {'race': 'Hispanic', 'total': 20.6, 'share': 22.6}],
 'CT': [{'race': 'White', 'total': 77.5, 'share': 7.9},
  {'race': 'Black', 'total': 10.1, 'share': 13.3},
  {'race': 'Asian', 'total': 3.7, 'share': 8.9},
  {'race': 'NHOPI', 'total': 0.0, 'share': 13.0},
  {'race': 'AIAN', 'total': 0.3, 'share': 13.2},
  {'race': 'OMultiR', 'total': 8.1, 'share': 12.5},
  {'race': 'Hispanic', 'total': 13.4, 'share': 12.2}],
 'DE': [{'race': 'White', 'total': 68.8, 'share': 10.4},
  {'race': 'Black', 'total': 21.3, 'share': 20.1},
  {'race': 'Asian', 'total': 3.1, 'share': 7.3},
  {'race': 'NHOPI', 'total': 0.0, 'share': 19.7},
  {'race': 'AIAN', 'total': 0.4, 'share': 16.0},
  {'race': 'OMultiR', 'total': 6.0, 'share': 17.9},
  {'race': 'Hispanic', 'total': 8.1, 'share': 17.7}],
 'DC': [{'race': 'White', 'total': 38.4, 'share': 0.9},
  {'race': 'Black', 'total': 50.7, 'share': 5.0},
  {'race': 'Asian', 'total': 3.4, 'share': 0.7},
  {'race': 'NHOPI', 'total': 0.0, 'share': 4.9},
  {'race': 'AIAN', 'total': 0.3, 'share': 3.8},
  {'race': 'OMultiR', 'total': 6.9, 'share': 1.5},
  {'race': 'Hispanic', 'total': 9.0, 'share': 1.2}],
 'FL': [{'race': 'White', 'total': 75.0, 'share': 12.8},
  {'race': 'Black', 'total': 15.9, 'share': 21.6},
  {'race': 'Asian', 'total': 2.4, 'share': 11.1},
  {'race': 'NHOPI', 'total': 0.0, 'share': 19.6},
  {'race': 'AIAN', 'total': 0.3, 'share': 20.3},
  {'race': 'OMultiR', 'total': 6.1, 'share': 20.6},
  {'race': 'Hispanic', 'total': 22.4, 'share': 14.4}],
 'GA': [{'race': 'White', 'total': 59.7, 'share': 16.1},
  {'race': 'Black', 'total': 30.4, 'share': 35.4},
  {'race': 'Asian', 'total': 3.2, 'share': 14.6},
  {'race': 'NHOPI', 'total': 0.0, 'share': 27.2},
  {'race': 'AIAN', 'total': 0.3, 'share': 24.8},
  {'race': 'OMultiR', 'total': 6.1, 'share': 28.4},
  {'race': 'Hispanic', 'total': 8.8, 'share': 28.7}],
 'HI': [{'race': 'White', 'total': 24.7, 'share': 16.9},
  {'race': 'Black', 'total': 1.5, 'share': 27.9},
  {'race': 'Asian', 'total': 38.6, 'share': 4.6},
  {'race': 'NHOPI', 'total': 9.9, 'share': 17.8},
  {'race': 'AIAN', 'total': 0.3, 'share': 23.3},
  {'race': 'OMultiR', 'total': 24.8, 'share': 14.5},
  {'race': 'Hispanic', 'total': 8.8, 'share': 18.3}],
 'ID': [{'race': 'White', 'total': 89.0, 'share': 13.0},
  {'race': 'Black', 'total': 0.6, 'share': 16.4},
  {'race': 'Asian', 'total': 1.2, 'share': 13.9},
  {'race': 'NHOPI', 'total': 0.1, 'share': 15.0},
  {'race': 'AIAN', 'total': 1.3, 'share': 18.2},
  {'race': 'OMultiR', 'total': 7.5, 'share': 17.6},
  {'race': 'Hispanic', 'total': 11.2, 'share': 19.1}],
 'IL': [{'race': 'White', 'total': 71.5, 'share': 7.9},
  {'race': 'Black', 'total': 14.5, 'share': 11.3},
  {'race': 'Asian', 'total': 4.5, 'share': 2.7},
  {'race': 'NHOPI', 'total': 0.0, 'share': 8.5},
  {'race': 'AIAN', 'total': 0.3, 'share': 9.4},
  {'race': 'OMultiR', 'total': 8.9, 'share': 7.4},
  {'race': 'Hispanic', 'total': 15.8, 'share': 6.9}],
 'IN': [{'race': 'White', 'total': 84.3, 'share': 11.3},
  {'race': 'Black', 'total': 9.1, 'share': 28.6},
  {'race': 'Asian', 'total': 1.5, 'share': 14.3},
  {'race': 'NHOPI', 'total': 0.0, 'share': 19.2},
  {'race': 'AIAN', 'total': 0.2, 'share': 17.5},
  {'race': 'OMultiR', 'total': 4.6, 'share': 22.2},
  {'race': 'Hispanic', 'total': 6.0, 'share': 21.8}],
 'IA': [{'race': 'White', 'total': 91.3, 'share': 10.6},
  {'race': 'Black', 'total': 2.9, 'share': 22.1},
  {'race': 'Asian', 'total': 1.7, 'share': 17.3},
  {'race': 'NHOPI', 'total': 0.0, 'share': 25.4},
  {'race': 'AIAN', 'total': 0.3, 'share': 24.2},
  {'race': 'OMultiR', 'total': 3.5, 'share': 20.7},
  {'race': 'Hispanic', 'total': 4.9, 'share': 22.6}],
 'KS': [{'race': 'White', 'total': 83.8, 'share': 15.7},
  {'race': 'Black', 'total': 5.8, 'share': 30.6},
  {'race': 'Asian', 'total': 2.3, 'share': 17.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 25.8},
  {'race': 'AIAN', 'total': 0.9, 'share': 23.4},
  {'race': 'OMultiR', 'total': 6.8, 'share': 26.5},
  {'race': 'Hispanic', 'total': 10.5, 'share': 27.1}],
 'KY': [{'race': 'White', 'total': 87.7, 'share': 11.2},
  {'race': 'Black', 'total': 7.7, 'share': 21.9},
  {'race': 'Asian', 'total': 1.1, 'share': 9.7},
  {'race': 'NHOPI', 'total': 0.0, 'share': 22.9},
  {'race': 'AIAN', 'total': 0.2, 'share': 17.6},
  {'race': 'OMultiR', 'total': 3.0, 'share': 18.2},
  {'race': 'Hispanic', 'total': 3.0, 'share': 18.7}],
 'LA': [{'race': 'White', 'total': 62.5, 'share': 14.5},
  {'race': 'Black', 'total': 32.0, 'share': 35.2},
  {'race': 'Asian', 'total': 1.5, 'share': 15.4},
  {'race': 'NHOPI', 'total': 0.0, 'share': 16.1},
  {'race': 'AIAN', 'total': 0.6, 'share': 20.0},
  {'race': 'OMultiR', 'total': 3.1, 'share': 20.6},
  {'race': 'Hispanic', 'total': 4.2, 'share': 17.5}],
 'ME': [{'race': 'White', 'total': 95.2, 'share': 8.8},
  {'race': 'Black', 'total': 1.1, 'share': 13.4},
  {'race': 'Asian', 'total': 1.0, 'share': 13.8},
  {'race': 'NHOPI', 'total': 0.0, 'share': 8.7},
  {'race': 'AIAN', 'total': 0.6, 'share': 21.1},
  {'race': 'OMultiR', 'total': 1.8, 'share': 11.8},
  {'race': 'Hispanic', 'total': 1.2, 'share': 10.9}],
 'MD': [{'race': 'White', 'total': 58.1, 'share': 8.1},
  {'race': 'Black', 'total': 29.4, 'share': 9.4},
  {'race': 'Asian', 'total': 5.5, 'share': 5.9},
  {'race': 'NHOPI', 'total': 0.0, 'share': 9.9},
  {'race': 'AIAN', 'total': 0.3, 'share': 9.0},
  {'race': 'OMultiR', 'total': 6.4, 'share': 8.9},
  {'race': 'Hispanic', 'total': 8.1, 'share': 8.5}],
 'MA': [{'race': 'White', 'total': 80.4, 'share': 6.9},
  {'race': 'Black', 'total': 6.6, 'share': 8.6},
  {'race': 'Asian', 'total': 5.3, 'share': 5.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 8.4},
  {'race': 'AIAN', 'total': 0.2, 'share': 9.1},
  {'race': 'OMultiR', 'total': 7.2, 'share': 8.2},
  {'race': 'Hispanic', 'total': 9.5, 'share': 8.6}],
 'MI': [{'race': 'White', 'total': 78.9, 'share': 9.9},
  {'race': 'Black', 'total': 14.1, 'share': 18.4},
  {'race': 'Asian', 'total': 2.4, 'share': 10.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 16.0},
  {'race': 'AIAN', 'total': 0.6, 'share': 14.9},
  {'race': 'OMultiR', 'total': 3.8, 'share': 16.5},
  {'race': 'Hispanic', 'total': 4.4, 'share': 16.0}],
 'MN': [{'race': 'White', 'total': 85.2, 'share': 11.6},
  {'race': 'Black', 'total': 5.1, 'share': 14.9},
  {'race': 'Asian', 'total': 4.0, 'share': 9.5},
  {'race': 'NHOPI', 'total': 0.0, 'share': 10.9},
  {'race': 'AIAN', 'total': 1.1, 'share': 32.8},
  {'race': 'OMultiR', 'total': 4.3, 'share': 13.5},
  {'race': 'Hispanic', 'total': 4.7, 'share': 13.3}],
 'MS': [{'race': 'White', 'total': 59.1, 'share': 22.8},
  {'race': 'Black', 'total': 37.0, 'share': 42.4},
  {'race': 'Asian', 'total': 0.8, 'share': 20.2},
  {'race': 'NHOPI', 'total': 0.0, 'share': 34.4},
  {'race': 'AIAN', 'total': 0.5, 'share': 24.2},
  {'race': 'OMultiR', 'total': 2.4, 'share': 33.3},
  {'race': 'Hispanic', 'total': 2.7, 'share': 34.1}],
 'MO': [{'race': 'White', 'total': 82.7, 'share': 16.8},
  {'race': 'Black', 'total': 11.5, 'share': 22.3},
  {'race': 'Asian', 'total': 1.6, 'share': 12.2},
  {'race': 'NHOPI', 'total': 0.1, 'share': 22.8},
  {'race': 'AIAN', 'total': 0.4, 'share': 22.0},
  {'race': 'OMultiR', 'total': 3.4, 'share': 21.6},
  {'race': 'Hispanic', 'total': 3.5, 'share': 21.8}],
 'MT': [{'race': 'White', 'total': 89.4, 'share': 10.9},
  {'race': 'Black', 'total': 0.4, 'share': 12.8},
  {'race': 'Asian', 'total': 0.6, 'share': 11.6},
  {'race': 'NHOPI', 'total': 0.0, 'share': 17.0},
  {'race': 'AIAN', 'total': 6.3, 'share': 49.0},
  {'race': 'OMultiR', 'total': 3.1, 'share': 15.2},
  {'race': 'Hispanic', 'total': 2.8, 'share': 14.8}],
 'NE': [{'race': 'White', 'total': 86.1, 'share': 8.5},
  {'race': 'Black', 'total': 4.5, 'share': 17.8},
  {'race': 'Asian', 'total': 1.7, 'share': 9.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 15.2},
  {'race': 'AIAN', 'total': 1.0, 'share': 33.9},
  {'race': 'OMultiR', 'total': 6.4, 'share': 19.3},
  {'race': 'Hispanic', 'total': 9.1, 'share': 20.6}],
 'NV': [{'race': 'White', 'total': 66.1, 'share': 7.5},
  {'race': 'Black', 'total': 8.0, 'share': 12.2},
  {'race': 'Asian', 'total': 7.2, 'share': 4.0},
  {'race': 'NHOPI', 'total': 0.6, 'share': 8.5},
  {'race': 'AIAN', 'total': 1.1, 'share': 17.7},
  {'race': 'OMultiR', 'total': 16.6, 'share': 11.2},
  {'race': 'Hispanic', 'total': 26.5, 'share': 10.9}],
 'NH': [{'race': 'White', 'total': 93.8, 'share': 14.8},
  {'race': 'Black', 'total': 1.1, 'share': 16.9},
  {'race': 'Asian', 'total': 2.1, 'share': 15.5},
  {'race': 'NHOPI', 'total': 0.0, 'share': 14.3},
  {'race': 'AIAN', 'total': 0.2, 'share': 17.2},
  {'race': 'OMultiR', 'total': 2.5, 'share': 16.4},
  {'race': 'Hispanic', 'total': 2.7, 'share': 15.4}],
 'NJ': [{'race': 'White', 'total': 68.5, 'share': 5.4},
  {'race': 'Black', 'total': 13.7, 'share': 6.8},
  {'race': 'Asian', 'total': 8.2, 'share': 2.2},
  {'race': 'NHOPI', 'total': 0.0, 'share': 7.9},
  {'race': 'AIAN', 'total': 0.3, 'share': 5.9},
  {'race': 'OMultiR', 'total': 9.0, 'share': 5.1},
  {'race': 'Hispanic', 'total': 17.6, 'share': 4.5}],
 'NM': [{'race': 'White', 'total': 68.3, 'share': 24.8},
  {'race': 'Black', 'total': 2.0, 'share': 22.7},
  {'race': 'Asian', 'total': 1.3, 'share': 14.4},
  {'race': 'NHOPI', 'total': 0.0, 'share': 18.5},
  {'race': 'AIAN', 'total': 9.3, 'share': 53.8},
  {'race': 'OMultiR', 'total': 18.7, 'share': 34.6},
  {'race': 'Hispanic', 'total': 46.3, 'share': 34.9}],
 'NY': [{'race': 'White', 'total': 65.7, 'share': 4.4},
  {'race': 'Black', 'total': 15.8, 'share': 2.9},
  {'race': 'Asian', 'total': 7.3, 'share': 1.3},
  {'race': 'NHOPI', 'total': 0.0, 'share': 5.2},
  {'race': 'AIAN', 'total': 0.5, 'share': 5.3},
  {'race': 'OMultiR', 'total': 10.4, 'share': 2.0},
  {'race': 'Hispanic', 'total': 17.6, 'share': 1.7}],
 'NC': [{'race': 'White', 'total': 68.4, 'share': 13.2},
  {'race': 'Black', 'total': 21.4, 'share': 29.2},
  {'race': 'Asian', 'total': 2.1, 'share': 14.5},
  {'race': 'NHOPI', 'total': 0.0, 'share': 24.5},
  {'race': 'AIAN', 'total': 1.2, 'share': 16.8},
  {'race': 'OMultiR', 'total': 6.5, 'share': 24.4},
  {'race': 'Hispanic', 'total': 8.3, 'share': 24.4}],
 'ND': [{'race': 'White', 'total': 90.0, 'share': 7.5},
  {'race': 'Black', 'total': 1.1, 'share': 18.8},
  {'race': 'Asian', 'total': 1.0, 'share': 23.9},
  {'race': 'NHOPI', 'total': 0.0, 'share': 24.6},
  {'race': 'AIAN', 'total': 5.4, 'share': 16.8},
  {'race': 'OMultiR', 'total': 2.2, 'share': 12.0},
  {'race': 'Hispanic', 'total': 2.0, 'share': 13.4}],
 'OH': [{'race': 'White', 'total': 82.6, 'share': 12.2},
  {'race': 'Black', 'total': 12.2, 'share': 26.5},
  {'race': 'Asian', 'total': 1.6, 'share': 9.1},
  {'race': 'NHOPI', 'total': 0.0, 'share': 22.4},
  {'race': 'AIAN', 'total': 0.2, 'share': 18.8},
  {'race': 'OMultiR', 'total': 3.1, 'share': 19.6},
  {'race': 'Hispanic', 'total': 3.0, 'share': 18.5}],
 'OK': [{'race': 'White', 'total': 72.1, 'share': 15.0},
  {'race': 'Black', 'total': 7.4, 'share': 33.9},
  {'race': 'Asian', 'total': 1.7, 'share': 12.9},
  {'race': 'NHOPI', 'total': 0.1, 'share': 14.5},
  {'race': 'AIAN', 'total': 8.5, 'share': 23.8},
  {'race': 'OMultiR', 'total': 10.0, 'share': 21.6},
  {'race': 'Hispanic', 'total': 8.8, 'share': 21.4}],
 'OR': [{'race': 'White', 'total': 83.6, 'share': 13.4},
  {'race': 'Black', 'total': 1.8, 'share': 10.7},
  {'race': 'Asian', 'total': 3.6, 'share': 7.3},
  {'race': 'NHOPI', 'total': 0.3, 'share': 13.4},
  {'race': 'AIAN', 'total': 1.3, 'share': 23.5},
  {'race': 'OMultiR', 'total': 9.1, 'share': 15.9},
  {'race': 'Hispanic', 'total': 11.7, 'share': 16.9}],
 'PA': [{'race': 'White', 'total': 81.9, 'share': 5.8},
  {'race': 'Black', 'total': 10.8, 'share': 7.0},
  {'race': 'Asian', 'total': 2.7, 'share': 2.8},
  {'race': 'NHOPI', 'total': 0.0, 'share': 5.7},
  {'race': 'AIAN', 'total': 0.2, 'share': 5.5},
  {'race': 'OMultiR', 'total': 4.2, 'share': 7.0},
  {'race': 'Hispanic', 'total': 5.6, 'share': 6.2}],
 'RI': [{'race': 'White', 'total': 81.4, 'share': 5.2},
  {'race': 'Black', 'total': 5.7, 'share': 4.7},
  {'race': 'Asian', 'total': 2.8, 'share': 4.5},
  {'race': 'NHOPI', 'total': 0.0, 'share': 5.7},
  {'race': 'AIAN', 'total': 0.5, 'share': 4.7},
  {'race': 'OMultiR', 'total': 9.3, 'share': 3.7},
  {'race': 'Hispanic', 'total': 12.4, 'share': 3.4}],
 'SC': [{'race': 'White', 'total': 66.1, 'share': 15.0},
  {'race': 'Black', 'total': 27.9, 'share': 29.1},
  {'race': 'Asian', 'total': 1.2, 'share': 16.6},
  {'race': 'NHOPI', 'total': 0.0, 'share': 18.4},
  {'race': 'AIAN', 'total': 0.4, 'share': 23.0},
  {'race': 'OMultiR', 'total': 4.1, 'share': 25.9},
  {'race': 'Hispanic', 'total': 5.0, 'share': 25.8}],
 'SD': [{'race': 'White', 'total': 85.9, 'share': 9.3},
  {'race': 'Black', 'total': 1.2, 'share': 22.7},
  {'race': 'Asian', 'total': 0.9, 'share': 22.2},
  {'race': 'NHOPI', 'total': 0.0, 'share': 20.3},
  {'race': 'AIAN', 'total': 8.8, 'share': 59.9},
  {'race': 'OMultiR', 'total': 3.0, 'share': 17.6},
  {'race': 'Hispanic', 'total': 2.7, 'share': 19.4}],
 'TN': [{'race': 'White', 'total': 77.5, 'share': 14.6},
  {'race': 'Black', 'total': 16.6, 'share': 32.8},
  {'race': 'Asian', 'total': 1.4, 'share': 11.4},
  {'race': 'NHOPI', 'total': 0.0, 'share': 24.2},
  {'race': 'AIAN', 'total': 0.3, 'share': 20.3},
  {'race': 'OMultiR', 'total': 3.9, 'share': 26.9},
  {'race': 'Hispanic', 'total': 4.5, 'share': 27.3}],
 'TX': [{'race': 'White', 'total': 70.3, 'share': 18.3},
  {'race': 'Black', 'total': 11.8, 'share': 28.4},
  {'race': 'Asian', 'total': 3.8, 'share': 10.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 24.1},
  {'race': 'AIAN', 'total': 0.6, 'share': 21.9},
  {'race': 'OMultiR', 'total': 13.1, 'share': 24.4},
  {'race': 'Hispanic', 'total': 37.6, 'share': 28.2}],
 'UT': [{'race': 'White', 'total': 86.0, 'share': 9.0},
  {'race': 'Black', 'total': 1.0, 'share': 17.1},
  {'race': 'Asian', 'total': 2.0, 'share': 11.6},
  {'race': 'NHOPI', 'total': 0.8, 'share': 12.1},
  {'race': 'AIAN', 'total': 1.1, 'share': 30.3},
  {'race': 'OMultiR', 'total': 8.7, 'share': 14.5},
  {'race': 'Hispanic', 'total': 12.9, 'share': 15.1}],
 'VT': [{'race': 'White', 'total': 95.2, 'share': 5.3},
  {'race': 'Black', 'total': 1.0, 'share': 4.1},
  {'race': 'Asian', 'total': 1.2, 'share': 2.4},
  {'race': 'NHOPI', 'total': 0.0, 'share': 7.5},
  {'race': 'AIAN', 'total': 0.3, 'share': 4.6},
  {'race': 'OMultiR', 'total': 2.0, 'share': 5.7},
  {'race': 'Hispanic', 'total': 1.4, 'share': 6.0}],
 'VA': [{'race': 'White', 'total': 68.5, 'share': 12.7},
  {'race': 'Black', 'total': 19.3, 'share': 24.9},
  {'race': 'Asian', 'total': 5.4, 'share': 5.4},
  {'race': 'NHOPI', 'total': 0.0, 'share': 16.4},
  {'race': 'AIAN', 'total': 0.3, 'share': 16.0},
  {'race': 'OMultiR', 'total': 6.0, 'share': 14.9},
  {'race': 'Hispanic', 'total': 7.8, 'share': 13.7}],
 'WA': [{'race': 'White', 'total': 77.2, 'share': 11.8},
  {'race': 'Black', 'total': 3.5, 'share': 14.8},
  {'race': 'Asian', 'total': 7.1, 'share': 7.3},
  {'race': 'NHOPI', 'total': 0.6, 'share': 18.3},
  {'race': 'AIAN', 'total': 1.5, 'share': 22.8},
  {'race': 'OMultiR', 'total': 9.8, 'share': 16.8},
  {'race': 'Hispanic', 'total': 11.2, 'share': 18.3}],
 'WV': [{'race': 'White', 'total': 93.9, 'share': 13.0},
  {'race': 'Black', 'total': 3.4, 'share': 21.3},
  {'race': 'Asian', 'total': 0.6, 'share': 16.4},
  {'race': 'NHOPI', 'total': 0.0, 'share': 21.9},
  {'race': 'AIAN', 'total': 0.2, 'share': 15.2},
  {'race': 'OMultiR', 'total': 1.7, 'share': 15.9},
  {'race': 'Hispanic', 'total': 1.2, 'share': 13.5}],
 'WI': [{'race': 'White', 'total': 86.1, 'share': 9.4},
  {'race': 'Black', 'total': 6.3, 'share': 12.6},
  {'race': 'Asian', 'total': 2.2, 'share': 9.6},
  {'race': 'NHOPI', 'total': 0.0, 'share': 13.9},
  {'race': 'AIAN', 'total': 0.9, 'share': 20.2},
  {'race': 'OMultiR', 'total': 4.2, 'share': 14.5},
  {'race': 'Hispanic', 'total': 5.9, 'share': 13.6}],
 'WY': [{'race': 'White', 'total': 90.7, 'share': 11.9},
  {'race': 'Black', 'total': 0.8, 'share': 28.5},
  {'race': 'Asian', 'total': 0.7, 'share': 19.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 14.0},
  {'race': 'AIAN', 'total': 2.3, 'share': 29.3},
  {'race': 'OMultiR', 'total': 5.2, 'share': 17.6},
  {'race': 'Hispanic', 'total': 8.9, 'share': 18.1}]};

var cumulativeData19 = [{'id': 'US-AL', 'value': 19.0},
 {'id': 'US-AK', 'value': 13.6},
 {'id': 'US-AZ', 'value': 16.4},
 {'id': 'US-AR', 'value': 23.9},
 {'id': 'US-CA', 'value': 7.1},
 {'id': 'US-CO', 'value': 13.1},
 {'id': 'US-CT', 'value': 8.8},
 {'id': 'US-DE', 'value': 14.4},
 {'id': 'US-DC', 'value': 5.8},
 {'id': 'US-FL', 'value': 13.5},
 {'id': 'US-GA', 'value': 22.2},
 {'id': 'US-HI', 'value': 10.3},
 {'id': 'US-ID', 'value': 12.4},
 {'id': 'US-IL', 'value': 9.6},
 {'id': 'US-IN', 'value': 17.5},
 {'id': 'US-IA', 'value': 10.2},
 {'id': 'US-KS', 'value': 17.2},
 {'id': 'US-KY', 'value': 13.1},
 {'id': 'US-LA', 'value': 22.2},
 {'id': 'US-ME', 'value': 7.5},
 {'id': 'US-MD', 'value': 9.5},
 {'id': 'US-MA', 'value': 8.2},
 {'id': 'US-MI', 'value': 11.4},
 {'id': 'US-MN', 'value': 13.9},
 {'id': 'US-MS', 'value': 29.8},
 {'id': 'US-MO', 'value': 18.1},
 {'id': 'US-MT', 'value': 12.3},
 {'id': 'US-NE', 'value': 10.9},
 {'id': 'US-NV', 'value': 6.9},
 {'id': 'US-NH', 'value': 13.1},
 {'id': 'US-NJ', 'value': 5.2},
 {'id': 'US-NM', 'value': 26.5},
 {'id': 'US-NY', 'value': 3.9},
 {'id': 'US-NC', 'value': 16.7},
 {'id': 'US-ND', 'value': 7.8},
 {'id': 'US-OH', 'value': 13.0},
 {'id': 'US-OK', 'value': 16.0},
 {'id': 'US-OR', 'value': 12.9},
 {'id': 'US-PA', 'value': 6.3},
 {'id': 'US-RI', 'value': 5.3},
 {'id': 'US-SC', 'value': 18.8},
 {'id': 'US-SD', 'value': 14.8},
 {'id': 'US-TN', 'value': 17.8},
 {'id': 'US-TX', 'value': 19.5},
 {'id': 'US-UT', 'value': 8.4},
 {'id': 'US-VT', 'value': 7.3},
 {'id': 'US-VA', 'value': 14.3},
 {'id': 'US-WA', 'value': 12.2},
 {'id': 'US-WV', 'value': 13.4},
 {'id': 'US-WI', 'value': 8.8},
 {'id': 'US-WY', 'value': 8.7}];

var usData19 = [
{'race': 'White', 'total': 72.4, 'share': 11.1},
 {'race': 'Black', 'total': 12.6, 'share': 22.1},
 {'race': 'Asian', 'total': 4.7, 'share': 5.6},
 {'race': 'NHOPI', 'total': 0.1, 'share': 13.4},
 {'race': 'AIAN', 'total': 0.9, 'share': 24.8},
 {'race': 'OMultiR', 'total': 9.1, 'share': 14.0},
 {'race': 'Hispanic', 'total': 16.3, 'share': 14.8}];

var stateData19 = {
'AL': [{'race': 'White', 'total': 68.5, 'share': 12.1},
  {'race': 'Black', 'total': 26.1, 'share': 36.4},
  {'race': 'Asian', 'total': 1.1, 'share': 14.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 23.8},
  {'race': 'AIAN', 'total': 0.5, 'share': 14.9},
  {'race': 'OMultiR', 'total': 3.5, 'share': 23.9},
  {'race': 'Hispanic', 'total': 3.8, 'share': 24.5}],
 'AK': [{'race': 'White', 'total': 66.6, 'share': 10.2},
  {'race': 'Black', 'total': 3.2, 'share': 13.4},
  {'race': 'Asian', 'total': 5.3, 'share': 7.5},
  {'race': 'NHOPI', 'total': 1.0, 'share': 6.3},
  {'race': 'AIAN', 'total': 13.7, 'share': 35.4},
  {'race': 'OMultiR', 'total': 8.8, 'share': 11.1},
  {'race': 'Hispanic', 'total': 5.5, 'share': 11.4}],
 'AZ': [{'race': 'White', 'total': 73.0, 'share': 13.9},
  {'race': 'Black', 'total': 4.0, 'share': 14.6},
  {'race': 'Asian', 'total': 2.7, 'share': 6.2},
  {'race': 'NHOPI', 'total': 0.1, 'share': 11.9},
  {'race': 'AIAN', 'total': 4.6, 'share': 51.6},
  {'race': 'OMultiR', 'total': 15.3, 'share': 20.1},
  {'race': 'Hispanic', 'total': 29.6, 'share': 20.2}],
 'AR': [{'race': 'White', 'total': 76.9, 'share': 18.6},
  {'race': 'Black', 'total': 15.4, 'share': 46.8},
  {'race': 'Asian', 'total': 1.2, 'share': 22.1},
  {'race': 'NHOPI', 'total': 0.2, 'share': 53.0},
  {'race': 'AIAN', 'total': 0.7, 'share': 21.5},
  {'race': 'OMultiR', 'total': 5.3, 'share': 34.4},
  {'race': 'Hispanic', 'total': 6.3, 'share': 36.0}],
 'CA': [{'race': 'White', 'total': 57.5, 'share': 7.1},
  {'race': 'Black', 'total': 6.1, 'share': 8.4},
  {'race': 'Asian', 'total': 13.0, 'share': 3.1},
  {'race': 'NHOPI', 'total': 0.3, 'share': 7.0},
  {'race': 'AIAN', 'total': 0.9, 'share': 11.6},
  {'race': 'OMultiR', 'total': 21.8, 'share': 8.9},
  {'race': 'Hispanic', 'total': 37.6, 'share': 8.9}],
 'CO': [{'race': 'White', 'total': 81.3, 'share': 12.0},
  {'race': 'Black', 'total': 4.0, 'share': 19.6},
  {'race': 'Asian', 'total': 2.7, 'share': 7.7},
  {'race': 'NHOPI', 'total': 0.1, 'share': 17.8},
  {'race': 'AIAN', 'total': 1.1, 'share': 21.3},
  {'race': 'OMultiR', 'total': 10.6, 'share': 20.2},
  {'race': 'Hispanic', 'total': 20.6, 'share': 21.1}],
 'CT': [{'race': 'White', 'total': 77.5, 'share': 7.8},
  {'race': 'Black', 'total': 10.1, 'share': 13.7},
  {'race': 'Asian', 'total': 3.7, 'share': 8.9},
  {'race': 'NHOPI', 'total': 0.0, 'share': 14.1},
  {'race': 'AIAN', 'total': 0.3, 'share': 14.4},
  {'race': 'OMultiR', 'total': 8.1, 'share': 12.4},
  {'race': 'Hispanic', 'total': 13.4, 'share': 11.9}],
 'DE': [{'race': 'White', 'total': 68.8, 'share': 10.9},
  {'race': 'Black', 'total': 21.3, 'share': 25.1},
  {'race': 'Asian', 'total': 3.1, 'share': 10.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 20.0},
  {'race': 'AIAN', 'total': 0.4, 'share': 18.2},
  {'race': 'OMultiR', 'total': 6.0, 'share': 18.6},
  {'race': 'Hispanic', 'total': 8.1, 'share': 18.3}],
 'DC': [{'race': 'White', 'total': 38.4, 'share': 1.0},
  {'race': 'Black', 'total': 50.7, 'share': 10.3},
  {'race': 'Asian', 'total': 3.4, 'share': 0.8},
  {'race': 'NHOPI', 'total': 0.0, 'share': 6.2},
  {'race': 'AIAN', 'total': 0.3, 'share': 6.1},
  {'race': 'OMultiR', 'total': 6.9, 'share': 2.7},
  {'race': 'Hispanic', 'total': 9.0, 'share': 1.9}],
 'FL': [{'race': 'White', 'total': 75.0, 'share': 11.7},
  {'race': 'Black', 'total': 15.9, 'share': 20.4},
  {'race': 'Asian', 'total': 2.4, 'share': 10.3},
  {'race': 'NHOPI', 'total': 0.0, 'share': 17.1},
  {'race': 'AIAN', 'total': 0.3, 'share': 18.4},
  {'race': 'OMultiR', 'total': 6.1, 'share': 18.2},
  {'race': 'Hispanic', 'total': 22.4, 'share': 12.3}],
 'GA': [{'race': 'White', 'total': 59.7, 'share': 15.1},
  {'race': 'Black', 'total': 30.4, 'share': 36.3},
  {'race': 'Asian', 'total': 3.2, 'share': 14.8},
  {'race': 'NHOPI', 'total': 0.0, 'share': 26.1},
  {'race': 'AIAN', 'total': 0.3, 'share': 22.6},
  {'race': 'OMultiR', 'total': 6.1, 'share': 25.7},
  {'race': 'Hispanic', 'total': 8.8, 'share': 25.2}],
 'HI': [{'race': 'White', 'total': 24.7, 'share': 15.3},
  {'race': 'Black', 'total': 1.5, 'share': 29.5},
  {'race': 'Asian', 'total': 38.6, 'share': 4.2},
  {'race': 'NHOPI', 'total': 9.9, 'share': 14.5},
  {'race': 'AIAN', 'total': 0.3, 'share': 21.6},
  {'race': 'OMultiR', 'total': 24.8, 'share': 11.7},
  {'race': 'Hispanic', 'total': 8.8, 'share': 15.9}],
 'ID': [{'race': 'White', 'total': 89.0, 'share': 12.1},
  {'race': 'Black', 'total': 0.6, 'share': 15.7},
  {'race': 'Asian', 'total': 1.2, 'share': 12.7},
  {'race': 'NHOPI', 'total': 0.1, 'share': 16.0},
  {'race': 'AIAN', 'total': 1.3, 'share': 16.0},
  {'race': 'OMultiR', 'total': 7.5, 'share': 15.4},
  {'race': 'Hispanic', 'total': 11.2, 'share': 16.1}],
 'IL': [{'race': 'White', 'total': 71.5, 'share': 9.4},
  {'race': 'Black', 'total': 14.5, 'share': 14.1},
  {'race': 'Asian', 'total': 4.5, 'share': 3.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 9.1},
  {'race': 'AIAN', 'total': 0.3, 'share': 10.0},
  {'race': 'OMultiR', 'total': 8.9, 'share': 7.8},
  {'race': 'Hispanic', 'total': 15.8, 'share': 7.1}],
 'IN': [{'race': 'White', 'total': 84.3, 'share': 14.7},
  {'race': 'Black', 'total': 9.1, 'share': 37.9},
  {'race': 'Asian', 'total': 1.5, 'share': 19.7},
  {'race': 'NHOPI', 'total': 0.0, 'share': 23.7},
  {'race': 'AIAN', 'total': 0.2, 'share': 22.1},
  {'race': 'OMultiR', 'total': 4.6, 'share': 26.5},
  {'race': 'Hispanic', 'total': 6.0, 'share': 25.7}],
 'IA': [{'race': 'White', 'total': 91.3, 'share': 9.6},
  {'race': 'Black', 'total': 2.9, 'share': 19.0},
  {'race': 'Asian', 'total': 1.7, 'share': 14.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 20.9},
  {'race': 'AIAN', 'total': 0.3, 'share': 19.7},
  {'race': 'OMultiR', 'total': 3.5, 'share': 16.3},
  {'race': 'Hispanic', 'total': 4.9, 'share': 17.6}],
 'KS': [{'race': 'White', 'total': 83.8, 'share': 15.0},
  {'race': 'Black', 'total': 5.8, 'share': 36.2},
  {'race': 'Asian', 'total': 2.3, 'share': 17.9},
  {'race': 'NHOPI', 'total': 0.0, 'share': 29.4},
  {'race': 'AIAN', 'total': 0.9, 'share': 24.9},
  {'race': 'OMultiR', 'total': 6.8, 'share': 26.1},
  {'race': 'Hispanic', 'total': 10.5, 'share': 26.3}],
 'KY': [{'race': 'White', 'total': 87.7, 'share': 12.1},
  {'race': 'Black', 'total': 7.7, 'share': 23.3},
  {'race': 'Asian', 'total': 1.1, 'share': 10.9},
  {'race': 'NHOPI', 'total': 0.0, 'share': 25.3},
  {'race': 'AIAN', 'total': 0.2, 'share': 17.5},
  {'race': 'OMultiR', 'total': 3.0, 'share': 18.1},
  {'race': 'Hispanic', 'total': 3.0, 'share': 18.0}],
 'LA': [{'race': 'White', 'total': 62.5, 'share': 14.9},
  {'race': 'Black', 'total': 32.0, 'share': 37.0},
  {'race': 'Asian', 'total': 1.5, 'share': 14.1},
  {'race': 'NHOPI', 'total': 0.0, 'share': 25.2},
  {'race': 'AIAN', 'total': 0.6, 'share': 19.7},
  {'race': 'OMultiR', 'total': 3.1, 'share': 21.6},
  {'race': 'Hispanic', 'total': 4.2, 'share': 18.5}],
 'ME': [{'race': 'White', 'total': 95.2, 'share': 7.3},
  {'race': 'Black', 'total': 1.1, 'share': 12.3},
  {'race': 'Asian', 'total': 1.0, 'share': 12.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 7.3},
  {'race': 'AIAN', 'total': 0.6, 'share': 22.7},
  {'race': 'OMultiR', 'total': 1.8, 'share': 10.0},
  {'race': 'Hispanic', 'total': 1.2, 'share': 9.2}],
 'MD': [{'race': 'White', 'total': 58.1, 'share': 8.2},
  {'race': 'Black', 'total': 29.4, 'share': 12.8},
  {'race': 'Asian', 'total': 5.5, 'share': 6.3},
  {'race': 'NHOPI', 'total': 0.0, 'share': 10.8},
  {'race': 'AIAN', 'total': 0.3, 'share': 10.0},
  {'race': 'OMultiR', 'total': 6.4, 'share': 9.0},
  {'race': 'Hispanic', 'total': 8.1, 'share': 8.3}],
 'MA': [{'race': 'White', 'total': 80.4, 'share': 8.4},
  {'race': 'Black', 'total': 6.6, 'share': 7.1},
  {'race': 'Asian', 'total': 5.3, 'share': 6.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 8.9},
  {'race': 'AIAN', 'total': 0.2, 'share': 10.4},
  {'race': 'OMultiR', 'total': 7.2, 'share': 9.0},
  {'race': 'Hispanic', 'total': 9.5, 'share': 9.4}],
 'MI': [{'race': 'White', 'total': 78.9, 'share': 10.0},
  {'race': 'Black', 'total': 14.1, 'share': 18.2},
  {'race': 'Asian', 'total': 2.4, 'share': 8.8},
  {'race': 'NHOPI', 'total': 0.0, 'share': 12.8},
  {'race': 'AIAN', 'total': 0.6, 'share': 16.7},
  {'race': 'OMultiR', 'total': 3.8, 'share': 16.2},
  {'race': 'Hispanic', 'total': 4.4, 'share': 15.6}],
 'MN': [{'race': 'White', 'total': 85.2, 'share': 13.6},
  {'race': 'Black', 'total': 5.1, 'share': 15.2},
  {'race': 'Asian', 'total': 4.0, 'share': 10.7},
  {'race': 'NHOPI', 'total': 0.0, 'share': 12.6},
  {'race': 'AIAN', 'total': 1.1, 'share': 33.6},
  {'race': 'OMultiR', 'total': 4.3, 'share': 15.8},
  {'race': 'Hispanic', 'total': 4.7, 'share': 16.6}],
 'MS': [{'race': 'White', 'total': 59.1, 'share': 20.9},
  {'race': 'Black', 'total': 37.0, 'share': 44.2},
  {'race': 'Asian', 'total': 0.8, 'share': 21.4},
  {'race': 'NHOPI', 'total': 0.0, 'share': 32.6},
  {'race': 'AIAN', 'total': 0.5, 'share': 21.1},
  {'race': 'OMultiR', 'total': 2.4, 'share': 31.3},
  {'race': 'Hispanic', 'total': 2.7, 'share': 31.4}],
 'MO': [{'race': 'White', 'total': 82.7, 'share': 16.8},
  {'race': 'Black', 'total': 11.5, 'share': 26.7},
  {'race': 'Asian', 'total': 1.6, 'share': 11.1},
  {'race': 'NHOPI', 'total': 0.1, 'share': 22.1},
  {'race': 'AIAN', 'total': 0.4, 'share': 21.4},
  {'race': 'OMultiR', 'total': 3.4, 'share': 22.6},
  {'race': 'Hispanic', 'total': 3.5, 'share': 23.2}],
 'MT': [{'race': 'White', 'total': 89.4, 'share': 9.7},
  {'race': 'Black', 'total': 0.4, 'share': 18.8},
  {'race': 'Asian', 'total': 0.6, 'share': 11.7},
  {'race': 'NHOPI', 'total': 0.0, 'share': 8.8},
  {'race': 'AIAN', 'total': 6.3, 'share': 47.5},
  {'race': 'OMultiR', 'total': 3.1, 'share': 14.5},
  {'race': 'Hispanic', 'total': 2.8, 'share': 16.0}],
 'NE': [{'race': 'White', 'total': 86.1, 'share': 10.1},
  {'race': 'Black', 'total': 4.5, 'share': 14.3},
  {'race': 'Asian', 'total': 1.7, 'share': 11.8},
  {'race': 'NHOPI', 'total': 0.0, 'share': 16.5},
  {'race': 'AIAN', 'total': 1.0, 'share': 10.2},
  {'race': 'OMultiR', 'total': 6.4, 'share': 18.9},
  {'race': 'Hispanic', 'total': 9.1, 'share': 20.0}],
 'NV': [{'race': 'White', 'total': 66.1, 'share': 6.0},
  {'race': 'Black', 'total': 8.0, 'share': 11.4},
  {'race': 'Asian', 'total': 7.2, 'share': 3.9},
  {'race': 'NHOPI', 'total': 0.6, 'share': 7.7},
  {'race': 'AIAN', 'total': 1.1, 'share': 15.8},
  {'race': 'OMultiR', 'total': 16.6, 'share': 8.9},
  {'race': 'Hispanic', 'total': 26.5, 'share': 8.7}],
 'NH': [{'race': 'White', 'total': 93.8, 'share': 13.0},
  {'race': 'Black', 'total': 1.1, 'share': 14.1},
  {'race': 'Asian', 'total': 2.1, 'share': 13.1},
  {'race': 'NHOPI', 'total': 0.0, 'share': 11.7},
  {'race': 'AIAN', 'total': 0.2, 'share': 15.2},
  {'race': 'OMultiR', 'total': 2.5, 'share': 13.5},
  {'race': 'Hispanic', 'total': 2.7, 'share': 11.7}],
 'NJ': [{'race': 'White', 'total': 68.5, 'share': 5.2},
  {'race': 'Black', 'total': 13.7, 'share': 6.7},
  {'race': 'Asian', 'total': 8.2, 'share': 2.2},
  {'race': 'NHOPI', 'total': 0.0, 'share': 5.3},
  {'race': 'AIAN', 'total': 0.3, 'share': 5.4},
  {'race': 'OMultiR', 'total': 9.0, 'share': 5.2},
  {'race': 'Hispanic', 'total': 17.6, 'share': 4.7}],
 'NM': [{'race': 'White', 'total': 68.3, 'share': 22.8},
  {'race': 'Black', 'total': 2.0, 'share': 21.7},
  {'race': 'Asian', 'total': 1.3, 'share': 12.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 17.2},
  {'race': 'AIAN', 'total': 9.3, 'share': 51.7},
  {'race': 'OMultiR', 'total': 18.7, 'share': 29.4},
  {'race': 'Hispanic', 'total': 46.3, 'share': 30.3}],
 'NY': [{'race': 'White', 'total': 65.7, 'share': 4.4},
  {'race': 'Black', 'total': 15.8, 'share': 3.7},
  {'race': 'Asian', 'total': 7.3, 'share': 1.3},
  {'race': 'NHOPI', 'total': 0.0, 'share': 4.9},
  {'race': 'AIAN', 'total': 0.5, 'share': 8.6},
  {'race': 'OMultiR', 'total': 10.4, 'share': 2.2},
  {'race': 'Hispanic', 'total': 17.6, 'share': 1.9}],
 'NC': [{'race': 'White', 'total': 68.4, 'share': 12.5},
  {'race': 'Black', 'total': 21.4, 'share': 28.8},
  {'race': 'Asian', 'total': 2.1, 'share': 11.3},
  {'race': 'NHOPI', 'total': 0.0, 'share': 23.0},
  {'race': 'AIAN', 'total': 1.2, 'share': 14.2},
  {'race': 'OMultiR', 'total': 6.5, 'share': 23.2},
  {'race': 'Hispanic', 'total': 8.3, 'share': 23.3}],
 'ND': [{'race': 'White', 'total': 90.0, 'share': 6.8},
  {'race': 'Black', 'total': 1.1, 'share': 16.5},
  {'race': 'Asian', 'total': 1.0, 'share': 22.6},
  {'race': 'NHOPI', 'total': 0.0, 'share': 20.6},
  {'race': 'AIAN', 'total': 5.4, 'share': 17.0},
  {'race': 'OMultiR', 'total': 2.2, 'share': 12.0},
  {'race': 'Hispanic', 'total': 2.0, 'share': 13.1}],
 'OH': [{'race': 'White', 'total': 82.6, 'share': 11.1},
  {'race': 'Black', 'total': 12.2, 'share': 25.0},
  {'race': 'Asian', 'total': 1.6, 'share': 8.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 18.7},
  {'race': 'AIAN', 'total': 0.2, 'share': 16.8},
  {'race': 'OMultiR', 'total': 3.1, 'share': 18.1},
  {'race': 'Hispanic', 'total': 3.0, 'share': 16.4}],
 'OK': [{'race': 'White', 'total': 72.1, 'share': 13.4},
  {'race': 'Black', 'total': 7.4, 'share': 30.5},
  {'race': 'Asian', 'total': 1.7, 'share': 10.6},
  {'race': 'NHOPI', 'total': 0.1, 'share': 13.8},
  {'race': 'AIAN', 'total': 8.5, 'share': 22.3},
  {'race': 'OMultiR', 'total': 10.0, 'share': 19.7},
  {'race': 'Hispanic', 'total': 8.8, 'share': 19.5}],
 'OR': [{'race': 'White', 'total': 83.6, 'share': 12.9},
  {'race': 'Black', 'total': 1.8, 'share': 8.4},
  {'race': 'Asian', 'total': 3.6, 'share': 6.5},
  {'race': 'NHOPI', 'total': 0.3, 'share': 12.3},
  {'race': 'AIAN', 'total': 1.3, 'share': 18.0},
  {'race': 'OMultiR', 'total': 9.1, 'share': 15.6},
  {'race': 'Hispanic', 'total': 11.7, 'share': 16.3}],
 'PA': [{'race': 'White', 'total': 81.9, 'share': 6.1},
  {'race': 'Black', 'total': 10.8, 'share': 7.4},
  {'race': 'Asian', 'total': 2.7, 'share': 3.2},
  {'race': 'NHOPI', 'total': 0.0, 'share': 6.1},
  {'race': 'AIAN', 'total': 0.2, 'share': 5.9},
  {'race': 'OMultiR', 'total': 4.2, 'share': 7.2},
  {'race': 'Hispanic', 'total': 5.6, 'share': 6.3}],
 'RI': [{'race': 'White', 'total': 81.4, 'share': 5.6},
  {'race': 'Black', 'total': 5.7, 'share': 4.7},
  {'race': 'Asian', 'total': 2.8, 'share': 4.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 4.5},
  {'race': 'AIAN', 'total': 0.5, 'share': 5.5},
  {'race': 'OMultiR', 'total': 9.3, 'share': 3.7},
  {'race': 'Hispanic', 'total': 12.4, 'share': 3.3}],
 'SC': [{'race': 'White', 'total': 66.1, 'share': 14.0},
  {'race': 'Black', 'total': 27.9, 'share': 29.5},
  {'race': 'Asian', 'total': 1.2, 'share': 14.9},
  {'race': 'NHOPI', 'total': 0.0, 'share': 16.6},
  {'race': 'AIAN', 'total': 0.4, 'share': 18.4},
  {'race': 'OMultiR', 'total': 4.1, 'share': 24.1},
  {'race': 'Hispanic', 'total': 5.0, 'share': 23.9}],
 'SD': [{'race': 'White', 'total': 85.8, 'share': 12.4},
  {'race': 'Black', 'total': 1.2, 'share': 27.8},
  {'race': 'Asian', 'total': 0.9, 'share': 22.2},
  {'race': 'NHOPI', 'total': 0.0, 'share': 19.3},
  {'race': 'AIAN', 'total': 7.2, 'share': 41.3},
  {'race': 'OMultiR', 'total': 3.0, 'share': 19.9},
  {'race': 'Hispanic', 'total': 2.6, 'share': 20.2}],
 'TN': [{'race': 'White', 'total': 77.5, 'share': 14.0},
  {'race': 'Black', 'total': 16.6, 'share': 34.5},
  {'race': 'Asian', 'total': 1.4, 'share': 10.1},
  {'race': 'NHOPI', 'total': 0.0, 'share': 22.7},
  {'race': 'AIAN', 'total': 0.3, 'share': 19.5},
  {'race': 'OMultiR', 'total': 3.9, 'share': 24.7},
  {'race': 'Hispanic', 'total': 4.5, 'share': 24.8}],
 'TX': [{'race': 'White', 'total': 70.3, 'share': 17.8},
  {'race': 'Black', 'total': 11.8, 'share': 28.7},
  {'race': 'Asian', 'total': 3.8, 'share': 10.3},
  {'race': 'NHOPI', 'total': 0.0, 'share': 22.5},
  {'race': 'AIAN', 'total': 0.6, 'share': 20.9},
  {'race': 'OMultiR', 'total': 13.1, 'share': 23.5},
  {'race': 'Hispanic', 'total': 37.6, 'share': 27.0}],
 'UT': [{'race': 'White', 'total': 86.0, 'share': 7.8},
  {'race': 'Black', 'total': 1.0, 'share': 12.6},
  {'race': 'Asian', 'total': 2.0, 'share': 8.7},
  {'race': 'NHOPI', 'total': 0.8, 'share': 9.2},
  {'race': 'AIAN', 'total': 1.1, 'share': 27.8},
  {'race': 'OMultiR', 'total': 8.7, 'share': 11.7},
  {'race': 'Hispanic', 'total': 12.9, 'share': 12.2}],
 'VT': [{'race': 'White', 'total': 95.2, 'share': 7.4},
  {'race': 'Black', 'total': 1.0, 'share': 5.4},
  {'race': 'Asian', 'total': 1.2, 'share': 3.5},
  {'race': 'NHOPI', 'total': 0.0, 'share': 8.7},
  {'race': 'AIAN', 'total': 0.3, 'share': 7.1},
  {'race': 'OMultiR', 'total': 2.0, 'share': 7.4},
  {'race': 'Hispanic', 'total': 1.4, 'share': 7.9}],
 'VA': [{'race': 'White', 'total': 68.5, 'share': 12.8},
  {'race': 'Black', 'total': 19.3, 'share': 22.3},
  {'race': 'Asian', 'total': 5.4, 'share': 5.4},
  {'race': 'NHOPI', 'total': 0.0, 'share': 16.6},
  {'race': 'AIAN', 'total': 0.3, 'share': 15.5},
  {'race': 'OMultiR', 'total': 6.0, 'share': 13.8},
  {'race': 'Hispanic', 'total': 7.8, 'share': 12.4}],
 'WA': [{'race': 'White', 'total': 77.2, 'share': 11.7},
  {'race': 'Black', 'total': 3.5, 'share': 15.2},
  {'race': 'Asian', 'total': 7.1, 'share': 8.1},
  {'race': 'NHOPI', 'total': 0.6, 'share': 19.1},
  {'race': 'AIAN', 'total': 1.5, 'share': 20.7},
  {'race': 'OMultiR', 'total': 9.8, 'share': 16.9},
  {'race': 'Hispanic', 'total': 11.2, 'share': 18.3}],
 'WV': [{'race': 'White', 'total': 93.9, 'share': 13.2},
  {'race': 'Black', 'total': 3.4, 'share': 19.7},
  {'race': 'Asian', 'total': 0.6, 'share': 18.0},
  {'race': 'NHOPI', 'total': 0.0, 'share': 21.2},
  {'race': 'AIAN', 'total': 0.2, 'share': 14.1},
  {'race': 'OMultiR', 'total': 1.7, 'share': 15.0},
  {'race': 'Hispanic', 'total': 1.2, 'share': 13.0}],
 'WI': [{'race': 'White', 'total': 86.1, 'share': 8.4},
  {'race': 'Black', 'total': 6.3, 'share': 10.9},
  {'race': 'Asian', 'total': 2.2, 'share': 9.2},
  {'race': 'NHOPI', 'total': 0.0, 'share': 12.9},
  {'race': 'AIAN', 'total': 0.9, 'share': 18.1},
  {'race': 'OMultiR', 'total': 4.2, 'share': 12.4},
  {'race': 'Hispanic', 'total': 5.9, 'share': 11.5}],
 'WY': [{'race': 'White', 'total': 90.7, 'share': 8.5},
  {'race': 'Black', 'total': 0.8, 'share': 21.7},
  {'race': 'Asian', 'total': 0.7, 'share': 16.3},
  {'race': 'NHOPI', 'total': 0.0, 'share': 5.6},
  {'race': 'AIAN', 'total': 2.3, 'share': 4.7},
  {'race': 'OMultiR', 'total': 5.2, 'share': 12.1},
  {'race': 'Hispanic', 'total': 8.9, 'share': 12.9}]};


function aggregateData(list) {

    for(var i = 0; i < list.length; i++) {
      var row = list[i];
      if (row.total > 0) {
        row.total = -1 * row.total;
      }
      row.share = row.share;
    }

    return list;
  }

usData = aggregateData(usData)
usData19 = aggregateData(usData19)

function getDifferences(year1, year2) {
    let new_list = [];
    for(var i = 0; i < year2.length; i++) {
        let row1 = year1[i];
        let row2 = year2[i];
        total = row2.total - row1.total;
        share = row2.share - row1.share;
        new_list.push({'race': row1.race, 'total': total, 'share': share})
    }
    return new_list
}

// ===========================================================
// Map chart
// ===========================================================

// Create chart
var map = container.children.push(
  am5map.MapChart.new(root, {
    panX: "none",
    panY: "none",
    wheelY: "none",
    projection: am5map.geoAlbersUsa(),
    width: am5.percent(100)
  })
);


// ===========================================================
// XY chart
// ===========================================================


var container2 = base_container.children.push(am5.Container.new(root, {
  layout: root.horizontalLayout,
//  x: am5.p100,
  width: am5.p100,
  height: am5.p100,
  paddingTop: 0,
  paddingBottom: 20
}))

// Create chart
var chart = container2.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "none",
  wheelY: "none",
  layout: root.verticalLayout,
  width: am5.percent(50)
}));

chart.children.unshift(am5.Label.new(root, {
  text: "FARA 2015",
  fontSize: 20,
  fontWeight: "bold",
  textAlign: "center",
  x: am5.percent(50),
  centerX: am5.percent(50),
  paddingTop: 0,
  paddingBottom: 20
}));

// Create axes
var yAxis1 = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "race",
  renderer: am5xy.AxisRendererY.new(root, {
    minGridDistance: 10,
    })
}));
yAxis1.get("renderer").labels.template.set("fontSize", 12);
yAxis1.get("renderer").labels.template.set("fontWeight", 'bold');
yAxis1.data.setAll(JSON.parse(JSON.stringify(usData)));

var yAxis2 = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "race",
  renderer: am5xy.AxisRendererY.new(root, {
    opposite: true,
    minGridDistance: 10,
  })
}));
yAxis2.get("renderer").labels.template.set("fontSize", 12);
yAxis2.get("renderer").labels.template.set("fontWeight", 'bold');
yAxis2.data.setAll(JSON.parse(JSON.stringify(usData)));

var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
  min: -100,
  max: 60,
  numberFormat: "#.s'%'",
  renderer: am5xy.AxisRendererX.new(root, {
    minGridDistance: 50,
  })
}));

// Create series
var totalSeries = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "Share of Total Population",
  xAxis: xAxis,
  yAxis: yAxis1,
  valueXField: "total",
  categoryYField: "race",
  clustered: false,
}));


totalSeries.columns.setAll({
  tooltipText: "{valueX}%", //, race {categoryY}: {total} ({total.formatNumber('#.0s')}%)",
  tooltipX: am5.p100
});

totalSeries.data.setAll(usData);

var shareSeries = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "Share of Subpopulation",
  xAxis: xAxis,
  yAxis: yAxis2,
  valueXField: "share",
  categoryYField: "race",
  clustered: false,
}));

shareSeries.columns.setAll({
  tooltipText: "{valueX}%",  // race {categoryY}: {share} ({share.formatNumber('#.0s')}%)",
  tooltipX: am5.p100
});

shareSeries.data.setAll(usData);

// Add labels
var totalLabel = chart.plotContainer.children.push(am5.Label.new(root, {
  text: "Share of Total Population",
  fontSize: 16,
  fontWeight: 'bold',
  y: 0,
  x: 125,
  dy: -25,
  centerX: am5.p50,
  fill: totalSeries.get("fill"),
  background: am5.RoundedRectangle.new(root, {
    fill: am5.color(0xffffff),
    fillOpacity: 0.5
  }),

}));

var shareLabel = chart.plotContainer.children.push(am5.Label.new(root, {
  text: "Share of Subpopulation",
  fontSize: 16,
  fontWeight: 'bold',
  y: 0,
  x: am5.p100,
  centerX: am5.p100,
  dx: -15,
  dy: -25,
  fill: shareSeries.get("fill"),
  background: am5.RoundedRectangle.new(root, {
    fill: am5.color(0xffffff),
    fillOpacity: 0.5
  }),
}));

chart.getTooltip().set("autoTextColor", false);

// ===========================================================
// XY chart - 2019
// ===========================================================

// Create chart
var chart_19 = container2.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "none",
  wheelY: "none",
  layout: root.verticalLayout,
  width: am5.percent(50)
}));

chart_19.children.unshift(am5.Label.new(root, {
  text: "FARA 2019",
  fontSize: 20,
  fontWeight: "bold",
  textAlign: "center",
  x: am5.percent(50),
  centerX: am5.percent(50),
  paddingTop: 0,
  paddingBottom: 20
}));

// Create axes
var yAxis1_19 = chart_19.yAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "race",
  renderer: am5xy.AxisRendererY.new(root, {
  minGridDistance: 10,
    })
}));
yAxis1_19.get("renderer").labels.template.set("fontSize", 12);
yAxis1_19.get("renderer").labels.template.set("fontWeight", 'bold');
yAxis1_19.data.setAll(JSON.parse(JSON.stringify(usData19)));

var yAxis2_19 = chart_19.yAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "race",
  renderer: am5xy.AxisRendererY.new(root, {
    opposite: true,
    minGridDistance: 10,
  })
}));
yAxis2_19.get("renderer").labels.template.set("fontSize", 12);
yAxis2_19.get("renderer").labels.template.set("fontWeight", 'bold');
yAxis2_19.data.setAll(JSON.parse(JSON.stringify(usData19)));

var xAxis_19 = chart_19.xAxes.push(am5xy.ValueAxis.new(root, {
  min: -100,
  max: 60,
  numberFormat: "#.s'%'",
  renderer: am5xy.AxisRendererX.new(root, {
    minGridDistance: 50,
  })
}));

// Create series
var totalSeries_19 = chart_19.series.push(am5xy.ColumnSeries.new(root, {
  name: "Share of Total Population",
  xAxis: xAxis_19,
  yAxis: yAxis1_19,
  valueXField: "total",
  categoryYField: "race",
  clustered: false,
}));


totalSeries_19.columns.setAll({
  tooltipText: '{valueX}%', //"Share of Total Population", //, race {categoryY}: {total} ({total.formatNumber('#.0s')}%)",
  tooltipX: am5.p100
});

totalSeries_19.data.setAll(usData19);

var shareSeries_19 = chart_19.series.push(am5xy.ColumnSeries.new(root, {
  name: "Share of Subpopulation",
  xAxis: xAxis_19,
  yAxis: yAxis2_19,
  valueXField: "share",
  categoryYField: "race",
  clustered: false,
}));

shareSeries_19.columns.setAll({
  tooltipText: "{valueX}%",  // race {categoryY}: {share} ({share.formatNumber('#.0s')}%)",
  tooltipX: am5.p100
});

shareSeries_19.data.setAll(usData19);

// Add labels
var totalLabel_19 = chart_19.plotContainer.children.push(am5.Label.new(root, {
  text: "Share of Total Population",
  fontSize: 16,
  fontWeight: 'bold',
  y: 0,
  x: 125,
  dy: -25,
  centerX: am5.p50,
  fill: totalSeries_19.get("fill"),
  background: am5.RoundedRectangle.new(root, {
    fill: am5.color(0xffffff),
    fillOpacity: 0.5
  }),

}));

var shareLabel_19 = chart_19.plotContainer.children.push(am5.Label.new(root, {
  text: "Share of Subpopulation",
  fontSize: 16,
  fontWeight: 'bold',
  y: 0,
  x: am5.p100,
  centerX: am5.p100,
  dx: -15,
  dy: -25,
  fill: shareSeries_19.get("fill"),
  background: am5.RoundedRectangle.new(root, {
    fill: am5.color(0xffffff),
    fillOpacity: 0.5
  }),
}));

////////////////////////////////////////////////////////////////////////////////
// Difference chart
////////////////////////////////////////////////////////////////////////////////
var chart_diff = base_container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "none",
  wheelY: "none",
  layout: root.horizontalLayout,
  width: am5.percent(100),
  height: am5.percent(80),
  x: am5.percent(15),
  centerX: 0
}));

chart_diff.children.push(am5.Label.new(root, {
  text: "Change in Food Desert Impact between 2015-2019",
  fontSize: 20,
  fontWeight: "bold",
  textAlign: "center",
  x: am5.percent(10),
  centerX: am5.percent(0),
  dx: 75,
  dy: -30,
  paddingTop: 0,
  paddingBottom: 0
}));

// Create axes
var xAxis_diff = chart_diff.xAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "race",
  renderer: am5xy.AxisRendererX.new(root, {
  minGridDistance: 10,
    })
}));
xAxis_diff.get("renderer").labels.template.set("fontSize", 12);
xAxis_diff.get("renderer").labels.template.set("fontWeight", 'bold');
xAxis_diff.data.setAll(getDifferences(usData, usData19));
console.log(getDifferences(usData, usData19))

var yAxis_diff = chart_diff.yAxes.push(am5xy.ValueAxis.new(root, {
//  min: -30,
//  max: 30,
  numberFormat: "#'%'",
  renderer: am5xy.AxisRendererY.new(root, {
    minGridDistance: 20,
  })
}));
yAxis_diff.get("renderer").labels.template.set("fontSize", 12);
yAxis_diff.get("renderer").labels.template.set("fontWeight", 'bold');

var diffSeries = chart_diff.series.push(am5xy.ColumnSeries.new(root, {
  name: "Change in Food Desert Impact",
  xAxis: xAxis_diff,
  yAxis: yAxis_diff,
  valueField: "heatValue",
  categoryXField: "race",
  valueYField: "share",
  clustered: false,
}));

diffSeries.set("heatRules", [{
  target: diffSeries.columns.template,
  dataField: "share",
  min: am5.color(0xD22B2B),
  max: am5.color(0x50C878),
  key: "fill"
}]);

diffSeries.data.setAll(getDifferences(usData, usData19));

////////////////////////////////////////////////////////////////////////////////
// more map stuff
////////////////////////////////////////////////////////////////////////////////
// Title
var title = map.children.push(am5.Label.new(root, {
  text: "United States",
  fontSize: 18,
  y: -20,
  x: am5.p50,
  centerX: am5.p50,
  background: am5.Rectangle.new(root, {
    fill: am5.color(0xffffff),
    fillOpacity: 0.5
  })
}));

// Create polygon series
var polygonSeries = map.series.push(
  am5map.MapPolygonSeries.new(root, {
//    fill: am5.color(0x999999),
    valueField: "value",
    calculateAggregates: true,
    geoJSON: am5geodata_usaLow
  })
);

polygonSeries.set("heatRules", [{
  target: polygonSeries.mapPolygons.template,
  dataField: "value",
  min: am5.color(0x3b4994),
  max: am5.color(0xe8e8e8),
  key: "fill"
}]);

polygonSeries.mapPolygons.template.setAll({
  tooltipText: "{value}%",
  interactive: true
});

polygonSeries.mapPolygons.template.states.create("hover", {
  fill: chart.get("colors").getIndex(2)
});

polygonSeries.mapPolygons.template.states.create("active", {
  fill: chart.get("colors").getIndex(3)
});

////////////////////////////////////////////////////////////////////////////////
var activePolygon;
polygonSeries.mapPolygons.template.events.on("click", function(ev) {
  if (activePolygon) {
    activePolygon.set("active", false);
  }
  activePolygon = ev.target;
  activePolygon.set("active", true);
  var state  = ev.target.dataItem.dataContext.id.split("-").pop();
  let data = aggregateData(stateData[state]);

  for(var i = 0; i < data.length; i++){
    totalSeries.data.setIndex(i, data[i]);
    shareSeries.data.setIndex(i, data[i]);
  }

  let data_19 = aggregateData(stateData19[state]);
    for(var i = 0; i < data.length; i++){
    totalSeries_19.data.setIndex(i, data_19[i]);
    shareSeries_19.data.setIndex(i, data_19[i]);
  }

    let data_diffs = getDifferences(data, data_19)
    console.log(data_diffs)
    for (var i = 0; i < data_diffs.length; i++){
            diffSeries.data.setIndex(i, data_diffs[i])
     }

//  title.set("text", `{ev.target.dataItem.dataContext.name}: {ev.target.dataItem.dataContext.value}% Low Income, Low Access`);
    let name = ev.target.dataItem.dataContext.name;
    let val = ev.target.dataItem.dataContext.value;
    title.set("text", name + ": " + val + "% with Low Income and Low Access");  // "{name}: {value}% Low Income, Low Access");
});

polygonSeries.data.setAll(cumulativeData19);

}); // end am5.ready()
