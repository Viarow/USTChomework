<!-- 展示模板 -->
<template>
  <router-view id="app"></router-view>
</template>

<script>


import MyClass from "./components/page/Classes";
export default {
  name: 'app',
  components: {MyClass},
}
</script>
<!-- 样式代码 -->
<style>

  @import "../static/css/main.css";
  @import "../static/css/color-dark.css";     /*深色主题*/
  /*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/

</style>
