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
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-10">
								<div class="row">
									<p id="tickerPanel1"></p>
								</div> <!-- /.ticker -->
								<div class="row"> 
									<p id="pricePanel1"></p>
								</div> <!-- /.price -->
							</div> <!-- /.col-10-lg -->
							<div class="col-lg-2">
								<div class="row">
									<p id="upDownPanel1"></p>
								</div> <!-- /.up/down -->
							</div> <!-- /.col-2-lg -->
						</div>
					</div> <!-- /. panel-body -->
				</div>
				<div id="topStock2" class="panel panel-default recStock">
					<div class="panel-body">
						<p>This is a bunch of text so yea have a good day</p>
					</div>
				</div>
				<div id="topStock3" class="panel panel-default recStock">
					<div class="panel-body">
						<p>This is a bunch of text so yea have a good day</p>
					</div>
				</div>
				<div id="topStock4" class="panel panel-default recStock">
					<div class="panel-body">
						<p>This is a bunch of text so yea have a good day</p>
					</div>
				</div>
				<div id="topStock5" class="panel panel-default recStock">
					<div class="panel-body">
						<p>This is a bunch of text so yea have a good day</p>
					</div>
				</div>
				<div id="topStock6" class="panel panel-default recStock">
					<div class="panel-body">
						<p>This is a bunch of text so yea have a good day</p>
					</div>
				</div>
				<div id="topStock7" class="panel panel-default recStock">
					<div class="panel-body">
						<p>This is a bunch of text so yea have a good day</p>
					</div>
				</div>
				<div id="topStock8" class="panel panel-default recStock">
					<div class="panel-body">
						<p>This is a bunch of text so yea have a good day</p>
					</div>
				</div>
				<div id="topStock9" class="panel panel-default recStock">
					<div class="panel-body">
						<p>This is a bunch of text so yea have a good day</p>
					</div>
				</div>
				<div id="topStock10" class="panel panel-default recStock">
					<div class="panel-body">
						<p>This is a bunch of text so yea have a good day</p>
					</div>
				</div>
			</di>
			</div>
			<div id="mainDiv" class="row">
			</div>
		</div>
	</div> <!-- /.row -->
	<footer class="footer">
		<div class="container">
			<p>Here is some text</p>
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
	<script src="js/candleGraph.js"></script>
	<script src="js/scrollObj.js"></script>
</body>
</html>