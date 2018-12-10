<template>
  <div class="div">
    <p>HGH充币</p>
    <img class="img" src="../../assets/image/ma.png" alt>
    <p class="p">长按二维码保存到相册</p>
    <p
      class="p1"
    >https://www.baidu.com/s?wd=%E8%AE%A1%E7%AE%97%E5%99%A8&rsv_spt=1&rsv_iqid=0xbfb3a14000119516&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=9&rsv_sug1=7&rsv_sug7=101</p>
    <button @click="top()">复制地址</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    top() {
      console.log("234");
    }
  },
  mounted() {
    this.$store.commit("tishi", true);
    this.$store.commit("tabBar", false);
    this.$store.commit("size", this.$route.params.name);
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
.div > p {
  font-size: 0.44rem;
  margin-top: 0.72rem;
  color: #fff;
  text-align: center;
}
.img {
  height: 4.02rem;
  width: 4.02rem;
  display: block;
  margin: 0 auto;
  margin-top: 0.66rem;
}
.p {
  font-size: 0.3rem !important;
  color: #0e66ad !important;
}
.p1 {
  height: 1rem;
  width: 90%;
  margin-left: 5%;
  color: #fff !important;
  font-size: 0.24rem !important;
  overflow: hidden;
}
.div > button {
  width: 90%;
  height: 0.8rem;
  background: #e0a108;
  margin-left: 5%;
  margin-top: 0.5rem;
  font-size: 0.34rem;
  color: #fff;
  border-radius: 5px;
}
</style>
