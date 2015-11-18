<div class="col-xs-12">
	<div class="row portfolio-first-row">
		<button type="button" class="btn btn-primary pull-right settings-btn">
			<span class="glyphicon glyphicon-wrench">
				Settings
			</span>
		</button>
		<a type="button" class="add-stock-btn btn btn-success pull-right" data-toggle="modal" href="html/addStockForm.html" data-target="#searchForm">
			<span class="glyphicon glyphicon-plus">
				Add New Stock
			</span>
		</a>
	</div>
	<div class="row">
		<input type="text" class="stock-search-input" id="inputs" style="color:white;" placeholder="Search...">
	</div>
	<div class="row">
		<?php
			session_start();
			$user = $_SESSION['user_id'];
			$servername = "localhost";
			$username = "root";
			$password = "";

			// connect to mysql
			$conn = mysql_connect($servername,$username,$password);

			if (!$conn) {
				die("connection failed" . mysql_error());
			}

			// select DB
			mysql_select_db("Advise", $conn);

			$Q = "
				SELECT stocks.ticker FROM `accounts`,`stocks` WHERE
				accounts.user_id='" . $user . "' AND stocks.user_id=" . $user . "
			";

			$query = mysql_query($Q);
			$i=1;

			if (!empty($query)) {
				while($row = mysql_fetch_assoc($query)) {
					echo"
						<div class='col-md-4 col-xs-12 histGraphArea'>
							<div class='row'>
								<button id='stockGraphId" . $i . "' class='btn btn-default viewDetailGraph'>View</button>
							</div>
							<div class='row'>
								<div id='stockGraph" . $i . "' style='width:100%; height:400px;'></div>
							</div>
						</div>
					";
					$i++ ;
				}
			}
		?>
	</div>
</div>

<!-- Search Stock Form -->
<div id="searchForm" class="modal fade" role="dialog" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">

		</div>
	</div>
</div>