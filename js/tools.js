function resizeSideBar() {
	$("#sideBarId").height(0);
	var main = $("#mainDiv").height();
	var win = $(window).height();
	if (main >= win) {
		$("#sideBarId").height(main);
	}else {
		$("#sideBarId").height(win);
	}
	var size = $("#sideBarId").height();
	alert(size);
}