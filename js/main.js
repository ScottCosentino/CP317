$(document).ready(function() {
	portfolioShow();
});

function portfolioShow() {
	$("#mainDiv").load("php/portfolio.php" , function() {
		resizeSideBar();
	});
}

function stockShow() {
	
}