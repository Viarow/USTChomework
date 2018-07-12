<template>
  <div>
    <div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="  作业要求" name="1" class="text">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>

        <el-collapse-item title="  截止日期" name="2" class="text">
          <div>2018-6-30</div>
        </el-collapse-item>

      </el-collapse>
    </div>

    <div>
      <el-form ref="form" :model="form" label-width="80px" class="submitForm">
        <el-form-item label="作业标题" class="title">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="作业标题">
          <el-upload
            class="upload-demo"
            drag
            action="/api/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>


      </el-form>
    </div>

  </div>
</template>

<script>
    export default {

        name: "SubmitPage",
      data(){
        return{
          form:{
            name:''
          }
        }
      },
      methods:{
          submit(){
            this.$alert('提交成功', '系统提示', {
              confirmButtonText: '确定',
              // callback: action => {
              //   this.$message({
              //     type: 'info',
              //     message: `action: ${ action }`
              //   });
              // }
            });
        }
      }
    }
</script>

<style scoped>

  .text{
    text-align: center;
  }
  .submitForm{
    position:relative;
    left:100px;
    top:50px
  }
  .title{
  width:80%
  }
</style>
