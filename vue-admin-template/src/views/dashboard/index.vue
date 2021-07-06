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
  width: 90%;
  height: 90%;
}
</style>
