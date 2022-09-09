

const ctx = document.querySelector("#myChart")

const data = {
  labels: ["Jan", "Feb", "Mar"],
  datasets: [{
    label: "Monthly Sales",
    data: [10, 50, 70].map(e => ({x: e, y: e * (1/2)})),
    yAxisID: "yAxis",
    xAsixID: "xAxis",
    borderColor: 'rgb(75, 192, 192, 0.7)',
    backgroundColor: 'rgb(75, 192, 192, .2)',
    hoverRadius: 15
  }]
}

options = {
  plugins: {
    title: {
      display: true,
      text: 'XYZ Store Monthly Sales'
    },
    subtitle: {
      display: true,
      text: 'A chart to illustrate the monthly sales in year of 2010'
    }
  },
  scales: {
    yAxis: {
      title: {
        display: true,
        text: "Items Sold"
      }
    },
    xAxis: {
      title: {
        display: true,
        text: "Months"
      }
    }
  }
}

const config = {
  type: 'scatter',
  data: data,
  options: options
}


const chart = new Chart(ctx, config);
