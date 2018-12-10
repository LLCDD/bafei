<template>
  <div id="div1">
    <mt-swipe :auto="4000" style="height:3.4rem;margin-top:0.88rem">
      <mt-swipe-item style="background:red">{{ this.$store.state.tishi }}</mt-swipe-item>
      <mt-swipe-item style="background:pink">2</mt-swipe-item>
      <mt-swipe-item style="background:orange">3</mt-swipe-item>
      <mt-swipe-item style="background:block">4</mt-swipe-item>
    </mt-swipe>
    <div class="div2">
      <p class="p1" v-if="this.$store.state.tishi">HGH : 0.00</p>
      <p class="p1" v-if="!this.$store.state.tishi">Token : {{ this.token }}</p>
      <p class="p2" v-if="this.$store.state.tishi">会员ID:123456</p>
      <p class="p2" v-if="!this.$store.state.tishi">会员ID:{{ vip }}</p>
    </div>
    <p class="p3" v-if="this.$store.state.tishi">
      <span class="iconfont">&#xe60f;</span>新用户激活（不激活将无法操作大部分功能）
    </p>
    <div class="div5">
      <router-link to="/mill/我的矿机" tag="div">
        <i class="iconfont1" style="color:#f4a43f">&#xe607;</i>
        <br>
        <span>我得资产</span>
      </router-link>
      <router-link to="/code/公告" tag="div">
        <!-- <img class="img2" src="../../assets/image/gongao.png" alt> -->
        <i class="iconfont1" style="color:#44a2f5">&#xe60c;</i>
        <br>
        <span>公告</span>
      </router-link>
      <router-link to="/trading/资产明细" tag="div">
        <!-- <img class="img2" src="../../assets/image/mingxi.png" alt> -->
        <i class="iconfont1" style="color:#ef872e">&#xe620;</i>
        <br>
        <span>资产明细</span>
      </router-link>
      <router-link to="/transfer" tag="div">
        <!-- <img class="img2" src="../../assets/image/C2C.png" alt> -->
        <i class="iconfont1" style="color:#f39c3a">&#xe612;</i>
        <br>
        <span>C2C</span>
      </router-link>
      <router-link to="/mall/我的钱包" tag="div">
        <!-- <img class="img2" src="../../assets/image/money.png" alt> -->
        <i class="iconfont1" style="color:#408ef3">&#xe60d;</i>
        <br>
        <span>钱包地址</span>
      </router-link>
      <router-link to="/detail" tag="div">
        <!-- <img class="img2" src="../../assets/image/shouzhi.png" alt> -->
        <i class="iconfont1" style="color:#bf3b22">&#xe64f;</i>
        <br>
        <span>平台收支</span>
      </router-link>
      <router-link to="/phone" tag="div">
        <!-- <img class="img2" src="../../assets/image/zhuanchu.png" alt> -->
        <i class="iconfont1" style="color:#57b962">&#xe6e7;</i>
        <br>
        <span>转出HGH</span>
      </router-link>
      <router-link to="/card" tag="div">
        <!-- <img class="img2" src="../../assets/image/jieshou.png" alt> -->
        <i class="iconfont1" style="color:#ef862d">&#xe62a;</i>
        <br>
        <span>接收HGH</span>
      </router-link>
      <router-link to="/card/分享" tag="div">
        <!-- <img class="img2" src="../../assets/image/fenxiang.png" alt> -->
        <i class="iconfont1" style="color:#d45042">&#xe619;</i>
        <br>
        <span>分享HGH</span>
      </router-link>

      <router-link to="/myhome" tag="div" v-if="!this.$store.state.tishi">
        <!-- <img class="img2" src="../../assets/image/fenxiang.png" alt> -->
        <i class="iconfont1" style="color:#d45042">&#xe619;</i>
        <br>
        <span>im Token</span>
      </router-link>
    </div>
    <!-- <h3 class="h3">
      <span class="span">最新资讯</span>
      <span class="span1">Latest information</span>
    </h3>
    <div class="div6">
      <div v-for="(item,index) in list" :key="index">
        <router-link tag="div" :to="'/details/'+item.look">
          <img :src="item.imag" alt>
          <h3 class="h3l">{{ item.txt }}</h3>
          <span>{{ item.time }}</span>
          <span class="vspan1">
            <i class="iconfont" style="color:#999999;font-size:0.1rem">&#xe61b;</i>
            {{ item.look }}
          </span>
    </router-link>-->
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "这是主页",
      // 登录后的token值
      token: "1",
      // 会员ID
      vip: "已登录",
      list: [
        // 自己模拟的数据
        {
          imag: "../../assets/img/1.png",
          txt: "从市场流通分析DTB走势",
          time: "2018-10-12",
          look: "800"
        },
        {
          imag: "../../assets/img/2.png",
          txt: "从市场流通分析DTB走势",
          time: "2018-10-13",
          look: "81231"
        }
      ]
    };
  },
  methods: {
    //   一键收取的事件
    top() {
      console.log("a");
    }
  },
  mounted() {
    // 获取 用户的信息
    this.$store.commit("headerStatus", true);
    this.$store.commit("tabBar", true);
    this.$store.commit("tishi1", false);
    if (localStorage.getItem("username")) {
      this.$store.commit("tishi", false);
    } else {
      this.$store.commit("tishi", true);
    }
  }
};
</script>
<style scoped>
@font-face {
  font-family: "iconfont";
  src: url("../../assets/font/iconfont.woff") format("woff");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
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
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
#div1 {
  height: 100%;
  width: 100%;
  background: url("../../assets/image/500585755_banner.png") no-repeat;
  background-size: cover;
}
.img {
  width: 100%;
  margin-top: 0.86rem;
  height: 8.64rem;
  display: block;
}
.div2 {
  margin-top: -1px;
  height: 1.46rem;
  width: 100%;
  color: #ccc;
  text-align: center;
  border-bottom: 1px solid #2b89cb;
}
.p1 {
  font-size: 0.4rem;
  font-weight: 700;
  padding-top: 0.4rem;
  color: #69f4e5;
}
.p2 {
  font-size: 0.28rem;
  margin-top: 0.14rem;
  color: #4fb9ea;
}
.p3 {
  color: #ffffff;
  height: 0.6rem;
  width: 100%;
  background: #051533;
  line-height: 0.6rem;
  padding-left: 0.4rem;
}
.p3 > span {
  color: red;
  margin-right: 0.1rem;
}
.div4 > div {
  height: 1.42rem;
  width: 1.42rem;
  margin-top: 0.7rem;
  float: left;
  border-radius: 50%;
  overflow: hidden;
}
.div4 > div > img {
  width: 100%;
  height: 100%;
}
.div4 > button {
  border: 0;
  width: 1.4rem;
  border-radius: 0.2rem;
  margin-top: 0.36rem;
  background: #c2a47e;
  color: #fff;
  font-size: 0.22rem;
}
.div5 {
  margin: 0 auto;
  width: 100%;
  min-height: 5.68rem;
  overflow: hidden;
}
.div5 > div > i {
  font-size: 0.48rem;
}
.div5 > div > span {
  display: inline-block;
  margin-top: 0.16rem;
  color: #274578;
}
.div5 > div {
  width: 33.3%;
  height: 33.3%;
  float: left;
  text-align: center;
  border-bottom: 1px solid #2b89cb;
  padding-top: 0.4rem;
  padding-bottom: 0.5rem;
}
.h3 {
  margin-top: 0.5rem;
  margin-left: 0.26rem;
  height: 0.4rem;
  font-size: 0.36rem;
  border-left: 0.1rem solid #c2a67f;
  margin-bottom: 0.32rem;
  color: #6a6a6a;
}
.span {
  margin-left: 0.1rem;
}
.span1 {
  margin-left: 0.1rem;
  font-size: 0.2rem;
}
.div6 {
  width: 100%;
  margin-bottom: 1rem;
}
.div6 > div > div {
  background: #fff;
  margin-bottom: 0.2rem;
  height: 1.76rem;
}
.div6 > div > div > img {
  height: 1.3rem;
  width: 1.9rem;
  float: left;
  border: 1px solid yellow;
  margin-top: 0.24rem;
  margin-left: 0.24rem;
  margin-right: 0.32rem;
}
.div6 > div > div > .h3l {
  font-size: 0.34rem;
  line-height: 1.1rem;
}
.div6 > div > div > .vspan1 {
  float: right;
  margin-right: 0.8rem;
}
.img2 {
  height: 0.6rem;
  width: 0.5rem;
}
</style>