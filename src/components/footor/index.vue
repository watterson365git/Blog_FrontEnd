<template>
    <div style="min-width: 1200px">

        <footi class="footi"></footi>

    </div>

</template>

<script>
    import footi from "./footi"
    export default {
        components:{
            footi
        }

    }
</script>

<style scoped>

    .footi{
        position: relative;
        bottom: 0;
    }

</style>