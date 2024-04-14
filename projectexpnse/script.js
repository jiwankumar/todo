function fetchData() {
    fetch('https://api.wazirx.com/api/v2/tickers')
        .then(response => response.json())
        .then(data => {
            console.log(data);  // Log the data to the console
            const table = document.getElementById('cryptoTable');
            Object.values(data).forEach(item => {
                const row = table.insertRow(-1);
                row.insertCell(0).innerHTML = item.name;
                row.insertCell(1).innerHTML = item.last;
                row.insertCell(2).innerHTML = item.buy;
                row.insertCell(3).innerHTML = item.sell;
                row.insertCell(4).innerHTML = item.volume;
                row.insertCell(5).innerHTML = item.base_unit;
            });
        })
        .catch(err => console.error(err));
}

fetchData();
