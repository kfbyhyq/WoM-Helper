document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#update').addEventListener('click', function () {
        const button = document.getElementById('update');
        button.style.backgroundColor = '#ff9f18';   // 对应按钮变为橙色，表示运行中
        chrome.tabs.create({ url: 'https://minesweeper.online/cn/marketplace', active: false }, function (tab1) {
            const ti1 = tab1.id;
            recur(ti1, 0);

            function recur(tabId, i) {
                var maxI = 100;
                var t0 = 200;
                setTimeout(() => {
                    extract(tabId);
                    const flag = document.getElementById('flag1').textContent;
                    if (flag == 1 || i > maxI) {
                        chrome.tabs.remove(tabId, function() {});
                    } else {
                        recur(tabId, i + 1);
                    }
                }, i * t0);
            }

            function extract(tabId) {
                chrome.scripting.executeScript({
                    target: { tabId },
                    function: function () {
                        var priceMap = [
                            // ['Topaz', 'Ruby', 'Sapphire', 'Amethyst', 'Onyx', 'Aquamarine', 'Emerald', 'Garnet', 'Jade', 'Diamond'],
                            ['黄玉', '红宝石', '蓝宝石', '紫水晶', '缟玛瑙', '海蓝宝石', '祖母绿', '石榴石', '碧玉', '钻石'],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            // ['Gold coins', 'Copper coins', 'Silver coins', 'Nickel coins', 'Steel coins', 'Iron coins', 'Palladium coins', 'Titanium coins', 'Zinc coins', 'Platinum coins'],
                            ['金竞技场币', '铜竞技场币', '银竞技场币', '镍竞技场币', '钢竞技场币', '铁竞技场币', '钯竞技场币', '钛竞技场币', '锌竞技场币', '铂竞技场币'],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            // ['Rare parts', 'Unique parts', 'Legendary parts', 'Perfect parts'],
                            ['稀有碎片', '史诗碎片', '传说碎片', '完美碎片'],
                            [0, 0, 0, 0]
                        ];
                        try {
                            var Topaz = document.querySelector("#stat_table_body > tr:nth-child(1) > td:nth-child(3)");
                            priceMap[1][0] = Topaz.textContent;
                            var Ruby = document.querySelector("#stat_table_body > tr:nth-child(2) > td:nth-child(3)");
                            priceMap[1][1] = Ruby.textContent;
                            var Sapphire = document.querySelector("#stat_table_body > tr:nth-child(3) > td:nth-child(3)");
                            priceMap[1][2] = Sapphire.textContent;
                            var Amethyst = document.querySelector("#stat_table_body > tr:nth-child(4) > td:nth-child(3)");
                            priceMap[1][3] = Amethyst.textContent;
                            var Onyx = document.querySelector("#stat_table_body > tr:nth-child(5) > td:nth-child(3)");
                            priceMap[1][4] = Onyx.textContent;
                            var Aquamarine = document.querySelector("#stat_table_body > tr:nth-child(6) > td:nth-child(3)");
                            priceMap[1][5] = Aquamarine.textContent;
                            var Emerald = document.querySelector("#stat_table_body > tr:nth-child(7) > td:nth-child(3)");
                            priceMap[1][6] = Emerald.textContent;
                            var Garnet = document.querySelector("#stat_table_body > tr:nth-child(8) > td:nth-child(3)");
                            priceMap[1][7] = Garnet.textContent;
                            var Jade = document.querySelector("#stat_table_body > tr:nth-child(9) > td:nth-child(3)");
                            priceMap[1][8] = Jade.textContent;
                            var Diamond = document.querySelector("#stat_table_body > tr:nth-child(10) > td:nth-child(3)");
                            priceMap[1][9] = Diamond.textContent;

                            var Gold = document.querySelector("#stat_table_body > tr:nth-child(11) > td:nth-child(3)");
                            priceMap[3][0] = Gold.textContent;
                            var Copper = document.querySelector("#stat_table_body > tr:nth-child(12) > td:nth-child(3)");
                            priceMap[3][1] = Copper.textContent;
                            var Silver = document.querySelector("#stat_table_body > tr:nth-child(13) > td:nth-child(3)");
                            priceMap[3][2] = Silver.textContent;
                            var Nickel = document.querySelector("#stat_table_body > tr:nth-child(14) > td:nth-child(3)");
                            priceMap[3][3] = Nickel.textContent;
                            var Steel = document.querySelector("#stat_table_body > tr:nth-child(15) > td:nth-child(3)");
                            priceMap[3][4] = Steel.textContent;
                            var Iron = document.querySelector("#stat_table_body > tr:nth-child(16) > td:nth-child(3)");
                            priceMap[3][5] = Iron.textContent;
                            var Palladium = document.querySelector("#stat_table_body > tr:nth-child(17) > td:nth-child(3)");
                            priceMap[3][6] = Palladium.textContent;
                            var Titanium = document.querySelector("#stat_table_body > tr:nth-child(18) > td:nth-child(3)");
                            priceMap[3][7] = Titanium.textContent;
                            var Zinc = document.querySelector("#stat_table_body > tr:nth-child(19) > td:nth-child(3)");
                            priceMap[3][8] = Zinc.textContent;
                            var Platinum = document.querySelector("#stat_table_body > tr:nth-child(20) > td:nth-child(3)");
                            priceMap[3][9] = Platinum.textContent;

                            var Rare = document.querySelector("#stat_table_body > tr:nth-last-child(4) > td:nth-child(3)");
                            priceMap[5][0] = Rare.textContent.replace(/ /g, "");
                            var Unique = document.querySelector("#stat_table_body > tr:nth-last-child(3) > td:nth-child(3)");
                            priceMap[5][1] = Unique.textContent.replace(/ /g, "");
                            var Legendary = document.querySelector("#stat_table_body > tr:nth-last-child(2) > td:nth-child(3)");
                            priceMap[5][2] = Legendary.textContent.replace(/ /g, "");
                            var Perfect = document.querySelector("#stat_table_body > tr:nth-last-child(1) > td:nth-child(3)");
                            priceMap[5][3] = Perfect.textContent.replace(/ /g, "");

                            console.log(priceMap);
                            chrome.runtime.sendMessage({ action: 'sendGemsPrice', gemsPrice: priceMap });
                        } catch (e) {
                            console.error('错误页面', e);
                        }

                    }
                });
            }
        });
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'sendGemsPrice') {
        let gemsPrice = request.gemsPrice;
        console.log('收到价格更新:', gemsPrice);   // 在控制台打出结果
        chrome.storage.local.set({ gemsPrice: gemsPrice });     // 保存数据
        document.getElementById('update').style.backgroundColor = '#4caf50';   // 将对应按钮变为绿色，表示提取成功
        document.getElementById('flag1').textContent = 1;   // 设置成功标记
    }
});