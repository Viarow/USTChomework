<template>
  <div  id="classCard">
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always">
          班级1
          <div>
           <i class="el-icon-bell"></i>
            <i class="el-icon-delete"></i>
          </div>>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          班级2
          <div>
            <i class="el-icon-bell"></i>
            <i class="el-icon-delete"></i>
          </div>
        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<script>
    export default {
        name: "classes"
    }
</script>

<style scoped>

</style>
