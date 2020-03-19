<template>
    <div class="navbar">
        <div class="left">
            <ul class="pc">

                <li class="li"><a href="http://www.zhuxf.net/">首页</a></li>
                <li class="location"><div class="location2"></div><div class="location3">{{location}}</div></li>
                <li class="li bar"><a href="#">前端实验室</a>
                    <ul>
                        <li class="li" style="width: 200px"><a href="http://111.229.111.185/flop/">碧蓝航线翻翻乐</a></li>
                        <li class="li" style="width: 200px"><a href="http://111.229.111.185/visiable/">新冠肺炎疫情图</a></li>
                        <li class="li" style="width: 200px"><a href="">3</a></li>
                    </ul>
                </li>

                <li class="li"><a href="http://111.229.111.185/photo">照片墙</a></li>
                <li class="li"><a href="#">项目</a></li>
                <li class="li"><a href="http://watterson365git.github.io">简历</a></li>


            </ul>


        </div>
        <div class="right">
            <ul>
                <li class="logandres" style="width: 200px;">
                    <a href="/#/login" style="display: inline-block;width: 70px;" class="longin" :class="{showbtn:showbtn}">登陆</a>
                    <a href="/#/register" style="display: inline-block;width: 70px;" class="register" :class="{showbtn:showbtn}">注册</a>
<!--                    <a href="http://watterson365git.github.io" style="display: inline-block;width: 65px;" class="longin">登陆</a>-->
<!--                    <a href="http://watterson365git.github.io" style="display: inline-block;width: 65px;" class="register">注册</a>-->
                    <span class="user_name" :class="{showbtn:!showbtn}">{{user_name}}<span @click="logout">[退出]</span></span>

                </li>
            </ul>

        </div>



        <!--        //移动端菜单滑块-->

<!--        <div class="menu" v-show="showmenu" >-->
<!--            <ul class="mp">-->
<!--                <li><a href="http://www.zhuxf.net/">首页</a></li>-->
<!--                <li><a href="http://www.zhuxf.net/flop/">碧蓝航线翻翻乐(游戏)</a></li>-->
<!--                <li><a href="http://www.zhuxf.net/photo">照片墙</a></li>-->
<!--                <li><a href="#">项目</a></li>-->
<!--                <li><a href="http://watterson365git.github.io">简历</a></li>-->
<!--            </ul>-->
<!--        </div>-->
    </div>
</template>

<script>
    import  {request} from '../../network/iflogin'

    import {location} from "../../network/location"
    export default {

        data(){
            return{
                location:'乌鲁木齐市',
                user_name:"",
                showbtn:false,//登陆注册按键消失和出现
                email:''
            }
        },
        methods:{
            request_location(){
                location().then(res=>{
                this.location = res.data.city
                })
            },
            request_iflogin() {
               request({
                    url:'/iflogin'
                })
                    .then(result => {
                        // console.log(result);
                        if(result.data.email){
                           //vuex传参
                            this.email = result.data.email
                            this.user_name = result.data.email.split("@")[0]
                            this.showbtn = result.data.showbtn
                            this.$store.state.page_num = result.data.page_num

                        }else{

                            this.$store.state.page_num = result.data.page_num
                        }


                    })
            },
            logout(){
                request({
                    url:`users/logout?email=${this.email}`
                 })
                    .then(
                        res=>{
                            console.log(res);
                            if(res.data.success===true){
                                window.location.href="/"
                            }
                        }
                    )


            },


        }
        ,

        mounted() {

          this.request_location();
          this.request_iflogin();


        }

    }
</script>

