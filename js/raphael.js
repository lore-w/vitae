/**
 * Created by Emo on 10/16/2014.
 */

define(function (require,exports,module) {

    require('raphael');

    var Graph = function (id,r,data) {
        this.id = id;
        this.r = r;
        this.data = data;
    };

    Graph.prototype = {
        random: function(l, u){
            return Math.floor((Math.random()*(u-l+1))+l);
        },
        raphael: function () {

            _this = this;

            var paper = Raphael(_this.id, _this.r*2, _this.r*2),
                radius = 40,
                text = 'Skills',
                add = 20,
                speed = 250;

            paper.circle(_this.r, _this.r, 45)
                 .attr({
                    stroke: 'none',
                    fill: '#183340'
                 });

            var title = paper.text(_this.r, _this.r, text)
                .attr({
                    font: '16px arial',
                    fill: '#fff'})
                .toFront();

            paper.customAttributes.arc = function(value, color, rad){

                var v = 3.6*value,

                    alpha = v == 360 ? 359.99 : v,

                    random = _this.random(91, 240),

                    a = (random-alpha) * Math.PI/180,
                    b = random * Math.PI/180,

                    sX = _this.r + radius * Math.cos(b),
                    sY = _this.r - radius * Math.sin(b),

                    X = _this.r + radius * Math.cos(a),
                    Y = _this.r - radius * Math.sin(a),

                    path = [['M', sX, sY], ['A', rad, rad, 0, +(alpha > 180), 1, X, Y]];

                return { path: path, stroke: color}
            };

            for (var i=0; i<_this.data.length;i++) {

                radius += add;

                var oLine = paper.path()
                    .attr({
                        arc: [_this.data[i].value, _this.data[i].color, radius],

                        'stroke-width': 15
                    });

                oLine.name = _this.data[i].name;
                oLine.value = _this.data[i].value;

                oLine.mouseover(function(){

                     var _this_oLine = this;

                     this.animate({
                         'stroke-width': 30,
                         'opacity': .75},1000,'elastic');

                     if(Raphael.type != 'VML') {
                        this.toFront();
                     }

                     title.stop().animate({
                         opacity: 0},speed,'>',function(){

                         this.attr({
                             text: _this_oLine.name + '\n' + _this_oLine.value + '%'
                         }).animate({
                             opacity: 1}, speed, '<');

                     });

                }).mouseout(function(){

                    this.stop().animate({
                        'stroke-width': 15,
                        'opacity': 1},speed*4, 'elastic');

                    title.stop().animate({
                        opacity: 0 },speed, '>', function(){

                        title.attr({ text: text }).animate({ opacity: 1 }, speed, '<');

                    });
                });
            }
        }
    };
    exports.Graph = Graph;
});
