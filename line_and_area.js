
const ctx = document.querySelector("#myChart")
const labels = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40, 4,55, 81, 56, 32],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    backgroundColor: 'rgba(75, 192, 192, .5)',
    fill: true,
    tension: 0.1
  }, {
    label: 'My First Dataset',
    data: [0, 0, 0, 0, 0, 55, 40, 4,55, 81, 56, 32].map(e => e * 3),
    fill: false,
    borderColor: 'rgb(75, 2, 192)',
    backgroundColor: 'rgba(75, 2, 192, .5)',
    fill: true,
    tension: .1
  }, {
    label: 'My First Dataset',

    data: [65, 59, 80, 81, 56, 55, 40, 4,55, 81, 56, 32].map(e => e + 20),    fill: false,
    borderColor: 'rgb(75, 150, 2)',
    fill: true,
    fillColor: "red",
    tension: 0.1,
    backgroundColor: 'rgba(75, 150, 2, .5)',
  }]
};


const config = {
    type: 'line',
    data: data,
};


const chart = new Chart(ctx, config);