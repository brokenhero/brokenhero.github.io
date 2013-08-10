$(function () {
	// image information
	$('#op-info').tooltip();
	
	$('[data-type="twitter"]').wrapInner(function (index) {
		return '<a href="http://www.twitter.com/' + (this.getAttribute('data-href') || this.innerHTML) + '"></a>';
	});
	
	
	
	// post //
	
	// hach post DOM
	$('ul.conversation > li').wrapInner('<span />');
	$('ul.act > li').wrapInner('<div><span /></div>');
	
	// hack hashtags
	var headerHeight = $('#header').height();
	$(body).on('click', '[href^=#]', function (e) {
		var $target = $(this.getAttribute('href'));
		e.preventDefault();
		$(window).scrollTop($target.offset().top - headerHeight - 6);
	});
	
	// wire references
	$('#entry cite').map(function (index) {
		return $('<li id="cite-note-' + (++index) + '"><a href="#cite-ref-' + index + '">^</a> ' + this.innerHTML + '</li>')[0];
	}).appendTo('#references > ol');
	
	$('#entry cite').wrap(function (index) {
		return '<sup id="cite-ref-' + (++index) + '" />';
	}).before(function (index) {
		return '<a class"cite-link" href="#cite-note-' + (++index) + '">[' + index + ']</a>';
	});
	
	if ($('#references > ol').is(':empty'))
		$('#references').detach();
	
	$('#cast').appendTo('#entry');
	$('#last').appendTo('#entry');
});
