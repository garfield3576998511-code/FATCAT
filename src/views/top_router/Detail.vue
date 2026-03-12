<template>
  <div class="wrap">
    <header>
      <div class="mod1" ref="mod1">
        <span class="iconfont icon-xiangzuo" @click="$router.back()"></span>
        <span class="title">{{ productDetail.title }}</span>
        <span class="iconfont icon-fenxiang" @click="share"></span>
      </div>
      <div class="mod2" ref="mod2">
        <span class="iconfont icon-xiangzuo" @click="$router.back()"></span>
        <span class="iconfont icon-fenxiang" @click="share"></span>
      </div>
    </header>
    <section @scroll="getTop" ref="box">
      <!-- 商品详情模块 -->
      <ProductView v-model:x="productDetail" />
      <!-- 评分模块 -->
      <ScoreView />
      <!-- 图片很长 -->
      <Aloungimages
        v-model:x="htmlStr"
        v-model:y="productDetail.product_img_wx"
        v-model:z="productDetail.high_feature"
      />
      <!-- 点击回到顶部 -->
      <div class="goTop" ref="gotop" @click="gogoTop">
        <span class="iconfont icon-tubiao02"></span>
      </div>
    </section>
    <footer>
      <li class="shou" @click="Collects()">
        <span
          class="iconfont icon-xingxing"
          :style="{ color: flag ? '#c04374' : '#eee' }"
        ></span>
        <p>{{ flag ? "已收藏" : "收藏" }}</p>
      </li>
      <li>
        <span class="iconfont icon-dianhua"></span>
        <p>客服</p>
      </li>
      <!-- 跳转选择团期页面 -->
      <router-link :to="`/coosedate/${$route.params.id}`">选择团期</router-link>
    </footer>
    <BestBall v-model:x="show" />
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { getDataDetail } from "@/Api/index";
import { alterShouc, lookShouc } from "@/Api/PersonUrl";

import { ref } from "vue";
import ProductView from "@/components/detail_modules/Product.vue"; //商品详情组件
import ScoreView from "@/components/detail_modules/Score.vue"; //评分模块
import Aloungimages from "@/components/detail_modules/Aloungimages.vue"; //长图片
import BestBall from "@/components/BestBall.vue";
import { Toast } from "vant";
let show = ref(true);

let mod1 = ref(null); //头部2
let mod2 = ref(null); //头部1
let box = ref(null); //页面
let gotop = ref(null); //回到顶部
let htmlStr = ref(""); //模板图片
let flag = ref(""); //判断收藏亮不亮

let productDetail = ref("");
let route = useRoute();
let router = useRouter();
let getData = async () => {
  let { data } = await getDataDetail(route.params.id);
  productDetail.value = data.data;
  // console.log(data.data); //详情大数据
  if (data.code == 0) {
    show.value = false;
  } else {
    show.value = false;
    Toast("该产品已下架");
    router.back();
  }
  const featureContent = data?.data?.feature?.[0]?.content;
  if (featureContent) {
    htmlStr.value = featureContent;
  }
};
getData();
//滚动条事件控制header交叉显示
let getTop = () => {
  if (box.value.scrollTop > 200) {
    mod1.value.style.display = "flex";
    mod2.value.style.display = "none";
    gotop.value.style.display = "block";
  } else {
    mod1.value.style.display = gotop.value.style.display = "none";
    mod2.value.style.display = "flex";
  }
};
//点击分享
let share = () => {
  console.log("点击分享");
};
//点击回到顶部
let timer;
let gogoTop = () => {
  timer = setInterval(() => {
    box.value.scrollTop -= 30;
    if (box.value.scrollTop < 10) {
      box.value.scrollTop = 0;
      clearInterval(timer);
    }
  }, 10);
};
//查看我的收藏
let lookMe = async () => {
  try {
    let { data } = await lookShouc();
    const list = data?.data?.list ?? [];
    console.log(list); //查看我的收藏
    let arr = Array.isArray(list) ? list.map((v) => v.id) : [];
    console.log(arr);
    let ft = arr.some((v) => v == route.params.id);
    console.log(ft);
    flag.value = ft;
  } catch (err) {
    console.error("lookMe error:", err);
    flag.value = false;
  }
};
lookMe();
let Collects = async () => {
  flag.value = true;
  //收藏返回数据
  let res = await alterShouc({
    product_id: route.params.id,
    action: "add",
  });
  console.log(res.data);
};
</script>
<style scoped lang="less">
.wrap {
  width: 100%;
  height: 100%;
  font-size: 0.32rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  section {
    background-color: #efefef;
    overflow: auto;
    flex: 1;
    position: relative;
    .goTop {
      position: fixed;
      z-index: 99;
      right: 0.3rem;
      bottom: 3rem;
      display: block;
      padding: 0.29rem 0.19rem;
      background-color: #000;
      color: #fff;
      opacity: 0.7;
      display: none;
      transform: scale(1.6);
    }
  }
  header {
    width: 100%;
    height: 0.88rem;
    box-sizing: border-box;
    position: absolute;
    z-index: 9;
    top: 0;
    .mod1 {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 0.5rem;
      box-sizing: border-box;
      align-items: center;
      box-shadow: 0 0 0.1rem 0 #dedede;
      display: none; //交互显示隐藏
      background-color: #fff;
      .title {
        width: 5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-indent: 0.1rem;
      }
      .iconfont {
        font-size: 0.4rem;
      }
    }
    .mod2 {
      display: flex;
      justify-content: space-between;
      padding: 0 0.3rem;
      align-items: center;
      height: 0.88rem;
      width: 100%;
      box-sizing: border-box;
      top: 0;
      .iconfont {
        display: block;
        width: 0.5rem;
        height: 0.5rem;
        background-color: #000;
        color: #fff;
        text-align: center;
        line-height: 0.5rem;
        border-radius: 50%;
        font-size: 0.28rem;
        opacity: 0.5;
        box-sizing: border-box;
        padding-right: 0.03rem;
      }
      //   display: none;
    }
  }
  footer {
    height: 1.04rem;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 0.06rem 0.3rem 0.06rem 0.6rem;
    .shou {
      width: 0.8rem;
      // border: 1px solid #000;
    }
    li {
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.24rem;
      .iconfont {
        font-size: 0.41rem;
        color: #c04374;
      }
    }
    a {
      height: 100%;
      display: flex;
      width: 4.5rem;
      border: none;
      background-color: #c04374;
      border-radius: 0.1rem;
      color: #fff;
      align-items: center;
      justify-content: space-around;
      box-sizing: border-box;
      padding-bottom: 0.1rem;
    }
  }
}
</style>
