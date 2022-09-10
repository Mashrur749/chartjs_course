// How does sales correlate to the product price

// Scatter plots are used to plot data points on a horizontal and a vertical axis in the attempt to show how much one variable is affected by another.

const ctx = document.querySelector("#myChart")

const data = {
  labels: ["Jan", "Feb", "Mar"],
  datasets: [{
    label: "Chips",
    data:  [10, 50, 70, 15, 20, 34,56, 7, 22, 55, 25, 33].map(e => ({x: e, y: e})),
    borderColor: 'rgb(75, 192, 192, 0.7)',
    backgroundColor: 'rgb(75, 192, 192, .2)',
    hoverRadius: 15
  }]
}

options = {
  plugins: {
    title: {
      display: true,
      text: 'XYZ Store Product sales by price'
    },
    subtitle: {
      display: true,
      text: 'A chart to illustrate the sales of a product depending on the price of the product'
    }
  },
  scales: {
    y: {
      title: {
        display: true,
        text: "Items Sold"
      }
    },
    x: {
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
