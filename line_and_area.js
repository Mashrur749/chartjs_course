// Monthly sales for chips, detergent and pen

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
  label: "Chips",
  data: [10, 50, 70, 15, 20, 34, 56, 7, 22, 55, 25, 33],
  fill: false,
  borderColor: "rgb(75, 192, 192)",
  backgroundColor: "rgba(75, 192, 192, .5)",
  fill: true,
  tension: 0.1,
};

const detergent = {
  label: "Detergent",
  data: [0, 0, 0, 0, 0, 55, 40, 4, 55, 81, 56, 32],
  fill: false,
  borderColor: "rgb(75, 2, 192)",
  backgroundColor: "rgba(75, 2, 192, .5)",
  fill: true,
  tension: 0.1,
};

const pen = {
  label: "Pen",
  data: [65, 59, 80, 81, 56, 55, 40, 4, 55, 81, 56, 32],
  fill: false,
  borderColor: "rgb(75, 150, 2)",
  fill: true,
  fillColor: "red",
  tension: 0.1,
  backgroundColor: "rgba(75, 150, 2, .5)",
};

const datasets = [chips, detergent, pen];

const data = {
  labels: monthsInYear,
  datasets: datasets,
};

options = {
  plugins: {
    title: {
      display: true,
      text: "XYZ Store Monthly Sales",
    },
    subtitle: {
      display: true,
      text: "A chart to illustrate the monthly sales in the year of 2010",
    },
  },
  scales: {
    yAxis: {
      title: {
        display: true,
        text: "Items Sold",
      },
    },
    xAxis: {
      title: {
        display: true,
        text: "Months",
      },
    },
  },
};

const config = {
  type: "line",
  data: data,
  options: options,
};

const chart = new Chart(ctx, config);
