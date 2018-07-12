<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">作业管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <div class="btn-fullscreen" @click="handleFullScreen">
          <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 我的班级 -->
        <!--<div class="myclass">-->
        <!--<el-tooltip class="item" effect="dark" content="我的班级" placement="bottom">-->
        <!--<router-link to="/classes">-->
        <!--<i class="el-icon-view"></i>-->
        <!--</router-link>-->
        <!--</el-tooltip>-->
        <!--</div>-->
        <!-- 系统消息 -->
        <div class="system_mes">
          <el-tooltip class="item" effect="dark" content="系统消息" placement="bottom">
            <router-link to="/messages">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
        </div>
        <!-- 资料设置 -->
        <div class="profile">
          <el-tooltip class="item" effect="dark" content="资料设置" placement="bottom">
            <router-link to="/studentProfile">
              <i class="el-icon-edit-outline"></i>
            </router-link>
          </el-tooltip>
        </div>
        <!-- 退出登录 -->
        <div class="logout">
          <el-tooltip class="item" effect="dark" content="退出登录" placement="bottom">
            <router-link to="/login">
              <i class="el-icon-location"></i>
            </router-link>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import bus from '../common/bus';
  export default {
    data() {
      return {
        collapse: false,
        fullscreen: false,
        name: 'Header'

      }
    },
    methods:{
      // 侧边栏折叠
      collapseChage(){
        this.collapse = !this.collapse;
        bus.$emit('collapse', this.collapse);
      },
      // 全屏事件
      handleFullScreen(){
        let element = document.documentElement;
        if (this.fullscreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
          }
        }
        this.fullscreen = !this.fullscreen;
      },

    },
    mounted(){
      if(document.body.clientWidth < 1500){
        this.collapseChage();
      }
    }
  }

</script>

<style scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
  }
  .collapse-btn{
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }
  .header .logo{
    float: left;
    width:250px;
    line-height: 70px;
  }
  .header-right{
    float: right;
    padding-right: 50px;
  }
  .header-user-con{
    display: flex;
    height: 70px;
    align-items: center;
  }
  .btn-fullscreen{
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
  }
  .myclass,.system_mes,.profile,.btn-fullscreen{
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
  }
  .el-icon-bell,.el-icon-rank,.el-icon-view, .el-icon-edit-outline,.el-icon-location{
    color: #fff;
  }
</style>
