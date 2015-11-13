function newCTandVol() {
    var stockInfo = new StockInfo('AAPL','2012-09-11','2014-09-11');
    console.log(stockInfo);
    console.log(stockInfo.historical);
    stockInfo.newHistoricGraph();
    //stockInfo.createHistoricGraph();
}