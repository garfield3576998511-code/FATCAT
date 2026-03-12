<template>
  <div class="header">
    <span class="iconfont icon-xiangzuo" @click="$router.back()"></span>
    <span>{{ $route.params.title }}</span>
    <span></span>
  </div>
</template>
<script setup></script>
<style scoped lang="less">
.header {
  width: 100%;
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 100;
  padding: 0 0.53333rem;
  box-sizing: border-box;
  font-size: 0.32rem;
  border-bottom: 0.5px solid #dedede;
  .iconfont {
    font-size: 0.48rem;
  }
}
</style>
