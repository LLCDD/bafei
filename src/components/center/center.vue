<template>
  <div class="div">
    <p class="p1">
      <span>头像</span>
      <span class="span">
        <img :src="this.src" alt>
        <i class="iconfont" style="float:right">&#xe61a;</i>
      </span>
    </p>
    <p class="p2">
      <span>用户名</span>
      <i class="iconfont icon4" @click="icon()">&#xe615;</i>
      <span class="span span1">{{ name }}</span>
    </p>
    <p class="p2">
      <span>银行卡绑定账户修改</span>
      <span>
        <i class="iconfont" style="float:right">&#xe604;</i>
      </span>
    </p>
    <p class="p2" @click="tab()">
      <span>Chinese-English shift/中英文切换</span>
      <span>
        <i class="iconfont" :class="{ivon:boll,ivon1:!boll}" style="float:right">&#xe604;</i>
      </span>
      <span class="div2" v-if="boll">
        <div class="div3"></div>
        <div class="div4" @click.stop="language()">
          <p class="p4" :class="{p6:this.$store.state.language}"></p>中文/Chinese
        </div>
        <div class="div4" @click="language1()">
          <p class="p4" :class="{p6:this.$store.state.language1}"></p>英文/English
        </div>
      </span>
    </p>
    <p class="p2">
      <span>性别</span>
      <span>
        <i class="iconfont" style="float:right">&#xe604;</i>
      </span>
    </p>
    <p class="p2" @click="xg()">
      <span>修改密码</span>
      <span>
        <i class="iconfont" style="float:right">&#xe604;</i>
      </span>
    </p>
    <p class="p3" @click="zhifu1()">
      <span>支付密码</span>
      <span>
        <i class="iconfont" style="float:right">&#xe604;</i>
      </span>
    </p>
    <button @click="top()">安全退出</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      src: "",
      boll: false
    };
  },
  mounted() {
    this.$store.commit("tishi", true);
    this.$store.commit("tabBar", false);
    this.$store.commit("size", this.$route.params.name);
    this.$store.commit("sidebar", false);
    this.$store.commit("tishi1", false);
    if (localStorage.getItem("username")) {
      this.name = localStorage.getItem("username");
      this.src = localStorage.getItem("acatar");
    } else {
      this.name = "未登录";
      this.src = "&#xe61a;";
    }
  },
  methods: {
    //   退出的事件
    top() {
      console.log("退出");
    },
    icon() {
      console.log("icon");
    },
    // 语言切换
    language() {
      this.boll = false;
      this.$store.commit("language", true);
      this.$store.commit("language1", false);
    },
    language1() {
      this.boll = false;
      this.$store.commit("language", false);
      this.$store.commit("language1", true);
    },
    tab() {
      this.boll = !this.boll;
    },
    xg() {
      this.$router.push("/xg/设置密码");
    },
    zhifu1() {
      this.$router.push("/zhifu1/设置支付密码");
    }
  }
};
</script>
<style scoped>
@font-face {
  font-family: "iconfont";
  src: url("../../assets/font1/iconfont.woff") format("woff");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.div {
  padding-top: 0.88rem;
  height: 100%;
  background: url("../../assets/image/500585755_banner.png") no-repeat bottom;
  background-size: cover;
}
.p1 {
  height: 1.49rem;
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.62rem;
  padding-top: 0.64rem;
  padding-bottom: 0.56rem;
  border-bottom: 1px solid #5b91eb;
}
.p2 {
  padding-top: 0.4rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.62rem;
  border-bottom: 1px solid #5b91eb;
  position: relative;
}
.p3 {
  padding-top: 0.4rem;
  padding-bottom: 0.5rem;
  padding-left: 0.4rem;
  padding-right: 0.62rem;
  border-bottom: 1px solid #5b91eb;
}
.div > p {
  color: #fff;
  font-size: 0.3rem;
}
.span {
  float: right;
}
.icon4 {
  float: right;
  font-size: 0.3rem;
  color: #939caa;
}
.span1 {
  padding-right: 0.36rem;
}
.div2 {
  z-index: 111111;
  position: absolute;
  display: block;
  background: #296ec6;
  height: 2rem;
  width: 3.04rem;
  right: 0.22rem;
  top: 1rem;
}
.div3 {
  position: absolute;
  width: 0;
  height: 0;
  border-width: 0 0.14rem 0.26rem;
  border-style: solid;
  border-color: transparent transparent #296ec6;
  top: -0.26rem;
  right: 0.44rem;
}
.p4 {
  display: inline-block;
  height: 0.28rem;
  width: 0.28rem;
  border-radius: 50%;
  border: 1px solid #ffffff;
  margin: 0 0.22rem;
}
.div4 {
  padding-top: 0.4rem;
}
.p6 {
  background: #ebce5b;
  border: 0;
}
.ivon {
  transform: rotate(90deg);
  transition-duration: 1s;
}
.ivon1 {
  transform: rotate(0deg);
  transition-duration: 1s;
}
button {
  height: 0.82rem;
  width: 90%;
  background: #de9f27;
  margin-top: 0.88rem;
  margin-left: 5%;
  color: #fff;
  border-radius: 4px;
}
</style>