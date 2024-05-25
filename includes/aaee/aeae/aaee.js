const mpumalanga_weather = document.getElementById('MpumalangaChart');
const national_weather = document.getElementById('nationalChart');
const matric_pass = document.getElementById('matricChart');

let other_provinces = [
    {
        name: 'Eastern Cape',
        max_temp: [30, 37, 33, 31, 31],
        min_temp: [16, 17, 16, 11, 11],
        temp_diff: [14, 20, 17, 20, 20],
    },
    {
        name: 'Free State',
        max_temp: [30, 37, 33, 31, 31],
        min_temp: [16, 17, 16, 11, 11],
        temp_diff: [14, 20, 17, 20, 20],
    },
    {
        name: 'Gauteng',
        max_temp: [30, 37, 33, 31, 31],
        min_temp: [16, 17, 16, 11, 11],
        temp_diff: [14, 20, 17, 20, 20],
    },
    {
        name: 'KwaZulu Natal',
        max_temp: [30, 37, 33, 31, 31],
        min_temp: [16, 17, 16, 11, 11],
        temp_diff: [14, 20, 17, 20, 20],
    },
    {
        name: 'Limpopo',
        max_temp: [30, 37, 33, 31, 31],
        min_temp: [16, 17, 16, 11, 11],
        temp_diff: [14, 20, 17, 20, 20],
    },
    {
        name: 'Northern Cape',
        max_temp: [30, 37, 33, 31, 31],
        min_temp: [16, 17, 16, 11, 11],
        temp_diff: [14, 20, 17, 20, 20],
    },
    {
        name: 'North West',
        max_temp: [30, 37, 33, 31, 31],
        min_temp: [16, 17, 16, 11, 11],
        temp_diff: [14, 20, 17, 20, 20],
    },
    {
        name: 'Western Cape',
        max_temp: [30, 37, 33, 31, 31],
        min_temp: [16, 17, 16, 11, 11],
        temp_diff: [14, 20, 17, 20, 20],
    }
];

