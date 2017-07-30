/**
 * Created by LrEmo on 10/12/2014.
 */

define(function (require,exports,module) {

    var $ = require('jquery');

    function style () {
        var oView = $('<div id="view"><div class="view_after"></div></div>');

        var oView_snow = $('<div class="view_snow">'+
                             '<div class="forest"></div>'+
                             '<div class="snow"></div>'+
                           '</div>');

        var oLand = $('<div class="land"></div>');

        var oTree = $('<div class="tree">'+
                        '<img class="tree1" src="./style/images/tree1.png" />'+
                        '<img class="tree2" src="./style/images/tree2.png" />'+
                        '<img class="tree3" src="./style/images/tree3.png" />'+
                        '<img class="tree4" src="./style/images/tree4.png" />'+
                      '</div>');

        oView.append(oView_snow);

        oView.append(oLand);

        oView.append(oTree);

        var oBox_wrap = $("#box");

        oBox_wrap.append(oView);

        //选取元素
        var snow = $(".snow");
        var land = $(".land");

        var tree1 = $(".tree1");
        var tree2 = $(".tree2");
        var tree3 = $(".tree3");
        var tree4 = $(".tree4");

        var oCard = $(".main>div");

        var oCardLast = $(".main>div:last");

        if (Modernizr.csstransforms3d) {

            var box = require('./box_3d.js').Box_translate3d;

            box.translate();

        }else{

            var $bar = $('<span class="bar">您的浏览器好像有点老呀(；′⌒`)</span>');

            oBox_wrap.append($bar);
        }

        var oBox = $(".box_3d");

        function resize () {
            var wW = $(window).width();
            var wH = $(window).height();
            snow.css({
                "height":wH-531+188
            });

            land.css({
                "height":wH-531+248
            });

            tree1.css({
                "top":0,
                "left":1.5*wW
            });

            tree2.css({
                "top":0,
                "left":3.5*wW
            });

            tree3.css({
                "top":0,
                "left":5.5*wW
            });

            tree4.css({
                "top":0,
                "left":7.0*wW
            });

            for (var i=0;i<oCard.length-1;i++) {
                oCard.eq(i).css({
                    "left":i*wW+300,
                    "top":"70px"
                });
            }
            oCardLast.css({
                "left":7*wW-580,
                "top":"70px"
            });

            oBox.css({
                "left":6*wW+200,
                "top":"200px"
            });
        };
        resize();
        $(window).resize(function () {
            setTimeout(function () {
                resize();
            },300)
        });

    }
    exports.style = style;
});

