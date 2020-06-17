$(function() {
	Panels.init();
});


var Panels = {
	init: function() {
		if ($('.panel').length != 0) {
			$('.panel_content').hide();
			this.bind();
		}
	},
	bind: function() {
		$('.title_bar > h2').click(function(){
			$(this).parents('.panel').children('.panel_content').slideToggle('fast');
			$(this).parents('.panel').toggleClass('active');
			return false;
		});
	}
}
