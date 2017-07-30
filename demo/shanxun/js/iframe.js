$(function () {
	function set_size () {
	
		//获取可视区域宽高
		var d_width=$(window).width();
		var d_height=$(window).height();
		//alert(d_width);//不要删除
		
		//左边
		$("#box_left").css({
			"position":"relative",
			"width":"245px",
			"height":"100%",
			"background":"#222222",
			"float":"left"
		});
		
		//左边导航
		$(".box_left_nav").css({
			"height":d_height-105,
			"width":"235px",
			"position":"absolute",
			"top":"105px",
			"left":"5px",
			"overflow":"auto"
		});
		
		//右边
		$("#box_right").css({
			"float":"right",
			"background":"#ebf1f0",
			"height":"100%",
			"width":d_width-245
		});
		
		//右边头部
		$("#box_top").css({
			"width":d_width-245,
			"background":"#2e9577",
			"height":"65px"//最后一个不加","ie7下会报错
		});
		
		//右边内容
		$(".box_main").css({
			"height":d_height-65,
			"width":d_width-245
		});
		
		$("#main_bg").css({
			"height":d_height-65,
			"width":d_width-245
		});
	};
	set_size();
	$(window).resize(function () {
		set_size();
	});
});