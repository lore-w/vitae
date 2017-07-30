/**
 * Created by LrEmo on 10/12/2014.
 */

define(function (require,exports,module) {

    var $ =require('jquery');

    require('mousewheel')($);

    var Parallax = function (data) {
        this.data = data;
        this.index = 0;//索引
        this.num = 48;//最多滚动48次
    };

    Parallax.prototype = {
        constructor : Parallax,
        parallax : function () {
            var _this_data = this.data;
            var _this_index = this.index;
            var _this_num = this.num;
            var wW = $(window).width();
            $(window).resize(function () {
                setTimeout(function () {
                    wW = $(window).width();
                },300)
            });

            //走过的路
            var $step = $('<div class="step"></div>');

            var $snowman = ('<span class="snowman"></span>');

            $(".main").append($snowman);

            $(".main").append($step);

            (function () {
                $(document).mousewheel(function (event, delta, deltaX, deltaY) {

                    if (delta > 0) {	//向前滚动
                        left ();
                    } else {	//向后滚动
                        right ();
                    }

                    $step.stop().animate({
                        "width":wW/8*_this_index+450
                    });

                    for (var i=0;i<_this_data.length;i++) {
                        _this_data[i].name.css({
                            'left' : -_this_index*_this_data[i].rate*(wW/8)
                        });
                    }

                });
                function left () {
                    _this_index--;
                    if (_this_index < 0) {
                        _this_index = 0;
                        return;
                    };
                };

                function right () {
                    _this_index++;
                    if (_this_index > _this_num) {
                        _this_index = _this_num;
                        return;
                    };
                };

            })();

        }

    };

    exports.Parallax = Parallax;

});
