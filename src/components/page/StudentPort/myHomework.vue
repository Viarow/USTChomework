<template>
  <div>
    <div>
      <h3>待交作业</h3>
      <el-table
        :data="myTaskTable"
        style="width: 100%"
        max-height="400">
        <el-table-column
          prop="name"
          label="作业名称"
          width="300">
        </el-table-column>
        <el-table-column
          prop="deadline"
          label="截止日期"
          width="500">
        </el-table-column>

        <el-table-column>
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="viewRequirements"
              type="text"
              size="small">
              作业要求
            </el-button>

            <el-button
              @click.native.prevent="submitHomework"
              type="primary"
              icon="el-icon-message"
              size="small">
              提交作业
            </el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>



  </div>
</template>

<script>
    export default {
        name: "myHomework",
      methods:{
          viewRequirements(){
            this.$alert('请考生结合材料进行分析。自定立意、自拟标题，写一段作文。', '作业要求', {
              confirmButtonText: '确定',
              // callback: action => {
              //   this.$message({
              //     type: 'info',
              //     message: `action: ${ action }`
              //   });
              // }
            });
          },
        submitHomework(){
          this.$router.push('/submitHomework')

        }
      },
      data(){
          return{
            myTaskTable:[
              {
                name:'重要思想概论',
                deadline:'2018-6-30',

              },{
               name:'美术鉴赏',
                deadline:'2018-6-30',

              },{
               name:'基础乐理',
               deadline:'2018-6-30',

              }
            ]
          }
      }
    }
</script>

<style scoped>

</style>
