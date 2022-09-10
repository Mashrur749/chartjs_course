// yearly sales in each department

const ctx = document.querySelector("#myChart");
const data = {
  labels: ["Snacks", "Cleaning Supplies", "Office Supplies"],
  datasets: [
    {
      label: "My First Dataset",
      data: [150, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "pie", //change this to "doughnut" to make it a doughnut chart
  data: data,
};

new Chart(ctx, config);
