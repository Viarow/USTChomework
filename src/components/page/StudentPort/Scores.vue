<template>
  <div>
    <h3>已交作业</h3>
    <el-table
      :data="scoresTable"
      style="width: 100%"
      max-height="400">
      <el-table-column
        prop="name"
        label="作业名称"
        width="300">
      </el-table-column>
      <el-table-column
        prop="title"
        label="作业标题"
        width="500">
      </el-table-column>

      <el-table-column
        prop="scores"
        label="分数"
        width="100">
      </el-table-column>

      <el-table-column>
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="viewComments(scope.$index, scoresTable)"
            type="text"
            size="small">
            评语
          </el-button>

        </template>
      </el-table-column>


    </el-table>
  </div>
</template>

<script>
    export default {
        methods:{
          viewComments(index, rows){
            if(index==2){
              this.$alert('尚未评分', '评语', {
                confirmButtonText: '确定',
                // callback: action => {
                //   this.$message({
                //     type: 'info',
                //     message: `action: ${ action }`
                //   });
                // }
              });
            }else{
              this.$alert('这位同学很优秀', '评语', {
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
        },
      data(){
          return{
            scoresTable:[
              {
                name:'第一次读书笔记',
                title:'《代码大全》读书心得',
                scores:'90'
              },{
                name:'第二次读书笔记',
                title:'《代码之美》读书心得',
                scores:'90'
              },{
                name:'第三次读书笔记',
                title:'《人月神话》读书心得',
                scores:'未评分'
              }
            ]
          }
      }
    }
</script>

<style scoped>

</style>
