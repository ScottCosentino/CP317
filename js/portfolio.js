$(document).ready(function() {
	console.log("in port");
	var stockInfo = new StockInfo('AAPL','2012-09-11','2014-08-11',null);
	stockInfo.newHistoricGraph();
});