$(function () {
	//µ¼º½²Ëµ¥
	$.nav(".nav li");
	footer ();
});

//--------------------------------------------------
//nav
jQuery.nav = function(navhover) {
	
	$(navhover).prepend("<span></span>");
	$(navhover).each(function() { 
		var linkText = $(this).find("a").html(); 
		$(this).find("span").show().html(linkText); 
	}); 
	
	$(navhover).hover(function() {	
		$(this).find("span").stop().animate({ 
			marginTop: "-12" 
		}, 245);
		/* ÐÞ¸´ie6ÏÂbug */
		$(this).find("a").stop().animate({ 
			top: "0" 
		}, 245);
		/* ÐÞ¸´ie6ÏÂbug end */
	} , function() { 
		$(this).find("span").stop().animate({
			marginTop: "0" 
		}, 245);
		/* ÐÞ¸´ie6ÏÂbug */
		$(this).find("a").stop().animate({ 
			top: "12" 
		}, 245);
		/* ÐÞ¸´ie6ÏÂbug end */
	});	
};

//footer

function footer () {
	var view_height;
	var get_height = $("body").height();
	//alert(get_height);
	var oFotter = $("#footer");
	function view_resize () {
		view_height = $(window).height();
		if (get_height + 50 < view_height) {
			//alert(1);
			oFotter.css({
				"position":"absolute",
				"left":"0px",
				"bottom":"0px"
			});
		}else{
			oFotter.css({
				"position":"static"
			});
		}
	}
	view_resize();
	$(window).resize(function () {
		view_resize();
	});
}