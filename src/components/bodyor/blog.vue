<template>
    <div class="warp">

        <div v-for="(item,index) in list" :key="index" class="blog" :class="{blogshow:blogshow}">
            <span class="title">{{item.title}}</span>
            <div class="pic" :style="{background:'url('+item.pic+')' +'round'}" ></div>
            <span class="describe">{{item.describe}}</span>
            <span class="author">{{item.author}}</span>
            <span class="date">{{item.date}}</span>
            <span class="kind">【{{item.kind}}】</span>
            <span class="readmore" @click="readmore(item.article)">阅读详细</span>
        </div>
        <button class="goback" :class="{blogshow:!blogshow}" @click="goback" >返回</button>
        <div class="article" :class="{blogshow:!blogshow}" ref="article">

            </div>


        <div class="page":class="{blogshow:blogshow}">
<!--            <div class="bar">-->
<!--                <span>我要~我要更多</span>-->

<!--            </div>-->
            <ul class="page_ul">
                <li class="page_li" @click="tobegin">首页</li>
                <li class="page_li" @click="tolast">上一页</li>
                <li class="page_li">{{pagecount+1}}</li>
                <li class="page_li">{{pagecount+1}}/{{this.$store.state.page_num}}</li>
                <li class="page_li" @click="tonext">下一页</li>
                <li class="page_li"  @click="toend">尾页</li>
            </ul>
        </div>

    </div>
</template>

<script>
    import  {request} from '../../network/iflogin'
    export default {
        data(){
            return{
                list:[],
                pagecount:0,
                blogshow: false,


            }
        },
        methods:{
            requestfirst(){
                request({ url:`/articleget?limit=true&pagecount=${this.pagecount}`}
                ).then(res=>{
                    this.list = res.data
                    // console.log(res);
                })
            },
            readmore(item){
                this.blogshow = true;
                this.$refs.article.innerHTML = item
            },
            goback(){
                this.blogshow = false;
            },


            tobegin(){
                this.pagecount = 0
                request({ url:`/articleget?limit=true&pagecount=${this.pagecount}`}
                ).then(res=>{
                    this.list = res.data
                    // console.log(res);
                })

            },
            tolast(){
                if(this.pagecount<=0){
                    alert("没有上一页了哦!!!!!!")
                }else{
                    this.pagecount =  this.pagecount -1
                    request({ url:`/articleget?limit=true&pagecount=${this.pagecount}`}
                    ).then(res=>{
                        this.list = res.data
                        // console.log(res);
                    })
                }



            },
            tonext(){

                if(this.pagecount+1>=this.$store.state.page_num){
                    alert("没有下一页了哦!!!!!!")
                }else{
                    this.pagecount =  this.pagecount +1
                    request({ url:`/articleget?limit=true&pagecount=${this.pagecount}`}
                    ).then(res=>{
                        this.list = res.data
                        // console.log(res);
                    })
                }

            },
            toend(){
                this.pagecount = this.$store.state.page_num-1
                console.log(this.$store.state.page_num);
                request({ url:`/articleget?limit=false&pagecount=${this.pagecount}`}//除以每页显示数目

                ).then(res=>{
                    this.list = res.data
                    console.log(res);
                })}

        },
        computed:{
            eventChange(){
                return this.$store.state.list
            }
        },
        watch:{
            eventChange(val){
                this.list = this.$store.state.list
            }
        }
        ,

        mounted() {

            this.requestfirst();



        }
    }
</script>

