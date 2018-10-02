let url = [
	'./js/select-option.js'
];

(function () {
	url.forEach(link=>{
		let script = document.createElement("script"); // Make a script DOM node
		script.src = link; // Set it's src to the provided URL
		document.head.appendChild(script); // Add it to the end of the head section of the page
		// (could change 'head' to 'body' to add it to the end of the body section instead)
	});
}());