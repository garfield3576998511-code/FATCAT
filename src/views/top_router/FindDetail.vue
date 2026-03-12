<template>
  <BestBall v-model:x="show"></BestBall>
  <div class="wrap">
    <header>
      <span class="iconfont icon-xiangzuo" @click="$router.back()"></span>
    </header>
    <div class="content">
      <h3>{{ findDetail.sort }}</h3>
      <p class="title">
        {{ findDetail.title }}
      </p>
      <p class="subtitle">{{ findDetail.subtitle }}</p>
      <div class="section" v-html="findDetail.content"></div>
      <div class="footer">
        <button>好文分享给朋友</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import BestBall from "@/components/BestBall.vue";
import { ref } from "vue";
import { findDetailUrl } from "@/Api/findPage";
import { useRouter, useRoute } from "vue-router";
let findDetail = ref([]);
let show = ref(true);
let route = useRoute();
let getData = async () => {
  let { data } = await findDetailUrl(route.params.id);
  // console.log(data);
  if (data.code == 0) {
    show.value = false;
    findDetail.value = data?.data ?? {};
  }
};
getData();
</script>
<style scoped lang="less">
::v-deep p {
  color: #666;
  margin: 0.2rem 0;
}
::v-deep img {
  width: 100%;
}
.wrap {
  width: 6.8rem;
  height: 100%;
  margin: 0 auto;
  overflow: auto;
  padding-top: 0.8rem;
  box-sizing: border-box;
}
header {
  width: 100%;
  height: 0.88rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 9;
  left: 0;
  box-shadow: 0 0 0.1rem #dedede;
  span {
    font-size: 0.48rem;
    position: absolute;
    top: 0.2rem;
    color: #999;
  }
}
.content {
  margin-top: 0.3rem;
  font-size: 0.28rem;
  h3 {
    text-align: left;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #333;
    font-size: 0.32rem;
    margin: 0.3rem 0;
  }
  .title {
    text-align: left;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    font-size: 0.56rem;
    color: #333;
  }
  .subtitle {
    margin: 0.48rem auto 0.48rem;
    font-family: PingFangSC-Light;
    font-size: 0.32rem;
    color: #898989;
    font-weight: 300;
    text-align: left;
    font-size: 12px;
  }
}
.footer {
  margin-top: 0.8rem;
  width: 100%;
  padding-bottom: 0.8rem;
  border-radius: 0.1rem;
  button {
    width: 3.5rem;
    height: 0.88rem;
    // padding: 0.05rem 0.2rem;
    background: #c04374;
    line-height: 0.88rem;
    color: #fff;
    font-size: 0.36rem;
    margin: 0 auto;
    text-align: center;
    border-radius: 0.1rem;
    box-sizing: border-box;
    transform: translateX(50%);
  }
}
</style>
