function StockInfo(symbol, startDate, endDate, currentIndex) {
    this.symbol = symbol;
    this.startDate = startDate;
    this.endDate = endDate;
    this.historical = null;
    this.currentIndex = currentIndex;
}

StockInfo.prototype = {
    getHistoric: function() {
        return this.historical;
    },
    newHistoricGraph: function() {
        console.log("here");
        $.ajax({
            type: "GET",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20%20%20yahoo.finance.historicaldata%20where%20%20symbol%20%20%20%20%3D%20'AAPL'%20and%20%20%20%20startDate%20%3D%20%222012-09-11%22and%20%20%20%20endDate%20%20%20%3D%20%222014-02-11%22%20%7C%20sort(field%3D%22*%22%2C%20descending%3D%22false%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=createHistGraph",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "createHistGraph",
            async: false
        });

        createHistGraph = function(data) {
            this.historical = data.query.results.quote;
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
                    d.getTime(),
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
    },
    updateCurrent: function() {
        function updateCallBack(index) {
            return function(data) {
                updateContent(data,index);
            };
        }

        function updateContent(data,index) {
            $("#tickerPanel" + (index + 1)).text(data.query.results.quote.Symbol);
            if (data.query.results.quote.Currency === "USD") {
                $("#pricePanel" + (index + 1)).text("$" + data.query.results.quote.Ask);
            }
            var changePercent = data.query.results.quote.ChangeinPercent;
            var plusMinus = changePercent.slice(0,1);
            var plusMinusObj = document.getElementById("upDownPanel" + (index + 1));
            if (plusMinus === "-") {
                plusMinusObj.style.color = "red";
            }else if (plusMinus === "+") {
                plusMinusObj.style.color = "#79D541";
            }
            $("#upDownPanel" + (index + 1)).text(data.query.results.quote.ChangeinPercent);
        }

        $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(" + this.symbol + ")&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",updateCallBack(this.currentIndex));
    }
}