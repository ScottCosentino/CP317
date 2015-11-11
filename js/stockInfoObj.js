//Optimally, the getData() function should probably be inside the stock info object. Either this or it is used to get data before creating a stock object

function StockInfo(historical) {
    this.historicalvals = historical;
	
	this.getClose = function(i){
		return (this.historicalvals[i]);
	};
	
	this.getOpen = function(i){
		return (this.historicalvals[i]);
	};
	
}


function getData() {
	//The url for the query to yahoo finance
    var url = 'http://query.yahooapis.com/v1/public/yql';
	
	//The stock ticker that is being searched for
    var symbol = "AAPL";
	
	//The query that is being done on yahoo finance
    var data = encodeURIComponent('select * from   yahoo.finance.historicaldata where  symbol    = ' + '"' + symbol + '"' + ' and    startDate = "2012-09-11"and    endDate   = "2014-02-11"');

	//Gets the JSON data generatd by the query
    $.getJSON(url, 'q=' + data + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env")
	
		//Once the query is completed
        .done(function (data) {
			
			//Generates a new stock info object, with the query quotes as its historicalvals
			var StockInfo1 = new StockInfo(data.query.results.quote);
			console.log(StockInfo1)
			
        })
		//Function to handle a failure in query.
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log('Request failed: ' + err);
        });
		

}

//Run the getdata() function
$(document).ready(function(){
	
getData();

});
