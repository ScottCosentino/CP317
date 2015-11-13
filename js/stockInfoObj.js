function StockInfo(symbol, startDate, endDate) {
    this.symbol = symbol;
    this.startDate = startDate;
    this.endDate = endDate;
    this.historical = function(){getHistoric()};
}

StockInfo.prototype = {
    getHistoric: function() {
        $.ajax({
            type: "GET",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20%20%20yahoo.finance.historicaldata%20where%20%20symbol%20%20%20%20%3D%20'"+ symbol +"'%20and%20%20%20%20startDate%20%3D%20%22" + startDate + "%22and%20%20%20%20endDate%20%20%20%3D%20%22" + endDate + "%22%20%7C%20sort(field%3D%22*%22%2C%20descending%3D%22false%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=quoteHist",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "quoteHist",
            async: false
        });
        
        quoteHist = function(data) {
            return data.query.results.quote;
        }
    },
    newHistoricGraph: function() {
        if (typeof this.historical !== 'undefined') {
            //console.log(data);
            //console.log(data.query.results);
            //var results = data.query.results.quote[data.query.results.quote.length - 1];
            //console.log(results);
            
             //slpit the data set into ohlc and volume
             var ohlc = [],
                 volume = [],
                 dataLength = this.historical.length - 1,
                 //set the allowed units for data grouping
                 groupingUnits = [[
                    'week',                  // unit name
                    [1]                      // allowed multiples
                 ], [
                    'month',
                    [1,2,3,4,6]
                 ]],
                 i = 0;

            for (i; i < dataLength; i += 1) {
                var d = new Date(this.historical[i].Date);
                ohlc.push([

                    d.getTime(),
                    parseFloat(this.historical[i].Open),
                    parseFloat(this.historical[i].High),
                    parseFloat(this.historical[i].Low),
                    parseFloat(this.historical[i].Close),
                ]);
                volume.push([
                    d.getTime(),
                    parseFloat(this.historical[i].Volume),
                ]);
            }

            console.log(ohlc);
            
            $("#container").highcharts("StockChart", {

                rangeSelector: {
                    selected: 1
                },

                title: {
                    text: "Apple"
                },

                yAxis: [{
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'OHLC'
                    },
                    height: "60%",
                    lineWidth: 2
                }, {
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: "Volume"
                    },
                    top: "65%",
                    height: "35%",
                    offset: 0,
                    lineWidth: 2
                }],

                series: [{
                    type: "candlestick",
                    name: "AAPL",
                    data: ohlc,
                    dataGrouping: {
                        units: groupingUnits
                    }
                }, {
                    type: 'column',
                    name: 'Volume',
                    data: volume,
                    yAxis: 1,
                    dataGrouping: {
                        units: groupingUnits
                    }
                }]
            });
        }else {
            //ERROR
        }
    }
};
/*function StockInfo(symbol, startDate, endDate) {
	var init = function() {
		this.symbol= symbol;
        this.startDate = startDate;
        this.endDate = endDate;
        this.current = getCurrent(this.symbol);
        this.historical = this.getHistoric(this.symbol,startDate,endDate);
	}

	this.getCurrent = function(symbol) {
    	
    }

    this.getHistoric = function(symbol,startDate,endDate) {
        $.ajax({
            type: "GET",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20%20%20yahoo.finance.historicaldata%20where%20%20symbol%20%20%20%20%3D%20'"+ symbol +"'%20and%20%20%20%20startDate%20%3D%20%22" + startDate + "%22and%20%20%20%20endDate%20%20%20%3D%20%22" + endDate + "%22%20%7C%20sort(field%3D%22*%22%2C%20descending%3D%22false%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=quoteHist",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "quoteHist",
            async: false
        });
        
        quoteHist = function(data) {
            return data.query.results.quote;
        }
    }

    this.createHistoricGraph = function() {
    }

    init();
     /*   if (typeof this.historical !== 'undefined') {
            console.log(data);
            //console.log(data.query.results);
            //var results = data.query.results.quote[data.query.results.quote.length - 1];
            //console.log(results);
            
             //slpit the data set into ohlc and volume
             var ohlc = [],
                 volume = [],
                 dataLength = this.historical.length - 1,
                 //set the allowed units for data grouping
                 groupingUnits = [[
                    'week',                  // unit name
                    [1]                      // allowed multiples
                 ], [
                    'month',
                    [1,2,3,4,6]
                 ]],
                 i = 0;

            for (i; i < dataLength; i += 1) {
                var d = new Date(this.historical[i].Date);
                ohlc.push([

                    d.getTime(),
                    parseFloat(this.historical[i].Open),
                    parseFloat(this.historical[i].High),
                    parseFloat(this.historical[i].Low),
                    parseFloat(this.historical[i].Close),
                ]);
                volume.push([
                    d.getTime(),
                    parseFloat(this.historical[i].Volume),
                ]);
            }

            console.log(ohlc);
            
            $("#container").highcharts("StockChart", {

                rangeSelector: {
                    selected: 1
                },

                title: {
                    text: "Apple"
                },

                yAxis: [{
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'OHLC'
                    },
                    height: "60%",
                    lineWidth: 2
                }, {
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: "Volume"
                    },
                    top: "65%",
                    height: "35%",
                    offset: 0,
                    lineWidth: 2
                }],

                series: [{
                    type: "candlestick",
                    name: "AAPL",
                    data: ohlc,
                    dataGrouping: {
                        units: groupingUnits
                    }
                }, {
                    type: 'column',
                    name: 'Volume',
                    data: volume,
                    yAxis: 1,
                    dataGrouping: {
                        units: groupingUnits
                    }
                }]
            });
        }
        }
    }
}*/
