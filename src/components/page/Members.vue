<template>
  <div>
    <div>
      <el-table
        :data="memberTable"
        style="width: 100%"
        max-height="400">
        <el-table-column
          prop="name"
          label="姓名"
          width="150">
        </el-table-column>
        <el-table-column
          prop="number"
          label="学号"
          width="300">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="150">
        </el-table-column>

        <el-table-column>
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, memberTable)"
              type="text"
              size="small">
              移除
            </el-button>
            <el-button type="text" @click="dialogFormVisible = true">点击添加新成员</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div>

      <el-dialog title="添加新成员" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名" >
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="学号" >
            <el-input v-model="form.number" auto-complete="off"></el-input>
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

      addTask(dialogFormVisible,form){
        dialogFormVisible = false;
        let obj={
          name:form.name,
          number:form.number,
          status:'未加入'
        }
        this.memberTable.push(obj);
      }
    },
    data(){
      return{
        memberTable:[{
          name:'大雄',
          number:'PB16060143',
          status:'已加入'
        },{
          name:'静香',
          number:'PB16060142',
          status:'已加入'
        },{
          name:'胖虎',
          number:'PB16060141',
          status:'已加入'
        }],
        dialogFormVisible: false,
        form:{
          name:' ',
          number:' '
        }
      }
    }
  }
</script>

<style scoped>

</style>
