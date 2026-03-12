<template>
  <header v-if="store.state.word != '我的'">
    <span
      class="iconfont icon-24gf-headset"
      v-if="store.state.word != '目的地'"
    ></span>
    <span class="qq">{{ store.state.word }}</span>
    <span
      class="iconfont icon-sousuoxiao"
      v-if="store.state.word != '目的地'"
    ></span>
  </header>
  <section>
    <router-view></router-view>
  </section>
  <BtmnavVue />
</template>
<script setup>
import { useStore } from "vuex";
import BtmnavVue from "@/components/Btmnav.vue";

let store = useStore();
</script>

<style scoped lang="less">
header {
  height: 0.88rem;
  font-size: 0.3rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  line-height: 0.88rem;
  border-bottom: 1px solid #eee;
  color: #333;
  .qq {
    width: 4.8rem;
    text-align: center;
  }
  .iconfont {
    font-size: 0.38rem;
    color: #999;
  }
}
section {
  width: 100%;
  height: 87%;
  box-sizing: border-box;
}
</style>
