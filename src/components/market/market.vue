<template>
  <div class="div">
    <div class="div1">
      <span>对方账户</span>
      <input type="text" placeholder="对方手机号/钱包地址/ID" v-model="num">
    </div>
    <button @click="top()">下一步</button>
  </div>
</template>
<script>
import axiso from "axios";
export default {
  data() {
    return {
      msg: "交易",
      num: ""
    };
  },
  methods: {
    top() {
      console.log(this.num);
    }
  },
  mounted() {
    this.$store.commit("tishi1", false);
    if (this.$route.params.name == "转账") {
      this.$store.commit("size", this.$route.params.name);
      this.$store.commit("headerStatus", true);
      this.$store.commit("tishi", true);
      this.$store.commit("tabBar", true);
    }
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
  margin-top: 0.7rem;
  border-bottom: 1px solid #a5bce5;
  width: 82%;
}
.div1 > input {
  padding-left: 0.3rem;
  background: url("../../assets/image/500585755_banner.png");
  color: #fff;
  height: 0.9rem;
  width: 80%;
  font-size: 0.3rem;
}
.div1 > span {
  color: #fff;
  font-size: 0.3rem;
}
.div > button {
  height: 0.8rem;
  width: 90%;
  margin-top: 1.1rem;
  background: #e0a108;
  margin-left: 5%;
  border-radius: 5px;
}
</style>