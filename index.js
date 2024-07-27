function scene_one() {
  start_vis();
  
  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";

  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button disabled";
  document.getElementById("back").onclick = null;
  
  document.getElementById("next").className = "button";
  document.getElementById("next").onclick = function() { scene_two() };
  
  load_chart('blue');
}

function scene_two() {
  start_vis();
  
  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Home";
  
  document.getElementById("back").style.visibility = 'visible';
  document.getElementById("back").className = "button"
  document.getElementById("back").onclick = function() { scene_one() };
  
  document.getElementById("next").style.visibility = 'visible';
  document.getElementById("next").className = "button disabled";
  document.getElementById("next").onclick = null;
  
  load_chart('red');
}

function scene_home() {
  document.getElementById("introID").style.display = "block";

  document.getElementById("chartID").innerHTML = "";
  
  document.getElementById("home").className = "button";
  document.getElementById("home").style.visibility = 'visible';
  document.getElementById("home").innerHTML = "Start";

  document.getElementById("back").className = "button";
  document.getElementById("back").style.visibility = 'hidden';
  document.getElementById("back").innerHTML = "";

  document.getElementById("next").className = "button";
  document.getElementById("next").style.visibility = 'hidden';
  document.getElementById("next").innerHTML = "";
}

function load_chart(color) {
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
    .style("background-color", color)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
}

function start_vis() {
  document.getElementById("introID").style.display = "none";
  document.getElementById("chartID").innerHTML = "";
}
