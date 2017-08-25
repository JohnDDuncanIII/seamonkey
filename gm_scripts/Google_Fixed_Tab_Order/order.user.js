﻿// ==UserScript==
// @name        Google Fixed Tab Order
// @namespace   google.com
// @include     https://www.google.com/search?*
// @include     https://www.google.com/webhp?*
// @version     2.0
// @grant       none
// ==/UserScript==

(function ()
{
	var order = ["Web", "Images", "Videos", "News", "Maps", "Books", "Apps", "Shopping", "Flights"];

	function observerEnable()
	{
		observer.observe(document.querySelector("#main"), { childList: true, subtree: true });
	}
	function observerDisable()
	{
		observer.disconnect();
	}
	var observer = new MutationObserver(function(mutations)
	{
		observerDisable();
		fixTabs();
		observerEnable();
	});
	observerEnable();
	
	function fixTabs()
	{
		var parent = document.querySelector("#hdtb_msb");
		if (parent == null)
			return;

		var tabs = parent.querySelectorAll(".hdtb_mitem");

		var more = document.querySelector("#hdtb_more");
		var tools = document.querySelector("#hdtb_tls");

		while (parent.firstChild)
			parent.removeChild(parent.firstChild);

		for (var i = 0; i < order.length; i++)
			for (var t = 0; t < tabs.length; t++)
				if (order[i] == tabs[t].textContent)
					parent.appendChild(tabs[t]);
					
		parent.appendChild(tools);
	}
	fixTabs();
})();

