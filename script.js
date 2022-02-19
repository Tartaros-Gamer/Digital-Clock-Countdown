var clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: '',
        cur: '',
        tcur: '',
        lst_d: '',
        lst_h: '',
        lst_m: '',
        lst_s: ''
    }
});

var week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
    var EndTime = new Date("2022/06/07 09:00:00"); //截止时间
    var t = (EndTime.getTime() - cd.getTime()) / 1000;
    clock.lst_d = zeroPadding(Math.floor(t / 86400), 3);
    clock.lst_h = zeroPadding(Math.floor((t /3600) % 24), 2);
    clock.lst_m = zeroPadding(Math.floor((t / 60) % 60), 2);
    clock.lst_s = zeroPadding(Math.floor(t % 60), 2);
};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
};

var todayleast = setInterval(todaylst, 8640);
todaylst();
function todaylst() {
    var NowTime = new Date();
    clock.cur = Math.floor(((NowTime.getTime() / 1000) + 28800) % 86400) / 864;
    clock.cur = clock.cur.toFixed(2); 
};

var termleast = setInterval(termlst, 8640);
termlst();
function termlst() {
    var starTime = new Date("2021/06/07 09:00:00").getTime();
    var termTime = new Date("2022/06/07 09:00:00").getTime();
    var NowTime = new Date().getTime();
    clock.tcur = Math.floor((NowTime-starTime) / (termTime-starTime) * 100);
    clock.tcur = clock.tcur.toFixed(2); 
};

function change(a){
    var css=document.getElementById("css");
    if (a == 1) {
        css.setAttribute("href","night.css");
    }
    if (a == 2) {
        css.setAttribute("href","light.css");
    }
}