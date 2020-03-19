<template>
    <div>
        <navbar></navbar>
        <div class="sec_heador">
            <sidebar class="sidebar"></sidebar>
            <swiper class="swiper"></swiper>
            <aboutme class="aboutme"></aboutme>

        </div>

    </div>

    
</template>

<script>
    import navbar from './navbar'
    import swiper from './swiper'
    import sidebar from './sidebar'
    import aboutme from './aboutme'
    export default {
        components:{
            navbar,
            swiper,
            sidebar,
            aboutme
        }

    }
</script>

<style scoped>
    .sec_heador{
        position: relative;
        top: 0;
        width: 1200px;
        height: 380px;
        margin:38px auto;
        box-shadow: 3px 3px 5px rgba(100,100,100,0.6);
        border-radius: 10px;
        overflow: hidden;

    }
    .sidebar{
        position: absolute;
        left: 0;
    }
    .swiper{
        position: absolute;
        left: 215px;
    }
    .aboutme{
        position: absolute;
        left: 855px;
    }

</style>