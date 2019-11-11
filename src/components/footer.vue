<template>
  <div class="header">
    <div class="row">
      <div class="one">关于我们</div>
      <div class="one">Investor Relations</div>
      <div class="one">加入我们</div>
      <div class="one">合作联系</div>
      <div class="one">友情链接</div>
      <div class="one">在线客服</div>
      <div class="one">隐私政策</div>
    </div>
    <div class="row">
      <div class="two">增值电信业务经营许可证</div>
      <div class="two">粤B2-20170312</div>
      <div class="two">粤网文[2016]7030-1681号</div>
      <div class="two">粤公网备案44011302000433</div>
    </div>
    <div class="row">
      <div class="three">粤ICP备46120983号-1</div>
      <div class="three">网络出版服务许可证</div>
      <div class="three">广播电视节目制作经营许可证</div>
    </div>
    <div class="row">
      <div class="four">广州牙虎信息科技有限公司</div>
      <div class="four">版权所有@2012-2019 HUYA</div>
      <div class="four">12318全国文化市场举报网站</div>
      <div class="four">中国互联网不良信息举报中心</div>
      <div class="four">客服举报电话:0756-2211951</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'welcome',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    width: 100%;
    height: 160px;
    margin-top: 0.5%;
    background-color: gray;
  }
  .row{
    width: 80%;
    height: 40px;
    margin-left: 10%;
    background-color: gray;
  }
  .one{
    width: auto;
    height: 30px;
    margin-left: 7%;
    margin-top: 5px;
    float: left;
  }
  .two{
    width: auto;
    height: 30px;
    margin-left: 8.3%;
    margin-top: 5px;
    float: left;
  }
  .three{
    width: auto;
    height: 30px;
    margin-left: 14%;
    margin-top: 5px;
    float: left;
  }
  .four{
    width: auto;
    height: 30px;
    margin-left: 2.5%;
    margin-top: 5px;
    float: left;
  }

</style>
