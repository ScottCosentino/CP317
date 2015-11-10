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
GENERAL NOTES:

	Reasoning for .load()

		The reason for .load() is for two reasons. This allows the content of the page to be loaded without the page to be loaded so that we can have a dynamic page that loads constantly. Since we need our page to load constantly. We cannot have an entire page constantly reload because the content would be loaded every half second which would effectively cause the site to have a white page constantly. This is also for efficiency in that if we only update the content that is changing than we can minimize the amount of content that is constantly being redownloaded and calculated.

*-----------------*
DEFINITIONS:

	#mainDiv:

		The #mainDiv is a div with the id of #mainDiv. This is the div found in the file index.php which allows the content of the site to be dynamically updated through loading the content into the #mainDiv. The #mainDiv dimension is col-md-2, col-sm-3 and hidden-xs. With #mainDiv.height() >=< window.height().