<template>
  <div>
    <p @click="$router.back()">设置</p>
    <button @click="backOut">退出登录</button>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { delCookie } from "@/Hook/cookie";
defineProps(["x"]);
let backOut = () => {
  localStorage.removeItem("token");
};
</script>
