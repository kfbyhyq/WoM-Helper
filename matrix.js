document.addEventListener('DOMContentLoaded', function() {
    var priceMap;

    /* 读宝石 */
    chrome.storage.local.get(['gemsPrice'], function(result) {
        gemsPrice = result.gemsPrice;
        console.log('宝石/场币/碎片价格:', gemsPrice);
        tableId = 'table1';
        displayMatrix(gemsPrice, tableId);    // 显示表格
    });

    /* 读竞技场门票 */
    chrome.storage.local.get(['ticketPrice'], function(result) {
        ticketPrice = result.ticketPrice;
        console.log('竞技场门票价格:', ticketPrice);
        tableId = 'table2';
        displayMatrix(ticketPrice, tableId);    // 显示表格
    });
    
    /* 读个人数据 */
    chrome.storage.local.get(['personalData'], function(result) {
        personalData = result.personalData;
        console.log('个人数据:', result.personalData);
        tableId = 'table3';
        displayMatrix(personalData, tableId);    // 显示表格
    });

    /* 处理矩阵并显示为表格 */
    function displayMatrix(matrix, tableId) {
        
        const rows = matrix.length;
        const cols = matrix[0].length;

        const table = document.getElementById(tableId);    // 定位表格
        table.innerHTML = ''; // 清空现有的表格内容

        /* 表头 */
        // let thead = table.createTHead();
        // let headerRow = thead.insertRow();
        // for (let i = 0; i < cols; i++) {
        //     let th = document.createElement('th');
        //     th.textContent = 'Header ' + (i + 1);
        //     headerRow.appendChild(th);
        // }

        /* 表格主体 */
        let tbody = table.createTBody();
        for (let i = 0; i < rows; i++) {
            let row = tbody.insertRow();
            for (let j = 0; j < cols; j++) {
                let cell = row.insertCell();
                cell.textContent = matrix[i][j];
            }
        }
    }
});