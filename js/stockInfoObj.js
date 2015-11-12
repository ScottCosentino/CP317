function StockInfo() {
	this.init = function() {
		this.stock = null;
		console.log("new instance made");
		this.historical = null;
	}

	this.getStock = function(data) {
		$.when(this.getData()).done(function() {
			console.log("in when");
		});
	}

	this.getData = function() {
		//The url for the query to yahoo finance
    	//var url = 'http://query.yahooapis.com/v1/public/yql';
	
		//The stock ticker that is being searched for
    	var symbol = "AAPL";
	
		//The query that is being done on yahoo finance
    	//var data = encodeURIComponent('select * from   yahoo.finance.historicaldata where  symbol    = ' + '"' + symbol + '"' + ' and    startDate = "2012-09-11"and    endDate   = "2014-02-11"');
  
    	//url: 'q=' + data + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env",

    	$.ajax({
    		type: "GET",
    		url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20%20%20yahoo.finance.historicaldata%20where%20%20symbol%20%20%20%20%3D%20%27AAPL%27%20and%20%20%20%20startDate%20%3D%20"2012-09-11"and%20%20%20%20endDate%20%20%20%3D%20"2014-02-11"&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=quote',
    		dataType: "jsonp",
    		jsonp: "callback",
    		jsonpCallback: "quote",
    	});

    	quote = function (data) {
    		console.log(data);
    	}

    	/*
		//Gets the JSON data generatd by the query
    	$.getJSON(url, 'q=' + data + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env",function(data) {
    		console.log("success");
    	})
    		.done(function(data) {
    			console.log("done success");

    			this.historical = data
       		});
*/
    }

	this.retrieveStock = function() {
		i = 1;
		alert("stock = " + this.stock);
		while (this.stock == null) {
			i -= 1;
			if (i == 0) {
				console.log("in if");
				getData();
			}
			console.log("in loop");
		}
		return this.stock;
	}

	this.init();
}

/*
var StockInfo = function() {

	console.log("instance created");
	this.stock = null;

	function getStock(data) {
		stock = data;
	}

	function getData() {
		//The url for the query to yahoo finance
    	var url = 'http://query.yahooapis.com/v1/public/yql';
	
		//The stock ticker that is being searched for
    	var symbol = "AAPL";
	
		//The query that is being done on yahoo finance
    	var data = encodeURIComponent('select * from   yahoo.finance.historicaldata where  symbol    = ' + '"' + symbol + '"' + ' and    startDate = "2012-09-11"and    endDate   = "2014-02-11"');
    	
		//Gets the JSON data generatd by the query
    	$.getJSON(url, 'q=' + data + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env", function(data) {
    		getStock(data);
    	});	
	}

	function retrieveStock() {
		i = 1;
		while (stock != null) {
			i -= 1;
			if (i == 0) {
				getData();
			}
		}
		return stock;
	}
};*/

/*
StockInfo.prototype.getStock = function()

	
}

function StockInfoa(historical) {
    this.historicalvals = historical;
	
	this.getClose = function(i){
		//alert(i);
		//alert(this.historicalvals);
		return (this.historicalvals[i]);
	};
	
	this.getOpen = function(i){
		return (this.historicalvals[i]);
	};
	
	this.getAll = function() {
		return this.historicalvals;
	}
}

*/