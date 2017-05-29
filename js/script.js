(function () {
    var timer = null;
    var index = 0;

    var main = byId('main');
    var pics = byId('banner').getElementsByTagName('div');
    var indicators = byId('dots').getElementsByTagName('span');
    var prev = byId('prev');
    var next = byId('next');

    var len = pics.length;


    slideImg();
    main.onmouseout();

    //上一张
    prev.onclick = function () {
        index--;
        if (index <= -1) {
            index = len - 1;
        }
        changeImg();
    };
    //下一个
    next.onclick = function () {
        index++;
        if (index >= len) {
            index = 0;
        }
        changeImg();
    };

    for (var i = 0; i < len; i++) {
        indicators[i].setAttribute('data-index', i);
        indicators[i].onclick = function () {
            var indicatorIndex = this.getAttribute('data-index');
            if (index === parseInt(indicatorIndex)) {
                return;
            }
            //改变index为当前索引
            index = indicatorIndex;
            changeImg();
        };
    }


    function slideImg() {
        //清除定时器
        main.onmouseover = function () {
            if (timer) {
                clearInterval(timer);
            }
        };

        //继续
        main.onmouseout = function () {
            timer = setInterval(function () {
                index++;
                index %= len;
                //切换图片
                changeImg();

            }, 3000);
        };
    }

    function changeImg() {
        // console.log(index);
        for (var i = 0; i < len; i++) {
            pics[i].style.display = 'none';
            indicators[i].className = '';
        }
        pics[index].style.display = 'block';
        indicators[index].className = 'active';
    }

    function byId(id) {
        return typeof (id) === "string" ? document.getElementById(id) : id;
    }
})();

