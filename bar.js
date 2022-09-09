const ctx = document.querySelector("#myChart")
const labels = ["Jan", "Feb", "Mar", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    //    data: [65, 59, 80, 81, 56, 55, 40, 20, 14, 51].map(e => ({x: e, y: e})),
    fill: true,
    data: [65, 59, 80, 81, 56, 55, 40, 20, 14, 51],
  }]

};

const config = {
  type: 'bar',
  data: data,
};

// const data = {
//   datasets: [{
//     data: [{
//       x: 1,
//       y: 1
//     }]
//   }]
// }

// const config = {
//   type: 'scatter',
//   data: data
// }


new Chart(ctx, config)
 
