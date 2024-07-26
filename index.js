function scene_one() {
  document.getElementById("introId").style.display = "none";
  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("bh").innerHTML = "Home";
  load_chart();
}

function scene_home() {
  
}

function load_chart() {
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
  const margin = { left: 65, right: 52, top: 12, bottom: 36 };
  const chart = {
    width: canvas.width - (margin.right + margin.left),
    height: canvas.height - (margin.top + margin.bottom)
  };
  
  // Append an svg object to the scatter div
  var svg = d3.select("#chartID")
    .append("svg")
    .attr("width", canvas.width)
    .attr("height", canvas.height)
    .style("background-color", 'blue')
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
}

function start_vis() {
  
}
