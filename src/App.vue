<template>
  <div id="app">
    <div class="outter">
      <!--通用头部-->
      <header id="header" v-if="this.$store.state.headerStatus">
        <!-- <wx-header :pageName="pageName"></wx-header>23423423423423423432 -->
        <div class="portrait" v-if="!this.$store.state.tishi">
          <img :src="this.touxiang" alt v-if="!this.$store.state.tishi">
          <i class="iconfont" v-if="this.$store.state.tishi">&#xe61a;</i>
        </div>
        <div v-if="this.$store.state.tishi1" class="left1" @click="details()">
          <i class="iconfont" style="color:#52eddd">&#xe605;</i>
        </div>
        <div v-if="this.$store.state.tishi1" class="right">
          <span class="span12" :class="{span8:istrue} " @click="bool()">普通</span>
          <span class="span13" :class="{span9:istrue1}" @click="bool1()">商家</span>
        </div>
        <div v-if="this.$store.state.tishi">
          <span class="left" @click="tap()" v-if="!this.$store.state.tishi">&lt;</span>
          {{ this.$store.state.header }}
        </div>

        <h3 class="h3" v-if="!this.$store.state.tishi">
          <span v-if="this.$store.state.tishi">HGH</span>
          <span v-if="!this.$store.state.tishi">{{ this.username }}</span>
        </h3>

        <span class="iconfont icon" v-if="!this.$store.state.tishi" @click="index()">&#xe631;</span>
      </header>
      <!--搜索框 只在“微信”和“通讯录”页面下显示-->
      <!--四个门面页 “微信” “通讯录” “发现” “我”-->
      <section class="app-content">
        <transition
          name="custom-classes-transition"
          :enter-active-class="enterAnimate"
          :leave-active-class="leaveAnimate"
        >
          <router-view/>
        </transition>
      </section>
      <!--底部导航 路由 -->
      <footer class="app-footer" v-if="this.$store.state.footstatus">
        <wx-nav></wx-nav>
      </footer>
    </div>
    <div id="child" v-if="this.$store.state.sidebar" @click="hide()">
      <div class="child">
        <img :src="this.touxiang" alt class="childi">
      </div>
      <p class="p5 p6">昵称：</p>
      <p class="p5 p7">UID:23423423 最新ID：1234</p>
      <div class="size">
        <router-link to="/zhifu/支付管理" tag="div">
          <i class="iconfont">&#xe602;</i>
          <span class="font">支付管理</span>
        </router-link>
      </div>
      <div class="size">
        <router-link to="/center/个人中心" tag="div">
          <i class="iconfont">&#xe628;</i>
          <span class="font">个人中心</span>
        </router-link>
      </div>
      <div class="size">
        <div>
          <i class="iconfont">&#xe75a;</i>
          <span class="font">当前版本：2.2.1</span>
        </div>
      </div>
      <div class="size">
        <router-link to="/privacy" tag="div">
          <i class="iconfont">&#xe602;</i>
          <span class="font">隐私协议</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import mixin from "./mixin"; // 混合被单独放在 mixin.js 中管理
window.mixin = mixin; // 将 混合/mixin 暴露在窗口对象中，某些组件需要时，直接提取 window.mixin
import WxHeader from "@/components/common/wx-header";
import WxNav from "@/components/common/wx-nav";

import axios from "axios";

export default {
  name: "app",
  components: {
    WxHeader,
    WxNav
  },
  data() {
    return {
      pageName: "",
      routerAnimate: false,
      enterAnimate: "", //页面进入动效
      leaveAnimate: "", //页面离开动效
      username: "",
      touxiang: "",
      istrue: true,
      istrue1: false
    };
  },
  mounted() {
    this.username = localStorage.getItem("username");
    this.touxiang = localStorage.getItem("avatar");
    // console.log(this.$store.state.headerStatus);
  },
  methods: {
    tap() {
      this.$router.go(-1);
    },
    bool() {
      this.istrue1 = false;
      this.istrue = true;
    },
    bool1() {
      this.istrue = false;
      this.istrue1 = true;
    },
    details() {
      this.$store.commit("sidebar", true);
    },
    index() {
      this.$router.push("/center/设置");
    },
    hide() {
      this.$store.commit("sidebar", false);
    }
  },
  watch: {
    // 监听 $route 为店内页设置不同的过渡效果
    $route(to, from) {
      const toDepth = to.path.length;
      const fromDepth = from.path.length;
      if (toDepth === 2) {
        this.$store.commit("setPageName", to.name);
      }
      //同一级页面无需设置过渡效果
      if (to.meta.Athesamelevel) {
        return;
      }
      // this.enterAnimate =
      //   toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft";
      // this.leaveAnimate =
      //   toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight";
    }
  },
  updated() {
    // 只要组件发生变化都会触发可用于切换组件时公共数据的刷新
    // this.$store.dispatch('newbalance')
  }
};
</script>


