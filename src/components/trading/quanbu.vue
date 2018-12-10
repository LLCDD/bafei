<template>
  <div class="div1">
    <div class="div2">
      <span class="span">描述</span>
      <span class="span">数量</span>
      <span class="span">时间</span>
    </div>
    <div v-for="(item,index) in list" :key="index">
      <div class="div3">
        <span>执行合约收入</span>
        <span class="span1">{{ item.num }}</span>
        <span>{{ item.timer }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "3454",
      list: [
        {
          num: 100.01,
          timer: "2018-11-29 03:45:12"
        },
        {
          num: 100.01,
          timer: "2018-11-29 03:45:12"
        },
        {
          num: 100.01,
          timer: "2018-11-29 03:45:12"
        }
      ]
    };
  }
};
</script>
<style scoped>
.div1 {
  color: #fff;
}
.span {
  display: inline-block;
  padding-left: 1.2rem;
  padding-right: 0.5rem;
  padding-top: 0.45rem;
  font-size: 0.3rem;
  color: #5c81c4;
  padding-bottom: 0.34rem;
}
.div2 {
  width: 100%;
  border-bottom: 1px solid #5c81c4;
}
.div3 {
  font-size: 0.26rem;
  border-bottom: 1px solid #5c81c4;
}
.div3 > span {
  display: inline-block;
  padding-left: 0.7rem;
  padding-top: 0.3rem;
  padding-bottom: 0.34rem;
}
.span1 {
  margin-left: 0.4rem;
  color: red;
}
</style>