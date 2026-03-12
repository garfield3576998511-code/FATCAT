<template>
  <div class="houseBean">
    <p>
      当前拥有 <span>{{ bean }}</span> 斑马豆
    </p>
  </div>
  <BestBall v-model:x="flag"></BestBall>
</template>
<script setup>
import BestBall from "@/components/BestBall.vue";
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import Api from "@/Api/Api.js";

let bean = ref("");
let flag = ref(true);
let houseBean = async () => {
  // console.log(ok);
  let { data } = await Api.getBean();
  if (data.code == 0) {
    flag.value = false;
    bean.value = data.data.total;
  }
};
houseBean();
</script>
<style scoped lang="less">
.houseBean {
  margin-top: 0.88rem;
  font-size: 0.3rem;
  padding: 0.4rem;
  text-align: left;
  span {
    color: red;
  }
}
</style>
