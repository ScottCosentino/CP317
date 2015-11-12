function StockInfo() {
	this.init = function() {
		this.stock = null;
		console.log("new instance made");
		this.historical = null;
	}

	this.setData = function() {
    	$.ajax({
    		type: "GET",
    		url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20%20%20yahoo.finance.historicaldata%20where%20%20symbol%20%20%20%20%3D%20%27AAPL%27%20and%20%20%20%20startDate%20%3D%20"2012-09-11"and%20%20%20%20endDate%20%20%20%3D%20"2014-02-11"&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=quote',
    		dataType: "jsonp",
    		jsonp: "callback",
    		jsonpCallback: "quote",
    		async: false
    	});
    	
    	quote = function(data) {
    		this.historical = data;   
    		console.log("in quote");	
    	}
    }

    this.getHist = function() {
    	return this.historical;
    }

	this.init();
}