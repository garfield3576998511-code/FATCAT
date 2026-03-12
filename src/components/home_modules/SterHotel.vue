<template>
  <!-- 国内酒店 -->
  <div class="sterHotel">
    <a :href="v.url" v-for="v in x">
      <img :src="v.img" alt="" />
    </a>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps(["x"]);
</script>
<style lang="less">
.sterHotel {
  width: 6.78rem;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 4.6rem;
  a {
    width: 30%;
    height: 1.8rem;
    display: block;
    box-sizing: border-box;
    overflow: hidden;
    margin: 0.2rem 0;
    img {
      width: 160%;
      margin-left: -0.6rem;
      margin-top: -0.2rem;
    }
  }
}
</style>
