<template>
  <div class="dashboard-container">
    <div class="info">
      <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" />
      <div class="dashboard-text">name:{{ name }}</div>
      <div class="dashboard-text">
        roles:<span v-for="role in roles" :key="role">{{ role }}</span>
      </div>
    </div>
    <div class="lastLogs">
      <h3>最近操作</h3>
    </div>
    <div class="messages"><h3>消息通知</h3></div>
  </div>
</template>

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
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.info img {
  display: flex;
  width: 100px;
  height: 100px;
}
</style>
