const ctx = document.getElementById('PiTaxChart').getContext('2d');
const ctx1 = document.getElementById('SmTaxChart').getContext('2d');
const ctx2 = document.getElementById('TDutyChart').getContext('2d');
const ctx3 = document.getElementById('TTaxChart').getContext('2d');
        
const data = {
    labels: [
        '18% of taxable income', 
        '42 678 + 26% of taxable income above 237 100', 
        '77 362 + 31% of taxable income above 370 500', 
        '121 475 + 36% of taxable income above 512 800', 
        '179 147 + 39% of taxable income above 673 000', 
        '251 258 + 41% of taxable income above 857 900', 
        '644 489 + 45% of taxable income above 1 817 000'
    ],
    datasets: [{
        label: 'Range',
        data: [
            {x: '18% of taxable income', y: [1, 237000]},
            {x: '42 678 + 26% of taxable income above 237 100', y: [237101, 370500]},
            {x: '77 362 + 31% of taxable income above 370 500', y: [370501, 512800]},
            {x: '121 475 + 36% of taxable income above 512 800', y: [512801, 673000]},
            {x: '179 147 + 39% of taxable income above 673 000', y: [673001, 857900]},
            {x: '251 258 + 41% of taxable income above 857 900', y: [857901, 1817000]},
            {x: '644 489 + 45% of taxable income above 1 817 000', y: [1817001]},
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

const data1 = {
    labels: [
        '0% of taxable income', 
        '7% of taxable income above 95 750', 
        '18 848 + 21% of taxable income above 365 000', 
        '57 698 + 27% of the amount above 550 000', 
    ],
    datasets: [{
        label: 'Range',
        data: [
            {x: '0% of taxable income', y: [1, 95750]},
            {x: '7% of taxable income above 95 750', y: [95751, 365000]},
            {x: '18 848 + 21% of taxable income above 365 000', y: [365001, 550000]},
            {x: '57 698 + 27% of the amount above 550 000', y: [550001]},
        ],
        borderColor: 'red', // Add color
        backgroundColor: '#f79e9e',
        borderWidth: 1
    }]
};

const data2 = {
    labels: [
        '0%', 
        '3% of the value above R1 100 000', 
        'R12 375 + 6% of the value above R 1 512 500', 
        'R48 675 + 8% of the value above R 2 117 500', 
        'R97 075 +11% of the value above R2 722 500', 
        'R1 128 600 + 13% of the value exceeding R12 100 000', 
    ],
    datasets: [{
        label: 'Range',
        data: [
            {x: '0%', y: [1, 1100000]},
            {x: '3% of the value above R1 100 000', y: [1100001, 1512500]},
            {x: 'R12 375 + 6% of the value above R 1 512 500', y: [1512501, 2117500]},
            {x: 'R48 675 + 8% of the value above R 2 117 500', y: [2117501, 2722500]},
            {x: 'R97 075 +11% of the value above R2 722 500', y: [2722501, 12100000]},
            {x: 'R1 128 600 + 13% of the value exceeding R12 100 000', y: [12100001]},
        ],
        borderColor: '#1A5276', // Add color
        backgroundColor: '#1A5276',
        borderWidth: 1
    }]
};

const data3 = {
    labels: [
        '0% of taxable turnover', 
        '1% of taxable turnover above 335 000', 
        '1 650 + 2% of taxable turnover above 500 000', 
        '6 650 + 3% of taxable turnover above 750 000', 
    ],
    datasets: [{
        label: 'Range',
        data: [
            {x: '0% of taxable turnover', y: [1, 335000]},
            {x: '1% of taxable turnover above 335 000', y: [335001, 500000]},
            {x: '1 650 + 2% of taxable turnover above 500 000', y: [500001, 750000]},
            {x: '6 650 + 3% of taxable turnover above 750 000', y: [750001]},
        ],
        borderColor: '#6d0000', // Add color
        backgroundColor: '#6d0000',
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Personal Income Tax Table From 2023 To 2024'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return 'Range: ' + tooltipItem.raw.y[0] + ' - ' + tooltipItem.raw.y[1];
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Rate of Tax (R)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Taxable Income (R)'
                },
                beginAtZero: true
            }
        },
        elements: {
            bar: {
                borderWidth: 2,
            }
        },
        parsing: {
            xAxisKey: 'x',
            yAxisKey: 'y'
        }
    }
};

const config1 = {
    type: 'bar',
    data: data1,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Taxes For Small Businesses From 2023 To 2024'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return 'Range: ' + tooltipItem.raw.y[0] + ' - ' + tooltipItem.raw.y[1];
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Rate of Tax (R)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Taxable Income (R)'
                },
                beginAtZero: true
            }
        },
        elements: {
            bar: {
                borderWidth: 2,
            }
        },
        parsing: {
            xAxisKey: 'x',
            yAxisKey: 'y'
        }
    }
};

const config2 = {
    type: 'bar',
    data: data2,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Transfer Duty From 2023 To 2024'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return 'Range: ' + tooltipItem.raw.y[0] + ' - ' + tooltipItem.raw.y[1];
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Rate'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Value of property (R)'
                },
                beginAtZero: true
            }
        },
        elements: {
            bar: {
                borderWidth: 2,
            }
        },
        parsing: {
            xAxisKey: 'x',
            yAxisKey: 'y'
        }
    }
};

const config3 = {
    type: 'bar',
    data: data3,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Turnover Tax From 2023 To 2024'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return 'Range: ' + tooltipItem.raw.y[0] + ' - ' + tooltipItem.raw.y[1];
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Rate of tax (R)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Taxable Turnover  (R)'
                },
                beginAtZero: true
            }
        },
        elements: {
            bar: {
                borderWidth: 2,
            }
        },
        parsing: {
            xAxisKey: 'x',
            yAxisKey: 'y'
        }
    }
};

new Chart(ctx, config);
new Chart(ctx1, config1);
new Chart(ctx2, config2);
new Chart(ctx3, config3);
