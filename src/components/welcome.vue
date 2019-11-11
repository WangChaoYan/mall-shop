<template>
  <div class="welcome">
  <div class="header"  v-bind:style="{backgroundImage:'url(' + bg + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%'}">
    <div id="header"></div>
  </div>
    <div style="width: 80%;height: 300px;margin-left: 10%;background-color: red"></div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      bg: require('@/assets/鸣人.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    width: 100%;
    height: 520px;
  }
  .welcome{
    background-color: gainsboro;;
  }
#header{
  width: 80%;
  height: 500px;
  margin: 0 auto;
  background-color: burlywood;
}
</style>
