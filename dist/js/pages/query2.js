var data = [{
  value: 0.22,
  color: "#F7464A",
  highlight: "#FF5A5E",
  label: "Cluster 1"
}, {
  value: 0.13,
  color: "#46BFBD",
  highlight: "#5AD3D1",
  label: "Cluster 2"
}, {
  value: 0.13,
  color: "#FDB45C",
  highlight: "#FFC870",
  label: "Cluster 3"
},
{
  value: 0.13,
  color: "#F7464A",
  highlight: "#FF5A5E",
  label: "Cluster 4"
}, {
  value: 0.067,
  color: "#46BFBD",
  highlight: "#5AD3D1",
  label: "Cluster 5"
}, {
  value: 0.13,
  color: "#FDB45C",
  highlight: "#FFC870",
  label: "Cluster 6"
},
{
  value: 0.12,
  color: "#F7464A",
  highlight: "#FF5A5E",
  label: "Cluster 7"
}, {
  value: 0.07,
  color: "#46BFBD",
  highlight: "#5AD3D1",
  label: "Cluster 8"
}
];

$(document).ready(
  function() {
    var ctx = document.getElementById("pieChart").getContext("2d");
    var pieOptions = {
      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke: true,
      //String - The colour of each segment stroke
      segmentStrokeColor: "#fff",
      //Number - The width of each segment stroke
      segmentStrokeWidth: 1,
      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout: 50, // This is 0 for Pie charts
      //Number - Amount of animation steps
      animationSteps: 100,
      //String - Animation easing effect
      animationEasing: "easeOutBounce",
      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate: true,
      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale: false,
      //Boolean - whether to make the chart responsive to window resizing
      responsive: true,
      // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
      maintainAspectRatio: false,
      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
      //String - A tooltip template
      //tooltipTemplate: "<%=value %> <%=label%> users",
      //tooltipTemplate: "Click for inner information of <%=label%>",
      tooltipTemplate: "",
    };
    var myNewChart = new Chart(ctx).Pie(data, pieOptions);
    //document.getElementById('legendDiv').innerHTML = myNewChart.generateLegend();


    

    $("#pieChart").click(
      function(evt) {
        var activePoints = myNewChart.getSegmentsAtEvent(evt);
        if (activePoints[0].label == 'Cluster 1') {
          window.location.href='q2c1.html';  
        }
        if (activePoints[0].label == 'Cluster 2') {
          window.location.href='q2c2.html';  
        }
        if (activePoints[0].label == 'Cluster 3') {
          window.location.href='q2c3.html';  
        }
        if (activePoints[0].label == 'Cluster 4') {
          window.location.href='q2c4.html';  
        }
        if (activePoints[0].label == 'Cluster 5') {
          window.location.href='q2c5.html';  
        }
        if (activePoints[0].label == 'Cluster 6') {
          window.location.href='q2c6.html';  
        }
        if (activePoints[0].label == 'Cluster 7') {
          window.location.href='q2c7.html';  
        }
        if (activePoints[0].label == 'Cluster 8') {
          window.location.href='q2c8.html';  
        }
        //var url = "http://example.com/?label=" + activePoints[0].label + "&value=" + activePoints[0].value;
      }
    );

    $("#pieChart").mousemove(function(evt) {
      var activePoints = myNewChart.getSegmentsAtEvent(evt);
      //alert(activePoints[0].label)
        if (activePoints[0].label == 'Cluster 1') {
          var div = document.getElementById("Cluster 1");  
          div.textContent = "Cluster 1 : golden; Globe; GoldenGlobes";  
          var text = div.textContent;  
          //
        }
        if (activePoints[0].label == 'Cluster 2') {
          var div = document.getElementById("Cluster 1");  
          div.textContent = "Cluster 2 : hollywood; movies; Cinema";  
          var text = div.textContent;  
          //
        }
        if (activePoints[0].label == 'Cluster 3') {
          var div = document.getElementById("Cluster 1");  
          div.textContent = "Cluster 3 : style; Model; Fashion; fashionista";  
          var text = div.textContent;  
          //
        }
        if (activePoints[0].label == 'Cluster 4') {
          var div = document.getElementById("Cluster 1");  
          div.textContent = "Cluster 4 : Actress; bestof; winner";  
          var text = div.textContent;  
          //
        }
        if (activePoints[0].label == 'Cluster 5') {
          var div = document.getElementById("Cluster 1");  
          div.textContent = "Cluster 5 : Carpet; FredCarpet";  
          var text = div.textContent;  
          //
        }
        if (activePoints[0].label == 'Cluster 6') {
          var div = document.getElementById("Cluster 1");  
          div.textContent = "Cluster 6 : Nominees; List";  
          var text = div.textContent;  
          //
        }
        if (activePoints[0].label == 'Cluster 7') {
          var div = document.getElementById("Cluster 1");  
          div.textContent = "Cluster 7 : MeToo; Sexual; Harassment";  
          var text = div.textContent;  
          //
        }
        if (activePoints[0].label == 'Cluster 8') {
          var div = document.getElementById("Cluster 1");  
          div.textContent = "Cluster 8 : happeningnow";  
          var text = div.textContent;  
          //
        }
        

      });


    


    
  }
);