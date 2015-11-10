*-----------------*
FILE: index.php
CREATED BY: Matthew Warner - 130151700
DESCRIPTION:
	
	This is the boiler templated used throughout the website display sidebar content on the left and the copntent of each tab in the main area. The main area is accessed through a div labeled as #mainDiv. This allows the content of the site to update and change while not constantly reloading the page. This allows the website to refresh the page constantly so that the user is constantly given the most recent and most accurate information.

*-----------------*
FILE: main.js
CREATED BY: Matthew Warner - 130151700
DESCRIPTION

	This file is used for javascript functions or content that is used throughout the entire website. Mainly this is used for loading the content chosen by the user via the sidebar into the #mainDiv. This is obtained by using an <a> link to a javascript function. The format used for the function names is the name of the sidebar ie "stocks" and show appended behind the name of the selected sidebar item. For example the user selects the stocks sidebar item than the function name is stockShow().

FUNCTION(S):

	resizeSideBar():

		PARAMETERS: N/A
		DESCRIPTION:

			This function is used to resize the sidebar to always extend the height of the window. The function obtains both the window height and the #mainDiv height. Then compares the height and sets the height of the sidebar to the height of which ever has a larger height.

		RETURN: N/A

	portfolioShow():

		PARAMETERS: N/A
		DESCRIPTION:

			This function is used to load the content portfolio.php into the #mainDiv. This allows the content to be loaded without the entire page being reloaded.

		RETURN: N/A

	stockShow();

		PARAMETERS: N/A
		DESCRIPTION:

			This function is used to load the content of stock.php into the #mainDiv. This allows the content to be loaded without the entire page being reloaded.

		RETURN: N/A

*-----------------*
FILE: signIn.php
CREATED BY: Matthew Warner - 130151700
DESCRIPTION:
	
	This is file is used for signing in the user. With the sign in contained within its own file it can be called throughout the project which allows the website to be a lighter version than having several instances of the same thing.

*-----------------*
FILE: tools.js
CREATED BY: Matthew Warner - 130151700
DESCRIPTION:
	
	This file is used for all of the different contents found within the website that need constant updating or changes after an event.

	FUNCTIONS:

		resizeSideBar()

			This function resizes the sidebar so that the height of the sidebar ALWAYS extends the height of the window. The function gathers both the #mainDiv height and the window height and compares which one is larger and sets the #sideBarId to the larger of the two.

*-----------------*
FILE: main.js
CREATED BY: Matthew Warner - 130151700
DESCRIPTION:
	
	This file is used for all of the javacsript needed in the template of the site. This includes the #sideBarId and the navigation bar located at the top of the window.

*-----------------*
FILE: stockgraphs.js
CREATED BY: Matthew Warner - 130151700
DESCRIPTION:
	
	This file is used as a utility. Its purpose is to dynamically create a line graph that can be included throughout the website.

*-----------------*
GENERAL NOTES:

	Reasoning for .load()

		The reason for .load() is for two reasons. This allows the content of the page to be loaded without the page to be loaded so that we can have a dynamic page that loads constantly. Since we need our page to load constantly. We cannot have an entire page constantly reload because the content would be loaded every half second which would effectively cause the site to have a white page constantly. This is also for efficiency in that if we only update the content that is changing than we can minimize the amount of content that is constantly being redownloaded and calculated.

*-----------------*
DEFINITIONS:

	#mainDiv:

		The #mainDiv is a div with the id of #mainDiv. This is the div found in the file index.php which allows the content of the site to be dynamically updated through loading the content into the #mainDiv. The #mainDiv dimension is col-md-10 and col-sm-9 . The height of #mainDiv is ALWAYS the height of the window.

	#sideBarId

		The #sideBarId is a div which is always located to the left of the window. This div is used to house all of the tab options within our site. It is used for the user to easily move around AdviseMe. The #sideBarId dimension is col-md-2 col-sm-3 and hidden-xs. With #sideBarId.height() ALWAYS extending the height of the window.

*-----------------*
FRAMEWORKS:

	Chart.js:

		This framework is contained under the file components with the name Chart.js-master. This framework is used primarly in the portfolio and stock content of the website. It is used for displaying asstetically pleasing graphs with the highest amount of information for the user. The framework uses primarly javascript for it functionality.

	Bootstrap:

		This framework is used to easly display information within the website. It is ONLY used for displaying the information in an clean and easy to use way. The framework uses classes for its functionality. 
		

*-----------------*
YAHOO FINANCE QUERIES AND RESULTS:

"select * from yahoo.finance.quotes where symbol in ('" + symbol + "')"
	-All general information including:
	-Ask
	-Bid
	-Change
	-Currency
	-Day Low
	-Day High
	-Day Range
	-And much more

Historical data:

select * from   yahoo.finance.historicaldata
         where  symbol    = "AAPL"
         and    startDate = "2012-09-11"
         and    endDate   = "2014-02-11"
         
Accessing the data: data.query.results.quote is an array of n elements that contains each dates historic infomation
Ex: data.query.results.quote[0].Close gives the closing price for 2014-02-11
The highest number value contains the start date quote. The lowest number value contains the end date quote
*-----------------*

*-----------------*
OBJECTS

NOTE: More will be added to this function later and it needs to be refined a bit. This is just a working concept

StockInfo(historical){
this.historicaldata = historical;
}

Usage: this.historical takes on the value of the historical values of a stock

Creating a new StockInfo object:
var StockInfo1 = new StockInfo(data.query.results.quote)
