function StockInfo(historical) {
    this.historicalvals = historical;
}

function getData() {
    var url = 'http://query.yahooapis.com/v1/public/yql';
    var symbol = "AAPL";
    var data = encodeURIComponent('select * from   yahoo.finance.historicaldata where  symbol    = "AAPL" and    startDate = "2012-09-11"and    endDate   = "2014-02-11"');

    $.getJSON(url, 'q=' + data + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env")
        .done(function (data) {
			console.log(data);
            $('#result').text("Price: " + data.query.results.quote[0].Close);
			var StockInfo1 = new StockInfo(data.query.results.quote);
			console.log(StockInfo1);
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log('Request failed: ' + err);
        });
		

}

$(document).ready(function(){
	
getData();

});

/* historical query

select * from   yahoo.finance.historicaldata
         where  symbol    = "AAPL"
         and    startDate = "2012-09-11"
         and    endDate   = "2014-02-11"
*/