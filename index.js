function scene_one() {
  start_vis();
  
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
  
  load_chart_one('#b3f8fc');
}

function scene_two() {
  start_vis();
  
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
  
  load_chart_two('#fcb3b3');
}

function scene_three() {
  start_vis();
  
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
  
  load_chart_two('#c7fcb8');
}

function scene_final() {
  start_vis();
  
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
  
  load_chart_two('#fcffa8');
}

function scene_home() {
  document.getElementById("introID").style.display = "block";

  document.getElementById("chartID").innerHTML = "";
  
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
  document.getElementById("chartID").innerHTML = "";
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

svg.append('g')
  .attr('transform', 'translate(0, ' + margin.top + ')')
  .attr('fill', 'royalblue')
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', (d, i) => x(i))
  .attr('y', (d) => y(d.avghway))
  .attr('height', (d) => chart.height - y(d.avghway))
  .attr('width', x.bandwidth())

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
  
}


