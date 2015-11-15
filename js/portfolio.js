$(document).ready(function() {
	console.log("in port");

	var stocks = ['AAPL','FUN','DOW','AMD'];
	var stockObj = [];

	var i = 0;
	for (i; i < 4; i++) {
		var stockInfo = new StockInfo(stocks[i],'2012-09-11','2014-08-11',(i+1));
		stockObj.push(stockInfo);
		stockInfo.newHistoricGraph(i);
	}

	console.log(stockObj);
	// Dynamic searching for portfolio stocks
	$(document).on("keyup","#inputs",function() {
		var i = 0;
		for (i; i < stockObj.length; i++) {
			// check if searchbar has input
			if (this.value.length > 0) {
				var stockSymbol = stockObj[i].symbol.slice(0,(this.value.length));
				if (stockSymbol !== this.value) {
					console.log("in hide");
					console.log($("#stockGraph" + stockObj[i].currentIndex));
					$("#stockGraph" + stockObj[i].currentIndex).hide();
				}
			}else {
				$("#stockGraph" + stockObj[i].currentIndex).show();
			}
		}
	});
});