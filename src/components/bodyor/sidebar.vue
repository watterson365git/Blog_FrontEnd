<template>
    <div class="containe" :class="{containe2:fixed}">
        <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=260 height=250 src="//music.163.com/outchain/player?type=0&id=2556417999&auto=1&height=430"></iframe>
        <div class="tools">
            <div class="title">在线辅助工具</div>
            <ul>
                <li><div></div> <a href="http://autoprefixer.github.io/" ><span>Autoprefixer CSS online</span></a></li>
                <li><div></div> <a href="https://www.iconfont.cn/" ><span>阿里图标库</span></a></li>
                <li><div></div> <a href="https://caniuse.com/#home" ><span>can i use</span></a></li>
                <li><div></div> <a href="http://www.bejson.com/" ><span>bejson.com/</span></a></li>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                fixed:false,


            }
        },
        methods:{
            handleScroll2 (scrollTop) {
                if(scrollTop){
                    if(scrollTop > 514){
                        this.fixed =true;

                    }else {
                        this.fixed =false;
                    }

                }else{
                    this.fixed =false;


                }

                // console.log(scrollTop);

            },
            handleScroll() {
                let scrollTop = document.documentElement.scrollTop ||
                document.body.scrollTop ||
                document.querySelector('.element').scrollTop;
                 // console.log(scrollTop);
                this.handleScroll2(scrollTop)
            },

        },
        mounted () {
            // window.addEventListener('scroll', this.handleScroll, true)
            window.addEventListener('scroll',this.handleScroll, true);
        },

        beforeDestroy() {
            window.removeEventListener("scroll",this.handleScroll)
        },

    }
</script>

<style scoped>
    .tools ul{
        padding: 0;
        margin: 0;

        /*text-align: center;*/
    }
    .tools li{
        list-style: none;
        display: block;
        height: 30px;
        /*background-color:pink;*/
        border-bottom: deepskyblue 1px solid;
        text-align: left;
        line-height:30px;
        margin-left: 10px;
        margin-right: 10px;

    }

    .tools li div{
        position: relative;
        top: 5px;
        left: 10px;
        width: 22px;
        height: 22px;
        background: url("../../assets/img/bodyor/tools.png") no-repeat;

    }
    .tools li:nth-child(1) div{
        background-position: 0 0px;

    }
    .tools li:nth-child(2) div{
        background-position: 0 -22.5px;

    }
    .tools li:nth-child(3) div{
        background-position: 0 -45px;

    }
    .tools li:nth-child(4) div{
        background-position: 0 -67.5px;

    }

    .tools li span{
        position: relative;
        display: block;
        top: -48px;
        left: 48px;


    }
.title{
    font-weight: bold;
    text-indent: 1rem;
    font-size: 120%;
}
    .containe{
        position: absolute;
        right: 0;
        top: 0;
        width: 260px;
        height: 435px;
        background-color: #fff;
        box-shadow: 3px 3px 5px rgba(100,100,100,0.6);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 10px;

    }

    .containe2{
        position: fixed;
        left: 50%;
        top: 0;
        margin-left: 340px;
        width: 260px;
        height: 435px;
        background-color: #fff;
        box-shadow: 3px 3px 5px rgba(100,100,100,0.6);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 10px;

    }

    @media screen and (max-width:900px){
        .containe,.containe2{
            position: absolute;
            right: 0;
            top: 0;
            width: 260px;
            height: 435px;
            background-color: #fff;
            box-shadow: 3px 3px 5px rgba(100,100,100,0.6);
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 10px;

        }
    }
</style>