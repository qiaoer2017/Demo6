(function () {
    var timer = null;
    var index = 0;

    var main = byId('main');
    var pics = byId('banner').getElementsByTagName('div');
    var indicators = byId('dots').getElementsByTagName('span');
    var len = pics.length;
    slideImg();
    main.onmouseout();

    function slideImg() {
        //清除定时器
        main.onmouseover = function () {
            clearInterval(timer);
        };

        //继续
        main.onmouseout = function () {
            timer = setInterval(function () {
                index++;
                index %= len;
                //切换图片
                changeImg();

            }, 1000);
        };
    }

    function changeImg() {
        console.log(index);
        for (var i = 0; i < len; i++) {
            pics[i].style.display = 'none';
            indicators[i].style.backgroundColor = 'transparent';
        }
        pics[index].style.display = 'block';
        indicators[index].style.backgroundColor = '#fff';
    }

    function byId(id) {
        return typeof (id) === "string" ? document.getElementById(id) : id;
    }
})();

