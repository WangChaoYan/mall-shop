<template>
  <div id="app">
    <div id="header">
      <div id="logo"></div>
      <div id="menu"></div>
      <div id="search">
        <div id="sousuo"><el-input v-model="input" placeholder="请输入搜索内容"></el-input></div>
        <div id="button"><el-button type="primary" icon="el-icon-search">搜索</el-button></div>
      </div>
      <div id="login">
        <div id="denglu"><h3 class="el-icon-user-solid">登录</h3></div>
        <div id="zhuce"><h3>|注册</h3></div>
      </div>
    </div>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Footer from './components/footer'
export default {
  name: 'App',
  data () {
    return {
      input:''
    }
  },
  components: {
    'app-footer':Footer,
  }
}
</script>

<style>
  #header{
    width: 100%;
    height: 90px;
    background-color: aquamarine;
  }
  #logo{
    width: 14%;
    height: 90px;
    background-color: gainsboro;
    margin-left: 10%;
    float: left;
  }
  #menu{
    width: 30%;
    height: 90px;
    background-color: pink;
    float: left;
  }
  #search{
    width: 20%;
    height: 90px;
    background-color:gray;
    float: left;
  }
  #sousuo{
    width: 65%;
    height: 90px;
    margin-left: 2.5%;
    margin-top: 8%;
    float: left;
  }
  #button{
    width: 20%;
    height: 90px;
    margin-top: 8%;
    float: left;
  }
  #login{
    width: 16%;
    height: 90px;
    background-color: gainsboro;
    margin-right: 10%;
    float: right;
  }
  #denglu{
    width: 25%;
    height: 90px;
    margin-left: 31%;
    margin-top: 7%;
    float: left;
  }
  #zhuce{
    width: 25%;
    height: 90px;
    margin-top: 5%;
    float: left;
  }
</style>
