<template>
    <div class="containe" :class="{containe2:fixed}">
        <div content="sidebar">

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                fixed:false
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
    .containe{
        position: absolute;
        right: 0;
        top: 0;
        width: 230px;
        height: 340px;
        background-color: #fff;
        box-shadow: 3px 3px 5px rgba(100,100,100,0.6);
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 10px;

    }

    .containe2{
        position: fixed;
        left: 50%;
        top: 0;
        margin-left: 370px;
        width: 230px;
        height: 340px;
        background-color: #fff;
        box-shadow: 3px 3px 5px rgba(100,100,100,0.6);
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 10px;

    }

    @media screen and (max-width:900px){
        .containe,.containe2{
            position: absolute;
            right: 0;
            top: 0;
            width: 230px;
            height: 340px;
            background-color: #fff;
            box-shadow: 3px 3px 5px rgba(100,100,100,0.6);
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 10px;

        }
    }
</style>