var ctx = document.getElementById('myChart').getContext('2d');
var datalist = []
var titlelist = []

var datepair = [
  [1920, 1939],
  [1940, 1959],
  [1960, 1979],
  [1980, 1999]
]

var dataToValues = [];

var start = 0;

var end = 4;


function grabYears() {
  for (var i = start; i < end; i++) {
    url = "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/annualavg/tas/" + datepair[i][0] + "/" + datepair[i][1] + "/usa.json";
    console.log(url);
    grabData(datepair[i][0], url);
  }
}

function grabData(startDate, url) {
  var complete = false;
  jQuery.getJSON(url, function(data) {
    var i;
    var num = startDate;
    data = JSON.parse(JSON.stringify(data));
    temp_data = []
    temp_title = []
    for (i = 0; i < data.length; i++) {
      temp_title.push("" + num);
      temp_data.push((data[i]['annualData'][0]));
      num++;
    }
    dataToValues[startDate] = [temp_title, temp_data];
    console.log(Object.keys(dataToValues).length + " vs. " + datepair.length);
    if (Object.keys(dataToValues).length == end - start) {
      createData();
    }
  });
}

function createData() {
  for (var i = start; i < end; i++) {
    console.log("" + dataToValues[datepair[i][0]][0])
    for (var j = 0; j < dataToValues[datepair[i][0]][0].length; j++) {
      console.log("" + dataToValues[datepair[i][0]][0].length + "_" + dataToValues[datepair[i][0]][1].length)
      titlelist.push(dataToValues[datepair[i][0]][0][j]);
      datalist.push(dataToValues[datepair[i][0]][1][j]);
    }
  }
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: titlelist,
      datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(187,187,187)',
        borderColor: 'rgb(187,187,187)',
        data: datalist,
        fill: false,
        showLine: true,

      }]
    },

    // Configuration options go here
    options: {}
  });
}

$(document).ready(function() {
  grabYears();
});
