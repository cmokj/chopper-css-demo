!function () {
    var duration = 50;
    $('.speed').on('click', 'button', function (e) {
        let $button = $(e.currentTarget);
        $button.addClass('active')
            .siblings('.active').removeClass('avcive');
        let domSpeed = $button.attr('data-x');
        switch (domSpeed) {
            case 'speed-s':
                duration = 0
                break
            case 'speed-n':
                duration = 50
                break
            default:
                duration = 10
        }
    })

    function writeCode(code, fn) {
        var domCode = document.querySelector('#code');
        var domStyle = document.querySelector('#styleTag');
        var domWrapper = document.querySelector('.code-wrapper')
        var n = 0;
        var id = setTimeout(function xxx() {
            n += 1;
            domCode.innerHTML = code.substring(0, n);
            domStyle.innerHTML = code.substring(0, n);
            domWrapper.scrollTop = domCode.scrollHeight
            if (n < code.length) {
                id = setTimeout(xxx, duration);
            } else {
                fn && fn.call();
            }
        }, duration)
    }

    var text = `
    /*我们来画一只可（盗）爱（版）的 Tony Tony Chopper 吧！*/
    
    /*
     * 首先，画一个晒的黢黑的大饼脸。    
     */
     
    .face {
        width: 150px;
        height: 115px;
        border: 3px solid black;
        position: absolute;
        left: 50%;
        margin-left: -75px;
        bottom: 14px;
        background-color: #DFB47D;
        border-radius: 50% / 30% 30% 40% 44%;
        box-shadow: 0 10px 0 rgba(0, 0, 0, .2) inset;
    }
    
    /*
     * 一个与众不同的蓝鼻子    
     */
     
    .nose {
    width: 25px;
    height: 18px;
    background: #344670;
    border: 3px solid black;
    border-radius: 60% 60% 100% 100%;
    position: absolute;
    top: 190px;
    left: 50%;
    margin-left: -12.5px;
    }
    
    .nose::before {
        content: '';
        display: block;
        width: 7px;
        height: 5px;
        border-radius: 50%;
        background-color: white;
    }
    
    /*
     * 接下来就要画嘴巴啦   
     */  
    
    .upperLip {
        position: absolute;
        width: 40px;
        height: 40px;
        border: solid 3px #000;
        border-color: transparent transparent #000 transparent;
        border-radius: 50%;
        top: 180px;
        overflow: hidden;
        background-color: #DFB47D;
    }

    
    /*
     * 左边的上嘴唇（？）    
     */
     
    .upperLip.left {
        left: 50%;
        margin-left: -36px;
        transform: rotate(-25deg);
    }
    
    /*
     * 右边的上嘴唇（？）    
     */
     
    .upperLip.right {
        right: 50%;
        margin-right: -36px;
        transform: rotate(25deg);
    }
    
    
    /*
     * 血盆大口  
     */
    
    .mouse-wrapper > .mouse {
        width: 26px;
        height: 60px;
        border: solid 3px black;
        background-color: #7E4031;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
    }
    
    /*
     * 舌头 
     */
    
    .mouse-wrapper > .mouse::before {
        content: '';
        display: block;
        width: 30px;
        height: 30px;
        border: 3px solid black;
        border-radius: 50%;
        background-color: #DE8868;
        position: absolute;
        bottom: -5px;
        left: -4.5px
    }
    
    /*
     * 开始画眼睛啦 
     */
     
    .eye {
        width: 40px;
        height: 40px;
        background-color: #fff;
        border: 3px solid;
        border-radius: 50%;
        position: absolute;
        top: 165px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    /*
     * 左眼在左边（废话）  
     */
     
    .eye.left {
        left: 50%;
        margin-left: -60px;
    }
    
    /*
     * 右眼在右边（废话）  
     */
     
    
    .eye.right {
        right: 50%;
        margin-right: -60px;
    }
    
    /*
     * 不要忘记眼珠子  
     */
     
    .eye::before {
        content: '';
        display: block;
        width: 28px;
        height: 28px;
        background-color: black;
        border-radius: 50%;
    }
    
    /*
     * 给乔巴带上帽子吧  
     */
     
    .hatUp {
        z-index: -2;
        position: absolute;
        width: 150px;
        height: 120px;
        border: 3px solid;
        border-radius: 50% / 30% 30% 20% 20%;
        left: 50%;
        margin-left: -75px;
        top: 40px;
        background-color: #E9746D;
    }
    
    /*
     * 帽子当然要有帽沿咯  
     */
     
    .hatBottom {
        position: absolute;
        width: 280px;
        height: 100px;
        border: 3px solid;
        left: 50%;
        margin-left: -140px;
        border-radius: 50% / 45% 45% 45% 45%;
        background-color: #E9746D;
        top: 105px;
        z-index: -1;
        overflow: hidden;
    }
    
   
    .hatBottom::before {
        content: '';
        display: block;
        position: absolute;
        width: 280px;
        height: 100px;
        border: 3px solid;
        border-radius: 50% / 45% 45% 45% 45%;
        top: 15%;
        background-color: #94474D;
    }
    
    /*
     * 乔巴是个心地善良的小医生呀 
     */
    
    .hatUp::before {
        content: '';
        display: block;
        width: 20px;
        height: 50px;
        border: 3px solid;
        background-color: #fff;
        transform: rotate(-45deg);
        position: absolute;
        left: 50%;
        margin-left: -10px;
        top: 15px;
    }
    
    .hatUp::after {
        content: '';
        display: block;
        width: 20px;
        height: 50px;
        border: 3px solid;
        background-color: #fff;
        transform: rotate(45deg);
        position: absolute;
        left: 50%;
        margin-left: -10px;
        top: 15px;
    }
    
    .hatUp > .spot {
        z-index: 1;
        position: absolute;
        width: 22px;
        height: 14px;
        left: 50%;
        margin-left: -11px;
        top: 33px;
        transform: rotate(45deg);
        background-color: #fff;
    }
     
    
    /*
     * 小鹿怎么可以没有角呢！
     */
     
    .deerHorn::before {
        content: '';
        display: block;
        width: 15px;
        height: 50px;
        border: 3px solid;
        background-color: #82603B;
        position: absolute;
        top: 80px;
        z-index: -2;
    }
    
    .deerHorn > .circle {
        position: absolute;
        width: 80px;
        height: 50px;
        border: 3px solid;
        border-radius: 50%;
        top: 65px;
        background-color: #82603B;
    }
    .deerHorn > .circle::before {
        z-index: 900;
        content: '';
        display: block;
        position: absolute;
        width: 73px;
        height: 43px;
        border-radius: 50%;
        background-color: #82603B;
    }
    
    /*
     * 最后我们再插（？）上可爱的鹿茸
     */
    
    .deerHorn > li {
        display: block;
        position: absolute;
        width: 15px;
        height: 60px;
        border: 3px solid;
        background-color: #82603B;
        z-index: 200;
    }
    
    .deerHorn.left > li:nth-child(1) {
        left: 34px;
        top: 40px;
        transform: rotate(10deg);
    }
    
    .deerHorn.right > li:nth-child(6) {
        right: 34px;
        top: 40px;
        transform: rotate(-10deg);
    }
    
    .deerHorn.left > li:nth-child(2) {
        left: 46px;
        top: 35px;
        transform: rotate(5deg);
    }
    
    .deerHorn.right > li:nth-child(5) {
        right: 46px;
        top: 35px;
        transform: rotate(-5deg);
    }
    
    .deerHorn.left > li:nth-child(3) {
        left: 57px;
        top: 30px;
        transform: rotate(5deg);
    }
    
    .deerHorn.right > li:nth-child(4) {
        right: 57px;
        top: 30px;
        transform: rotate(-5deg);
    }
    
    .deerHorn.left > li:nth-child(4) {
        height: 15px;
        border-top: none;
        left: 69px;
        top: 60px;
        transform: rotate(10deg);
        background-color: #F7F7F7;
        border-radius: 0% 0% 30% 40%;
        z-index: 1000;
        width: 19px;
    }
    
    .deerHorn.right > li:nth-child(3) {
        height: 15px;
        border-top: none;
        right: 69px;
        top: 60px;
        transform: rotate(-10deg);
        background-color: #F7F7F7;
        border-radius: 0% 0% 30% 40%;
        z-index: 1000;
        width: 19px;
    }
    
    .deerHorn.left > li:nth-child(5) {
        width: 17px;
        left: 87px;
        top: 33px;
        transform: rotate(10deg);
        border-radius: 50% / 9% 50% 50% 40%;
    }
    
    .deerHorn.right > li:nth-child(2) {
        width: 17px;
        right: 87px;
        top: 33px;
        transform: rotate(-10deg);
        border-radius: 50% / 50% 9% 40% 50%;
    }
    
    .deerHorn.left > li:nth-child(6) {
        left: 102px;
        top: 40px;
        transform: rotate(10deg);
        border-radius: 50% / 9% 50% 50% 40%;
        width: 18px;
    }
    
    .deerHorn.right > li:nth-child(1) {
        right: 102px;
        top: 40px;
        transform: rotate(-10deg);
        border-radius: 50% / 50% 9% 40% 50%;
        width: 18px;
    }
    
    /*好啦，正版的乔巴我自己留着，这只盗版的就送给你吧！*/
    
    `;
    writeCode(text)
}.call()

