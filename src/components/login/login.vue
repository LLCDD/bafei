<template>
  <div class="div1">
    <lg-header></lg-header>
    <lc-conent></lc-conent>
  </div>
</template>

<script>
import LgHeader from "./components/LoginHeader";
import LcConent from "./components/LoginContent";
export default {
  components: {
    LgHeader,
    LcConent
  },
  created() {
    this.$store.state.headerStatus = false;
  }
};
</script>

<style scoped>
.div1 {
  height: 100%;
  background: url("../../assets/image/500585755_banner.png") no-repeat bottom;
  background-size: cover;
}
</style>