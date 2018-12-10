<template>
  <div class="div">
    <div>
      <router-link tag="p" to="/ka">
        <span>银行卡</span>
        <span>
          <i class="iconfont">&#xe604;</i>
        </span>
      </router-link>
      <router-link tag="p" to="/zhifubao">
        <span>支付宝</span>
        <span>
          <i class="iconfont">&#xe604;</i>
        </span>
      </router-link>
      <router-link tag="p" to="/weixin">
        <span>微信</span>
        <span>
          <i class="iconfont">&#xe604;</i>
        </span>
      </router-link>
      <router-link tag="p" to="/token">
        <span>im Token</span>
        <span>
          <i class="iconfont">&#xe604;</i>
        </span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "支付管理"
    };
  },
  mounted() {
    this.$store.commit("tishi", true);
    this.$store.commit("tabBar", false);
    this.$store.commit("size", this.$route.params.name);
    this.$store.commit("sidebar", false);
    this.$store.commit("tishi1", false);
  }
};
</script>
<style scoped>
@font-face {
  font-family: "iconfont";
  src: url("../../assets/font1/iconfont.woff") format("woff");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.div {
  padding-top: 0.88rem;
  height: 100%;
  background: url("../../assets/image/500585755_banner.png") no-repeat bottom;
  background-size: cover;
  color: #fff;
}
.div > div > p {
  padding-left: 0.6rem;
  padding-top: 0.74rem;
  padding-left: 0.7rem;
  font-size: 0.3rem;
}
.div > div > .p1 {
  padding-top: 0.64rem;
}
.iconfont {
  float: right;
  padding-right: 0.7rem;
  font-size: 0.3rem;
  font-weight: 100;
}
</style>