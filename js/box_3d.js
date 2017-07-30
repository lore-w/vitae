/**
 * Created by LrEmo on 10/12/2014.
 */

define(function (require,exports,module) {

    var $ = require('jquery');

    /**
     *@name Box_translate3d
     *@namespace Box_translate3d
     *@type {{translate: Function, box_animation: Function}}
     */

    var Box_translate3d = {

        /**
         * @name Box_translate3d.translate
         * @description 创建一个3维旋转的立方体
         * @function
         * @example
         * Box_translate3d.translate();
         */

        translate : function () {
            var speed = "",
                speedX = 0,
                speedY = -30,
                oWrap = $(".main"),
                oBox = $('<div class="box_3d">'+
                '<p>我做过的东西：<br />' +
                '按住键盘上的<strong>方向键</strong>试试！^_^'+
                '</p>'+
                '<div class="box_perspective">' +
                '<ul>' +
                '<li class="box-1"></li>'+
                '<li class="box-2"></li>'+
                '<li class="box-3"></li>'+
                '<li class="box-4"></li>'+
                '<li class="box-5"></li>'+
                '<li class="box-6"></li>'+
                '</ul>'+
                '</div>'+
                '</div>');

            oWrap.append(oBox);

            var oBox_3d = $(".box_perspective ul");

            $(document).keydown(function (event) {

                var keycode = event.keyCode;
                switch (keycode) {
                    case 37:
                        speedY -= 5;
                        Box_translate3d.box_animation (oBox_3d,"Y",speedY);
                        break;
                    case 38:
                        speedX += 5;
                        Box_translate3d.box_animation (oBox_3d,"X",speedX);
                        break;
                    case 39:
                        speedY += 5;
                        Box_translate3d.box_animation (oBox_3d,"Y",speedY);
                        break;
                    case 40:
                        speedX -= 5;
                        Box_translate3d.box_animation (oBox_3d,"X",speedX);
                        break;
                    default:
                        return;
                }
            });
        },

        /**
         * @name Box_translate3d.box_animation
         * @function
         * @example
         * Box_translate3d.box_animation();
         * @description 绕X轴或Y轴旋转
         * @param obj {$} 旋转的对象
         * @param type 'string' X轴旋转还是Y轴旋转
         * @param number 旋转的角度
         */

        box_animation : function (obj,type,deg) {

            var translateDeg = "";

            if (type=="X") {

                translateDeg = deg;

            }else if (type=="Y") {

                translateDeg = deg;

            }else {

                return;

            }
            obj.css({
                "-webkit-transform":"rotate"+type+"("+translateDeg+"deg)",
                "-moz-transform":"rotate"+type+"("+translateDeg+"deg)",
                "-o-transform":"rotate"+type+"("+translateDeg+"deg)",
                "transform":"rotate"+type+"("+translateDeg+"deg)"
            });
        }
    };
    exports.Box_translate3d = Box_translate3d;
});

