//Author: Juan R. Henriqez
//Author: Alexander G. Guzman
//Date: Feb/03/2016
//Version: 1.0.0

google.charts.load("current", {packages:["corechart", "bar"]});
     google.charts.setOnLoadCallback(drawChart);
     google.charts.setOnLoadCallback(drawChart2);
     google.charts.setOnLoadCallback(drawChart3);
     //sex chart
     function drawChart() {
       var data = google.visualization.arrayToDataTable([
         ['Sex', 'number'],
         ['Male',     57],
         ['Female',    43]
       ]);

       var options = {
         backgroundColor: { fill:'transparent' },
         title: 'Sex Concentration',
         pieHole: 0.4,
       };

       var chart = new google.visualization.PieChart(document.getElementById('sex-chart'));
       chart.draw(data, options);
}

//department chart
function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Department', 'Percent'],
    ['ME',     84],
    ['IE',    10],
    ['BA', 2],
    ['CS', 2],
    ['BIOL', 2]
  ]);

  var options = {
    backgroundColor: { fill:'transparent' },
    title: 'Department Concentration',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('department-chart'));
  chart.draw(data, options);
}


function drawChart3() {
        var data = google.visualization.arrayToDataTable([
          ['Skills', 'Before', 'After'],
          ['Technical Presentations', 5, 20],
          ['Design for Manufacture', 7, 22],
          ['Project Management', 4, 10],
          ['Aerodynamics', 2, 14],
          ['Finite Element Analysis', 3, 6],
          ['NX Unigraphics', 4, 20]
        ]);

        var options = {
          chart: {
            title: 'Technical Development',
            subtitle: 'Skills: New vs. After One Year',
          },
          bars: 'horizontal',
          hAxis: {
            format: 'none',
            gridlines: { count: 4 },
            ticks: [5,10,15,20]
          },
          colors: ['gray', '#339933'],
          bar: {groupWidth: "60%"},

        };

        var chart = new google.charts.Bar(document.getElementById('barchart-development'));

        chart.draw(data, options);
      }