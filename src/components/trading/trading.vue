<template>
  <div class="div">
    <router-link tag="span" to="quanbu">全部</router-link>
    <router-link tag="span" to="zhuanqu">赚取</router-link>
    <router-link tag="span" to="zhichu">支出</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "我的交易"
    };
  },
  mounted() {
    this.$store.commit("size", this.$route.params.name);
    this.$store.commit("tishi1", false);
    this.$store.commit("tishi", true);
    this.$store.commit("tabBar", false);
  }
};
</script>
<style scoped>
.div {
  padding-top: 0.88rem;
  height: 100%;
  background: url("../../assets/image/500585755_banner.png") no-repeat bottom;
  background-size: cover;
}
.div > span {
  display: inline-block;
  margin-left: 0.7rem;
  padding: 0 0.5rem;
  margin-top: 0.54rem;
  padding-bottom: 0.16rem;
  color: #ffffff;
}
.router-link-active {
  color: #27e3d8;
  border-bottom: 2px solid #27e3d8;
}
</style>
