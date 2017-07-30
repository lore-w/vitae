/**
 * @description: todo方法封装（增加、删除、修改）
 * @example: require("todo").fn()
 * @author: chenglong.wang@yoho.cn
 * @date: 2015/3/13
 */

var $ = require("jquery");

var scope = []; //存储全局的todo数据

/*
 * @description: 增加数据
 * @param: val "string" 新增数据的值
 * @return:
 */
exports.addItem = function (val) {
    var itemDate = new Date();

    /*
     * @checked: 是否已完成
     * @text: todolist的值
     * @id: todolist的id
     */
    var list = {
        checked: false,
        text: val,
        id: itemDate.getTime()
    };
    scope.push(list);
};

/*
 * @description: 删除数据
 * @param: id "string or array" 删除数据的id
 * @return:
 */
exports.delete = function (id) {
    var n,
        m;
    if (typeof id === "string") {
        for (n = 0; n < scope.length; n++) {
            var isTrue = !!scope[n] && (scope[n].id === id*1);
            if (isTrue) {
                delete scope[n];
            }
        }
    } else if (typeof id === "object" && id.constructor === Array) {
        for (m = 0; m < id.length; m++) {
            for (n = 0; n < scope.length; n++) {
                if (!!scope[n] && (scope[n].id === id[m])) {
                    delete scope[n];
                }
            }
        }
    }
};

/*
 * @description: 修改数据
 * @param: id "string or array" 修改数据的id
 * @param: val "string" 修改数据的新值(如果没有传这个值，表示修改数据的已完成状态)
 * @return:
 */
exports.modify = function (id,val) {
    var n,
        m;
    var isTrue = null;

    //id和val均存在时修改数据的值
    if (typeof id !== "undefined" && typeof val !== "undefined") {
        for (m = 0; m < scope.length; m++) {
            isTrue = !!scope[m] && (scope[m].id === id*1);
            if (isTrue) {
                scope[m].text = val;
            }
        }

        //只存在id时表示修改数据的已完成状态
    } else if (typeof id !== "undefined" && typeof val === "undefined") {

        //id为string时逐条选择
        if (typeof id === "string") {
            for (m = 0; m < scope.length; m++) {
                isTrue = !!scope[m] && (scope[m].id === id*1);
                if (isTrue && scope[m].checked) {
                    scope[m].checked = false;
                } else if (isTrue && !scope[m].checked) {
                    scope[m].checked = true;
                }
            }

            //id为数组时批量选择
        } else if (typeof id === "object" && id.constructor === Array) {
            for (m = 0; m < id.length; m++) {
                for (n = 0; n < scope.length; n++) {
                    isTrue = !!scope[n] && (scope[n].id === id[m]*1);
                    if (isTrue && scope[n].checked) {
                        scope[n].checked = false;
                    } else if (isTrue && !scope[n].checked) {
                        scope[n].checked = true;
                    }
                }
            }
        }
    }
};

/*
 *@description: 获取数据相关总数
 *@param:
 *@return: {doneNum: "已完成的数据总数",listNum: "所有的数据总数",leftNum: "未完成的数据总数"}
 */
exports.getNum = function () {
    var doneNum = 0,
        listNum = 0,
        leftNum = 0;
    var i;
    for (i = 0; i < scope.length; i++) {
        if (!!scope[i]) {
            listNum++;
            if (scope[i].checked) {
                doneNum++
            }
        }
    }
    return {
        doneNum: doneNum,
        listNum: listNum,
        leftNum: listNum - doneNum
    }
};

exports.scope = scope;
