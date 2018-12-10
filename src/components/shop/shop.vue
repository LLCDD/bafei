<template>
  <div class="div1">
    <div class="div2">
      <span>
        今日大盘价 :
        <span class="span1">{{ money }}</span>
      </span>
      <span class="span">
        释放子币价 :
        <span class="span1">{{ zi }}</span>
      </span>
    </div>
    <div class="div3">
      <p>0.00
        <br>
        <span>锁仓母链</span>
      </p>
      <p>0.00
        <br>
        <span>释放子链</span>
      </p>
      <p>0.00
        <br>
        <span>动态母链</span>
      </p>
      <p>0.00
        <br>
        <span>动态子链</span>
      </p>
    </div>
    <div class="div4">
      <div @click="liebian()">
        <i class="iconfont icon1" style="color:#f9a52e">&#xe62b;</i>
        裂变子链：
        <span>{{ msg1 }}</span>
        <span class="span3">
          Fission chain
          <i class="iconfont icon2" style="color:#2c59a5">&#xe604;</i>
        </span>
      </div>
      <div @click="liebian1()">
        <i class="iconfont icon1" style="color:#f9a52e">&#xe62b;</i>
        激活子币：
        <span>{{ msg2 }}</span>
        <span class="span3">
          Activating currency
          <i class="iconfont icon2" style="color:#2c59a5">&#xe604;</i>
        </span>
      </div>
      <div @click="liebian2()">
        <i class="iconfont1 icon1" style="color:#f9a52e">&#xe64f;</i>
        壹区业绩：
        <span>{{ msg3 }}</span>
        <span class="span3">
          One area
          <i class="iconfont icon2" style="color:#2c59a5">&#xe604;</i>
        </span>
      </div>
      <div @click="liebian3()">
        <i class="iconfont1 icon1" style="color:#f9a52e">&#xe64f;</i>
        贰区业绩：
        <span>{{ msg4 }}</span>
        <span class="span3">
          Two area
          <i class="iconfont icon2" style="color:#2c59a5">&#xe604;</i>
        </span>
      </div>
      <div @click="liebian4()">
        <i class="iconfont1 icon1" style="color:#f9a52e">&#xe64f;</i>
        预估收益：
        <span>{{ msg5 }}</span>
        <span class="span3">
          Estimate
          <i class="iconfont icon2" style="color:#2c59a5">&#xe604;</i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      money: "0.0001",
      zi: "0.22",
      // 裂变子链
      msg1: "0.00",
      msg2: "0.00",
      msg3: "",
      msg4: "",
      msg5: "0"
    };
  },
  mounted() {
    if (this.$route.params.name == "我的资产") {
      this.$store.commit("size", this.$route.params.name);
      this.$store.commit("headerStatus", true);
      this.$store.commit("tishi1", false);
      this.$store.commit("tishi", true);
      this.$store.commit("tabBar", true);
    }
    axios({
      method: "get",
      url: ""
    }).then(function(data) {
      console.log(data);
    });
  },
  methods: {
    liebian() {
      this.$router.push("/zhuan/裂变子链转HGH");
    },
    liebian1() {},
    liebian2() {},
    liebian3() {}
  }
};
</script>
<style scoped>
.div1 {
  padding-top: 0.88rem;
  background: url("../../assets/image/500585755_banner.png") no-repeat bottom;
  height: 100%;
}
.div2 {
  color: #ffffff;
  font-size: 0.28rem;
  height: 1.32rem;
  line-height: 1.32rem;
  padding-left: 0.64rem;
  margin-bottom: 0.34rem;
}
.span {
  padding-left: 0.9rem;
}
.span1 {
  color: #3feee8;
}
.div3 {
  height: 1.78rem;
  width: 90%;
  margin: 0 auto;
  background: #2b6bd9;
  border-radius: 0.1rem;
  margin-bottom: 0.28rem;
}
.div3 > p {
  color: #fff;
  display: inline-block;
  width: 24.8%;
  text-align: center;
  padding-top: 0.5rem;
  font-size: 0.34rem;
}
.div3 > p > span {
  display: inline-block;
  color: #bbcff3;
  font-size: 0.28rem;
  padding-top: 0.3rem;
}
.div4 {
  color: #fff;
  padding: 0 0.4rem;
}
.div4 > div {
  height: 1.28rem;
  width: 100%;
  line-height: 1.28rem;
  float: left;
}
.div4 > div > span {
  color: #32b7bb;
}
.icon1 {
  margin-right: 0.16rem;
}
.span3 {
  color: #ffffff !important;
  float: right;
}
@font-face {
  font-family: "iconfont";
  src: url("../../assets/font3/iconfont.woff") format("woff");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 0.4rem;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: "iconfont1";
  src: url("../../assets/font2/iconfont.woff") format("woff");
}
.iconfont1 {
  font-family: "iconfont1" !important;
  font-size: 0.4rem;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.icon2 {
  font-size: 0.3rem;
}
</style>