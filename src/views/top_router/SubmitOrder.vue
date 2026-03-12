<template>
  <div @click="$router.back()">
    <span>敬请期待...</span>
  </div>
</template>

<style scoped lang="less">
div {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  opacity: 0.8;
  span {
    display: block;
    height: 5rem;
    text-align: center;
  }
}
</style>
