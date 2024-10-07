const ctxTemp = document.getElementById('tempChart').getContext('2d');
const ctxCo2 = document.getElementById('co2Chart').getContext('2d');
const ctxRenewable = document.getElementById('renewableChart').getContext('2d');

// Gráfico de Temperaturas Promedio
const tempChart = new Chart(ctxTemp, {
    type: 'line',
    data: {
        labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
        datasets: [{
            label: 'Temperatura Promedio (°C)',
            data: [12.5, 12.7, 12.8, 13.1, 13.4, 13.6],
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Temperatura (°C)'
                }
            }
        }
    }
});

// Gráfico de Emisiones de CO2
const co2Chart = new Chart(ctxCo2, {
    type: 'bar',
    data: {
        labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
        datasets: [{
            label: 'Emisiones de CO2 (millones de toneladas)',
            data: [5500, 5300, 5000, 4900, 4800, 4700],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Emisiones (millones de toneladas)'
                }
            }
        }
    }
});

// Gráfico de Energías Renovables
const renewableChart = new Chart(ctxRenewable, {
    type: 'pie',
    data: {
        labels: ['Solar', 'Eólica', 'Hidroeléctrica', 'Otras'],
        datasets: [{
            label: 'Porcentaje de Energías Renovables',
            data: [40, 30, 20, 10],
            backgroundColor: [
                'rgba(255, 206, 86, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    }
});
