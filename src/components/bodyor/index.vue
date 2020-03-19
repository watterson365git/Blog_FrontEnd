<template>
    <div style="min-width: 1200px">
        <div class="container">
            <blog></blog>
            <sidebar></sidebar>
        </div>

    </div>
</template>

<script>
    import blog from "./blog"
    import sidebar from "./sidebar"
    export default {
        components:{
            blog,
            sidebar,
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