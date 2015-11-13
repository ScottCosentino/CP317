$(document).ready(function() {
	
	var stocks = ["topStock1","topStock2"];

	setInterval(function() {
		moveStocks(stocks);
	},500);

	function moveStocks(stocks) {
		i = 0;
		
		for (i; i < stocks.length; i++) {
			var temp = $("#" + stocks[i]).position().left + 1;
			$("#" + stocks[i]).css({'left':temp});
			console.log(stocks[i]);
			console.log(i);
			console.log(temp);
			console.log($("#" + stocks[i]).position().left);
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