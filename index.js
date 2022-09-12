// const chart = require('chart.js');

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.querySelector('#myChart1'),
    config
);


const labels2 = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
];

const data2 = {
    labels: labels2,
    datasets: [
    {
        label: 'Dataset 1',
        data: [35, 10, -12, 17, -5, 30, 40],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
        label: 'Dataset 2',
        data: [-30, 10, 5, 2, 20, 15, 12],
        borderColor: 'rgb(255, 134, 112)',
        backgroundColor: 'rgba(255, 134, 112, 0.5)',
    }
]
};

const config2 = {
    type: 'bar',
    data: data2,
    options: {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Chart.js Bar Chart'
        }
    }
    },
};

const myChart2 = new Chart(
    document.querySelector('#myChart2'),
    config2
);