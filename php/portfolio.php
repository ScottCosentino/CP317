<div>
	<!-- Nav Tabs -->
	<ul class="nav nav-tabs" role="tablist">
		<li role="presentation" class="active">
			<a href="#myStocks" aria-controls="myStocks" role="tab" data-toggle="tab">
				My Stocks
			</a>
		</li>
		<li role="presentation">
			<a href="#myStats" aria-controls="myStats" role="tab" data-toggle="tab">
				My Stats
			</a>
		</li>
	</ul>
	<!-- Tab Panes -->
	<div class="tab-content">
		<div role="tabpanel" class="tab-pane active" id="myStocks">
			<div id="myStockDiv">
				<?php
					$x = 0;

					while ($x <= 2) {
						include("stockgraphs.php");
						$x++;
					}
				?>
			</div>
		</div> <!-- /.myStocks -->
		<div role="tabpanel" class="tab-pane" id="myStats">
		</div> <!-- /.myStats -->
	</div>
</div>