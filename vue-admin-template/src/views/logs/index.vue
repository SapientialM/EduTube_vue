<!--  -->
<template>
  <div>
    <h3>操作历史</h3>
    <div class="history">
      <el-table :data="allHistory" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="scope">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="extend">
                  <span>可扩展内容</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="ID" prop="id"> </el-table-column>
          <el-table-column label="操作描述" prop="description">
          </el-table-column>
          <el-table-column label="时间" prop="gmtCreate"> </el-table-column>
      </el-table>
    </div>
    <div class="pageChange">
      <el-pagination background layout="prev, pager, next" :current-page="this.page" :page-count="this.maxpage" @current-change="this.getHistory">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import history from "@/api/history";
export default {
  name: "",
  props: {
    msg: String,
  },
  data() {
    return {
      allHistory:[],
      List:null,
      maxpage: 2,
      page: 1,
    };
  },
  created(){
    this.getHistory();
  },
  methods: {
    getHistory() {
      console.log(this.page);
      if(this.List == null)
        history.getHistory().then((res) => {
          // console.log(res)
          // this.operationData = res.data;
          this.List = res.data.history;
          console.log(this.List.length);
          this.allHistory = [];
          for (var i = (this.page-1)*10; i < this.page*10; i++) {
            this.allHistory.push(this.List[i]);
          }
        });
      else{
        this.allHistory = [];
        for (var i = (this.page-1)*10; i < this.page*10; i++) {
          this.allHistory.push(this.List[i]);
        }
      }
    },
  },
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
.pageChange {
  text-align: center;
}
</style>