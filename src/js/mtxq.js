/**
 * Created by Administrator on 2016/8/7 0007.
 */
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: '.swiper-pagination',
    autoplay: 4000,
    touchRatio : 0.8,
    autoplayDisableOnInteraction:false
})


/*倒计时效果，*/

var timer =  setInterval(function () {
    var oDateEnd = new Date();
    var oDateNow = new Date();

    var iRemain = 0;
    var iDay=0;
    var iHour=0;
    var iMin=0;
    var iSec=0;

    oDateEnd.setFullYear(2016);
    oDateEnd.setMonth(8);
    oDateEnd.setDate(7);
    oDateEnd.setHours(8);
    oDateEnd.setMinutes(0);
    oDateEnd.setSeconds(0);

    iRemain = (oDateEnd.getTime() - oDateNow.getTime())/1000;

    iDay=parseInt(iRemain/86400);
    iRemain%=86400;

    iHour=parseInt(iRemain/3600);
    iRemain%=3600;

    iMin=parseInt(iRemain/60);
    iRemain%=60;

    iSec=iRemain;

    $('.h').text(iHour);
    $('.m').text(iMin);
    $('.s').text(iSec);

    if(iDay==0&&iHour==0&&iMin==0&&iSec==0){
        clearInterval(timer);
        alert("结束！")
    }
}, 1000)
