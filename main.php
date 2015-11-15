<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <title>AdviseMe</title>

    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
	<!-- Navigation -->
	<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom:0">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="index.php">AdviseMe</a>
		</div> <!-- /.navbar-header -->
	</nav> <!-- /.nav -->
	<div class="row">
		<!-- SideBar -->
		<div id="sideBar" class="col-md-2 col-sm-3 hidden-xs">
			<div class="navbar-default sidebar" role="navigation">
				<div id="sideBarId" class="sidebar-nav navbar-collapse">
					<ul class="nav" id="side-menu">
						<li>
							Portfolio
						</li>
						<li>
							Stocks
						</li>
						<li>
							News
						</li>
					</ul>
				</div>
			</div> <!-- /.navbar-default -->
		</div>
		<!-- MainArea -->
		<div id="firstCol" class="col-md-10 col-sm-9">
			<div id="firstRow" class="row">
				<div id="topRowStocks">
					<div id="topStock1" class="panel panel-default recStock">
						<div class="panel-body stockPanel">
							<div class="col-lg-5 ticker">
								<div class="row tickerPanel">
									<p id="tickerPanel1"></p>
								</div> <!-- /.ticker -->
							</div> <!-- /.col-5-lg -->
							<div class="col-lg-7 percent">
								<div class="row pricePanel"> 
									<p class="askPanel">Ask:</p>
									<p id="pricePanel1" class="askPrice"></p>
								</div> <!-- /.price -->
								<div class="row percentPanel">
									<p class="changePanel">Change:</p>
									<p id="upDownPanel1" class="changeP"></p>
									<!--<span class="upBoxTicker glyphicon glyphicon-triangle-top"></span>-->
								</div>
							</div> <!-- /.col-7-lg -->
						</div> <!-- /. panel-body -->
					</div>
					<div id="topStock2" class="panel panel-default recStock">
						<div class="panel-body stockPanel">
							<div class="col-lg-5 ticker">
								<div class="row tickerPanel">
									<p id="tickerPanel2"></p>
								</div> <!-- /.ticker -->
							</div> <!-- /.col-5-lg -->
							<div class="col-lg-7 percent">
								<div class="row pricePanel"> 
									<p class="askPanel">Ask:</p>
									<p id="pricePanel2" class="askPrice"></p>
								</div> <!-- /.price -->
								<div class="row percentPanel">
									<p class="changePanel">Change:</p>
									<p id="upDownPanel2" class="changeP"></p>
									<!--<span class="upBoxTicker glyphicon glyphicon-triangle-top"></span>-->
								</div>
							</div> <!-- /.col-7-lg -->
						</div> <!-- /. panel-body -->
					</div>
					<div id="topStock3" class="panel panel-default recStock">
						<div class="panel-body stockPanel">
							<div class="col-lg-5 ticker">
								<div class="row tickerPanel">
									<p id="tickerPanel3"></p>
								</div> <!-- /.ticker -->
							</div> <!-- /.col-5-lg -->
							<div class="col-lg-7 percent">
								<div class="row pricePanel"> 
									<p class="askPanel">Ask:</p>
									<p id="pricePanel3" class="askPrice"></p>
								</div> <!-- /.price -->
								<div class="row percentPanel">
									<p class="changePanel">Change:</p>
									<p id="upDownPanel3" class="changeP"></p>
									<!--<span class="upBoxTicker glyphicon glyphicon-triangle-top"></span>-->
								</div>
							</div> <!-- /.col-7-lg -->
						</div> <!-- /. panel-body -->
					</div>
					<div id="topStock4" class="panel panel-default recStock">
						<div class="panel-body stockPanel">
							<div class="col-lg-5 ticker">
								<div class="row tickerPanel">
									<p id="tickerPanel4"></p>
								</div> <!-- /.ticker -->
							</div> <!-- /.col-5-lg -->
							<div class="col-lg-7 percent">
								<div class="row pricePanel"> 
									<p class="askPanel">Ask:</p>
									<p id="pricePanel4" class="askPrice"></p>
								</div> <!-- /.price -->
								<div class="row percentPanel">
									<p class="changePanel">Change:</p>
									<p id="upDownPanel4" class="changeP"></p>
									<!--<span class="upBoxTicker glyphicon glyphicon-triangle-top"></span>-->
								</div>
							</div> <!-- /.col-7-lg -->
						</div> <!-- /. panel-body -->
					</div>
					<div id="topStock5" class="panel panel-default recStock">
						<div class="panel-body stockPanel">
							<div class="col-lg-5 ticker">
								<div class="row tickerPanel">
									<p id="tickerPanel5"></p>
								</div> <!-- /.ticker -->
							</div> <!-- /.col-5-lg -->
							<div class="col-lg-7 percent">
								<div class="row pricePanel"> 
									<p class="askPanel">Ask:</p>
									<p id="pricePanel5" class="askPrice"></p>
								</div> <!-- /.price -->
								<div class="row percentPanel">
									<p class="changePanel">Change:</p>
									<p id="upDownPanel5" class="changeP"></p>
									<!--<span class="upBoxTicker glyphicon glyphicon-triangle-top"></span>-->
								</div>
							</div> <!-- /.col-7-lg -->
						</div> <!-- /. panel-body -->
					</div>
					<div id="topStock6" class="panel panel-default recStock">
						<div class="panel-body stockPanel">
							<div class="col-lg-5 ticker">
								<div class="row tickerPanel">
									<p id="tickerPanel6"></p>
								</div> <!-- /.ticker -->
							</div> <!-- /.col-5-lg -->
							<div class="col-lg-7 percent">
								<div class="row pricePanel"> 
									<p class="askPanel">Ask:</p>
									<p id="pricePanel6" class="askPrice"></p>
								</div> <!-- /.price -->
								<div class="row percentPanel">
									<p class="changePanel">Change:</p>
									<p id="upDownPanel6" class="changeP"></p>
									<!--<span class="upBoxTicker glyphicon glyphicon-triangle-top"></span>-->
								</div>
							</div> <!-- /.col-7-lg -->
						</div> <!-- /. panel-body -->
					</div>
					<div id="topStock7" class="panel panel-default recStock">
						<div class="panel-body stockPanel">
							<div class="col-lg-5 ticker">
								<div class="row tickerPanel">
									<p id="tickerPanel7"></p>
								</div> <!-- /.ticker -->
							</div> <!-- /.col-5-lg -->
							<div class="col-lg-7 percent">
								<div class="row pricePanel"> 
									<p class="askPanel">Ask:</p>
									<p id="pricePanel7" class="askPrice"></p>
								</div> <!-- /.price -->
								<div class="row percentPanel">
									<p class="changePanel">Change:</p>
									<p id="upDownPanel7" class="changeP"></p>
									<!--<span class="upBoxTicker glyphicon glyphicon-triangle-top"></span>-->
								</div>
							</div> <!-- /.col-7-lg -->
						</div> <!-- /. panel-body -->
					</div>
					<div id="topStock8" class="panel panel-default recStock">
						<div class="panel-body stockPanel">
							<div class="col-lg-5 ticker">
								<div class="row tickerPanel">
									<p id="tickerPanel8"></p>
								</div> <!-- /.ticker -->
							</div> <!-- /.col-5-lg -->
							<div class="col-lg-7 percent">
								<div class="row pricePanel"> 
									<p class="askPanel">Ask:</p>
									<p id="pricePanel8" class="askPrice"></p>
								</div> <!-- /.price -->
								<div class="row percentPanel">
									<p class="changePanel">Change:</p>
									<p id="upDownPanel8" class="changeP"></p>
									<!--<span class="upBoxTicker glyphicon glyphicon-triangle-top"></span>-->
								</div>
							</div> <!-- /.col-7-lg -->
						</div> <!-- /. panel-body -->
					</div>
					<div id="topStock9" class="panel panel-default recStock">
						<div class="panel-body stockPanel">
							<div class="col-lg-5 ticker">
								<div class="row tickerPanel">
									<p id="tickerPanel9"></p>
								</div> <!-- /.ticker -->
							</div> <!-- /.col-5-lg -->
							<div class="col-lg-7 percent">
								<div class="row pricePanel"> 
									<p class="askPanel">Ask:</p>
									<p id="pricePanel9" class="askPrice"></p>
								</div> <!-- /.price -->
								<div class="row percentPanel">
									<p class="changePanel">Change:</p>
									<p id="upDownPanel9" class="changeP"></p>
									<!--<span class="upBoxTicker glyphicon glyphicon-triangle-top"></span>-->
								</div>
							</div> <!-- /.col-7-lg -->
						</div> <!-- /. panel-body -->
					</div>
					<div id="topStock10" class="panel panel-default recStock">
						<div class="panel-body stockPanel">
							<div class="col-lg-5 ticker">
								<div class="row tickerPanel">
									<p id="tickerPanel10"></p>
								</div> <!-- /.ticker -->
							</div> <!-- /.col-5-lg -->
							<div class="col-lg-7 percent">
								<div class="row pricePanel"> 
									<p class="askPanel">Ask:</p>
									<p id="pricePanel10" class="askPrice"></p>
								</div> <!-- /.price -->
								<div class="row percentPanel">
									<p class="changePanel">Change:</p>
									<p id="upDownPanel10" class="changeP"></p>
									<!--<span class="upBoxTicker glyphicon glyphicon-triangle-top"></span>-->
								</div>
							</div> <!-- /.col-7-lg -->
						</div> <!-- /. panel-body -->
					</div>
				</div>
			<div id="mainDiv" class="row"></div>
		</div>
	</div> <!-- /.row -->
</div>
	<footer class="footer">
		<div class="container">
			<p>&copy; AdviseMe 2014-<?php echo date("Y"); ?></p>
		</div>
	</footer>

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="js/stockInfoObj.js"></script>
    <!-- Tool Set -->
    <script src="js/tools.js"></script>
    <!-- Change Content of Whole Page -->
    <script src="js/main.js"></script>
    <script src="components/Highstock/js/highstock.js"></script>
	<script src="components/Highstock/js/modules/exporting.js"></script>
	<script src="js/scrollObj.js"></script>
	<script src="js/portfolio.js"></script>
	<script src="js/addNewStock.js"></script>
</body>
</html>