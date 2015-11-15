function searchStocks(){
	alert("in search");
	var stockInfo = new StockInfo($("#searchInput").val());
	stockInfo.searchTicker();
}