function scene_one() {
  start_vis();

  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Scene 1';
	
  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button disabled";
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = null;
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = function() { scene_two() };

  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips*** <br><br> Here the data for average highway MPG of different numbers of engine cylinders are provided. " + 
	  "Note that the 0 engine cylinders represent electric vehicles. " +
	  "There is a different way of calculating MPG for electric vehicles since they don’t run on gas. " +
	  "According to " + 
	  '<a href="https://www.merchantsfleet.com/future-of-fleet/mpge-explained/">merchantsfleet</a>' + 
	  ", the energy contained in 1 gallon of gas is equivalent to 33.7 kWh (kilowatt hours) of electricity. " +
	  "So if an electric car travels 101.5 miles with 33.7 kWh, this would mean that the MPG for this vehicle is 101.5 MPG. <br><br>" + 
	  "In this graph, it can be seen that electric cars have the best average highway MPG. " + 
	  "From vehicles that have an internal combustion engine, cars that have 3 engine cylinders show a high average highway MPG value compared to others. " +
	  "Except for the 2 engine cylinder, we can see that the MPG decrease as the number of engine cylinder increases. However, more engine cylinder means more power for the car."; 
	
  load_chart_one('#b3f8fc');
}

function scene_two() {
  start_vis();

  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Scene 2';
	
  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = function() { scene_one() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = function() { scene_three() };

  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips*** <br><br> Here the data for average city MPG of different numbers of engine cylinders are provided. " +
	  "The reason why the values for average city MPG and average highway MPG are considered separately is because cars typically travel with different speeds in these locations. " +
	  "In the city, cars will travel relatively slow (25 ~ 30 mph) in the cities due to traffic, speed limits, and safety. " +
	  "On the other hand, cars will travel up to 70 mph on the highway according to " +
	  '<a href="https://www.isp.illinois.gov/TrafficSafety/SpeedLimitEnforcement#:~:text=The%20maximum%20speed%20limit%20is,other%20speed%20restriction%20is%20established">Illinois State Police</a>' +
	  ". <br><br>" +
	  "Similar to the previous graph, it can be seen that electric cars have the best average city MPG. " + 
	  "From vehicles that have an internal combustion engine, cars that have 2 engine cylinders show a high average city MPG value compared to others. " + 
	  "Here we can see that there is a direct correlation between the number of engine cylinders and average city MPG. " + 
          "Since more engine cylinders consume more fuel, it would lower the MPG. ";
	
  load_chart_two('#fcb3b3');
}

function scene_three() {
  start_vis();

  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Scene 3';
	
  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = function() { scene_two() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = function() { scene_final() };

  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips*** <br><br> Here is the graph for the number of manufactured car models of different numbers of engine cylinders per manufacturing country. " +
	  "The legend shows the different countries. " +
	  "A missing bar in the graph means that there are no cars with the specific number of engine cylinders being manufactured by the country. " +
	  "We can see that most manufacturers focus on making 4, 6, and 8 engine cylinder vehicles. " +
	  "And currently there is a limitation when choosing electric vehicles, since there are not a lot of manufacturers. " +
	  "4, 6, and 8 engine cylinder cars from Japan and the US have lots of variety and can be fairly cheap. " +
	  "On the other hand, 10 and 12 engine cylinder cars are mainly manufactured from Germany, Italy, and the UK. " +
	  "These are luxury sports cars that can be extremely expensive. <br><br>" +
	  "So, to choose the best car for yourself, be sure to consider where you will be driving the most. " +
	  "Is it the city? Or is it the highway? " +
	  "Also, if you are on a budget make wise decisions by choosing some affordable manufacturers. " +
	  "However, if you enjoy speed and are financially abundant, you can also consider purchasing high-end sports cars. " +
	  "Lastly, since there are lots of newly developed electric cars, it is also a good option to buy an electric car if they match your current situation. <br><br>" +
	  "I hope this helped you to decide which car is the best fit for you. In the next chart, you can explore and compare MPG values more deeply. ";
	
  load_chart_three('LightGray');

}

function scene_final() {
  start_vis();

  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Explore!';

  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = function() { scene_three() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button disabled";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = null;

  document.getElementById("explainID").innerHTML = "***Choose your graph below***";
	
  load_chart_final('LightGray');
}

function scene_home() {
  document.getElementById("introID").style.display = "block";
  document.getElementById("photoID").style.display = "block";
  document.getElementById("citationID").style.display = "block";

  document.getElementById("controlcityID").style.display = "none";
  document.getElementById("controlhwayID").style.display = "none";
	
  document.getElementById("titleID").innerHTML = "";
  document.getElementById("chartID").innerHTML = "";
  document.getElementById("explainID").innerHTML = "";
  
  document.getElementById("home").className = "button";
  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Start";
  document.getElementById("home").onclick = function() { scene_one() };

  document.getElementById("back").className = "button";
  document.getElementById("back").style.visibility = 'hidden';
  document.getElementById("back").innerHTML = "";
  document.getElementById("back").onclick = null;

  document.getElementById("next").className = "button";
  document.getElementById("next").style.visibility = 'hidden';
  document.getElementById("next").innerHTML = "";
  document.getElementById("back").onclick = null;
}

function start_vis() {
  document.getElementById("introID").style.display = "none";
  document.getElementById("photoID").style.display = "none";
  document.getElementById("citationID").style.display = "none";
  document.getElementById("controlhwayID").style.display = "none";
  document.getElementById("controlcityID").style.display = "none";
	
  document.getElementById("chartID").innerHTML = "";
  document.getElementById("explainID").innerHTML = "";
  document.getElementById("titleID").innerHTML = "";
}

function load_chart_one(color) {
  // Get current browser window dimensions
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", color)
    .append("g")
  
  const data = [
    { ec: '0', avghway: 101.5 },
    { ec: '2', avghway: 33 },
    { ec: '3', avghway: 37.5 },
    { ec: '4', avghway: 31.4 },
    { ec: '6', avghway: 25.6 },
    { ec: '8', avghway: 21.9 },
    { ec: '10', avghway: 20.7 },
    { ec: '12', avghway: 18.7 }
  ];

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, 110])
    .range([height - margin.bottom, margin.top])
	
  var tooltip = d3.select("#chartID")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var mouseOver = function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.8);

    tooltip.html('Avg Highway MPG: ' + d.avghway + '<br>' + ' Engine Cylinder Count: ' + d.ec)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseOn = function(d) {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseLeave = function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  };

  svg.append('g')
    .attr('fill', 'royalblue')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.avghway))
    .attr('height', (d) => chart.height - y(d.avghway) + margin.top)
    .attr('width', x.bandwidth())
    .attr('class', 'bar')
    .on("mouseover", mouseOver)
    .on("mousemove", mouseOn)
    .on("mouseleave", mouseLeave);

  function xAxis(g) {
    g.attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x).tickFormat(i => data[i].ec))
      .attr('font-size', '18px')
  }

  function yAxis(g) {
    g.attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '18px')
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
 
  svg.append('g').attr('transform', 'translate(' + (chart.width / 2 + margin.left) + ', ' + (chart.height + margin.bottom * 1.35) + ')')
    .append('text')
    .attr("class", "x label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .text("Number of Engine Cylinders");
    
  svg.append('g').attr('transform', 'translate(' + margin.left * 0.45 + ', ' + (chart.height / 2 + margin.top) + ')')
    .append('text')
    .attr("class", "y label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .attr("transform", "rotate(-90)")
    .text("Average Highway MPG")
	
  svg.append('g')
    .append('text')
    .attr('x', x(0))
    .attr('y', (y("101.5") - 15))
    .attr('font-style', 'italic')
    .text("Electric Cars are the most fuel efficient")
    
    
  svg.append('g')
    .append('text')
    .attr('x', x(2))
    .attr('y', (y("37.5") - 15))
    .attr('font-style', 'italic')
    .text("Cars with 3 Engine Cylinders are recommended")

  svg.append('g')
    .append('text')
    .attr('x', x(5))
    .attr('y', (y("21.9") - 15))
    .attr('font-style', 'italic')
    .text("More engine cylinders are less fuel efficient")
}

function load_chart_two(color) {
  // Get current browser window dimensions
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", color)
    .append("g")
  
  const data = [
    { ec: '0', avgcity: 119.2 },
    { ec: '2', avgcity: 36 },
    { ec: '3', avgcity: 31 },
    { ec: '4', avgcity: 24 },
    { ec: '6', avgcity: 18.3 },
    { ec: '8', avgcity: 14.7 },
    { ec: '10', avgcity: 13.3 },
    { ec: '12', avgcity: 12 }
  ];

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, 130])
    .range([height - margin.bottom, margin.top])
	
  var tooltip = d3.select("#chartID")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var mouseOver = function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.8);

    tooltip.html('Avg City MPG: ' + d.avgcity + '<br>' + ' Engine Cylinder Count: ' + d.ec)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseOn = function(d) {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseLeave = function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  };

  svg.append('g')
    .attr('fill', 'DarkRed')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.avgcity))
    .attr('height', (d) => chart.height - y(d.avgcity) + margin.top)
    .attr('width', x.bandwidth())
    .attr('class', 'bar')
    .on("mouseover", mouseOver)
    .on("mousemove", mouseOn)
    .on("mouseleave", mouseLeave);

  function xAxis(g) {
    g.attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x).tickFormat(i => data[i].ec))
      .attr('font-size', '18px')
  }

  function yAxis(g) {
    g.attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '18px')
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
 
  svg.append('g').attr('transform', 'translate(' + (chart.width / 2 + margin.left) + ', ' + (chart.height + margin.bottom * 1.35) + ')')
    .append('text')
    .attr("class", "x label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .text("Number of Engine Cylinders");
    
  svg.append('g').attr('transform', 'translate(' + margin.left * 0.45 + ', ' + (chart.height / 2 + margin.top) + ')')
    .append('text')
    .attr("class", "y label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .attr("transform", "rotate(-90)")
    .text("Average City MPG")
	
  svg.append('g')
    .append('text')
    .attr('x', x(1))
    .attr('y', (y("36") - 15))
    .attr('font-style', 'italic')
    .text("This data shows a direct correlation")
    
  svg.append('g')
    .append('text')
    .attr('x', x(4))
    .attr('y', (y("18.3") - 15))
    .attr('font-style', 'italic')
    .text("More engine cylinders are extremely inefficient in cities")
}

function load_chart_three(color) { 
  // Get current browser window dimensions
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", color)
    .append("g")
  
  var data = [
    { group: '0', Germany: 2, Italy: 1, Japan: 2, Korea: 2, UK: 0, US: 3 },
    { group: '2', Germany: 1, Italy: 0, Japan: 0, Korea: 0, UK: 0, US: 0},
    { group: '3', Germany: 2, Italy: 0, Japan: 1, Korea: 0, UK: 0, US: 1},
    { group: '4', Germany: 10, Italy: 3, Japan: 16, Korea: 2, UK: 4, US: 17},
    { group: '6', Germany: 6, Italy: 2, Japan: 10, Korea: 4, UK: 4, US: 13},
    { group: '8', Germany: 4, Italy: 2, Japan: 4, Korea: 2, UK: 4, US: 14},
    { group: '10', Germany: 1, Italy: 1, Japan: 0, Korea: 0, UK: 0, US: 1},
    { group: '12', Germany: 2, Italy: 2, Japan: 0, Korea: 0, UK: 3, US: 0}
  ];
    

  var subgroups = Object.keys(data[0]).slice(1);
  var groups = d3.map(data, function(d) { return(d.group) }).keys()
  
  const x = d3.scaleBand()
    .domain(groups)
    .range([margin.left, width - margin.right])
    .padding([0.4])

  const y = d3.scaleLinear()
    .domain([0, 20])
    .range([height - margin.bottom, margin.top])
    
  var xSubgroup = d3.scaleBand()
    .domain(subgroups)
    .range([0, x.bandwidth()])
    .padding([0.05])
    
  var color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['#e41a1c','#377eb8','#4daf4a', 'DarkOrange', 'Purple', 'Yellow'])
    
  var tooltip = d3.select("#chartID")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var mouseOver = function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.8);

    tooltip.html('Manufacturing Country: ' + d.key + '<br>' + 'Number of Manufactured Car Models: ' + d.value)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseOn = function(d) {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseLeave = function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  };

    
   svg.append("g")
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
      .attr("transform", function(d) { return "translate(" + x(d.group) + ", 0)"; })
    .selectAll("rect")
    
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter()
    .append("rect").attr('class', 'bar').on("mouseover", mouseOver).on("mousemove", mouseOn).on("mouseleave", mouseLeave)
      .attr("x", function(d) { return xSubgroup(d.key); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", xSubgroup.bandwidth())
      .attr("height", (d) => chart.height - y(d.value) + margin.top)
      .attr("fill", function(d) { return color(d.key); });
      

  function xAxis(g) {
    g.attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x))
      .attr('font-size', '18px')
  }

  function yAxis(g) {
    g.attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y))
      .attr('font-size', '18px')
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
 
  svg.append('g').attr('transform', 'translate(' + (chart.width / 2 + margin.left) + ', ' + (chart.height + margin.bottom * 1.35) + ')')
    .append('text')
    .attr("class", "x label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .text("Number of Engine Cylinders");
    
  svg.append('g').attr('transform', 'translate(' + margin.left * 0.45 + ', ' + (chart.height / 2 + margin.top) + ')')
    .append('text')
    .attr("class", "y label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .attr("transform", "rotate(-90)")
    .text("Number of Manufactured Car Models")
   
  var colorLegend = svg.selectAll("colorlegend")
    .data(subgroups)
    .enter().append("g")
    .attr("class", "colorlegend")
    .attr("transform", function(d, i) {
        return "translate(100, " + (i * 30 + margin.top) + ")";
    });

  colorLegend.append("rect")
    .attr("x", chart.width - xSubgroup.bandwidth())
    .attr("width", xSubgroup.bandwidth())
    .attr("height", xSubgroup.bandwidth())
    .style("fill", function(d) { return color(d); })
    .style("stroke-width", 0)

  colorLegend.append("text")
    .attr("x", chart.width - xSubgroup.bandwidth() - 10) 
    .attr("dy", xSubgroup.bandwidth() * 0.8)
    .style("text-anchor", "end")
    .text(function(d) { return d; })
	
  svg.append('g')
    .append('text')
    .attr('x', x('10'))
    .attr('y', (y("4") - 15))
    .attr('font-style', 'italic')
    .text("Italy and UK make less cars with many cylinders")
    
  svg.append('g')
    .append('text')
    .attr('x', x('4'))
    .attr('y', (y("17") - 15))
    .attr('font-style', 'italic')
    .text("Japan and US make many 4-6 cylinder cars")
 
  svg.append('g')
    .append('text')
    .attr('x', x('0'))
    .attr('y', (y("3") - 15))
    .attr('font-style', 'italic')
    .text("Not a lot of electric cars")
}

function load_chart_final(color) { 
  // Get current browser window dimensions
  document.getElementById("controlhwayID").style.display = "block";
  document.getElementById("controlcityID").style.display = "block";
	
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", 'LightGray')
    .append("g")
}

function hway_germany() { 
  start_vis();
  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips***";
  document.getElementById("controlhwayID").style.display = "block";
  document.getElementById("controlcityID").style.display = "block";
	
  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Average Highway MPG for Cars Manufactured from Germany';

  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = function() { scene_three() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button disabled";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = null;
	
  // Get current browser window dimensions
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", 'LightGray')
    .append("g")
  
  const data = [
    { ec: '0', avghway: 95.5 },
    { ec: '2', avghway: 33 },
    { ec: '3', avghway: 34 },
    { ec: '4', avghway: 31.4 },
    { ec: '6', avghway: 26.7 },
    { ec: '8', avghway: 23 },
    { ec: '10', avghway: 22 },
    { ec: '12', avghway: 20 }
  ];

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, 110])
    .range([height - margin.bottom, margin.top])
    
  // Create tooltip actions -----------------------------------------------
  var tooltip = d3.select("#chartID")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var mouseOver = function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.8);

    tooltip.html('Avg Highway MPG: ' + d.avghway + '<br>' + 'Engine Cylinder Count: ' + d.ec)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseOn = function(d) {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };


  var mouseLeave = function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  };

  svg.append('g')
    .attr('fill', '#e41a1c')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.avghway))
    .attr('height', (d) => chart.height - y(d.avghway) + margin.top)
    .attr('width', x.bandwidth())
    .attr('class', 'bar')
	.on("mouseover", mouseOver)
    .on("mousemove", mouseOn)
    .on("mouseleave", mouseLeave);
    
  function xAxis(g) {
    g.attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x).tickFormat(i => data[i].ec))
      .attr('font-size', '18px')
  }

  function yAxis(g) {
    g.attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '18px')
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
 
  svg.append('g').attr('transform', 'translate(' + (chart.width / 2 + margin.left) + ', ' + (chart.height + margin.bottom * 1.35) + ')')
    .append('text')
    .attr("class", "x label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .text("Number of Engine Cylinders");
    
  svg.append('g').attr('transform', 'translate(' + margin.left * 0.45 + ', ' + (chart.height / 2 + margin.top) + ')')
    .append('text')
    .attr("class", "y label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .attr("transform", "rotate(-90)")
    .text("Average Highway MPG")
}

function city_germany() { 
  start_vis();
  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips***";
  document.getElementById("controlhwayID").style.display = "block";
  document.getElementById("controlcityID").style.display = "block";
	
  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Average City MPG for Cars Manufactured from Germany';

  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = function() { scene_three() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button disabled";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = null;
	
  // Get current browser window dimensions
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", 'LightGray')
    .append("g")
  
  const data = [
    { ec: '0', avgcity: 109 },
    { ec: '2', avgcity: 36 },
    { ec: '3', avgcity: 30 },
    { ec: '4', avgcity: 23.4 },
    { ec: '6', avgcity: 19.5 },
    { ec: '8', avgcity: 15.5 },
    { ec: '10', avgcity: 14 },
    { ec: '12', avgcity: 13 }
  ];

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, 130])
    .range([height - margin.bottom, margin.top])
    
  // Create tooltip actions -----------------------------------------------
  var tooltip = d3.select("#chartID")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var mouseOver = function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.8);

    tooltip.html('Avg City MPG: ' + d.avgcity + '<br>' + 'Engine Cylinder Count: ' + d.ec)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseOn = function(d) {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };


  var mouseLeave = function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  };

  svg.append('g')
    .attr('fill', '#e41a1c')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.avgcity))
    .attr('height', (d) => chart.height - y(d.avgcity) + margin.top)
    .attr('width', x.bandwidth())
    .attr('class', 'bar')
	.on("mouseover", mouseOver)
    .on("mousemove", mouseOn)
    .on("mouseleave", mouseLeave);
    
  function xAxis(g) {
    g.attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x).tickFormat(i => data[i].ec))
      .attr('font-size', '18px')
  }

  function yAxis(g) {
    g.attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '18px')
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
 
  svg.append('g').attr('transform', 'translate(' + (chart.width / 2 + margin.left) + ', ' + (chart.height + margin.bottom * 1.35) + ')')
    .append('text')
    .attr("class", "x label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .text("Number of Engine Cylinders");
    
  svg.append('g').attr('transform', 'translate(' + margin.left * 0.45 + ', ' + (chart.height / 2 + margin.top) + ')')
    .append('text')
    .attr("class", "y label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .attr("transform", "rotate(-90)")
    .text("Average City MPG")
}

function hway_italy() { 
  start_vis();
  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips***";
  document.getElementById("controlhwayID").style.display = "block";
  document.getElementById("controlcityID").style.display = "block";
	
  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Average Highway MPG for Cars Manufactured from Italy';

  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = function() { scene_three() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button disabled";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = null;
	
  // Get current browser window dimensions
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", 'LightGray')
    .append("g")
  
  const data = [
    { ec: '0', avghway: 103 },
    { ec: '2', avghway: 0 },
    { ec: '3', avghway: 0 },
    { ec: '4', avghway: 32.3 },
    { ec: '6', avghway: 24 },
    { ec: '8', avghway: 21 },
    { ec: '10', avghway: 21 },
    { ec: '12', avghway: 16.5 }
  ];

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, 110])
    .range([height - margin.bottom, margin.top])
    
  // Create tooltip actions -----------------------------------------------
  var tooltip = d3.select("#chartID")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var mouseOver = function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.8);

    tooltip.html('Avg Highway MPG: ' + d.avghway + '<br>' + 'Engine Cylinder Count: ' + d.ec)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseOn = function(d) {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };


  var mouseLeave = function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  };

  svg.append('g')
    .attr('fill', '#377eb8')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.avghway))
    .attr('height', (d) => chart.height - y(d.avghway) + margin.top)
    .attr('width', x.bandwidth())
    .attr('class', 'bar')
	.on("mouseover", mouseOver)
    .on("mousemove", mouseOn)
    .on("mouseleave", mouseLeave);
    
  function xAxis(g) {
    g.attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x).tickFormat(i => data[i].ec))
      .attr('font-size', '18px')
  }

  function yAxis(g) {
    g.attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '18px')
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
 
  svg.append('g').attr('transform', 'translate(' + (chart.width / 2 + margin.left) + ', ' + (chart.height + margin.bottom * 1.35) + ')')
    .append('text')
    .attr("class", "x label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .text("Number of Engine Cylinders");
    
  svg.append('g').attr('transform', 'translate(' + margin.left * 0.45 + ', ' + (chart.height / 2 + margin.top) + ')')
    .append('text')
    .attr("class", "y label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .attr("transform", "rotate(-90)")
    .text("Average Highway MPG")
}

function city_italy() { 
  start_vis();
  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips***";
  document.getElementById("controlhwayID").style.display = "block";
  document.getElementById("controlcityID").style.display = "block";
	
  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Average City MPG for Cars Manufactured from Italy';

  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = function() { scene_three() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button disabled";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = null;
	
  // Get current browser window dimensions
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", 'LightGray')
    .append("g")
  
  const data = [
    { ec: '0', avgcity: 121 },
    { ec: '2', avgcity: 0 },
    { ec: '3', avgcity: 0 },
    { ec: '4', avgcity: 24 },
    { ec: '6', avgcity: 16.5 },
    { ec: '8', avgcity: 15 },
    { ec: '10', avgcity: 14 },
    { ec: '12', avgcity: 11.5 }
  ];

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, 130])
    .range([height - margin.bottom, margin.top])
    
  // Create tooltip actions -----------------------------------------------
  var tooltip = d3.select("#chartID")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var mouseOver = function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.8);

    tooltip.html('Avg City MPG: ' + d.avgcity + '<br>' + 'Engine Cylinder Count: ' + d.ec)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseOn = function(d) {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };


  var mouseLeave = function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  };

  svg.append('g')
    .attr('fill', '#377eb8')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.avgcity))
    .attr('height', (d) => chart.height - y(d.avgcity) + margin.top)
    .attr('width', x.bandwidth())
    .attr('class', 'bar')
	.on("mouseover", mouseOver)
    .on("mousemove", mouseOn)
    .on("mouseleave", mouseLeave);
    
  function xAxis(g) {
    g.attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x).tickFormat(i => data[i].ec))
      .attr('font-size', '18px')
  }

  function yAxis(g) {
    g.attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '18px')
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
 
  svg.append('g').attr('transform', 'translate(' + (chart.width / 2 + margin.left) + ', ' + (chart.height + margin.bottom * 1.35) + ')')
    .append('text')
    .attr("class", "x label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .text("Number of Engine Cylinders");
    
  svg.append('g').attr('transform', 'translate(' + margin.left * 0.45 + ', ' + (chart.height / 2 + margin.top) + ')')
    .append('text')
    .attr("class", "y label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .attr("transform", "rotate(-90)")
    .text("Average City MPG")
}

function hway_japan() { 
  start_vis();
  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips***";
  document.getElementById("controlhwayID").style.display = "block";
  document.getElementById("controlcityID").style.display = "block";
	
  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Average Highway MPG for Cars Manufactured from Japan';

  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = function() { scene_three() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button disabled";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = null;
	
  // Get current browser window dimensions
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", 'LightGray')
    .append("g")
  
  const data = [
    { ec: '0', avghway: 101.5 },
    { ec: '2', avghway: 0 },
    { ec: '3', avghway: 42 },
    { ec: '4', avghway: 32.6 },
    { ec: '6', avghway: 27 },
    { ec: '8', avghway: 20.5 },
    { ec: '10', avghway: 0 },
    { ec: '12', avghway: 0 }
  ];

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, 110])
    .range([height - margin.bottom, margin.top])
    
  // Create tooltip actions -----------------------------------------------
  var tooltip = d3.select("#chartID")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var mouseOver = function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.8);

    tooltip.html('Avg Highway MPG: ' + d.avghway + '<br>' + 'Engine Cylinder Count: ' + d.ec)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseOn = function(d) {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };


  var mouseLeave = function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  };

  svg.append('g')
    .attr('fill', '#4daf4a')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.avghway))
    .attr('height', (d) => chart.height - y(d.avghway) + margin.top)
    .attr('width', x.bandwidth())
    .attr('class', 'bar')
	.on("mouseover", mouseOver)
    .on("mousemove", mouseOn)
    .on("mouseleave", mouseLeave);
    
  function xAxis(g) {
    g.attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x).tickFormat(i => data[i].ec))
      .attr('font-size', '18px')
  }

  function yAxis(g) {
    g.attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '18px')
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
 
  svg.append('g').attr('transform', 'translate(' + (chart.width / 2 + margin.left) + ', ' + (chart.height + margin.bottom * 1.35) + ')')
    .append('text')
    .attr("class", "x label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .text("Number of Engine Cylinders");
    
  svg.append('g').attr('transform', 'translate(' + margin.left * 0.45 + ', ' + (chart.height / 2 + margin.top) + ')')
    .append('text')
    .attr("class", "y label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .attr("transform", "rotate(-90)")
    .text("Average Highway MPG")
}

function city_japan() { 
  start_vis();
  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips***";
  document.getElementById("controlhwayID").style.display = "block";
  document.getElementById("controlcityID").style.display = "block";
	
  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Average City MPG for Cars Manufactured from Japan';

  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = function() { scene_three() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button disabled";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = null;
	
  // Get current browser window dimensions
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", 'LightGray')
    .append("g")
  
  const data = [
    { ec: '0', avgcity: 122.5 },
    { ec: '2', avgcity: 0 },
    { ec: '3', avgcity: 35 },
    { ec: '4', avgcity: 26.4 },
    { ec: '6', avgcity: 19.7 },
    { ec: '8', avgcity: 14.5 },
    { ec: '10', avgcity: 0 },
    { ec: '12', avgcity: 0 }
  ];

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, 130])
    .range([height - margin.bottom, margin.top])
    
  // Create tooltip actions -----------------------------------------------
  var tooltip = d3.select("#chartID")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var mouseOver = function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.8);

    tooltip.html('Avg City MPG: ' + d.avgcity + '<br>' + 'Engine Cylinder Count: ' + d.ec)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseOn = function(d) {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };


  var mouseLeave = function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  };

  svg.append('g')
    .attr('fill', '#4daf4a')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.avgcity))
    .attr('height', (d) => chart.height - y(d.avgcity) + margin.top)
    .attr('width', x.bandwidth())
    .attr('class', 'bar')
	.on("mouseover", mouseOver)
    .on("mousemove", mouseOn)
    .on("mouseleave", mouseLeave);
    
  function xAxis(g) {
    g.attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x).tickFormat(i => data[i].ec))
      .attr('font-size', '18px')
  }

  function yAxis(g) {
    g.attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '18px')
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
 
  svg.append('g').attr('transform', 'translate(' + (chart.width / 2 + margin.left) + ', ' + (chart.height + margin.bottom * 1.35) + ')')
    .append('text')
    .attr("class", "x label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .text("Number of Engine Cylinders");
    
  svg.append('g').attr('transform', 'translate(' + margin.left * 0.45 + ', ' + (chart.height / 2 + margin.top) + ')')
    .append('text')
    .attr("class", "y label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .attr("transform", "rotate(-90)")
    .text("Average City MPG")
}

function hway_korea() { 
  start_vis();
  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips***";
  document.getElementById("controlhwayID").style.display = "block";
  document.getElementById("controlcityID").style.display = "block";
	
  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Average Highway MPG for Cars Manufactured from Korea';

  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = function() { scene_three() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button disabled";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = null;
	
  // Get current browser window dimensions
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", 'LightGray')
    .append("g")
  
  const data = [
    { ec: '0', avghway: 107 },
    { ec: '2', avghway: 0 },
    { ec: '3', avghway: 0 },
    { ec: '4', avghway: 33.5 },
    { ec: '6', avghway: 25.3 },
    { ec: '8', avghway: 23 },
    { ec: '10', avghway: 0 },
    { ec: '12', avghway: 0 }
  ];

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, 110])
    .range([height - margin.bottom, margin.top])
    
  // Create tooltip actions -----------------------------------------------
  var tooltip = d3.select("#chartID")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var mouseOver = function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.8);

    tooltip.html('Avg Highway MPG: ' + d.avghway + '<br>' + 'Engine Cylinder Count: ' + d.ec)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseOn = function(d) {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };


  var mouseLeave = function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  };

  svg.append('g')
    .attr('fill', 'DarkOrange')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.avghway))
    .attr('height', (d) => chart.height - y(d.avghway) + margin.top)
    .attr('width', x.bandwidth())
    .attr('class', 'bar')
	.on("mouseover", mouseOver)
    .on("mousemove", mouseOn)
    .on("mouseleave", mouseLeave);
    
  function xAxis(g) {
    g.attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x).tickFormat(i => data[i].ec))
      .attr('font-size', '18px')
  }

  function yAxis(g) {
    g.attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '18px')
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
 
  svg.append('g').attr('transform', 'translate(' + (chart.width / 2 + margin.left) + ', ' + (chart.height + margin.bottom * 1.35) + ')')
    .append('text')
    .attr("class", "x label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .text("Number of Engine Cylinders");
    
  svg.append('g').attr('transform', 'translate(' + margin.left * 0.45 + ', ' + (chart.height / 2 + margin.top) + ')')
    .append('text')
    .attr("class", "y label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .attr("transform", "rotate(-90)")
    .text("Average Highway MPG")
}

function city_korea() { 
  start_vis();
  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips***";
  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips***";
  document.getElementById("controlhwayID").style.display = "block";
  document.getElementById("controlcityID").style.display = "block";
	
  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Average City MPG for Cars Manufactured from Korea';

  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = function() { scene_three() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button disabled";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = null;
	
  // Get current browser window dimensions
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", 'LightGray')
    .append("g")
  
  const data = [
    { ec: '0', avgcity: 135 },
    { ec: '2', avgcity: 0 },
    { ec: '3', avgcity: 0 },
    { ec: '4', avgcity: 27 },
    { ec: '6', avgcity: 17.5 },
    { ec: '8', avgcity: 15 },
    { ec: '10', avgcity: 0 },
    { ec: '12', avgcity: 0 }
  ];

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, 130])
    .range([height - margin.bottom, margin.top])
    
  // Create tooltip actions -----------------------------------------------
  var tooltip = d3.select("#chartID")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var mouseOver = function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.8);

    tooltip.html('Avg City MPG: ' + d.avgcity + '<br>' + 'Engine Cylinder Count: ' + d.ec)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseOn = function(d) {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };


  var mouseLeave = function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  };

  svg.append('g')
    .attr('fill', 'DarkOrange')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.avgcity))
    .attr('height', (d) => chart.height - y(d.avgcity) + margin.top)
    .attr('width', x.bandwidth())
    .attr('class', 'bar')
	.on("mouseover", mouseOver)
    .on("mousemove", mouseOn)
    .on("mouseleave", mouseLeave);
    
  function xAxis(g) {
    g.attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x).tickFormat(i => data[i].ec))
      .attr('font-size', '18px')
  }

  function yAxis(g) {
    g.attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '18px')
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
 
  svg.append('g').attr('transform', 'translate(' + (chart.width / 2 + margin.left) + ', ' + (chart.height + margin.bottom * 1.35) + ')')
    .append('text')
    .attr("class", "x label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .text("Number of Engine Cylinders");
    
  svg.append('g').attr('transform', 'translate(' + margin.left * 0.45 + ', ' + (chart.height / 2 + margin.top) + ')')
    .append('text')
    .attr("class", "y label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .attr("transform", "rotate(-90)")
    .text("Average City MPG")
}

function hway_uk() { 
  start_vis();
  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips***";
  document.getElementById("controlhwayID").style.display = "block";
  document.getElementById("controlcityID").style.display = "block";
	
  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Average Highway MPG for Cars Manufactured from the UK';

  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = function() { scene_three() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button disabled";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = null;
	
  // Get current browser window dimensions
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", 'LightGray')
    .append("g")
  
  const data = [
    { ec: '0', avghway: 0 },
    { ec: '2', avghway: 0 },
    { ec: '3', avghway: 0 },
    { ec: '4', avghway: 23.8 },
    { ec: '6', avghway: 18.5 },
    { ec: '8', avghway: 14.5 },
    { ec: '10', avghway: 0 },
    { ec: '12', avghway: 12 }
  ];

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, 110])
    .range([height - margin.bottom, margin.top])
    
  // Create tooltip actions -----------------------------------------------
  var tooltip = d3.select("#chartID")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var mouseOver = function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.8);

    tooltip.html('Avg Highway MPG: ' + d.avghway + '<br>' + 'Engine Cylinder Count: ' + d.ec)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseOn = function(d) {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };


  var mouseLeave = function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  };

  svg.append('g')
    .attr('fill', 'Purple')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.avghway))
    .attr('height', (d) => chart.height - y(d.avghway) + margin.top)
    .attr('width', x.bandwidth())
    .attr('class', 'bar')
	.on("mouseover", mouseOver)
    .on("mousemove", mouseOn)
    .on("mouseleave", mouseLeave);
    
  function xAxis(g) {
    g.attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x).tickFormat(i => data[i].ec))
      .attr('font-size', '18px')
  }

  function yAxis(g) {
    g.attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '18px')
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
 
  svg.append('g').attr('transform', 'translate(' + (chart.width / 2 + margin.left) + ', ' + (chart.height + margin.bottom * 1.35) + ')')
    .append('text')
    .attr("class", "x label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .text("Number of Engine Cylinders");
    
  svg.append('g').attr('transform', 'translate(' + margin.left * 0.45 + ', ' + (chart.height / 2 + margin.top) + ')')
    .append('text')
    .attr("class", "y label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .attr("transform", "rotate(-90)")
    .text("Average Highway MPG")
}

function city_uk() { 
  start_vis();
  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips***";
  document.getElementById("controlhwayID").style.display = "block";
  document.getElementById("controlcityID").style.display = "block";
	
  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Average City MPG for Cars Manufactured from the UK';

  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = function() { scene_three() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button disabled";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = null;
	
  // Get current browser window dimensions
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", 'LightGray')
    .append("g")
  
  const data = [
    { ec: '0', avgcity: 0 },
    { ec: '2', avgcity: 0 },
    { ec: '3', avgcity: 0 },
    { ec: '4', avgcity: 23.8 },
    { ec: '6', avgcity: 18.5 },
    { ec: '8', avgcity: 14.5 },
    { ec: '10', avgcity: 0 },
    { ec: '12', avgcity: 12 }
  ];

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, 130])
    .range([height - margin.bottom, margin.top])
    
  // Create tooltip actions -----------------------------------------------
  var tooltip = d3.select("#chartID")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var mouseOver = function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.8);

    tooltip.html('Avg City MPG: ' + d.avgcity + '<br>' + 'Engine Cylinder Count: ' + d.ec)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseOn = function(d) {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };


  var mouseLeave = function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  };

  svg.append('g')
    .attr('fill', 'Purple')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.avgcity))
    .attr('height', (d) => chart.height - y(d.avgcity) + margin.top)
    .attr('width', x.bandwidth())
    .attr('class', 'bar')
	.on("mouseover", mouseOver)
    .on("mousemove", mouseOn)
    .on("mouseleave", mouseLeave);
    
  function xAxis(g) {
    g.attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x).tickFormat(i => data[i].ec))
      .attr('font-size', '18px')
  }

  function yAxis(g) {
    g.attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '18px')
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
 
  svg.append('g').attr('transform', 'translate(' + (chart.width / 2 + margin.left) + ', ' + (chart.height + margin.bottom * 1.35) + ')')
    .append('text')
    .attr("class", "x label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .text("Number of Engine Cylinders");
    
  svg.append('g').attr('transform', 'translate(' + margin.left * 0.45 + ', ' + (chart.height / 2 + margin.top) + ')')
    .append('text')
    .attr("class", "y label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .attr("transform", "rotate(-90)")
    .text("Average City MPG")
}

function hway_us() { 
  start_vis();
  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips***";
  document.getElementById("controlhwayID").style.display = "block";
  document.getElementById("controlcityID").style.display = "block";
	
  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Average Highway MPG for Cars Manufactured from the US';

  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = function() { scene_three() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button disabled";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = null;
	
  // Get current browser window dimensions
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", 'LightGray')
    .append("g")
  
  const data = [
    { ec: '0', avghway: 101.3 },
    { ec: '2', avghway: 0 },
    { ec: '3', avghway: 40 },
    { ec: '4', avghway: 29.5 },
    { ec: '6', avghway: 24.5 },
    { ec: '8', avghway: 21.9 },
    { ec: '10', avghway: 10 },
    { ec: '12', avghway: 0 }
  ];

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, 110])
    .range([height - margin.bottom, margin.top])
    
  // Create tooltip actions -----------------------------------------------
  var tooltip = d3.select("#chartID")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var mouseOver = function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.8);

    tooltip.html('Avg Highway MPG: ' + d.avghway + '<br>' + 'Engine Cylinder Count: ' + d.ec)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseOn = function(d) {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };


  var mouseLeave = function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  };

  svg.append('g')
    .attr('fill', 'Yellow')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.avghway))
    .attr('height', (d) => chart.height - y(d.avghway) + margin.top)
    .attr('width', x.bandwidth())
    .attr('class', 'bar')
	.on("mouseover", mouseOver)
    .on("mousemove", mouseOn)
    .on("mouseleave", mouseLeave);
    
  function xAxis(g) {
    g.attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x).tickFormat(i => data[i].ec))
      .attr('font-size', '18px')
  }

  function yAxis(g) {
    g.attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '18px')
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
 
  svg.append('g').attr('transform', 'translate(' + (chart.width / 2 + margin.left) + ', ' + (chart.height + margin.bottom * 1.35) + ')')
    .append('text')
    .attr("class", "x label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .text("Number of Engine Cylinders");
    
  svg.append('g').attr('transform', 'translate(' + margin.left * 0.45 + ', ' + (chart.height / 2 + margin.top) + ')')
    .append('text')
    .attr("class", "y label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .attr("transform", "rotate(-90)")
    .text("Average Highway MPG")
}

function city_us() { 
  start_vis();
  document.getElementById("explainID").innerHTML = "***Hover over bars to see the tooltips***";
  document.getElementById("controlhwayID").style.display = "block";
  document.getElementById("controlcityID").style.display = "block";
	
  document.getElementById("titleID").style.display = 'block';
  document.getElementById("titleID").innerHTML = 'Average City MPG for Cars Manufactured from the US';

  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  document.getElementById("home").onclick = function() { scene_home() };
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").innerHTML = "Back";
  document.getElementById("back").onclick = function() { scene_three() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button disabled";
  document.getElementById("next").innerHTML = "Next";
  document.getElementById("next").onclick = null;
	
  // Get current browser window dimensions
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x_size = w.innerWidth || e.clientWidth || g.clientWidth,
      y_size = w.innerHeight || e.clientHeight || g.clientHeight;
  
  // Set canvas and chart dimensions
  const width = 0.85 * x_size;
  const height = (0.5 * x_size < 0.62 * y_size) ? 0.5 * x_size : 0.62 * y_size;
  const canvas = { width: width, height: height };
  const margin = { left: 82, right: 52, top: 36, bottom: 56 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the chartID div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", 'LightGray')
    .append("g")
  
  const data = [
    { ec: '0', avgcity: 112.7 },
    { ec: '2', avgcity: 0 },
    { ec: '3', avgcity: 29 },
    { ec: '4', avgcity: 21.8 },
    { ec: '6', avgcity: 17.1 },
    { ec: '8', avgcity: 14.5 },
    { ec: '10', avgcity: 19 },
    { ec: '12', avgcity: 0 }
  ];

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, 130])
    .range([height - margin.bottom, margin.top])
    
  // Create tooltip actions -----------------------------------------------
  var tooltip = d3.select("#chartID")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var mouseOver = function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.8);

    tooltip.html('Avg City MPG: ' + d.avgcity + '<br>' + 'Engine Cylinder Count: ' + d.ec)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };

  var mouseOn = function(d) {
    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  };


  var mouseLeave = function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  };

  svg.append('g')
    .attr('fill', 'Yellow')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.avgcity))
    .attr('height', (d) => chart.height - y(d.avgcity) + margin.top)
    .attr('width', x.bandwidth())
    .attr('class', 'bar')
	.on("mouseover", mouseOver)
    .on("mousemove", mouseOn)
    .on("mouseleave", mouseLeave);
    
  function xAxis(g) {
    g.attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x).tickFormat(i => data[i].ec))
      .attr('font-size', '18px')
  }

  function yAxis(g) {
    g.attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '18px')
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
 
  svg.append('g').attr('transform', 'translate(' + (chart.width / 2 + margin.left) + ', ' + (chart.height + margin.bottom * 1.35) + ')')
    .append('text')
    .attr("class", "x label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .text("Number of Engine Cylinders");
    
  svg.append('g').attr('transform', 'translate(' + margin.left * 0.45 + ', ' + (chart.height / 2 + margin.top) + ')')
    .append('text')
    .attr("class", "y label")
    .attr('font-size', '18px')
    .attr('text-anchor', 'middle')
    .attr("transform", "rotate(-90)")
    .text("Average City MPG")
}

