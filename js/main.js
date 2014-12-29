$(document).ready(function(){
	var loader = document.getElementById('loader');

	svgPieTimer({
	    // Element (Required) SVG sub element to animate. Accepts array.
	    element: [loader],

	    // Duration (Optional) In milliseconds. Defaults to 1000.
	    duration: 1300,

	    // Loops (Optional) Defaults to 1. Set to 0 for infinite.
	    loops: 5
	});
});
