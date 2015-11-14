$(document).ready(function() {
	console.log("in port");

	var stocks = ['AAPL','FUN','DOW'];
	var stockObj = [];

	var i = 0;
	for (i; i < 3; i++) {
		var stockInfo = new StockInfo(stocks[i],'2012-09-11','2014-08-11',null);
		stockObj.push(stockInfo);
		stockInfo.newHistoricGraph(i);
	}

	// Dynamic searching for portfolio stocks
	$(document).on("keyup","#inputs",function() {
		var i = 0;
		for (i; i < stockObj.length - 1; i++) {
			var stockSymbol = stockObj[i].symbol.slice(0,(i+1));
			console.log(this.value);
			console.log(stockSymbol);
			if (stockSymbol === this.value) {
				alert("here");
			}
		}
	});

});