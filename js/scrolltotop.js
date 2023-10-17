	/* Scroll to Top */
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('body').addClass('show-back-to-top');
		} else {
			$('body').removeClass('show-back-to-top');
		}
	});
	$('#scroll').click(function () {
		event.preventDefault();
		$('#content').attr('tabindex','-1').focus();
		$("html, body").animate({ scrollTop: 0 });
	});

	$('a[href="#name"]').click(function () {
        event.preventDefault();
        $('#name').focus();
        $("html, body").animate({ scrollTop: 50 });
    });