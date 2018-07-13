<template>
    <div>

      <!--作业要求-->
      <div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="  作业要求" name="1" >
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>

        <el-collapse-item title="  截止日期" name="2">
        <div>2018-6-30</div>
      </el-collapse-item>

      </el-collapse>
      </div>

      <!--班级成员-->
      <div>
        <p class="submitted">班级成员</p>
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

          <el-table-column
            fixed="right"
            label="操作"
            width="400">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, memberTable)"
                type="text"
                size="small">
                移除
              </el-button>
              <!--<el-button type="text" @click="dialogFormVisible = true">点击添加新成员</el-button>-->
            </template>
          </el-table-column>
        </el-table>
        <el-button type="text" @click="dialogFormVisible = true" class="newMember">点击添加新成员</el-button>
      </div>

      <!--添加新的班级成员-->
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

      <!--已交名单-->
      <div>
        <p class="submitted">已交名单</p>
        <el-table  :data="submitTable"  style="width: 100%"  max-height="400">

          <el-table-column  prop="name" label="姓名"  width="150">
          </el-table-column>

          <el-table-column  prop="number" label="学号" width="200">
          </el-table-column>

          <el-table-column  prop="title" label="作业标题" width="400">
          </el-table-column>

          <el-table-column  prop="status" label="批阅状态" width="100">
          </el-table-column>

          <el-table-column  fixed="right" label="操作" width="200">
            <template slot-scope="scope">

              <router-link to="/submit1">
                <el-button
                  @click.native.prevent="check"
                  type="text"
                  size="small">
                  进入评分
                </el-button>
              </router-link>
            </template>
          </el-table-column>

        </el-table>

      </div>

      <!--未交名单-->
      <div>
        <p class="submitted">未交名单</p>
        <el-table :data="delayTable" style="width: 100%" max-height="400">

          <el-table-column prop="name" label="姓名" width="150">
          </el-table-column>

          <el-table-column prop="number" label="学号" width="700">
          </el-table-column>

          <el-table-column fixed="right" label="操作" width="200">
            <template slot-scope="scope">

              <el-button
                @click.native.prevent="deleteRow(scope.$index, taskTable)"
                type="text"
                size="small">
                移除
              </el-button>
            </template>
          </el-table-column>

        </el-table>
        <el-button type="warning" @click="warning" round>一键提醒</el-button>

      </div>

    </div>
</template>

<script>
    export default {
        name: "Task",

      data() {
        return {
          activeNames: ['2'],

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
          },
          submitTable:[{
            name:'wolfgang',
            number:'PB16060457',
            title:'超感八人组',
            status:'未批改'
          },{
            name:'kala',
            number:'PB17060178',
            title:'底特律：成为人类',
            status:'未批改'
          }],

          delayTable:[{
            name:'大雄',
            number:'PB16060143',
          },{
            name:'静香',
            number:'PB16060142',
          },{
            name:'胖虎',
            number:'PB16060141',
          }]

        }
      },

      methods: {
        handleChange(val) {
          console.log(val);
        },
        check(){
          this.$router.push('/giveScores');
        },
        deleteRow(index, rows) {
          rows.splice(index, 1);
        },
        warning(){
          this.$alert('已提醒！', '系统提示', {
            confirmButtonText: '确定',
            // callback: action => {
            //   this.$message({
            //     type: 'info',
            //     message: `action: ${ action }`
            //   });
            // }
          });
        },
        addTask(dialogFormVisible,form){
          this.dialogFormVisible = false;
          let obj={
            name:form.name,
            number:form.number,
            status:'未加入'
          }
          this.memberTable.push(obj);
        }
      }

    }
</script>

<style scoped>
   .newMember{
     position:relative;
     left:1000px;
     top:0px
   }
</style>
