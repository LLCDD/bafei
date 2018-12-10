<template>
  <div class="div">
    <div>
      <p class="p1">
        <span class="span">{{ lie }}</span>
        <br>
        <span class="span1">裂变子链</span>
      </p>
      <p>
        <span class="span">{{ hgh }}</span>
        <br>
        <span class="span1">HGH</span>
      </p>
    </div>
    <div class="div2">
      <p class="top">兑换数量</p>
      <input class="top top1" type="text" v-model="yeuhuan">
    </div>
    <div class="div2">
      <p class="top">支付密码</p>
      <input class="top top1" type="text" placeholder="请输入支付密码" v-model="password">
    </div>
    <div class="div2">
      <p class="top">平台手续费</p>
      <span class="top">{{ feiyong }}</span>
    </div>
    <div class="div2">
      <p class="top">激活币收入</p>
      <span class="top">{{ shouru }}</span>
    </div>
    <div class="div2">
      <p class="top">应得HGH</p>
      <span class="top">{{ hgh1 }}</span>
    </div>
    <button @click="top()">确定兑换</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "",
      lie: "0.00",
      hgh: "0.00",
      yeuhuan: "1000",
      password: "",
      feiyong: "50.00"
    };
  },
  computed: {
    shouru() {
      return this.yeuhuan * 1 + ".00";
    },
    hgh1() {
      return this.yeuhuan * 2;
    }
  },
  mounted() {
    this.$store.commit("size", this.$route.params.name);
    this.$store.commit("tishi1", false);
    this.$store.commit("tishi", true);
    this.$store.commit("tabBar", false);
  },
  methods: {
    top() {
      console.log("确定兑换");
    }
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
.div > div {
  width: 100%;
  border-bottom: 1px solid #5b91eb;
  margin-top: 0.24rem;
  float: left;
}
.div > div > p {
  float: left;
  width: 49.6%;
  text-align: center;
}
.span {
  padding-top: 0.26rem;
  display: inline-block;
  color: #fff;
  font-size: 0.26rem;
  margin-bottom: 0.22rem;
}
.span1 {
  display: inline-block;
  color: #c0c4cd;
  padding-bottom: 0.28rem;
}
.p1 {
  border-right: 1px solid #5b91eb;
}
.div2 {
  color: #fff;
}
.top {
  display: inline-block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
}
.top1 {
  background: url("../../assets/image/500585755_banner.png") no-repeat bottom;
}
</style>