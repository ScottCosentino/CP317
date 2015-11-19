$(document).ready(function() {
	console.log("in detail");

	var pathArray = window.location.pathname.split('?');
	var variable = pathArray[1];

	$.get('')

	var stockInfo = new StockInfo('AAPL','2012-09-11','2014-08-11');
	stockInfo.newHistoricGraph(1);
});