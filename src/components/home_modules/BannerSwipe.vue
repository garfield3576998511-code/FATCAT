<template>
  <!-- 轮播图 -->
  <div class="swipe">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in x" :key="image">
        <a :href="image.url">
          <img :src="image.img" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["x"]);
</script>

<style scoped lang="less">
.swipe {
  width: 100%;
  padding: 0.3rem;
  box-sizing: border-box;
  img {
    width: 100%;
    border-radius: 0.1rem;
  }
}
</style>
