<!--
 * @author agrinJPG
 * @date 2021/7/6 17:16
 * @Description 首页
-->
<template>
  <div class="dashboard-container">
    <div class="body">
      <div class="info">
        <div class="pic">
          <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" />
        </div>
        <div class="intro">
          <div class="dashboard-text">name:{{ name }}</div>
          <div class="dashboard-text roles">
            roles:<span v-for="role in roles" :key="role">{{ role }}</span>
          </div>
        </div>
      </div>
      <div class="lastLogs">
        <h3>最近操作</h3>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="scope">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="操作对象">
                  <span>{{ scope.row.name }}</span>
                </el-form-item>
                <el-form-item label="ID">
                  <span>{{ scope.row.id }}</span>
                </el-form-item>
                <el-form-item label="操作者">
                  <span>{{ scope.row.user }}</span>
                </el-form-item>
                <el-form-item label="时间">
                  <span>{{ scope.row.time }}</span>
                </el-form-item>
                <el-form-item label="操作类型">
                  <span>{{ scope.row.category }}</span>
                </el-form-item>
                <el-form-item label="备注">
                  <span>{{ scope.row.note }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="时间" prop="time"> </el-table-column>
          <el-table-column label="操作类型" prop="category"> </el-table-column>
          <el-table-column label="操作者" prop="user"> </el-table-column>
          <el-table-column label="备注" prop="note"> </el-table-column>
        </el-table>
      </div>
      <div class="messages">
        <h3>消息通知</h3>
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="一致性" name="1">
            <div>
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
            </div>
            <div>
              在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
            </div>
          </el-collapse-item>
          <el-collapse-item title="反馈" name="2">
            <div>
              控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
            </div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>
              清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
            </div>
            <div>
              帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
            </div>
          </el-collapse-item>
          <el-collapse-item title="可控" name="4">
            <div>
              用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
            </div>
            <div>
              结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="footer"><h3>EduTube</h3></div>
  </div>
</template>
<script src="//unpkg.com/vue@next"></script>
<script src="//unpkg.com/element-plus/lib/index.full.js"></script>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name", "roles", "avatar"]),
  },
  data() {
    return {
      info: "",
      activeName: "1",
      tableData: [
        {
          id: "12987122",
          name: "讲师列表",
          category: "添加",
          user: "admin",
          time: "2021/07/06 16:52:00",
          note: "范例",
        },
      ],
    };
  },
  created() {
    this.$store
      .dispatch("GetInfo", this.roles)
      .then((res) => {
        this.info = res;
      })
      .catch((e) => {
        console.log("something wrong");
        console.log(e);
      });
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import url("//unpkg.com/element-plus/lib/theme-chalk/index.css");

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.dashboard {
  &-container {
    .body {
      margin: 30px;
    }
    .footer {
      width: 100%;
      height: 200px;
      background: #aad0e2;
      text-align: left;
      color: rgb(255, 255, 255);
      margin: 0;
      padding: 0;
      margin-top: 50px;
      h3 {
        font-size: 35px;
        padding: 25px;
        padding-left: 35px;
      }
    }
  }
  &-text {
    margin: 20px 0;
    font-size: 30px;
    line-height: 46px;
  }
}
.info {
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 2px solid rgb(107, 132, 155);
  .pic {
    float: left;
    width: 20%;
    margin: 0 30px;
  }
  .intro {
    overflow: hidden;
    width: 60%;
    .roles {
      font-size: 20px;
      color: #333;
    }
  }
}
.info img {
  width: 150px;
  height: 150px;
}
.lastLogs {
  margin: 50px 0;
}
.messages {
  margin: 50px 0;
  padding-bottom: 20px;
}
.el-collapse-item div {
  padding: 0 40px;
}
/deep/ .el-collapse-item__header {
  display: flex;
  flex-direction: row-reverse;
  flex: 1 0 auto;
  order: -1;
  padding: 0 20px;
  font-weight: 900;
  color: #666;
}
</style>
