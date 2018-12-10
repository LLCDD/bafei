<template>
  <div class="div">
    <p class="p1">关于匹配系统的通知</p>
    <p class="p2">1、现在已经完成匹配系统调试, 所有 功能修复完
      <br>毕, 可正常使用。
    </p>
    <p class="p2">2、匹配规则:当买家挂买数量大于卖家 裂变子链数量
      <br>时系统自动匹配。
    </p>
    <p class="p2">3、待自动匹配完所有裂变子链后方可 自由选择买
      <br>家, 卖出GHG。
    </p>
    <p class="p2">4、当挂买数量达到裂变数量时平台自 动裂变。</p>
    <div class="div1">
      <p>劳伦杰森</p>
      <p>比特以基金会东南亚负责人(宣)</p>
      <p>时间：2018年11月27日</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "23423"
    };
  },
  mounted() {
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
p {
  color: #fff;
  font-size: 0.3rem;
}
.p1 {
  height: 1.1rem;
  width: 100%;
  margin-top: 0.05rem;
  line-height: 1.1rem;
  text-align: center;
}
.p2 {
  padding-left: 0.48rem;
  line-height: 0.52rem;
}
.div1 {
  float: right;
  margin-top: 1.2rem;
  padding-right: 0.5rem;
}
.div1 > p {
  line-height: 0.56rem;
}
</style>
