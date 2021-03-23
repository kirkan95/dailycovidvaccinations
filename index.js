const UAExlabels = [];
const UAEUsYNums = [];
const UAEYNums = [];

chartItUAE();

async function chartItUAE() {
    await getDataUAE();
    const ctx = document.getElementById('UAEChart').getContext('2d');
    const UAEChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: UAExlabels,
            datasets: [{
                label: 'U.S. Vaccinations per 100',
                data: UAEUsYNums,
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: "UAE Vaccinations per 100",
                data: UAEYNums,
                fill: false,
                backgroundColor: 'rgba(0,10,255,0.2)',
                borderWidth: 1

            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Total Vaccinations Per 100: U.S. vs UAE'
            },
            scales: {

                yAxes: [{
                    ticks: {
                        callback: function(value, index, values) {

                            return value
                        }
                    }
                }]
            }
}
    });
} 

    async function getDataUAE() {
    const response = await fetch('country_vaccinations 2.csv');
    const data = await response.text();

    const UAEUsTable = data.split('\n').slice(7235, 7310);
        UAEUsTable.forEach(row => {
            const columns = row.split(',');
            const date = columns[2];
            UAExlabels.push(date);
            const dailyVacc = columns[8];
            UAEUsYNums.push(dailyVacc);
    });

    const UAETable = data.split('\n').slice(7047, 7122);
        UAETable.forEach(row => {
            const columns = row.split(',');
            const dailyVacc = columns[8];
            UAEYNums.push(dailyVacc);
    })

    }

// --------------------UK TIME----------------------

const UKxlabels = [];
const UKUsYNums = [];
const UKYNums = [];

chartItUK();

async function chartItUK() {
    await getDataUK();
    const ctx = document.getElementById('UKChart').getContext('2d');
    const UKChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: UKxlabels,
            datasets: [{
                label: 'U.S. Vaccinations per 100',
                data: UKUsYNums,
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: "UK Vaccinations per 100",
                data: UKYNums,
                fill: false,
                backgroundColor: 'rgba(0,10,255,0.2)',
                borderWidth: 1

            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Total Vaccinations Per 100: U.S. vs UK'
            },
            scales: {

                yAxes: [{
                    ticks: {
                        callback: function(value, index, values) {

                            return value
                        }
                    }
                }]
            }
}
    });
} 

    async function getDataUK() {
    const response = await fetch('country_vaccinations 2.csv');
    const data = await response.text();

    const UKUsTable = data.split('\n').slice(7219, 7310);
    UKUsTable.forEach(row => {
        const columns = row.split(',');
        const date = columns[2];
        UKxlabels.push(date);
        const dailyVacc = columns[8];
        UKUsYNums.push(dailyVacc);
    });

    const UKTable = data.split('\n').slice(7129, 7219);
    UKTable.forEach(row => {
        const columns = row.split(',');
        const dailyVacc = columns[8];
        UKYNums.push(dailyVacc);
    })

    }

    // --------------------INDIA TIME----------------------

const Chilexlabels = [];
const ChileUsYNums = [];
const ChileYNums = [];

chartItChile();

async function chartItChile() {
    await getDataChile();
    const ctx = document.getElementById('ChileChart').getContext('2d');
    const ChileChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Chilexlabels,
            datasets: [{
                label: 'U.S. Vaccinations per 100',
                data: ChileUsYNums,
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: "Chile Vaccinations per 100",
                data: ChileYNums,
                fill: false,
                backgroundColor: 'rgba(0,10,255,0.2)',
                borderWidth: 1

            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Total Vaccinations Per 100: U.S. vs Chile'
            },
            scales: {

                yAxes: [{
                    ticks: {
                        callback: function(value, index, values) {

                            return value
                        }
                    }
                }]
            }
}
    });
} 

    async function getDataChile() {
    const response = await fetch('country_vaccinations 2.csv');
    const data = await response.text();

    const ChileUsTable = data.split('\n').slice(7223, 7310);
    ChileUsTable.forEach(row => {
        const columns = row.split(',');
        const date = columns[2];
        Chilexlabels.push(date);
        const dailyVacc = columns[8];
        ChileUsYNums.push(dailyVacc);
    });

    const ChileTable = data.split('\n').slice(1333, 1420);
    ChileTable.forEach(row => {
        const columns = row.split(',');
        const dailyVacc = columns[8];
        ChileYNums.push(dailyVacc);
    })

    }