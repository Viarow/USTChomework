<template>
<div>
  <div>
  <el-table
    :data="taskTable"
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
      width="150">
    </el-table-column>
    <el-table-column
      prop="submitted"
      label="已交人数"
      width="150">
    </el-table-column>
    <el-table-column
      prop="checked"
      label="已批改"
      width="150">
    </el-table-column>


    <el-table-column>
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, taskTable)"
          type="text"
          size="small">
          移除
        </el-button>
        <el-button
          @click.native.prevent="check"
          type="text"
          size="small">
          批改
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>

  <div>
    <el-button type="text" @click="dialogFormVisible = true">点击添加新作业</el-button>
    <el-dialog title="添加新作业" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="作业名称" >
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="作业要求">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="form.rules">
          </el-input>
        </el-form-item>
        <el-form-item label="截止日期">
          <el-date-picker
            v-model="form.ddl"
            value-format="yyyy-MM-dd"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTask(dialogFormVisible,form)">确 定</el-button>
      </div>

    </el-dialog>
  </div>
</div>
</template>

<script>
    export default {
      name: 'homework',
      methods: {
        deleteRow(index, rows) {
          rows.splice(index, 1);
        },
        check(){
          this.$router.push('/task')
        },
        addTask(dialogFormVisible,form){
          dialogFormVisible = false;
          let obj={
            name:form.name,
            deadline:form.ddl,
            submitted:0,
            checked:0
          }
         this.taskTable.push(obj);
        }
      },
     data(){
        return{
          taskTable:[{
            name:'作业一',
            deadline:'2018-8-8',
            submitted:60,
            checked:10
          },{
            name:'作业二',
            deadline:'2018-8-8',
            submitted:60,
            checked:10
          },{
            name:'作业三',
            deadline:'2018-8-8',
            submitted:60,
            checked:10
          }],
          dialogFormVisible: false,
          form:{
            name:'',
            rules:'',
            ddl:''
          }
        }
     }
    }
</script>

<style scoped>

</style>



