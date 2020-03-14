<template>
    <div>

        <div v-for="(item,index) in list" :key="index" class="blog">
            hjgjgjgjgjggjggggggggggggggggggggg{{item}}
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[1,2,3,4,5,6,7,8,999]
            }
        }
    }
</script>

<style scoped>

    .blog{
        position: relative;
        left: 0;
        height: 280px;
        width: 950px;
        box-shadow: 3px 3px 5px rgba(100,100,100,0.6);
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 10px;
        background-color: #fff;
    }

</style>