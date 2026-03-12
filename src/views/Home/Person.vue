<template>
  <div class="wrap">
    <header>
      <img class="image" src="../../assets/img/20191216-center-bg.png" alt="" />
      <div class="top">
        <img src="../../assets/img/logo_white_2.jpg" alt="" />
        <p>{{ personData.username }}</p>
        <img class="imm" src="../../assets/img/regVip.jpg" alt="" />
      </div>
      <ul class="bottom" v-if="personData">
        <router-link :to="`/personpage/${'我的卡券'}`">
          <span>{{ personData.coupon_count }}</span>
          <span>优惠券</span></router-link
        >
        <span>|</span>
        <router-link :to="`/personpage/${'我的斑马豆'}`">
          <span>{{ myMoneyCount.total }}</span>
          <span>斑马豆</span></router-link
        >
        <span>|</span>
        <router-link :to="`/personpage/${'我的收藏'}`">
          <span>{{ personData.collect_count }}</span>
          <span>我的收藏</span></router-link
        >
      </ul>
    </header>
    <div class="content">
      <router-link :to="goArr[i]" li v-for="(v, i) in arr" :key="v">
        <span
          :class="`iconfont ${i == 2 ? 'icon-shezhi' : 'icon-xiaoxi'}`"
        ></span>
        <span class="textt">{{ v }}</span>
        <span class="iconfont icon-xiangyou1"></span>
      </router-link>
    </div>
    <BastBall v-model:x="show" />
  </div>
</template>
<script setup>
import { getPersonUrl, getMyMoney } from "@/Api/PersonUrl.js"; //引入获取用户信息接口
import { ref } from "vue";
import BastBall from "@/components/BestBall.vue";
import { Toast } from "vant";
let personData = ref(""); //个人信息数据
let myMoneyCount = ref(""); //我的斑马豆
let arr = ["我的订单", "用户反馈", "设置"];
// let goArr = ["/order", "/backtell", "/setting"];
let show = ref(true);
let goArr = [
  "/personPage/订单列表",
  "/personPage/用户反馈",
  "/personPage/设置",
];
//获取用户信息
let getPersonData = async () => {
  let { data } = await getPersonUrl();
  console.log(data?.data);
  //判读遮罩层显示隐藏
  if (data.code == 0) {
    show.value = false;
  } else {
    setTimeout(() => {
      show.value = false;
      Toast("页面加载失败，请检查网络");
    }, 3000);
  }
  personData.value = data?.data ?? {};
  let res = await getMyMoney();
  myMoneyCount.value = res.data.data;
};
getPersonData();
</script>
<style scoped lang="less">
.wrap {
  width: 100%;
  height: 105%;
  box-sizing: border-box;
  font-size: 0.32rem;
  header {
    width: 6.9rem;
    margin: 0.2rem auto;
    height: 3.9rem;
    box-sizing: border-box;
    overflow: hidden;
    .image {
      width: 6.9rem;
      z-index: -1;
      position: absolute;
    }
    .bottom {
      display: flex;
      width: 100%;
      height: 0.8rem;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 0.6rem;
      align-items: center;
      color: #fff;
      margin-top: 0.8rem;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 0.8rem;
        justify-content: space-between;
        color: #fff;
        span:nth-child(1) {
          font-size: 0.38rem;
        }
        span:nth-child(2) {
          font-size: 0.28rem;
        }
      }
    }
    .top {
      width: 4.8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.39rem;
      color: #fff;
      margin: 0.5rem;
      .imm {
        border-radius: 0;
        width: 1.2rem;
      }
      img {
        width: 1.1rem;
        border-radius: 50%;
      }
    }
  }
  .content {
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.3rem;
    margin-top: 0.3rem;

    a {
      height: 1rem;
      background-color: #f9f8f8;
      margin: 2px 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #666;
      padding: 0 0.3rem;
      .textt {
        flex: 1;
        text-indent: 1em;
        font-size: 0.3rem;
      }
    }
  }
}
</style>