other_provinces.forEach(province => {

    let temp_variable = province.name.replace(/\s+/g, ''); 
    window[temp_variable] = document.getElementById(temp_variable+'Chart');

    new Chart(window[temp_variable], {
        type: 'bar', // Define the default chart type
        data: {
            datasets: [
                {
                    type: 'bar',
                    label: 'Max Temparature °C',
                    data: province.max_temp,
                    borderColor: '#1A5276',
                    borderWidth: 1
                },
                {
                    type: 'bar',
                    label: 'Min Temparature °C',
                    data: province.min_temp,
                    borderColor: 'red', // Add color
                    backgroundColor: '#f79e9e',
                    borderWidth: 1
                },
                {
                    type: 'line',
                    label: 'Temparature Difference °C',
                    data: province.temp_diff,
                    borderColor: '#fffb00', // Add color
                    backgroundColor: '#fffd98',
                    borderWidth: 1
                }
            ],
            labels: ['January', 'February', 'March', 'April', 'May', 'June']
        },
        options: {
            scales: {
                x: {
                    title: {
                    display: true,
                    text: 'Months'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                    display: true,
                    text: 'Temperature °C'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Temperature Display For ' + province.name
                }
            }
        }
    });
});

new Chart(mpumalanga_weather, {
    type: 'bar', // Define the default chart type
    data: {
        datasets: [
            {
                type: 'bar',
                label: 'Max Temparature °C',
                data: [30, 37, 33, 31, 31],
                borderColor: '#1A5276',
                borderWidth: 1
            },
            {
                type: 'bar',
                label: 'Min Temparature °C',
                data: [16, 17, 16, 11, 11],
                borderColor: 'red', // Add color
                backgroundColor: '#f79e9e',
                borderWidth: 1
            },
            {
                type: 'line',
                label: 'Temparature Difference °C',
                data: [14, 20, 17, 20, 20],
                borderColor: '#fffb00', // Add color
                backgroundColor: '#fffd98',
                borderWidth: 1
            }
        ],
        labels: ['January', 'February', 'March', 'April', 'May', 'June']
    },
    options: {
        scales: {
            x: {
                title: {
                display: true,
                text: 'Months'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                display: true,
                text: 'Temperature °C'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Temperature Display For Mpumalanga'
            }
        }
    }
});

new Chart(national_weather, {
    type: 'pie',
    data: {
        labels: [
            'Eastern Cape', 'Free State', 'Gauteng', 
            'KwaZulu-Natal', 'Limpopo', 'Mpumalanga', 
            'Northern Cape', 'North West', 'Western Cape'
        ],
        datasets: [{
        data: [34, 35, 36, 36, 12, 11, 39, 36, 33 ],
        backgroundColor: [ 
            '#ffc4c4', '#ffc4ee', '#efc4ff', '#cac4ff', '#c4edff',
            '#cbffc4', '#e8ffc4', '#fffec4', '#ffdfc4'
        ],
        borderColor: 'rgb(182, 4, 247)',
        borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Wind Speed By Province (km/h)'
            }
        }
    }
});

const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

const provincesData = [
    { label: 'Eastern Cape', data: [65.8, 70.6, 76.5, 68.1, 73, 77.3, 81.4], borderColor: '#ff0000', backgroundColor: '#ff0000' },
    { label: 'Free State', data: [89.8, 87.5, 88.4, 85.1, 85.7, 88.5, 89], borderColor: '#ff8800', backgroundColor: '#ff8800' },
    { label: 'Gauteng', data: [86, 87.9, 87.2, 83.8, 82.8, 84.4, 85.4], borderColor: '#f6ff00', backgroundColor: '#f6ff00' },
    { label: 'KwaZulu Natal', data: [73.6, 76.2, 81.3, 77.6, 76.8, 83, 86.4], borderColor: '#00bfff', backgroundColor: '#00bfff' },
    { label: 'Limpopo', data: [67.4, 69.4, 73.2, 68.2, 66.7, 72.1, 79.5], borderColor: '#00ffa6', backgroundColor: '#00ffa6' },
    { label: 'Mpumalanga', data: [76.6, 79, 80.3, 73.7, 73.6, 76.8, 77], borderColor: '#55ff00', backgroundColor: '#55ff00' },
    { label: 'Northern Cape', data: [77.6, 73.3, 76.5, 66, 71, 74.2, 75.8], borderColor: '#0800ff', backgroundColor: '#0800ff' },
    { label: 'North West', data: [82.1, 81.1, 86.8, 76.2, 78.2, 79.8, 81.6], borderColor: '#8800ff', backgroundColor: '#8800ff' },
    { label: 'Western Cape', data: [84.4, 81.5, 82.3, 79.9, 81.2, 81.4, 81.5], borderColor: '#ff0088', backgroundColor: '#ff0088' }
];

// Create datasets for line charts
const lineDatasets = provincesData.map(province => ({
    type: 'line',
    label: province.label,
    data: province.data,
    borderColor: province.borderColor,
    backgroundColor: province.backgroundColor,
    fill: false
}));

// Add the bar chart dataset
const barDataset = {
    type: 'bar',
    label: 'National Matric Results (%)',
    data: [75.1, 78.2, 81.3, 76.2, 76.4, 80.1, 82.9],
    borderColor: '#1A5276',
    borderWidth: 1
};

// Combine all datasets
const datasets = [barDataset, ...lineDatasets];

// Chart configuration
const chartConfig = {
    type: 'bar', // Default chart type
    data: {
        labels: years,
        datasets: datasets
    },
    options: {
        scales: {
            x: {
                title: {
                display: true,
                text: 'Years'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                display: true,
                text: 'Percentage'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'South African Matric Pass Rate From 2017 To 2024'
            }
        }
    }
};

// Initialize the chart
new Chart(matric_pass, chartConfig);