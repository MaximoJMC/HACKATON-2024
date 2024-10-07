const ctxTemp = document.getElementById('tempChart').getContext('2d');
const ctx = document.getElementById('emisiones').getContext('2d');

// Datos para el gráfico de emisiones
const data = {
    labels: ['China', 'Estados Unidos', 'India', 'Rusia', 'Japón', 'Perú'],
    datasets: [{
        label: 'Emisiones de CO₂ (millones de toneladas) - 2024',
        data: [12667, 5051, 2693, 1909, 1067, 222.284], 
        borderColor: '#8ab1c5',
        backgroundColor: '#bfcfd7',
        borderWidth: 1,
        fill: true,
    }]
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Países',
            }
        },
        y: {
            title: {
                display: true,
                text: 'Emisiones (millones de toneladas)',
            },
            beginAtZero: true,
        }
    }
};

// Crear el gráfico de emisiones
const graficoEmisiones = new Chart(ctx, {
    type: 'bar', 
    data: data,
    options: options,
});

// Gráfico de Temperaturas Promedio
const tempChart = new Chart(ctxTemp, {
    type: 'line',
    data: {
        labels: ['Australia', 'India', 'USA', 'España', 'Italia', 'Canadá', 'Perú'], 
        datasets: [{
            label: 'Temperatura Promedio (°C) - 2024',
            data: [35.0, 40.5, 38.2, 37.1, 36.5, 34.0, 31.0], 
            fill: false,
            borderColor: '#ffb24d',
            borderWidth: 1,
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