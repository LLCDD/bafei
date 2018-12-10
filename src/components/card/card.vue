<template>
  <div class="div">
    <div class="div1"></div>
    <img class="img" src="../../assets/image/logo.png" alt>
    <h1 class="h1">扫码注册 HGH账号</h1>
    <img class="img1" src="../../assets/image/ma.png" alt>
    <p>长按上图识别二维码即可</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "分享"
    };
  },
  mounted() {
    console.log(this.$route.params.name);
    // console.log(this.$store.state.footstatus);
    this.$store.commit("tishi", true);
    this.$store.commit("tabBar", false);
    this.$store.commit("size", this.$route.params.name);
  }
};
</script>
<style scoped>
.div {
  padding-top: 0.88rem;
  background: url("../../assets/image/500585755_banner.png") no-repeat bottom;
  background-size: cover;
  height: 100%;
}
.div1 {
  margin: 0 auto;
  text-align: center;
}
.img {
  display: block;
  height: 2.28rem;
  width: 2.28rem;
  margin: 0 auto;
  margin-top: 0.88rem;
}
.h1 {
  text-align: center;
  font-size: 0.46rem;
  color: #fff;
  margin-top: 0.44rem;
}
.img1 {
  display: block;
  height: 4rem;
  width: 4rem;
  margin: 0 auto;
  margin-top: 0.96rem;
}
.div > p {
  text-align: center;
  color: #fff;
  font-size: 0.38rem;
  margin-top: 0.26rem;
}
</style>