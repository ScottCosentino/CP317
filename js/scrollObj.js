$(document).ready(function() {
	
	//$("#topRowStocks").offset({'left':'-200'});

	var stocks = ["topStock1","topStock2","topStock3","topStock4","topStock5","topStock6","topStock7","topStock8","topStock9","topStock10"];

	var STOCKS_WIDTH = 250;

	setStocks(stocks);
	function setStocks(stocks) {
		var i = 0;
		var sum = -1 * STOCKS_WIDTH;
		for(i; i<= stocks.length - 1; i++) {
			$("#" + stocks[i]).offset({'left':sum});
			sum += STOCKS_WIDTH;
		}
	}

	var timer = setInterval(function() {
		moveStocks(stocks);
	},60);

	var count = 0;

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

	$(window).resize(function() {
		if(this.resizeTO) clearTimeout(this.resizeTO);
		clearInterval(timer);
		this.resizeTO = setTimeout(function() {
			$(this).trigger('resizeEnd');
		}, 10);
	});

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
});