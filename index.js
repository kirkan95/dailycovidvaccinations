const Chinaxlabels = [];
const ChinaUsYNums = [];
const ChinaYNums = [];

chartItChina();

async function chartItChina() {
    await getData();
    const ctx = document.getElementById('chinaChart').getContext('2d');
    const chinaChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Chinaxlabels,
            datasets: [{
                label: 'Daily U.S. Vaccinations',
                data: ChinaUsYNums,
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: "Daily China Vaccinations",
                data: ChinaYNums,
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
                text: 'Daily Vaccinations Per Country: U.S. vs China'
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

    async function getData() {
    const response = await fetch('country_vaccinations 2.csv');
    const data = await response.text();

    const UsTable = data.split('\n').slice(7219, 7310);
    UsTable.forEach(row => {
        const columns = row.split(',');
        const date = columns[2];
        Chinaxlabels.push(date);
        const dailyVacc = columns[7];
        ChinaUsYNums.push(dailyVacc);
    });

    const ChinaTable = data.split('\n').slice(1420, 1516);
    ChinaTable.forEach(row => {
        const columns = row.split(',');
        const dailyVacc = columns[7];
        ChinaYNums.push(dailyVacc);
    })

    }

// --------------------ITALY TIME----------------------

const Italyxlabels = [];
const ItalyUsYNums = [];
const ItalyYNums = [];

chartItItaly();

async function chartItItaly() {
    await getDataItaly();
    const Italyctx = document.getElementById('italyChart').getContext('2d');
    const italyChart = new Chart(Italyctx, {
        type: 'line',
        data: {
            labels: Italyxlabels,
            datasets: [{
                label: 'Daily U.S. Vaccinations',
                data: ItalyUsYNums,
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: "Daily Italy Vaccinations",
                data: ItalyYNums,
                fill: false,
                backgroundColor: 'rgba(105,210,105,0.2)',
                borderWidth: 1

            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Daily Vaccinations Per Country: U.S. vs Italy'
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

    async function getDataItaly() {
    const response = await fetch('country_vaccinations 2.csv');
    const data = await response.text();

    const ItalyUsTable = data.split('\n').slice(7219, 7310);
    ItalyUsTable.forEach(row => {
        const columns = row.split(',');
        const date = columns[2];
        Italyxlabels.push(date);
        const dailyVacc = columns[7];
        ItalyUsYNums.push(dailyVacc);
    });

    const ItalyTable = data.split('\n').slice(3537, 3621);
    ItalyTable.forEach(row => {
        const columns = row.split(',');
        const dailyVacc = columns[7];
        ItalyYNums.push(dailyVacc);
    })

    }