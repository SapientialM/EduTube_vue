<template>
  <div class="app-container">
    <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />

    <el-tree
      ref="tree2"
      :data="data2"
      :props="defaultProps"
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
    />

  </div>
</template>
<style>
.el-tree{
  background-color: rgb(139, 171, 184);
  color: rgb(39, 35, 243);
  font-weight: bolder;
}
.el-tree-node{
  border:1px solid rgb(102, 92, 92);
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

    getAllSubjectList(){
        subject.getSubjectList()
        .then(response=>{
            this.data2=response.data.subjectList
        })
    }




  }
}
</script>

