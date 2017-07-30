/*
 *author:lremo
 *time:2013.8.30
*/

$(function () {
	//导航
	$('.nav li a').click(function () {
		$(".nav li a").removeClass("nav_active");
		$(this).addClass("nav_active");
	});
	
	//考勤管理>>表格展开折叠特效
	var boxTr,last,first,leave;
	/* 参数说明：
	   boxTr：用来存放新创建的外层的tr
	   last： 用来记录鼠标离开tr时的索引
	   first：用来记录鼠标移入tr时的索引
	   leave：用来记录鼠标移出整个table
	*/
	leave=0;
	oTr_check=$(".tab_info .trParent");
	oTr_task=$(".tab_task .trParent");
	creatElement(oTr_check,"check_out");
	creatElement(oTr_task,"task");
	function creatElement (obj,theme){
		for (var i=0; i<obj.length; i++){
			obj[i].index=i;
		}
		obj.hover(function () {
			first=this.index;
			if (first==last && leave==0) {
				return;
			}else{
				//alert("移出了");
				$(".box_tr").remove();
				if (theme=="check_out") {
					boxTr=$("<tr class='box_tr'><td colspan='8'><table width='90%' align='center' bgcolor='#dddddd' class='add_tab'><tr height='33' class='firstTr'></tr></table></td></tr>");
					$(this).after(boxTr);
					$(".firstTr").append("<td width='5%'>编号</td>");
					$(".firstTr").append("<td width='15%'>拜访公司</td>");
					$(".firstTr").append("<td width='15%'>拜访时间</td>");
					$(".firstTr").append("<td width='10%'>联系人</td>");
					$(".firstTr").append("<td width='15%'>联系电话</td>");
					$(".firstTr").append("<td width='15%'>签入时间</td>");
					$(".firstTr").append("<td width='15%'>签出时间</td>");
					$(".firstTr").append("<td width='10'>备注</td>");
				
					for (var i=0; i<5; i++) {
						$(".add_tab").append("<tr height='33' class='add_tr'></tr>");
					}
			
					var valTab={
						id:"01",
						company:"输入拜访公司",
						beginTime:"输入拜访时间",
						people:"输入联系人",
						tel:"输入联系电话",
						inTime:"输入签入时间",
						outTime:"输入签出时间",
						otherInfo:"输入备注"
					};
				}else if (theme=="task") {
					boxTr=$("<tr class='box_tr'><td colspan='11'><table width='90%' align='center' bgcolor='#dddddd' class='add_tab'></table></td></tr>");
					$(this).after(boxTr);
					$(".add_tab").append("<tr height='33'><td style='border-bottom:none;' colspan='4'><div class='trLeft'><span class='tr_must'>*</span>申请时间</div><span class='tr_span'>：</span><div class='trRight'>2013.8.20&nbsp;&nbsp;15.30</div></td></tr>");
					$(".add_tab").append("<tr height='33'><td style='border-bottom:none;' colspan='4'><div class='trLeft'><span class='tr_must'>*</span>申请理由</div><span class='tr_span'>：</span><div class='trRight'>*******</div></td></tr>");
					$(".add_tab").append("<tr height='33'><td colspan='4'><div class='trLeft'><span class='tr_must'>*</span>日志</div><span class='tr_span'>：</span><div class='trRight'>***</div></td></tr>");
					$(".add_tab").append("<tr height='33' class='firstTr'></tr>");
					$(".firstTr").append("<td width='10%'>编号</td>");
					$(".firstTr").append("<td width='30%'>处理人</td>");
					$(".firstTr").append("<td width='30%'>动态</td>");
					$(".firstTr").append("<td width='30%'>日期</td>");
				
					for (var i=0; i<5; i++) {
						$(".add_tab").append("<tr height='33' class='add_tr'></tr>");
					}
			
					var valTab={
						id:"01",
						people:"处理人",
						status:"拒绝",
						time:"2013.8.10"
					};
				
				}
				for (var i in valTab) {
					$(".add_tr").append("<td>"+valTab[i]+"</td>");
				}
			}
		},function () {
			last=this.index;
		});
		
		$(".tab").mouseleave(function () {
			$(".box_tr").remove();
			leave=1;
		});
	};
	
	
	//内容区域选项卡切换
	//添加索引
	$(".tabIndex:eq(0)").css("display","block");
	var otabIndex=$(".tabIndex");
	for (var i=0; i<otabIndex.length; i++) {
		otabIndex[i].index=i;
	}
	$(".taskTab span").click(function () {
		if ($(this).index()==0) {
			$(".excel_show").css("display","block");
		}else{
			$(".excel_show").css("display","none");
		}
		if ($(this).index()==5) {
			calendar();
		}
		$(".taskTab span").removeClass("taskTab_active");
		$(this).addClass("taskTab_active");
		otabIndex.css("display","none");
		$(otabIndex[$(this).index()]).css("display","block");
	});
	
	//添加任务输入判断
	$(".search_keyword").focus(function () {
		if ($(this).val()=="输入名称、地址、联系人、电话查询") {
			$(this).val("").css("color","#000");
		}
	});
	$(".search_keyword").blur(function () {
		if ($(this).val()=="") {
			$(this).val("输入名称、地址、联系人、电话查询").css("color","#afafaf");
		}
	});
	
	//消息管理
	//设置消息管理接收人先等处宽度
	function mail_setWidth () {
		var mail_setWidth=$(".news_content").width();
		$(".mail_setWidth").css("width",mail_setWidth-70);
		$(".mail_setWidth").css("max-width",mail_setWidth-70);
	};
	mail_setWidth();
	$(window).resize(function () {
		mail_setWidth();
	});
	
	//消息管理>人员列表
	//折叠效果
	var oDepartment=$(".treeLi_first a");
	var oPeople=$(".treeLi_second li");
	$(".peo_icon").click(function (event) {
		event.preventDefault();
		event.stopPropagation();
		if ($(this).hasClass("mark")){
			$(this).parent("a").removeClass("peoList_active").next("ul").css("display","none");
			$(this).removeClass("mark");
		}else{
			$(this).parent("a").addClass("peoList_active").next("ul").css("display","block");
			$(this).addClass("mark");
		}
		
	});
	
	//获取收件人列表
	function getPeo_list () {
		var Aaccept=[];
		var acceptList=$(".accept_peo li");
		for (var i=0; i<acceptList.length; i++) {
			Aaccept.push($(acceptList[i]).text());
		}
		return Aaccept;
	}
	
	//点击添加收件人
	oPeople.click(function () {
		Aaccept =getPeo_list();
		var peopleVal=$(this).text();
		for (var j=0; j<Aaccept.length; j++) {
			if (Aaccept[j]==peopleVal) {
				return;
			}
		}
			$(".accept_peo").append("<li>"+"<span class='people_del'></span>"+peopleVal+"</li>");
	});
	//点击添加部门
	oDepartment.click(function (event) {
		Aaccept =getPeo_list();
		event.preventDefault();
		var departmentVal=$(this).text();
		for (var j=0; j<Aaccept.length; j++) {
			if (Aaccept[j]==departmentVal) {
				return;
			}
		}
		$(".accept_peo").append("<li class='department'>"+"<span class='people_del'></span>"+departmentVal+"</li>");
	});
	
	//删除收件人
	$(".people_del").live("click",function () {
		$(this).parent("li").remove();
	});
	//消息列表下拉框
	$(".add_slide").click(function () {
		if ($(this).hasClass("add_slide_act")){ 
			$(".news_slide").css("visibility","hidden");
			$(this).removeClass("add_slide_act");
			$(".news_page").css({
				"position":"absolute",
				"top":"340px",
				"left":"50%",
				"margin-left":"-214px"
			});
		}else{
			$(".news_slide").css("visibility","visible");
			$(this).addClass("add_slide_act");
			$(".news_page").css({
				"position":"relative",
				"top":"0px"
			});
		}
	});
	
	$(".slide_btn").click(function () {
		$(".news_slide").css("visibility","hidden");
		$(".add_slide").removeClass("add_slide_act");
		$(".news_page").css({
			"position":"absolute",
			"top":"340px",
			"left":"50%",
			"margin-left":"-214px"
		});
	});
	
	
	//公司设置页面单选按钮
	$(".radio").click(function (e) {
		e.preventDefault();
		$(this).siblings("a").children("span").css("background-position","-134px -226px");
		$(this).children("span").css("background-position","-119px -226px");
	});
	
	//分页
	$(".pages a:eq(0)").css("width","52px");
	$(".pages a:eq(1)").css("width","52px");
	$(".pages a:last").css("width","52px");
	$(".pages a:last").prev("a").css("width","52px");
	
	//日历
    function calendar () {

        var oDate=new Date();

        var nowYear=oDate.getFullYear();//年
        var nowMonth=oDate.getMonth()+1;//月
        //var nowDay=oDate.getDate();     //日
        var sysYear=oDate.getFullYear();
        var sysMonth=oDate.getMonth()+1;
        var sysDay=oDate.getDate();

        $(".calendar_time").text(nowYear+"年"+nowMonth+"月");
        creatTab();

        //向前一个月
        function prev () {
            nowMonth--;
            if (nowMonth==0) {
                nowMonth=12;
                nowYear--;
            }
            $(".calendar_time").text(nowYear+"年"+nowMonth+"月");
            creatTab();
        }
        //向前一个月end

        //向后一个月
        function next () {
            nowMonth++;
            if (nowMonth==13) {
                nowMonth=1;
                nowYear++;
            }
            $(".calendar_time").text(nowYear+"年"+nowMonth+"月");
            creatTab();
        }
        //向后一个月end

        //上一个（箭头）
        $(".prev").click(function () {
            prev ();
        });
        //下一个（箭头）
        $(".next").click(function () {
            next ();
        });
        //上一个月（浅色字）
        $(".prevMonth").live("click",function () {
            prev();
        });
        //下一个月（浅色字）
        $(".nextMonth").live("click",function () {
            next();
        });

        //创建表格
        function creatTab () {

            $(".calendarBox").remove();

            //获取当月天数
            oDate.setFullYear(nowYear,nowMonth,0);
            var nowMonth_num=oDate.getDate();

            //当前月上一个月天数
            oDate.setFullYear(nowYear,nowMonth-1,0);
            var prevMonth_num=oDate.getDate();

            //获取当月第一天是星期几
            oDate.setFullYear(nowYear,nowMonth-1,1);
            var nowWeek=oDate.getDay();

            $(".calendar_tab_h").after("<table class='calendarBox' width='95%' align='center'></table>");

            if (nowWeek==0) {
                nowWeek=7;
            }

            $(".calendarBox").append("<tr class='creatTr'></tr>");

            //创建第一行tr
            /*
             for (var i=0; i<nowWeek-1; i++) {
             $(".creatTr").append("<td class='null prevMonth' width='14%'>"+(prevMonth_num-(nowWeek-1)+i+1)+"</td>");
             }
             for (var i=1; i<=8-nowWeek; i++) {
             $(".creatTr").append("<td class='normal' width='14%'>"+i+"</td>");
             }; */

            //创建第一行tr
            for (var i=1; i<=7; i++) {
                if (i<nowWeek) {
                    $(".creatTr").append("<td class='null prevMonth' width='14%'>"+(prevMonth_num-(nowWeek-1)+i)+"</td>");
                }else{
                    $(".creatTr").append("<td class='normal' width='14%'>"+(i-nowWeek+1)+"</td>");
                }
            }
            //创建剩余行tr
            for (var i=0; i<5; i++) {
                $(".calendarBox").append("<tr class='creatTr"+i+"'></tr>");
                //创建列
                for (var j=1; j<=7; j++) {
                    var otherTd=(i+1)*7-(nowWeek-1)+j;
                    if (otherTd>nowMonth_num) {
                        $(".creatTr"+i).append("<td class='null nextMonth'>"+(otherTd-nowMonth_num)+"</td>");
                    }else{
                        $(".creatTr"+i).append("<td class='normal'>"+otherTd+"</td>");
                    }
                }
            }

            //给当前月加属性&突出显示当前天
            for (var i=0; i<nowMonth_num; i++) {
                $(".normal")[i].time=nowYear+"."+nowMonth+"."+(i+1);
                if ($(".normal")[i].time==sysYear+"."+sysMonth+"."+sysDay) {
                    $($(".normal")[i]).css("color","red");
                }
            }
        }
    };
    /* 参数说明：
       now***：表示当前的时间（比如点击next）
       sys***：表示系统时间（不可通过点击改变）
       nowMonth_num： 当前月的天数
       prevMonth_num：当前月的上一个月天数
       nowWeek：当前月第一天是星期几
       otherTd：存储从第二行开始的日期
    */

	
	
	//给表格加点击事件
	$(".calendarBox tr td:not('.null')").live("click",function () {
		if ($(this).hasClass("mark")) {
			$(this).css({
				"background":"#f1f1f1",
				"color":"#acacac",
				"border-bottom":"1px solid #e0e0e0",
				"border-right":"1px solid #e0e0e0"
			});
			$(this).removeClass("mark");
		}else{
			$(this).css({
				"background":"#2e9577",
				"color":"#fff",
				"border-bottom":"1px solid #fff",
				"border-right":"1px solid #fff"
			});
			$(this).addClass("mark");
			alert(this.time);
		}
	});
	
	//登录页-($('.loginBox').width()/2)
	$(".modfiy_password").click(function (e) {
		e.preventDefault();
		$(".loginBox").css("display","none");
		$(".other_loginBox").css("display","block");
	});
	$(".modify_back").click(function () {
		$(".loginBox").css("display","block");
		$(".other_loginBox").css("display","none");
	});
	
	//权限管理
	var classify_ul=$(".box_info ul li").length*105;
	$(".box_info ul").css({
		"width":classify_ul
	});
	var classifyIndex=0;
	$(".classify_prev").click(function () {
		if ($(".box_info ul li").length<=8) {
			return;
		}
		classifyIndex++;
		//alert(classifyIndex);
		if (classifyIndex==1) {
			classifyIndex=-($(".box_info ul li").length-1);
		}
		$(".box_info ul").css({
			"left":classifyIndex*105
		})
		
	});
	$(".classify_next").click(function () {
		if ($(".box_info ul li").length<=8) {
			return;
		}
		classifyIndex--;
		if (-classifyIndex==$(".box_info ul li").length) {
			classifyIndex=0;
		}
		$(".box_info ul").css({
			"left":classifyIndex*105
		})
		
	});
	
	$(".box_info ul li").click(function () {
		$(".box_info ul li").removeClass("act");
		$(this).addClass("act");
	});
})