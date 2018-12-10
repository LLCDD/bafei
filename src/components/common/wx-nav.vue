<template>
  <div id="wx-nav">
    <nav id="nav">
      <span @click="top()" class="span2">
        <router-link to="/index">
          <i class="iconfont" :style="{'color':color}">&#xe601;</i>
          <span class="l-span" ref="tit1" :style="{'color':color}">首页</span>
        </router-link>
      </span>
      <span @click="top1()">
        <router-link to="/shop/我的资产">
          <i class="iconfont" :style="{'color':color1}">&#xe616;</i>
          <span class="l-span" ref="tit2" :style="{'color':color1}">资金</span>
        </router-link>
      </span>
      <span @click="top2()">
        <router-link to="/theraise/交易大厅">
          <i class="iconfont" :style="{'color':color2}">&#xe612;</i>
          <span class="l-span" ref="tit3" :style="{'color':color2}">交易大厅</span>
        </router-link>
      </span>
      <span @click="top3()">
        <router-link to="/market/转账">
          <i class="iconfont" :style="{'color':color3}">&#xe644;</i>
          <span class="l-span" ref="tit4" :style="{'color':color3}">转账</span>
        </router-link>
      </span>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: "#e0a108",
      color1: "#6a8fd5",
      color2: "#6a8fd5",
      color3: "#6a8fd5"
    };
  },
  methods: {
    top() {
      this.color = "#e0a108";
      this.color1 = this.color2 = this.color3 = "#6a8fd5";
    },
    top1() {
      this.color1 = "#e0a108";
      this.color = this.color2 = this.color3 = "#6a8fd5";
    },
    top2() {
      this.color2 = "#e0a108";
      this.color1 = this.color = this.color3 = "#6a8fd5";
    },
    top3() {
      this.color3 = "#e0a108";
      this.color1 = this.color = this.color2 = "#6a8fd5";
    }
  }
};
</script>
<style scoped>
@import "../../assets/css/wx-nav.css";
@import "../../assets/font/iconfont.css";
@import "../../assets/font/demo.css";
#wx-nav {
  width: 100%;
  height: 1rem;
  z-index: 111;
}
#nav {
  background: #0e2c61;
}
a {
  width: 24.8% !important;
  text-align: center;
}
.l-span {
  width: 1.5rem !important;
  color: #c4a07e;
}

@font-face {
  font-family: "iconfont";
  src: url("../../assets/font/iconfont.woff") format("woff");
}
.iconfont {
  font-family: "iconfont" !important;
  display: block;
  font-size: 0.4rem;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0.18rem;
  margin-bottom: 0.1rem;
}
.span2 {
  color: red;
}
</style>
