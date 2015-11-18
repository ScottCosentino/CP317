function searchStocks(){
	var stockInfo = new StockInfo($("#searchInput").val());
	stockInfo.searchTicker();
}