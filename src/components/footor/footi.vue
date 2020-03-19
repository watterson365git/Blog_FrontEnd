<template>
    <div id="footi">
      <div id="zhan"></div>
      <span>
       网站作者：Watterson
      </span>
      <br>
      <span>
        <a href="https://cloud.tencent.com/product/cvm">腾讯云</a>提供静态文件云存储服务-<a href="http://www.cloudxns.net/">CloudXNS</a>提供DNS解析服务
      </span>
      <br>

      <span>
        前端由 <a href="https://cn.vuejs.org/index.html"> Vue-Cli4</a>支持-后端由 <a href="http://www.expressjs.com.cn/">Express 4.0</a> 支持
      </span>
      <br>
      <span>
        数据库为 <a href="https://www.mongodb.com/download-center"> MongoDB</a>-数据结构服务器由<a href="https://redis.io/">Redis</a> 支持
      </span>
      <br>
      <span>
        <a href="http://beian.miit.gov.cn/">【沪ICP】备19047243-2号</a>
      </span>
    </div>
</template>

<script>
    export default {
        name: "footi"
    }
</script>

<style scoped>
  #zhan{
    height:5px;

  }

#footi{
  margin-left: 100px;
  margin-right: 100px;
  color: #437699;
  text-align: center;
  height: 110px;
  border-top: solid #00b9ff 2px;
  font-size: 16px;
  font-weight: bold;
}

  a{
    text-decoration: none;
    color: #0077ff;

  }


</style>
