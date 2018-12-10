<template>
  <div class="div1">
    <div class="div2">
      <span class="span1">买入估价：</span>
      <span>{{ msg }}</span>
    </div>
    <div class="div2">
      <span class="span1">买入数量：</span>
      <input class="input" type="text" placeholder="请输入数量">
      <span>HGH：0.00</span>
    </div>
    <div class="div2">
      <span class="span1">兑换基数：</span>
      <span>1000</span>
    </div>
    <div class="div2">
      <span class="span1">买入金额：</span>
      <span>0</span>
    </div>
    <button @click="top()">发布</button>
    <div class="div3">
      <span class="span2">
        市场挂单
        <span class="span3">（只显示买家在线）</span>
      </span>
    </div>
    <div>
      <div v-for="(item,index) in list" :key="index">
        <div class="div5">
          <div class="div4">
            <p class="p1">{{ item.name }}</p>
            <p>时间：{{ item.time }}</p>
            <p>兑换基数：{{ item.num }}</p>
            <i class="iconfont" style="color:#de8e27">&#xe68f;</i>
          </div>
          <div class="div4 div6">
            <p class="p1">HGH：{{ item.HGH }}</p>
            <p>价格：{{ item.money }}</p>
            <p>数量：{{ item.ge }}</p>
            <P>限额：{{ item.xian }}</P>
          </div>

          <div class="div8" @click="xq(item.id)">
            <div class="div4 div6 div7">卖出</div>
            <i class="iconfont1 icon3">&#xe604;</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      // 买入的估价
      msg: "0.6076",
      list: [
        {
          id: "1",
          name: "韩..",
          time: "2018-09-04 10:14:10",
          num: 1000,
          HGH: 10000,
          money: "0.0001",
          ge: "1",
          xian: "100-10000"
        },
        {
          id: "2",
          name: "韩..",
          time: "2018-09-04 10:14:10",
          num: 1000,
          HGH: 10000,
          money: "0.0001",
          ge: "1",
          xian: "100-10000"
        }
      ]
    };
  },
  methods: {
    top() {
      console.log("发布的事件");
    },
    xq(a) {
      console.log(a);
      this.$router.push("/sell/" + a);
    }
  },
  mounted() {}
};
</script>
<style scoped>
@font-face {
  font-family: "iconfont";
  src: url("../../assets/font/iconfont.woff") format("woff");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 0.22rem;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.div1 {
  margin-top: 0.22rem;
  width: 100%;
}
.div1 > .div2 {
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
  margin-top: 0.56rem;
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
.div3 {
  height: 1.3rem;
  line-height: 1.3rem;
  padding-left: 0.4rem;
}
.div3 > span {
  color: #68aefe;
}
.span2 {
  font-size: 0.34rem;
}
.span3 {
  font-size: 0.26rem;
}
.div5 {
  width: 100%;
  float: left;
  padding: 0 0.4rem;
  padding-bottom: 0.56rem;
}
.div4 {
  float: left;
}
.div4 > p {
  color: #68aefe;
  font-size: 0.24rem;
  margin-bottom: 0.16rem;
}
.p1 {
  font-size: 0.3rem !important;
  color: #fff !important;
}
.div6 {
  padding-left: 0.52rem;
}
.div7 {
  height: 0.84rem;
  width: 0.84rem;
  background: #3678e7;
  border-radius: 50%;
  text-align: center;
  line-height: 0.84rem;
  padding-left: 0;
  margin-top: 0.38rem;
  margin-left: 0.28rem;
}
@font-face {
  font-family: "iconfont1";
  src: url("../../assets/font1/iconfont.woff") format("woff");
}
.iconfont1 {
  font-family: "iconfont1" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.div8 {
  position: relative;
}
.icon3 {
  position: absolute;
  top: 0.64rem;
  right: -0.16rem;
  color: #f4f4f6;
  font-weight: 100;
}
</style>