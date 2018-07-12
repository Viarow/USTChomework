<template>
  <div class="error-page">
    <div class="error-desc">资料设置 </div>
    <div class="error-handle">
      <router-link to="/profile">
        <el-button type="primary" size="middle">返回首页</el-button>
      </router-link>
      <el-button class="error-btn" type="primary" size="middle" @click="goBack">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goBack(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>

  .error-code span{
    color: #00a854;
  }
  .error-desc{
    font-size: 30px;
    color: #777;
  }
  .error-handle{
    margin-top: 30px;
    padding-bottom: 200px;
  }
  .error-btn{
    margin-left: 100px;
  }
</style>
