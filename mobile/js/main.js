/**
 * Created by LrEmo on 10/18/2014.
 */

$(function () {

    var keywords={
          fn : function (data) {
              var thisCol,w;
              var datas = [];
              var dataLength = data.length;
              data[dataLength] = undefined;
              var allCol = 4;
              for (var i=0;i<data.length-1;i++) {
                  var thisLength = data[i].length;
                  var nextLength = !!data[i+1]?data[i+1].length:0;
                  var thisNum = actionW(thisLength)[1];
                  var nextNum = actionW(nextLength)[1];
                  datas.push({
                      "name":data[i],
                      "w":actionW(thisLength)[0],
                      "thisCol":thisNum,
                      "nextCol":nextNum
                  });
                  allCol = allCol - thisNum - nextNum;
                  console.log("第"+(i+1)+"次"+allCol);
                  if (allCol < 0) {
                      var temp = allCol + nextNum + thisNum;
                      switch (temp) {
                          case 1:
                              datas[i].w = "w-one";
                              break;
                          case 2:
                              datas[i].w = "w-two";
                              break;
                          case 3:
                              datas[i].w = "w-three";
                              break;
                          default:
                              datas[i].w = "w-four";
                      }
                      allCol = 4;
                  }else {
                      allCol = allCol + nextNum;
                  }
              }
              function actionW (str) {
                  var w,col;
                  if (str >= 12) {
                      w = 'w-three';
                      col = 3;
                  }else if (str >= 6) {
                      w = 'w-two';
                      col = 2;
                  }else{
                      w = 'w-one';
                      col = 1;
                  }
                  return [w,col];
              }
              var keywords = $(".keywords");
              for (var i=0;i<datas.length;i++) {
                  var $ciChild = $("<div class='wrap "+datas[i].w+"'>"+
                      "<table width='80%' height='100%' cellpadding='0' cellspacing='0'>"+
                      "<tr>"+
                      "<td>"+
                      datas[i].name +
                      "</td>"+
                      "</tr>"+
                      "</table>"+
                      "</div>");
                  keywords.append($ciChild);
              }
              //设置高度
              var oWrap = $('.wrap');
              function resize () {
                  var oW = $("#afui").width();
                  oWrap.css({
                      "height": oW * 0.25
                  });
              };
              resize();
              $(window).resize(function () {
                  resize();
              });
              //填充颜色
              var one = 1;
              var num = Math.ceil(data.length/5);//应该循环多少次
              for (var i=0;i<num;i++) {
                  oWrap.eq(i*5).addClass("one");
                  oWrap.eq(i*5+1).addClass("two");
                  oWrap.eq(i*5+2).addClass("three");
                  oWrap.eq(i*5+3).addClass("four");
                  oWrap.eq(i*5+4).addClass("five");
              }
          }
    };

    var data = ['html(5)', 'css(3)', 'javascript（es6）', 'ajax', 'sass', 'compass', 'Postcss',
   'Node', 'mongodb', 'react', 'git', 'grunt', 'gulp', '...'];


    keywords.fn(data);
});