/**
 * CIP chart
 */

function login() {
    alert(document.forms['login_form'].email.value);
    alert(document.forms['login_form'].password.value);
}

function showAssetAlloc() {
    const ctx = document.getElementById('asset_alloc');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Equity', 'Fixed Income', 'Alternatives', 'Cash'],
            datasets: [{
                    label: 'Asset Allocation',
                    data: [55, 35, 7, 3],
                    borderWidth: 1
                }]
        },
        options: {
            // maintainAspectRatio: false,
            responsive: true,
            plugins: {
                // title: {
                //     display: true,
                //     text: 'Custom Chart Title'
                // },
                // subtitle: {
                //     display: true,
                //     text: 'Custom Chart Subtitle'
                // },
                // tooltip: {
                //     callbacks: {
                //         label: function(tooltipItem) { 
                //             return tooltipItem.label + ' - ' + tooltipItem.formattedValue;
                //         }
                //     }
                // },
                legend: {
                    display: true,
                    position: 'bottom',
                    title: {
                        display: true,
                        padding: 20,
                        text: 'Asset Allocation'
                    },
                    labels: {
                        padding: 10,
                        font: {
                            size: 16
                        }
                    }
                }
            },
            scales: {
                y: {
                    // beginAtZero: true
                    display: false
                }
            }
        }
    });
}

function showGeoDist() {
    const ctx = document.getElementById('geo_dist');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['North America', 'Ex-UK', 'UK', 'Asia-Pacific'],
            datasets: [{
                    label: 'Geographic Distribution',
                    data: [35, 25, 20, 20],
                    borderWidth: 1
                }]
        },
        options: {
            responsive: true,
            plugins: {
                // title: {
                //     display: true,
                //     text: 'Custom Chart Title'
                // },
                // subtitle: {
                //     display: true,
                //     text: 'Custom Chart Subtitle'
                // },
                legend: {
                    display: true,
                    position: 'bottom',
                    title: {
                        display: true,
                        padding: 20,
                        text: 'Geographic Distribution'
                    },
                    labels: {
                        padding: 10,
                        font: {
                            size: 16
                        }
                    }
                }
            },
            scales: {
                y: {
                    // beginAtZero: true,
                    display: false
                }
            }
        }
    });
}

function showFxExposure() {
    const ctx = document.getElementById('fx_exposure');
    new Chart(ctx, {
        data: {
            datasets: [{
                type: 'bar',
                label: 'Gross Exposure',
                data: [6.5, 4, 3, 1.5]
            }, {
                type: 'bar',
                label: 'Hedged Amount',
                data: [4.5, 3, 2.5, 1]
            }, {
                type: 'bar',
                label: 'Net Exposure',
                data: [2, 1, 0.5, 0.5]
            }],
            labels: ['USD', 'EUR', 'JPY', 'CHF']
        },
        options: {
            responsive: true,
            plugins: {
                // title: {
                //     display: true,
                //     text: 'Custom Chart Title'
                // },
                // subtitle: {
                //     display: true,
                //     text: 'Custom Chart Subtitle'
                // },
                legend: {
                    display: true,
                    position: 'bottom',
                    title: {
                        display: true,
                        padding: 20,
                        text: 'Currecy Exposure and Hedging (in £B)'
                    },
                    labels: {
                        padding: 10,
                        font: {
                            size: 16
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true, // Ensure the title is displayed
                        text: "Amount (£B)", // Set the y-axis label text
                        font: {
                            size: 16
                        }
                    }
                },
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}

function showHedgingRatio() {
    const ctx = document.getElementById('hedge_ratio');
    new Chart(ctx, {
        data: {
            datasets: [{
                type: 'bar',
                label: 'Exposure %',
                data: [45, 25, 15, 15]
            }, {
                type: 'bar',
                label: 'Hedged %',
                data: [70, 60, 45, 40]
            }],
            labels: ['USD', 'EUR', 'JPY', 'Others']
        },
        options: {
            responsive: true,
            plugins: {
                // title: {
                //     display: true,
                //     text: 'Custom Chart Title'
                // },
                // subtitle: {
                //     display: true,
                //     text: 'Custom Chart Subtitle'
                // },
                legend: {
                    display: true,
                    position: 'bottom',
                    title: {
                        display: true,
                        padding: 20,
                        text: 'Currency Exposure & Hedge Ratios'
                    },
                    labels: {
                        padding: 10,
                        font: {
                            size: 16
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true, // Ensure the title is displayed
                        text: "Percentage (%)", // Set the y-axis label text
                        font: {
                            size: 16
                        }
                    }
                },
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}

function showHedgingPolicy() {
    const ctx = document.getElementById('hedge_policy');
    new Chart(ctx, {
        data: {
            datasets: [{
                type: 'bar',
                label: 'Developed Markets',
                data: [70, 69.7, 2]
            }, {
                type: 'bar',
                label: 'Emerging Markets',
                data: [50, 48.5, 5]
            }],
            labels: ['Target', 'Current', 'Band']
        },
        options: {
            responsive: true,
            plugins: {
                // title: {
                //     display: true,
                //     text: 'Custom Chart Title'
                // },
                // subtitle: {
                //     display: true,
                //     text: 'Custom Chart Subtitle'
                // },
                legend: {
                    display: true,
                    position: 'bottom',
                    title: {
                        display: true,
                        padding: 20,
                        text: 'Stated Hedge Policy vs Current'
                    },
                    labels: {
                        padding: 10,
                        font: {
                            size: 16
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true, // Ensure the title is displayed
                        text: "Percentage (%)", // Set the y-axis label text
                        font: {
                            size: 16
                        }
                    }
                },
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}