/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker')

const template = require('../quote.hbs');
if (document.readyState === 'ready' || document.readyState !== 'loading') {
	addQuote();
} else {
	document.addEventListener('DOMContentLoaded', addQuote);
}
function addQuote() {
	var quote = {
		quoteText: "If you want to push, then first pull. If you want to go up, first go down",
		quoteAuthor: "Unknown"
	};

	document.body.innerHTML = template(quote);
}