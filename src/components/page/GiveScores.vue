<template>
  <div>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="preview">预览</el-button>
        <el-button style="float: right; padding: 3px 0" type="text">下载</el-button>
      </div>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple-light">学生一号</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">PB16061234</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple-light">2018-7-12</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">原子物理复习要点</div></el-col>
      </el-row>
    </el-card>
  </div>
  <div class="gradeReport">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="分数">
        <el-input v-model="form.grade" maxlength=20></el-input>
      </el-form-item>
      <el-form-item label="评语">
          <el-input v-model="form.comments" maxlength=20></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
      </el-form-item>

    </el-form>
  </div>
  </div>
</template>

<script>
    export default {
        name: "GiveScores",
      data(){
          return{
            form:{
              grade:'',
              comments:''
            }
          }
      },
      methods:{
        onSubmit() {
          this.$alert('评分成功', '系统提示', {
            confirmButtonText: '确定',
            // callback: action => {
            //   this.$message({
            //     type: 'info',
            //     message: `action: ${ action }`
            //   });
            // }
          });
          this.$router.push('/task');
        },
        preview(){
          document.write("<a href=\"./static/web/viewer.html?file=原子物理复习要点.pdf\">原子物理复习要点</a>");
        }
      }
    }
</script>

<style scoped>
  grid-content bg-purple-light {
    font-size: 14px;
  }


  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

  .gradeReport{
    position:relative;
    /*left:10px;*/
    top:50px;
    width: 80%;
  }
</style>

