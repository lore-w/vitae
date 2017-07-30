import conf from './data.js';

new Vue({
    el: "#wrapper",
    data: {
        isNewShow: true, // 预留
        isShow: false,
        rememberArr: [],
        notRememberArr: [],
        current: '',
        renderData: {
            key: 1,
            val: 2
        }
    },
    ready: function () {

        var readyNum = random(0, 99),
            readyKey = translateNum(readyNum);

        this.renderData = {
            key: readyNum,
            val: conf[readyKey]
        }

        this.current = readyNum
    },
    methods: {
        showDetFn () {
            this.isShow = true;
        },
        remember (type) {

            var _this = this,
                newNum = nextNum(_this);
            _this.isShow = false;

            if (type) {
                _this.rememberArr.push(_this.current);
            }

        	_this.current = newNum;
        
            if (_this.isNewShow) {

                _this.isNewShow = false;
            } else {

                _this.isNewShow = true;
            }
            
            _this.renderData = {
                key: newNum,
                val: conf[translateNum(newNum)]
            }
            
        }
    }
});

function random (min, max) {

    var tempNum =  min + Math.round(Math.random() * (max - min));

    return tempNum < 10 ? ('0' + tempNum) : tempNum + '';

}


function translateNum (num) {

    var arr = ['o','a','b','c','d','v','s','l','e','g'];

    var id0 = num.substr(0, 1),
        id1 = num.substr(1, 1);

    return arr[id0] + arr[id1];
}

function nextNum (_this) {

    var newNum = random(0, 99),

        rememberArr = _this.rememberArr;

    // 如果100个都记住了就清空
    if (rememberArr.length === 100) {

        rememberArr = [];
        _this.rememberArr = [];
    }

    while (hasArrEle(newNum, rememberArr)) {
        
        newNum = random(0, 99);
    }

    return newNum;

}

function hasArrEle (str, arr) {

    for (var i = 0; i > arr.length; i++) {

        if (arr[i] === str) {
            return true;
        }
    }

    return false;
}