<style lang="scss">
$material-icons-font-path: "~material-icons/iconfont/";
@import "material-icons/iconfont/material-icons.scss";
@import "./assets/css/toast.css";
@import "assets/css/base.css";
@import "assets/css/common.css";
@import "assets/css/wx-header.css";
/*阿里 fonticon*/
@import "assets/css/lib/iconfont.css";
/*过渡效果需要的动画库*/
@import "assets/css/lib/animate.css";
/*weui 样式库 非常适合高仿微信*/
@import "assets/css/lib/weui.min.css";

@import "./assets/font/iconfont.css";
@font-face {
  font-family: "iconfont";
  src: url("./assets/font1/iconfont.woff") format("woff");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

body {
  height: 100%;
  width: 100%;
  background: #f3f3f3;
}
#header {
  background: #12377d;
  height: 0.88rem;
  width: 100%;
  text-align: center;
  line-height: 0.88rem;
  font-size: 0.36rem;
  color: #ffffff;
  position: fixed;
  z-index: 999;
}
.l-span1 {
  float: left;
  margin-left: 0.3rem;
}
.portrait {
  height: 0.7rem;
  width: 0.7rem;
  background: #cfcfcf;
  border-radius: 50%;
  margin-left: 0.38rem;
  border: 2px solid #4464a1;
  margin-top: 0.1rem;
  overflow: hidden;
  text-align: center;
  float: left;
  line-height: 0.7rem;
}
.h3 {
  color: #fcfffd;
  float: left;
  margin-left: 0.18rem;
}
.icon {
  float: right;
  margin-right: 0.4rem;
  font-size: 0.46rem;
  margin-top: 0.06rem;
}
.portrait > img {
  height: 100%;
  width: 100%;
  margin-top: -5px;
}
.left {
  float: left;
  position: absolute;
  left: 0.3rem;
}
.left1 {
  position: absolute;
  left: 0.4rem;
}
.right {
  height: 0.4rem;
  width: 1.34rem;
  border: 1px solid #fefffb;
  border-radius: 0.2rem;
  position: absolute;
  right: 0.36rem;
  top: 0.22rem;
}
.span12 {
  display: inline;
  font-size: 0.24rem;
  position: absolute;
  top: -0.22rem;
  left: 0.08rem;
}
.span13 {
  display: inline;
  font-size: 0.24rem;
  position: absolute;
  top: -0.22rem;
  right: 0.08rem;
}
.span8 {
  padding: 0;
  margin: 0;
  display: block;
  background: #faf9ff;
  height: 0.4rem;
  width: 0.6rem;
  color: #1c3578;
  top: 0;
  border-radius: 0.5rem;
  line-height: 0.4rem;
}
.span9 {
  padding: 0;
  margin: 0;
  display: block;
  background: #faf9ff;
  height: 0.4rem;
  width: 0.6rem;
  color: #1c3578;
  border-radius: 0.5rem;
  top: 0;
  line-height: 0.4rem;
}
#child {
  height: 100%;
  width: 70%;
  background: #1273a0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999999;
  padding-left: 0.42rem;
  padding-top: 0.56rem;
  color: #fff;
}
.child {
  height: 0.72rem;
  width: 0.72rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  float: left;
}
.childi {
  height: 0.72rem;
  width: 0.72rem;
  position: absolute;
}
.p6 {
  font-size: 0.36rem;
  margin-bottom: 0.1rem;
}
.p5 {
  margin-left: 0.9rem;
}
.p7 {
  margin-bottom: 0.84rem;
}
.size {
  font-size: 0.32rem;
  margin-bottom: 0.52rem;
}
.font {
  padding-left: 0.3rem;
}
</style>
