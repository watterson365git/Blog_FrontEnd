<template>
    <div>
        <div class="container">
            <blog></blog>
            <sidebar></sidebar>
        </div>

        <page></page>
    </div>
</template>

<script>
    import blog from "./blog"
    import sidebar from "./sidebar"
    import page from "./page"
    export default {
        components:{
            blog,
            sidebar,
            page
        }
    }
</script>

<style scoped>
    .container{

        width: 1200px;
        position: relative;
        top: 0;
        left: 50%;
        margin-left: -600px;
    }

</style>