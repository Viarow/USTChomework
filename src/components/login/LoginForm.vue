<template>

  <div class="LoginForm">

    <el-form ref="form" :model="form" label-width="80px" >

      <el-form-item class="login" label="登录邮箱">
        <div >

          <el-input placeholder="请输入邮箱" v-model="input5" class="input-with-select">
            <el-select v-model="select" slot="append" placeholder="请选择">
              <el-option label="@mail.ustc.edu.cn" value="1"></el-option>
              <el-option label="@ustc.edu.cn" value="2"></el-option>

            </el-select>

          </el-input>

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
        input5: '',


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
    width: 30%;
  }
</style>
