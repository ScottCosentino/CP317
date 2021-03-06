$(document).ready(function() {

	// To create/update scroll across
	var stocks = ["topStock1","topStock2","topStock3","topStock4","topStock5","topStock6","topStock7","topStock8","topStock9","topStock10"];
	// Backup tickers
	var tickers = ["FUN" , "AAPL" , "DOW"];

	var STOCKS_WIDTH = 250;

	// set the position of the stocks
	setStocks(stocks);
	function setStocks(stocks) {
		var i = 0;
		var sum = -1 * STOCKS_WIDTH;
		for(i; i<= stocks.length - 1; i++) {
			$("#" + stocks[i]).offset({'left':sum});
			sum += STOCKS_WIDTH;
		}
	}

	// move stock every 60th of a second
	var timer = setInterval(function() {
		moveStocks(stocks);
	},60);

	var count = 0;

	// move the stock
	function moveStocks(stocks) {
		var i = 0;

		for (i; i <= stocks.length - 1; i++) {
			var offset = $("#" + stocks[i]).offset();
			var temp = offset.left + 1;
			$("#" + stocks[i]).offset({'left':temp});
			if (count >= STOCKS_WIDTH) {
				var holder = stocks.pop();
				stocks.unshift(holder);
				$("#" + holder).offset({'left':(-1 * STOCKS_WIDTH)});
				count = 0;
			}
		}
		count += 1;
	}

	// if the window changes size readjust the stocks offset
	$(window).resize(function() {
		if(this.resizeTO) clearTimeout(this.resizeTO);
		clearInterval(timer);
		this.resizeTO = setTimeout(function() {
			$(this).trigger('resizeEnd');
		}, 10);
	});

	// calculate and set stocks offset
	$(window).bind('resizeEnd', function() {
		var i = 0;
		for (i; i <= stocks.length - 1; i++) {
			var offset = $("#" + stocks[i]).offset();
			var temp = offset.left;
			$("#" + stocks[i]).offset({'left':temp});
		}
		timer = setInterval(function() {
			moveStocks(stocks);
		},60);
	});

	updateStocks(stocks, tickers);
	function updateStocks(stocks, tickers) {
		// create list of StockInfo objects
		var i = 0;
		var stockInfoSet = [];
		var count = 0;
		for (i; i < 10; i++) {
			if (count >= 2) {
				count = 0;
			}else {
				count++;
			}
			var stockInfo = new StockInfo("'" + tickers[count] + "'",null,null,i);
			stockInfo.updateCurrent();
		}
	}
});