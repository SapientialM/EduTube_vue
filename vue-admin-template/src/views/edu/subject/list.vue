<template>
  <div class="app-container">
    <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />

    <el-tree
      ref="tree2"
      :data="data2"
      node-key="id"
      :props="defaultProps"
      :filter-node-method="filterNode"
      :expand-on-click-node="false"
      class="filter-tree"
      :render-content="renderContent"
      default-expand-all 
    />

  </div>
</template>
<style>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>

<script>
import subject from '@/api/edu/subject'

export default {

  data() {
    return {
      filterText: '',
      data2: [],
      defaultProps: {
        children: 'children',
        label: 'title'
      }
    }
  },
  created() {
      this.getAllSubjectList()
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
    },

    remove(node, data) {
        console.log("node: "+data.id);
        var oneindex = 0;
        var twoindex = 0;
        if(node.parent.parent == null){
          console.log("一级列表");
          const parent = node.parent;
          // 删 data
          oneindex = this.data2.findIndex(d => d.id === data.id);
          this.data2.splice(oneindex,1);
          
        }
        else{
          console.log("二级列表");
          const parent = node.parent;
          // 删 data
          oneindex = this.data2.findIndex(d => d.id === parent.data.id);
          twoindex = this.data2[oneindex].children.findIndex(d => d.id === data.id);
          this.data2[oneindex].children.splice(twoindex,1);
        }
        
        console.log(this.data2[oneindex]);
        
    },

    getAllSubjectList(){
        subject.getSubjectList()
        .then(response=>{
            this.data2=response.data.subjectList
        })
    },

    renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>);
    },



  }
}
</script>

