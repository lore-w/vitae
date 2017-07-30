/**
 * @description: todo业务逻辑
 * @example:
 * @author: chenglong.wang@yoho.cn
 * @date: 2015/3/13
 */

var $ = require("jquery");

var todo = require("./public/todo");

var todoItems = $('.todo-items');
var completeNum = $('.complete-num');
var clearItem = $('.clear-item');
var todoInput = $('.todo-input');

//添加
todoInput.focus().keydown(function (event) {
    if (event.keyCode === 13) {
        var val = $(this).val();
        if (val.match(/^\s+?$/g) || !val) {
            alert("内容不能为空");
            return;
        }
        $(this).val("");
        todo.addItem(val);
        view(todo.scope);
    }
});

//删除、修改
$(document).click(function (event) {
    var _this = $(event.target);
    var id = _this.parents("li").attr("data-id");

    if (_this.is($(".delete"))) {

        //删除
        todo.delete(id);
        view(todo.scope);
    } else if (_this.is($(".modify"))) {

        //修改
        _this.parent(".view").next().addClass('block');
        _this.parent(".view").addClass('none');

        $('.todo-edit').blur(function () {
            var val = $(this).val();
            todo.modify(id,val);
            view(todo.scope);
        });
    } else if (_this.is($(".checkbox"))) {

        //选中
        todo.modify(id);
        view(todo.scope);
    }
});

//全选
$('.select').click(function () {
    var arr = [];
    for (var i = 0; i< todo.scope.length; i++) {
        if (!!todo.scope[i]) {
            arr.push(todo.scope[i].id);
        }
    }
    todo.modify(arr);
    view(todo.scope);
});

//批量删除
clearItem.click(function () {
    var data = todo.scope;
    var arr = [];
    for (var i = 0; i < data.length; i++) {
        if (!!data[i] && data[i].checked) {
            arr.push(data[i].id);
        }
    }
    todo.delete(arr);
    view(todo.scope);
});

//渲染
function view (scope) {
    var data = [];
    var i;
    for (i = 0; i < scope.length; i++) {
        if (!!scope[i]) {
            var isChecked = scope[i].checked ? 'checked' : '';
            var items = '<li data-id="'+scope[i].id+'">'+
                '<div class="view">'+
                '<input class="checkbox" type="checkbox" '+isChecked+' >'+
                '<lable class="'+isChecked+'">'+scope[i].text+'</lable>'+
                '<span class="modify">modify</span>'+
                '<span class="delete">delete</span>'+
                '</div>'+
                '<input class="todo-edit" type="text" value="'+scope[i].text+'">'+
                '</li>';
            data.push(items);
        }
    }
    todoItems.html(data.join(''));
    completeNum.text(todo.getNum().leftNum + " LEFT");
    clearItem.text("Clear " + todo.getNum().doneNum + " Completed Items");

    if (todo.getNum().leftNum === 0) {
        $('.select').attr("checked","checked");
    } else {
        $('.select').removeAttr("checked");
    }

    if (todo.getNum().listNum === 0) {
        $('.todo-footer,.toggle-all').removeClass('block');
    } else {
        $('.todo-footer,.toggle-all').addClass('block');
    }
}