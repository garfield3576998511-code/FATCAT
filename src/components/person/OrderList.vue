<template>
  <div class="wrap">
    <ul v-if="list.length">
      <li v-for="v in list" :key="v.order_id">{{ v.title }}</li>
    </ul>
    <p>没有更多了</p>
  </div>
  <BestBall v-model:x="show"></BestBall>
</template>
<script setup>
import { ref } from "vue";
import BestBall from "../BestBall.vue";
import Api from "@/Api/Api.js";
let list = ref([]);
let show = ref(true);
let getOrder = async () => {
  let { data } = await Api.getOrder();
  if (data.code == 0) {
    show.value = false;
    list.value = data.data.list;
  }
};
getOrder();
</script>
<style scoped lang="less">
.wrap {
  font-size: 0.32rem;
  margin-top: 0.88rem;
  width: 100%;
  height: 15.35rem;
  background-color: #f5f5f5;
  overflow: hidden;
  p {
    width: 100%;
    text-align: center;
    color: gray;
    font-size: 0.3rem;
    margin-top: 0.6rem;
    height: 0.5rem;
  }
}
</style>
>
