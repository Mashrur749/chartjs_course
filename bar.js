const ctx = document.querySelector("#myChart")
const labels = ["Jan", "Feb", "Mar", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    fill: true,
    data: [10, 50, 70, 15, 20, 34,56, 7, 22, 55, 25, 33],
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(255, 159, 64, 0.5)',
      'rgba(255, 205, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(153, 102, 255, 0.5)',
      'rgba(201, 203, 207, 0.5)'
    ],
    borderColor:  [
      'rgba(255, 99, 132, 0.9)',
      'rgba(255, 159, 64, 0.9)',
      'rgba(255, 205, 86, 0.9)',
      'rgba(75, 192, 192, 0.9)',
      'rgba(54, 162, 235, 0.9)',
      'rgba(153, 102, 255, 0.9)',
      'rgba(201, 203, 207, 0.9)'
    ],
    borderWidth: 2,
    borderRadius: 10,
    borderSkipped: false,
  }]

};

const config = {
  type: 'bar',
  data: data,
};

new Chart(ctx, config)
 
