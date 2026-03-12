<template>
  <div class="wrap">
    <Header></Header>
    <div class="statement">
      <img
        src="https://m.bmtrip.com/static/img/about-logo.a945dbc.svg"
        alt=""
      />
      <div v-html="statement"></div>
    </div>
  </div>
</template>
<script setup>
import Header from "@/components/person/Header.vue";
import Api from "@/Api.js";
import { ref } from "vue";
import { useRoute } from "vue-router";
let route = useRoute();
let statement = ref([]);
let res = route.params.title == "特别声明" ? "special-statement" : "about-bm";
let getData = async () => {
  let { data } = await Api.getAbout({ keywords: res });
  const content = data?.data?.content ?? "";
  console.log(content);
  statement.value = content;
};
getData();
</script>
<style lang="less" scoped>
.statement {
  width: 6.8rem;
  margin: 0.88rem auto;
  img {
    display: block;
    width: 100%;
    height: 1.68rem;
  }
  div {
    text-align: left;
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #333333;
    margin-top: 0.6rem;
    line-height: 0.64rem;
  }
}
</style>
