<template>
    <div class="black">
        <div class="form">
<!--            关闭标志-->
            <a href="/" class="close"><div></div></a>
<!--            登陆标志-->
            <a href="#" class="login"><div>登录 </div></a>

<!--            注册标志-->
            <a href="/register"  class="register"><div>注册</div></a>


            <form action="" method="post" class="form2">
                <input type="email" placeholder="请输入登录（找回用）邮箱" class="email" name="email">
                <input type="password" placeholder="请输入登录密码" class="password" name="password">
                <label  class="lazy"><input type="checkbox" checked="checked">    7天内免登录</label>
                <a href="#" class="findback">找回密码</a>

                <input type="submit" value="登陆" class="submit">


            </form>
        </div>


    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .black{
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.7);
        z-index: 10001;
    }
    .form{
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #FFFFFF;
        height: 350px;
        width: 380px;
        z-index: 10002;
        border-radius: 10px;
    }

    .form2{
        position: absolute;
        top: 80px;
        left: 10%;
        display: block;
        width: 80%;
        height: 200px;
        /*background-color: pink;*/
    }

    .email, .password{
        display: block;
        height: 45px;
        width: 100%;
        margin-bottom: 15px ;
        border: 1px solid rgb(242,242,242);
        border-radius: 7px;
        background-color: rgb(242,242,242);
        outline:none;
        font-size: 105%;
        text-indent: 1em;
   }
    .lazy{
        display: block;
        position: absolute;
        left: 0;
        top: 130px;
        color:rgb(181,185,188) ;
    }

    .findback{
        display: block;
        position: absolute;
        right: 0;
        top: 130px;
        text-decoration: none;
        color:rgb(181,185,188) ;
    }

    .submit{
        display: block;
        position: absolute;
        left: 50%;
        margin-left: -152px;
        top: 170px;
        width: 304px;
        transition: 0.8s background-color ,border ;
        background-color: #0393ff;
        border: 1px solid #0393ff;
        height: 50px;
        border-radius:9999px;
        font-size: 120%;
        color:#ffffff;
    }
    .submit:hover{
        display: block;
        position: absolute;
        left: 50%;
        margin-left: -152px;
        top: 170px;
        width: 304px;
        background-color: #036eff;
        border: 1px solid #036eff;
        height: 50px;
        border-radius:9999px;
        font-size: 120%;
        color:#ffffff;

    }



    .login,.register{
        display: block;
        width: 40px;
        height: 40px;
        text-decoration: none;
        color:rgb(120,125,130);
        font-weight: bold;

    }
    .login{
        position: absolute;
        top: 26px;
        left: 50px;
        font-size: 110%;
        color: #0393ff;
    }

    /*.login:before{*/
    /*    content: "";*/
    /*    position: absolute;*/
    /*    top: 35px;*/
    /*    left: 50%;*/
    /*    margin-left: -10px;*/
    /*    width: 16px;*/
    /*    height: 3px;*/
    /*    background-color: red;*/
    /*    border-radius:9999px;*/
    /*}*/


    .register{
        position: absolute;
        top: 26px;
        left: 120px;
        font-size: 110%;
    }

    .login:hover,.register:hover{
        color: #0393ff;
    }

    /*.register:before{*/
    /*    content: "";*/
    /*    position: absolute;*/
    /*    top: 35px;*/
    /*    left: 50%;*/
    /*    margin-left: -10px;*/
    /*    width: 16px;*/
    /*    height: 3px;*/
    /*    !*background-color: red;*!*/
    /*    border-radius:9999px;*/
    /*}*/


    .close{
        display: block;
        position: absolute;
        top: 18px;
        left: 326px;
        width: 28px;
        height: 28px;
        background: url("../assets/img/login/close.png") round;
        transition: 0.3s background;

    }

    .close:hover{
        background: url("../assets/img/login/close_a.png") round;
    }
</style>