<style scoped>
    @import "../../assets/blog.css";
    .warp{
         min-height: 670px;
        position: relative;
        top: 0;
        padding-bottom: 60px;
        }
    .blog{
        position: relative;
        left: 0;
        height: 280px;
        width: 930px;
        box-shadow: 3px 3px 5px rgba(100,100,100,0.6);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 10px;
        background-color: #fff;
        opacity: 1;
        transition:1s opacity;


    }
    .article{
        position: relative;
        left: 0;
        top: 0;
        width: 930px;
        /*height: 999px;*/
        box-shadow: 3px 3px 5px rgba(100,100,100,0.6);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 10px;
        background-color: #ffffff;
        opacity: 1;
        transition: opacity 1s;

    }
    .blogshow{
        height: 0;
        opacity: 0;
        margin-bottom: 0;

    }

    .goback{
        display: inline-block;
        /*width: 50px;*/
        /*height: 30px;*/
        border-radius: 5px;
        border:rgb(69, 218, 222) solid 1px;
        font-weight: bold;
        font-size: 120%;
        position: absolute;
        top: 5px;
        left: 5px;
        background-color: rgb(69, 218, 222);
        z-index: 999;
        padding: 5px;
        color: #eeeeee;
        outline:none;



    }

    .page{
        width: 1200px;
        position: absolute;
        left: 50%;
        bottom: 10px;
        margin-top: 20px;
        margin-left: -600px;

        height: 40px;
        /*background-color: #acadff;*/
        /*box-shadow: 3px 3px 5px rgba(100,100,100,0.6);*/
        /*border-radius: 10px;*/
        /*font-weight: bold;*/
        /*color: #ffffff;*/
        /*font-size: 130%;*/
        /*text-align: center;*/
        /*line-height: 40px;*/
        /*transition: 0.5s background-color;*/
    }


    .title{
        display: inline-block;
        position: absolute;
        top: 25px;
        left:20px;
        height:30px;
        font-weight: bold;
        font-size: 150%;
        color: rgb(51,122,185);
    }
.pic{
    background-color: #d8e8ea;
    position: absolute;
    top: 70px;
    left:30px;
    height:170px;
    width: 270px;
}
    .describe{
        font-size: 16px;
        text-align: left !important;
        line-height: 30px !important;
        display: inline-block;
        position: absolute;
        top: 50px;
        left:300px;
        height:30px;
        padding:20px;
    }

    .date{
        display: inline-block;
        position: absolute;
        top: 220px;
        left:485px;
        height:30px;
    }
    .author {
        display: inline-block;
        position: absolute;
        top: 220px;
        left:375px;
        height:30px;
        font-weight: bold;
        font-size: 18px;
    }

    .author:before{
        content: "";
        position: absolute;
        top: -15px;
        left: -60px;
        height: 45px;
        width: 45px;
        border: #09c7ff 2px solid;

        background: url("../../assets/img/heador/me.jpg") round;
        border-radius: 50%;
        z-index: 999;
    }

    .kind{
        display: inline-block;
        position: absolute;
        top: 220px;
        left:575px;
        height:30px;
        font-weight: bold;
        color: rgb(20,155,103);
    }

    .readmore{
        display: inline-block;
        background-color: rgb(0, 166, 222);
        position: absolute;
        top: 220px;
        left:810px;
        text-align: center;
        width: 70px;
        font-weight: bold;
        border-radius: 5px;
        /*padding: 5px;*/
        color: #eeeeee;
        transition: 0.5s background-color;
    }

    .readmore:hover{
        background-color: rgb(0, 135, 222);


    }

    .readmore,.kind,.describe,.date,.author{
        text-align: center;
        line-height: 30px;


    }

    .page_ul{
        display: inline-block;
        padding: 0;
        margin: 0;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);



    }

    .page_li{

        float: left;
        margin-right:5px;
        display: inline-block;
        list-style: none;
        background-color: #acadff;
        box-shadow: 3px 3px 5px rgba(100,100,100,0.6);
        transition: 0.5s background-color;
        border-radius: 4px;
        font-weight: bold;
        color: #ffffff;
        text-align: center;
        line-height: 40px;
        padding-left: 10px;
        padding-right: 10px;



    }

    .page_li:hover{
        background-color: #7f82ff;

    }
</style>