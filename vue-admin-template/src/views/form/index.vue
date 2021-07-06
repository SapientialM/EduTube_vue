<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="标签">
        <el-select v-model="form.label" placeholder="选择活动标签">
          <el-option 
          v-for="item in selectitems"
          :key="item.value"
          :label="item.lable" 
          :value="item.value"/>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker v-model="form.startdate" type="date" placeholder="Pick a date" :picker-options="pickerOptionsStart" style="width: 100%;"/>
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="form.enddate" type="date" placeholder="Pick a date" :picker-options="pickerOptionsEnd" style="width: 100%;"/>
        </el-col>
      </el-form-item>
      <el-form-item label="立即发布">
        <el-switch v-model="form.delivery"/>
      </el-form-item>
      <el-form-item label="活动类型">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="线上活动" name="type"/>
          <el-checkbox label="线下活动" name="type"/>
          <el-checkbox label="优惠促销" name="type"/>
          <el-checkbox label="公开课宣传" name="type"/>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="付费 (元)">
        <el-input-number v-model="form.pay" :min="0">
        </el-input-number>
      </el-form-item>
      <el-form-item label="活动人数">
        <el-input-number v-model="form.number" :min="1" :max="9999" >
        </el-input-number>
      </el-form-item>
      <el-form-item label="活动内容" >
        <el-input v-model="form.content" 
        type="textarea" 
        placeholder="200字以内" 
        :autosize="{ minRows: 4, maxRows: 6}" 
        maxlength="200"
        @input="descInput"
        clearable />
        <span class="gray"> 字数限制:{{form.enterlength}}/200</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        label: '',
        startdate: '',
        enddate: '',
        delivery: false,
        type: [],
        pay: '',
        number:'',
        content: '',
        enterlength:0
      },
      selectitems: [
        {
          value:'vue',
          lable: 'Vue'
        },
        {
          value:'java',
          lable: 'Java'
        },
        {
          value:'html_css',
          lable: 'HTML/CSS'
        },
        {
          value:'python',
          lable: 'Python'
        },
        {
          value:'c_c++',
          lable: 'C/C++'
        },
      ],
      pickerOptionsStart: {
        disabledDate: time => {
          let endDateVal = this.form.enddate;
          if (endDateVal) {
            return time.getTime() > new Date(endDateVal).getTime();
          }
        }
      },
      pickerOptionsEnd: {
        disabledDate: time => {
          let beginDateVal = this.form.startdate;
          if (beginDateVal) {
            return (
              time.getTime() <
              new Date(beginDateVal).getTime() 
            );
          }
        }
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    descInput() {
      var txtVal = this.form.content.length;
      this.form.enterlength = txtVal;
    },
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