<style scoped>


    .navbar{

        height: 49px;
        background-color: #00b8ea;

    }



    .navbar .pc{
        display: block;
        position: relative;
        top: 0;
        left: 0;
        list-style: none;
        min-width: 1200px;

    }


    .navbar .pc li{
        line-height: 49px;
        float: left;
        width: 130px;
        height: 49px;
        background-color: #029bea;
        font-size: 16px;
        text-align: center;
    }

    .navbar .right ul{
        list-style: none;
    }

    .navbar .right li{
        color: #fff;
        font-size: 16px;
        line-height: 49px;
        position: absolute;
        right: 0;
        width: 130px;
        height: 49px;
        background-color: #029bea;
        text-align: center;
        z-index: 10000;
    }

    .navbar .left{

        color: #fff;
        font-size: 16px;
        line-height: 49px;
        position: absolute;
        left:  0;
        height: 49px;
        background-color: #029bea;
        z-index: 999;
        text-align: center;
    }
    .navbar .pc .location{
        font-size:16px ;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 49px;
        display: block;
        position: relative;
        left: 0;
        background-color: #00b8ea;
        text-align: right;

    }

    .navbar .pc .location .location2{

        background:url("../../assets/img/heador/location.png") round;
        position: absolute;
        left: 10px;
        top: 16px;
        height: 20px;
        width: 20px;
    }
    .navbar .pc .location .location3{
        position: absolute;
        left: 35px;
        height: 49px;
    }



    .navbar  .li:hover{
        color: #ffffff;
        background: rgba(238,82,83,1);
        animation: changeColor 2s infinite;
        animation-delay: 2s;
        /*打开下拉栏一秒后呼吸效果*/
    }

    .navbar  .longin:hover{
        color: #ffffff;
        background: rgba(238,82,83,1);
        animation: changeColor 2s infinite;
        animation-delay: 2s;
        /*打开下拉栏一秒后呼吸效果*/
    }

    .navbar  .register:hover{
        color: #ffffff;
        background: rgba(238,82,83,1);
        animation: changeColor 2s infinite;
        animation-delay: 2s;
        /*打开下拉栏一秒后呼吸效果*/
    }
    @keyframes changeColor {
        0%{
            background: #1d84b5}
        50%{
            background: #00cecb}
        100%{
            background: #1d84b5;}

    }

    .navbar  li a{
        text-decoration: none;
        color: #efefef;
        display: inline-block;
        text-align: center;
        line-height: 49px;
        font-weight: bold;
        text-transform: uppercase;
    }

    .navbar li ul li{
        display: none;
        width: 220px;
        height: 49px;
        float: initial;
        background-color: #00b8ea;
        font-size: 10px;
        transition:0.5s;
    }

    .navbar .pc li:hover ul li{
        display: inline-block;
        border-top: 1px solid  rgba(72,219,251,0.5);
    }

    /*.navbar img{*/
    /*    width: 40px;*/
    /*    line-height: 49px;*/
    /*    float: right;*/
    /*    display: none;*/
    /*}*/

    .navbar p{
        display: none;
    }

    .navbar .menu{
        display: none;
    }

.user_name{
    display: inline-block;
    position: absolute;
    left: 5px;
    z-index: 999;
    text-indent: 1em;
}

.showbtn{
    display: none !important;
}
    /*@media only screen and (max-width: 970px) {*/

    /*    @import url('https://fonts.googleapis.com/css?family=Ma+Shan+Zheng&display=swap');*/
    /*    .navbar{*/
    /*        position: fixed;*/
    /*    }*/
    /*    .navbar img{*/
    /*        padding-top: 5px;*/
    /*        display:inline-block;*/
    /*        padding-right: 30px;*/
    /*    }*/

    /*    .navbar .pc{*/
    /*        display: none;*/
    /*        list-style: none;*/
    /*    }*/

    /*    .navbar p{*/
    /*        color: #efefef;*/
    /*        font-family: 'Ma Shan Zheng', cursive;*/
    /*        line-height: 49px;*/
    /*        padding-left: 25px;*/
    /*        font-size: x-large;*/
    /*        display: inline-block;*/

    /*    }*/

    /*    .navbar .menu{*/
    /*        display: block;*/
    /*        height: 100%;*/
    /*        width: 85%;*/
    /*        position: fixed;*/
    /*        top: 49px;*/
    /*        right: 0;*/
    /*        padding-left: 20px;*/
    /*        background-color: #333333;*/
    /*        color: #efefef;*/
    /*        text-align: left;*/
    /*        line-height: 49px;*/
    /*        font-size: x-large;*/


    /*    }*/

    /*    .navbar .menu .mp li{*/
    /*        display: block;*/
    /*        height: 49px;*/
    /*        list-style: none;*/

    /*    }*/
    /*    .navbar .menu .mp a{*/
    /*        text-decoration: none;*/
    /*        color: #efefef;*/

    /*    }*/



    /*}*/

</style>