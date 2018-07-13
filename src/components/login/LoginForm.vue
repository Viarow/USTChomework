<template>

  <div class="LoginForm">

    <el-form ref="form" :model="form" label-width="80px" >

      <el-form-item class="login" label="登录邮箱">
        <div >

          <el-input placeholder="请输入邮箱" v-model="loginEmail" class="input-with-select">


          </el-input>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>


        </div>


      </el-form-item>

      <el-form-item label="登录密码">
        <el-input class="login" v-model="loginPassword" maxlength=20 >
          <el-button slot="append" type="danger">忘记密码</el-button>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button-group>
          <router-link to="/teacherRegister">
            <el-button type="primary" >教师注册</el-button>
          </router-link>
          <router-link to="/studentRegister">
            <el-button type="primary" >学生注册</el-button>
          </router-link>
        </el-button-group>
      </el-form-item>

    </el-form>
  </div>

</template>

<script>
  export default {
    name: "LoginForm",
    data() {
      return {
        activeIndex: '',
        form: {
          loginEmail: '',
          loginPassword: '',
          select: ''
        },
        options: [{
          value: '选项1',
          label: '@ustc.edu.cn'
        }, {
          value: '选项2',
          label: '@mail.ustc.edu.cn'
        }],
        value: ''


      }
    },

    methods: {
      login() {
        this.$router.push('/home');
      },
    }

  }
</script>

<style scoped>
  .LoginForm{

    position:absolute;
    left:400px;
    top:200px
  }
  .login{
    width: 50%;
  }
</style>
