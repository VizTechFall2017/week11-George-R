var svg3 = d3.select('svg2');

/* Your code goes here */

var svg3 = d3.select('#svg2');

var selectedPlayer

var nestedData2;
var nestedData4;

// function selectedTeam(value){
//     reloadData(value);
// }
//
// console.log(selectedTeam)

// function reloadData(inputName){
//
//         d3.csv('shot_' + inputName + '.csv', function(error, newData){
//             console.log(newData);
//
//             //call your update function from here!!
//             //updateData(newData);
//         });
d3.csv('./tor.csv', function (dataIn4){

var  nestedData = d3.nest()
      .key(function(d){return d.Player})
      .entries(dataIn4);
      console.log(dataIn4)
      nestedData4 = nestedData

drawPoints4(dataIn4)






console.log(updateData4("Kyle Lowry"))


  });
  function updateData4(selectedPlayer){
      return nestedData4.filter(function(d){ return d.key == selectedPlayer })[0].values
  }

  function drawPoints4(dataPoints) {
  var shotchart = svg3.selectAll('circle')
     .data(dataPoints);
     shotchart.enter()
     .append('circle')
     .attr("cx", function(d){

     return d.locx;
     })
     .attr("cy", function(d){
       return d.locy;

     })

     .attr('r', '1')

     .attr("fill", "brown")

     shotchart
     .attr("cx", function(d){

     return d.locx;
     })
     .attr("cy", function(d){
       return d.locy;

     })

     .attr('r', '1')

     .attr("fill", "white")

     shotchart
     .exit()
     .remove()

  }

//       .attr('fill', function(d){
//         return randomColor();
// })
// })
