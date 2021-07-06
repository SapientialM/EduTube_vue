<template>
  <div class="dashboard-container">
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
                <span>{{ scope.row.shop }}</span>
              </el-form-item>
              <el-form-item label="操作者">
                <span>{{ scope.row.id }}</span>
              </el-form-item>
              <el-form-item label="时间">
                <span>{{ scope.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="操作类型">
                <span>{{ scope.row.category }}</span>
              </el-form-item>
              <el-form-item label="备注">
                <span>{{ scope.row.address }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="时间" prop="id"> </el-table-column>
        <el-table-column label="操作类型" prop="id"> </el-table-column>
        <el-table-column label="操作者" prop="name"> </el-table-column>
        <el-table-column label="备注" prop="desc"> </el-table-column>
      </el-table>
    </div>
    <div class="messages"><h3>消息通知</h3></div>
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
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
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
    margin: 30px;
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
    width: 25%;
  }
  .intro {
    overflow: hidden;
    width: 70%;
    .roles {
      font-size: 20px;
    }
  }
}
.info img {
  width: 150px;
  height: 150px;
}
</style>
