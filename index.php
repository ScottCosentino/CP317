<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <title>AdviseMe</title>

    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    
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
	<!-- SideBar -->
	<div class="row">
		<div class="col-md-2 col-sm-3 hidden-xs">
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
		<div class="col-md-10 col-sm-9">
			<div id="mainDiv">
			</div>
		</div>
	</div> <!-- /.row -->

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <!-- Tool Set -->
    <script src="js/tools.js"></script>
    <!-- Change Content of Whole Page -->
    <script src="js/main.js"></script>
    <script src="components/Highstock/js/highstock.js"></script>
	<script src="components/Highstock/js/modules/exporting.js"></script>
	<script src="js/candleGraph.js"></script>
</body>
</html>