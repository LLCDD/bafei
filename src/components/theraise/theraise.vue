<template>
  <div class="theraise">
    <div class="div1">
      <router-link tag="span" to="mai">买入</router-link>
      <router-link tag="span" to="chu">卖出</router-link>
      <router-link tag="span" to="dingdan">当前订单</router-link>
      <router-link tag="span" to="old">历史订单</router-link>
      <router-link tag="span" to="zhong">仲裁订单</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "343"
    };
  },
  mounted() {
    // this.$store.commit("size", this.$route.params.name);
    this.$store.commit("size", "HGH/CNY");
    this.$store.commit("headerStatus", true);
    this.$store.commit("tishi1", true);
    this.$store.commit("tishi", true);
    this.$store.commit("tabBar", true);
  },
  methods: {}
};
</script>

<style scoped>
.theraise {
  padding-top: 0.88rem;
  background: url("../../assets/image/500585755_banner.png") no-repeat bottom;
  background-size: cover;
  height: 100%;
}
.div1 {
  color: #fff;
}
.div1 > span {
  display: inline-block;
  margin-left: 0.45rem;
  font-size: 0.3rem;
  padding-top: 0.36rem;
  padding-bottom: 3px;
}
.router-link-active {
  border-bottom: 2px solid #34ede6;
  color: #34ede6;
}
</style>
