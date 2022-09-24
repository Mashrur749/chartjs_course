const ctx = document.querySelector("#myChart");
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Total Yearly sales",
      data: [95, 129, 170, 116, 96, 274, 236, 43, 262, 399, 269, 181],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 0.9)",
      borderWidth: 2,
      borderRadius: 10,
      // axis: 'y',
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  // To build horizotal bar chart
  // options: {
  //   indexAxis: "y",
  // },
};

new Chart(ctx, config);
