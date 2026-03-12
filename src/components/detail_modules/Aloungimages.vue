<template>
  <div v-if="x" class="strImg" v-html="x"></div>
  <!-- <div v-if="z"></div> -->
  <div v-else>
    <p><img :src="i.url" alt="" v-for="i in y" /></p>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps(["x", "y", "z"]);
</script>
<style scoped lang="less">
::v-deep p {
  width: 100%;
  display: block;
  color: #666;
  font-size: 0.24rem;
}
::v-deep img {
  width: 100%;
}
.strImg {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
