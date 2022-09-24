// Show monthly total sales in bar chart
// Show product sales in line chart

const ctx = document.querySelector("#myChart");
const monthsInYear = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const chips = {
  type: "line",
  label: "Chips",
  data: [10, 50, 70, 15, 20, 34, 56, 7, 22, 55, 25, 33],
  fill: false,
  borderColor: "rgb(75, 192, 192)",
  backgroundColor: "rgba(75, 192, 192, .5)",
  fill: true,
  tension: 0.1,      
};

const detergent = {
  type: "line",
  label: "Detergent",
  data: [0, 0, 0, 0, 0, 55, 40, 4, 55, 81, 56, 32],
  fill: false,
  borderColor: "rgb(75, 2, 192)",
  backgroundColor: "rgba(75, 2, 192, .5)",
  fill: true,
  tension: 0.1,
};

const pen = {
  type: "line",
  label: "Pen",
  data: [65, 59, 80, 81, 56, 55, 40, 4, 55, 81, 56, 32],
  fill: false,
  borderColor: "rgb(75, 150, 2)",
  fill: true,
  fillColor: "red",
  tension: 0.1,
  backgroundColor: "rgba(75, 150, 2, .5)",
};

const totalProductSalesData = chips.data.map(
  (e, idx) => e + pen.data[idx] + detergent.data[idx]
);

const aggregatedDataset = {
  type: "bar",
  label: "Total Yearly sales",
  data: totalProductSalesData,
  fill: false,
  fill: true,
  fillColor: "red",
  backgroundColor: "rgba(54, 162, 235, 0.5)",
  borderColor: "rgba(54, 162, 235, 0.9)",
  borderWidth: 2,
  borderRadius: 10,
};

const datasets = [chips, detergent, pen, aggregatedDataset];

const data = {
  labels: monthsInYear,
  datasets: datasets,
};

const config = {
  type: "scatter",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const chart = new Chart(ctx, config);
