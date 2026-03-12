<template>
  <van-overlay :show="x">
    <div class="wrapper">
      <van-loading v-show="x" color="#1989fa" size="24px" vertical>
        加载中...
      </van-loading>
    </div>
  </van-overlay>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["x"]);
</script>

<style lang="less">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.van-overlay {
  z-index: 100;
}
.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
