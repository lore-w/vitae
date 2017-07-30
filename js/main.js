/**
 * Created by LrEmo on 10/12/2014.
 */

define(function (require,exports,module) {

    var $ = require('jquery');

    $(function () {

        require('./style.js').style();

        //Loading

        (function (srcval) {
            var tempImg = new Image ();
            tempImg.src = srcval;
            if (document.all) {
                tempImg.onreadystatechange=function () {
                    if(this.readyState=="loaded" || this.readyState=="complete"){
                        completed();
                    }
                }

            }else{
                tempImg.onload=function () {
                    completed();
                }
            }
        })('./style/images/tree4.png');

        function completed () {
            $('.btn').text('Enter').addClass('completed');

            $(".main,#view").css('visibility','visible');

            $('.completed').click(function () {

                require.async('jquery.easing',function () {

                    $("#loading").animate({
                        "top" : 2400
                    },{
                        easing: "swing",
                        duration: 5000
                    });
                });

            });

        };

        //视差滚动

        var oView_snow = $(".view_snow");
        var oLand = $(".land");
        var oTree = $(".tree");
        var oMain = $(".main");
        var obj = require('./parallax.js');

        var start =
            new obj.Parallax([
                {'name':oView_snow,'rate':0.8},
                {'name':oLand,'rate':0.3},
                {'name':oTree,'rate':1.5},
                {'name':oMain,'rate':1.0}
            ]);

        start.parallax();

        //环形图
        var data  = [
            {
               'name':'javascript',
               'color':'#DF593B',
               'value':'80'
            },
            {
               'name':'html/css',
               'color':'#297DB4',
               'value':'95'
            },
            {
                'name':'photoshop',
                'color':'#9BC249',
                'value':'40'
            }
        ];

        var paper = require('./raphael.js');

        var draw = new paper.Graph('raphael',120,data);

        draw.raphael();

        //立方体盒子

        var box_perspective = $(".box_perspective");

        require.async('jquery.easing',function () {
            up ();
        });

        function up () {
            box_perspective.animate({
                "top":15
            },{
                easing: "swing",
                duration: 2000,
                complete: down
            });
        };

        function down () {
            box_perspective.animate({
                "top":35
            },{
                easing: "swing",
                duration: 2000,
                complete: up
            });
        }

    });

});

