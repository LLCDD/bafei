<template>
  <div class="div1">
    <div>
      <span class="span1">买入估价：</span>
      <span>{{ msg }}</span>
    </div>
    <div>
      <span class="span1">买入数量：</span>
      <input class="input" type="text" placeholder="请输入数量">
      <span>HGH：0.00</span>
    </div>
    <div>
      <span class="span1">兑换基数：</span>
      <span>1000</span>
    </div>
    <div>
      <span class="span1">买入金额：</span>
      <span>0</span>
    </div>
    <button @click="top()">发布</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      // 买入的估价
      msg: "0.6076"
    };
  },
  methods: {
    top() {
      console.log("发布的事件");
    }
  },
  mounted() {}
};
</script>
<style scoped>
.div1 {
  padding-top: 0.22rem;
  width: 100%;
}
.div1 > div {
  width: 100%;
  height: 1.08rem;
  border-bottom: 1px solid #5b91eb;
  font-size: 0.3rem;
  padding-left: 0.4rem;
  line-height: 1.08rem;
}
.div1 > button {
  width: 90%;
  margin-left: 5%;
  margin-top: 1.12rem;
  height: 0.82rem;
  background: #de9f27;
  color: #fff;
  font-size: 0.34rem;
}
.span1 {
  margin-right: 0.9rem;
}
.input {
  width: 3rem;
  border: 0;
  background: url("../../assets/image/500585755_banner.png");
  color: #fff;
}
</style>