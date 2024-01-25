$(document).ready(function () {
		  $("a[href*=#]").on("click", function (e) {
			var anchor = $(this);
			$('html, body').stop().animate({
			  scrollTop: $(anchor.attr('href')).offset().top - $('#navbar').height()
			}, 777);
			e.preventDefault();
			return false;
		  });
		});
	var fiveSeconds = new Date().getTime() + 600000;
		$('#clock').countdown(fiveSeconds, {elapse: true})
			.on('update.countdown', function (event) {
				var $this = $(this);
				if (event.elapsed) {
					$this.html("00 : 00");
				} else {
					$this.html(event.strftime('<span class="time_remains" id="min">%M</span> : <span class="time_remains" id="sec">%S</span>'));
				}
		 });