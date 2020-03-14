<template>
    <div class="sidebar">
        <ul>
            <li v-for="(item,index) in list">{{item}}</li>

        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:['Vue','Koa2','Redis','Express','MongoDB','TypeScript']
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        background-color: rgb(43,51,59);
        width: 215px;
        height: 380px;
    }

    .sidebar ul{
        padding: 0;
        margin: 0;
    }
    .sidebar ul li{
        display: block;
        height: 63px;
        margin-left: 40px;
        color: #FFFFFF;
        text-align: left;
        line-height: 63px;
        font-size: 120%;
        text-indent: 1em;
        transition: 0.3s background-color;
    }

    .sidebar ul li:hover{
        background-color: rgb(107,113,118);
    }

</style>