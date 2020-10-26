// Initialize a Line chart in the container with the ID chart1
new Chartist.Line(document.getElementById("chart1"), {
    labels: [1, 2, 3, 4],
    series: [[100, 120, 180, 200]],
  });

  

  var data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
  };
  
  var options = {
    seriesBarDistance: 15
  };
  
  var responsiveOptions = [
    ['screen and (min-width: 641px) and (max-width: 1024px)', {
      seriesBarDistance: 10,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value;
        }
      }
    }],
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];
  
  new Chartist.Bar(document.getElementById("chart2"), data, options, responsiveOptions);


  var data = {
    series: [5, 3, 4]
  };
  
  var sum = function(a, b) { return a + b };
  
  new Chartist.Pie(document.getElementById("chart3"), data, {
    labelInterpolationFnc: function(value) {
      return Math.round(value / data.series.reduce(sum) * 100) + '%';
    }
  });


  new Chartist.Pie(document.getElementById("chart4"), {
    series: [20, 10, 30, 40]
  }, {
    donut: true,
    donutWidth: 60,
    startAngle: 270,
    total: 200,
    showLabel: false
  });


  new Chartist.Pie(document.getElementById("chart5"), {
    series: [20, 10, 30, 40]
  }, {
    donut: true,
    donutWidth: 60,
    donutSolid: true,
    startAngle: 270,
    showLabel: true
  });
  