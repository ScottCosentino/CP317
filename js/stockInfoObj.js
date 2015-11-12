function StockInfo() {
	this.init = function() {
		this.stock = null;
		console.log("new instance made");
		this.historical = null;
	}

	this.newData = function(type) {
    	if (type === 'historic') {
            historic();
        }
    }

    function historic() {
        $.ajax({
            type: "GET",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20%20%20yahoo.finance.historicaldata%20where%20%20symbol%20%20%20%20%3D%20'AAPL'%20and%20%20%20%20startDate%20%3D%20%222012-09-11%22and%20%20%20%20endDate%20%20%20%3D%20%222014-02-11%22%20%7C%20sort(field%3D%22*%22%2C%20descending%3D%22false%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=quoteHist",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "quoteHist",
            async: false
        });
        
        quoteHist = function(data) {
            console.log(data.query.results);
            var results = data.query.results.quote[0];
            console.log(results);
            
             //slpit the data set into ohlc and volume
             var ohlc = [],
                 volume = [],
                 dataLength = data.query.results.quote.length - 1,
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
                var d = new Date(data.query.results.quote[i].Date);
                ohlc.push([

                    d.getTime(),
                    parseFloat(data.query.results.quote[i].Open),
                    parseFloat(data.query.results.quote[i].High),
                    parseFloat(data.query.results.quote[i].Low),
                    parseFloat(data.query.results.quote[i].Close),
                ]);
                volume.push([
                    data.query.results.quote[i].Date,
                    parseFloat(data.query.results.quote[i].Volume),
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