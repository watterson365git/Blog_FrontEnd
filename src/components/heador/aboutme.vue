<template>
    <div class="aboutme">
        <div class="background"></div>

        <div class="logo"></div>
        <div class="list">
            <ul>
                <li><span class="bg"></span>
                    <a href="#" @click="show_wechart"><span class="font">微信:点我扫码</span></a>
                    <span class="bg"></span>
                    <a href="#" @click="show_qq"><span class="font">QQ:点我扫码</span></a>
<!--                    <div class="wechart">WeChart:点我扫码</div>-->

<!--                    <div class="bg"></div>-->
<!--                    <div class="qq">QQ:点我扫码</div>-->

                </li>
                <li>
                    <span class="bg"></span>
                    <a href="https://github.com/watterson365git"><span class="font">watterson365git</span></a>
<!--                    <div class="bg"></div>-->
<!--                    <div class="github">watterson365git</div>-->
                </li>
                <li>
                    <span class="bg"></span>
                    <span class="font">waterson365@163.com</span>
<!--                    <div  class="bg"></div>-->
<!--                    <div class="email">waterson365@163.com</div>-->
                </li>
                <li>
                    <span class="bg"></span>
                    <a href="https://space.bilibili.com/7545573/video"><span class="font">Bilibili:我肛肛好</span></a>
<!--                    <div  class="bg"></div>-->
<!--                    <div class="bilibili">Bilibili:我刚刚好</div>-->
                </li>

            </ul>
        </div>
        <div :class="{wechart:iswechart}"></div>
        <div :class="{qq:isqq}"> </div>

    </div>
</template>

<script>

    export default {
        data(){
            return{
                iswechart:false,
                isqq:false
            }
        },
        methods:{
            show_wechart(){
               let that = this
                this.iswechart =true
                setTimeout(
                    function () {
                        that.iswechart =false
                    }
                    ,3000)

            },
            show_qq(){
                let that = this
                this.isqq =true;

                setTimeout(
                    function () {
                        that.isqq =false
                    }
                    ,3000)


            },

        }

    }
</script>

<style scoped>
    .aboutme{
        position: relative;
        height: 380px;
        width: 345px;


    }

    .background{
        position: absolute;
        top: 0;
        width: 345px;
        height: 120px;
        background: url("../../assets/img/heador/logo.jpg") round;
    }

    .logo{
        border: #FFFFFF 5px solid;
        position: absolute;
        top: 60px;
        left: 50%;
        margin-left:-50px;
        width: 95px;
        height: 95px;
        background: url("../../assets/img/heador/me.jpg") round;
        border-radius: 50%;
        z-index: 999;
    }

    .logo:before{
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 23px;
        height: 23px;
        border-radius: 50%;
        background-color: orange;
        border: #FFFFFF 3px solid;

    }.logo:after{
        content: "";
        position: absolute;
        bottom: 4px;
        right: 4px;
        width: 20px;
        height: 20px;
        background-color: #FFFFFF;
             clip-path: polygon(64% 0, 51% 42%, 86% 43%, 39% 100%, 51% 59%, 14% 59%);    }

    .list{
        position: absolute;
        bottom: 0;
        width: 345px;
        height: 260px;
        background-color: #fff;

    }

    .list ul{
        padding-left: 15px;
        padding-top: 45px;
        margin: 0;

    }

    .list ul li{
        display: block;
        border-bottom:  #25b3ff 2px solid;
        height: 45px;

    }

    .list ul li .bg{
        display: inline-block;
        width: 30px;
        height: 30px;
        background: url("../../assets/img/heador/icons.png") no-repeat;
        position: relative;
    }




    .list ul li:nth-child(1) span:nth-child(1){
        background-position: 0 -30px;
        top: 7px;
        left: 10px;
    }
    .list ul li:nth-child(1) span:nth-child(3){
        background-position: 0 -60px;
        top: 7px;
        left: 10px;
    }

    .list ul li:nth-child(2) span{
        background-position: 0 0;
        top: 7px;
        left: 10px;
    }
    .list ul li:nth-child(3) span{
        background-position: 0 -90px;
        top: 7px;
        left: 10px;
    }
    .list ul li:nth-child(4) span{
          background-position: 0 -120px;
        top: 7px;
        left: 10px;
      }

    .font{
        display: inline-block;
        padding-left: 20px;
        font-size: 16px;
        color: #00b8ea;
        font-weight: bold;
        transition: 0.3s color;
    }

    .font:hover{
        color: #ea9400;

    }

    .wechart{
        background: url("../../assets/img/heador/wechart.jpg") round;
        width: 400px;
        height:400px;
        position: fixed;
        top: 100px;
        left: 50%;
        margin-left: -200px;
        z-index: 999;
    }

    .qq{
        background: url("../../assets/img/heador/qq.jpg") round;
        width: 400px;
        height:400px;
        position: fixed;
        top: 100px;
        left: 50%;
        margin-left: -200px;
        z-index: 999;

    }
</style>