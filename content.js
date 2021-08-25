var data = {
  labels: [
    "Funeral",
    "Healthcare",
    "Housing",
    "Groceries"
  ],
  datasets: [
    {
      data: [1, 1, 1, 1],
      backgroundColor: [
        "#A596D3",
        "#F9D697",
        "#F19DA3",
        "#A6DBA8"
      ],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#FFCE36"
      ]
    }]
};

var chart = new Chart(document.getElementById('myChart'), {
  type: 'doughnut',
  data: data,
  options: {
    cutoutPercentage: 75,
    aspectRatio: 1,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }
    },
    responsive: true,
    legend: {
      display: false
    }
  }
});

// function register() {
// }

Chart.pluginService.register({
  beforeDraw: function (chart) {
    var width = chart.chart.width,
      height = chart.chart.height,
      ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var text = "Coverage",
      textX = Math.round((width - ctx.measureText(text).width) / 2 + 30),
      textY = height / 2 - 2;
    ctx.font = "bold 16px verdana, sans-serif";
    ctx.fillText(text, textX, textY);
    ctx.fillStyle = "#3B5A6C";

    var updatedNumber = 0
    var textNumber = `${updatedNumber}$`,
      textX = 134,
      textY = 145;
    ctx.font = "20px verdana, sans-serif";
    ctx.fillText(textNumber, textX, textY);
    ctx.fillStyle = "#3B5A6C";

    ctx.save();
  }
});

function updateNumber(width, ctx, height) {

}


// Slider

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '1000' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

function updateChart(slider, output, itemNumber) {
  var slider = document.getElementById(slider); //myRange
  var output = document.getElementById(output); //demo
  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
    chart.data.datasets[0].data[itemNumber] = this.value
    chart.update();
  }
}

updateChart('myRange', 'demo', 0)
updateChart('myRange2', 'demo2', 1)
updateChart('myRange3', 'demo3', 2)
updateChart('myRange4', 'demo4', 3)

