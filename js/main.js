function resizeSideBar() {
	$("#sideBarId").height(0);
	var main = $("#mainDiv").height();
	var doc = $(window).height();
	if (main >= doc) {
		$("#sideBarId").height(main);
	}else {
		$("#sideBarId").height(doc);
	}
}

function portfolioShow() {

}

function stockShow() {
	
}