<template>
  <nav>
    <router-link
      :to="v.to"
      v-for="v in btmObj"
      :key="v.title"
      @click="add(v.title)"
    >
      <span :class="`iconfont ${v.icon}`"></span>
      <span>{{ v.title }}</span>
    </router-link>
  </nav>
  <img src="../assets/img/bg.png" alt="" />
</template>
<script setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
let store = useStore();
let btmObj = reactive([
  { title: "首页", icon: "icon-shouye", to: "/" },
  { title: "目的地", icon: "icon-weizhi", to: "/itar" },
  { title: "马儿定制", icon: "icon-lvyouxian", to: "/travel" },
  { title: "发现", icon: "icon-sousuoxiao", to: "/find" },
  { title: "我的", icon: "icon-wode-wode", to: "/person" },
]);
let word = ref("");
word.value = localStorage.getItem("word") || "首页";
let add = (x) => {
  word.value = x;
  store.commit("setWord", x);
  localStorage.setItem("word", x);
};
</script>
<style scoped lang="less">
nav {
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  height: 1rem;
  font-size: 0.3rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding-top: 0.1rem;
  padding: 0 0.3rem;
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #999;
    font-size: 0.24rem;
    span:nth-child(1) {
      font-size: 0.48rem;
    }
  }
  a:nth-child(3) {
    width: 1rem;
    .iconfont {
      width: 0.88rem;
      height: 0.88rem;
      border-radius: 50%;
      margin-bottom: 0.2rem;
      text-align: center;
      line-height: 0.88rem;
      background-color: #fff;
      font-size: 1rem;
      position: absolute;
      bottom: 0.2rem;
      margin-left: -0.1rem;
      color: rgb(238, 194, 135);
    }
    span:nth-child(2) {
      position: absolute;
      bottom: 0.08rem;
      text-indent: 0.06rem;
    }
  }
}
img {
  width: 200%;
  position: absolute;
  bottom: 0;
  margin-left: -46.6%;
}
.router-link-exact-active {
  color: #c04374;
}
</style>
