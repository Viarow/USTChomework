<template>
    <div>
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
            name:'wolfgang',
            number:'PB16060457',
          },{
            name:'kala',
            number:'PB17060178',
          }]

        };
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
        }
      }

    }
</script>

<style scoped>

</style>
