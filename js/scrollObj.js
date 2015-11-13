$(document).ready(function() {
	
	$("#topRowStocks").offset({'left':'0'});

	var stocks = ["topStock1","topStock2","topStock3","topStock4","topStock5","topStock6","topStock7","topStock8","topStock9","topStock10"];

	setInterval(function() {
		moveStocks(stocks);
	},10);

	function moveStocks(stocks) {
		i = 0;
		
		for (i; i <= stocks.length - 1; i++) {
			var offset = $("#" + stocks[i]).offset();
			var temp = offset.left + 1;
			$("#" + stocks[i]).offset({'left':temp});
			if (offset.left > window.innerWidth) {
				var holder = stocks.pop();
				console.log(stocks);
				stocks.unshift(holder);
				console.log(stocks);
				$("#" + holder).offset({'left':"0"});
			}
		}
	}

		/*
		console.log("panel1: " + $("#panel1").position().left);
		console.log("panel2: " + $("#panel2").position().left);
		console.log("panel3: " + $("#panel3").position().left);
		console.log("panel4: " + $("#panel4").position().left);
		console.log("panel5: " + $("#panel5").position().left);
		if ($("#panel1").position().left >= windowWidth) {
			$("#panel1").css({'left':'0'});	
		}
		if ($("#panel2").position.left >= windowWidth) {
			$("#panel2").css({'left':'0'});	
		}
		if ($("#panel3").position.left >= windowWidth) {
			$("#panel3").css({'left':'0'});	
		}
		if ($("#panel4").position.left >= windowWidth) {
			$("#panel4").css({'left':'0'});	
		}
		if ($("#panel5").position.left >= windowWidth) {
			$("#panel5").css({'left':'0'});	
		}
		$("#panel1").animate({
			left: "+=" + windowWidth + "px",
			easing: "linear"
		},15000,"linear");
		$("#panel2").animate({
			left: "+=" + windowWidth + "px",
			easing: "linear"
		},15000,"linear");
		$("#panel3").animate({
			left: "+=" + windowWidth + "px",
		},15000,"linear");
		$("#panel4").animate({
			left: "+=" + windowWidth + "px",
		},15000,"linear");
		$("#panel5").animate({
			left: "+=" + windowWidth + "px",
		},15000,"linear",resetAnim);
*/
	
});