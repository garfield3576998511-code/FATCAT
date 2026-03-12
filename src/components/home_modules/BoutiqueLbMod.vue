<template>
  <!-- 精品推荐轮播 -->
  <div class="boutiqueLb">
    <van-swipe :loop="false" :width="340">
      <van-swipe-item v-for="(v, i) in x" :key="v">
        <router-link :to="`/detail/${idArr[i]}`">
          <img :src="v.img" alt="" />
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { ref } from "vue";
defineProps(["x"]);
let idArr = ref(["2264", "2659", "3053", "3038"]);
</script>

<style lang="less" scoped>
.boutiqueLb {
  padding: 0 0.3rem;
  box-sizing: border-box;
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
