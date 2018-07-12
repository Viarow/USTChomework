
<template>
  <div >
    <div class="header">
      <v-head></v-head>
    </div>

    <div>

      <el-col :offset="2" :span="10">
      <el-form ref="form" :model="form" label-width="100px"  >

        <el-form-item class="login" label="登录邮箱" >
          <div >
            <el-input placeholder="请输入邮箱" v-model="input5" class="input-with-select" >
              <el-select v-model="select" slot="append" placeholder="请选择">
                <el-option label="@mail.ustc.edu.cn" value="1"></el-option>
                <el-option label="@ustc.edu.cn" value="2"></el-option>
              </el-select>
            </el-input>
          </div>
        </el-form-item>

        <el-form-item label="登录密码">
          <el-input  placeholder="长度不小于六位的数字和字母组合" class="login" v-model="loginPassword" maxlength=20 >
          </el-input>
        </el-form-item>

        <el-form-item label="再次输入密码">
          <el-input   class="login" v-model="loginPassword" maxlength=20  >
          </el-input>
        </el-form-item>

        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="female"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="学号" prop="number">
          <el-input  v-model="form.number" ></el-input>
        </el-form-item>

        <el-form-item label="验证码">
         <el-input v-model="form.name"> </el-input>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" >发送验证码</el-button>
          <el-button type="primary" @click="Signup">提交</el-button>
          <el-button type="primary" @click="Getback">返回</el-button>
        </el-form-item>

      </el-form>
      </el-col>

    </div>
  </div>
</template>



<script>

  import vHead from './Header.vue';

  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    components:{
      vHead
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      Signup() {
        this.$router.push('/StudentHome');
      },
      Getback(){
        this.$router.push('/login');
      }
    }
  }
</script>


<style scoped>

  .header{
    margin-bottom: 30px;
  }

</style>



<!--<template>
<div class="studentRegister">
  <el-button type="primary" @click="signup">学生注册</el-button>
</div>
</template>

<script>
    export default {
        name: "RegisterForStudent",
      methods:{
          signup(){
            this.$router.push('/home');
          }
      }
    }
</script>

<style scoped>
.studentRegister{
  position:absolute;
  left:400px;
  top:200px
}
</style>
-->
