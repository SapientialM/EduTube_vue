<!--  -->
<template>
  <div>
    <div class="setting-container">
      <h3 class="header">个人设置</h3>
      <el-tabs type="border-card">
        <el-tab-pane label="基本信息"><h4>基本信息</h4></el-tab-pane>
        <el-tab-pane label="账号设置"><h4>账号设置</h4></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
@import url("//unpkg.com/element-ui@2.15.3/lib/theme-chalk/index.css");

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  color: #42b983;
}
.setting-container {
  margin: 30px;
}
.header {
  margin: 0 0 30px 30px;
  font-size: 30px;
}
</style>
