$(document).ready(function() {
	
	//$("#topRowStocks").offset({'left':'-200'});

	var stocks = ["topStock1","topStock2","topStock3","topStock4","topStock5","topStock6","topStock7","topStock8","topStock9","topStock10"];

	var STOCKS_WIDTH = 200;

	setStocks(stocks);
	function setStocks(stocks) {
		var i = 0;
		var sum = -1 * STOCKS_WIDTH;
		for(i; i<= stocks.length - 1; i++) {
			$("#" + stocks[i]).offset({'left':sum});
			sum += STOCKS_WIDTH;
		}
	}

	setInterval(function() {
		moveStocks(stocks);
	},10);

	var count = 0;

	function moveStocks(stocks) {
		var i = 0;

		for (i; i <= stocks.length - 1; i++) {
			console.log(i);
			var offset = $("#" + stocks[i]).offset();
			var temp = offset.left + 1;
			$("#" + stocks[i]).offset({'left':temp});
			if (count >= STOCKS_WIDTH) {
				console.log("switch");
				var holder = stocks.pop();
				stocks.unshift(holder);
				$("#" + holder).offset({'left':(-1 * STOCKS_WIDTH)});
				count = 0;
			}
		}
		count += 1;
	}
});