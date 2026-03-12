<template>
  <div>
    <ul>
      <li
        v-for="v in arr"
        :key="v"
        @click="sure(v)"
        :class="{ active: res == v ? true : false }"
      >
        {{ v }}
      </li>
    </ul>
    <div class="content">
      <div class="top" v-show="show">
        <input type="text" placeholder="请输入兑换码" v-model="value" />
        <span @click="exChange">兑换</span>
      </div>
      <div class="banner">
        <img v-if="!coupon.length" src="../../assets/img/nofind.png" />
        <ul v-else>
          <li v-for="v in coupon" :key="v">{{ coupon }}</li>
        </ul>
      </div>
    </div>
  </div>
  <BestBall v-model:x="flag"></BestBall>
</template>
<script setup>
import BestBall from "@/components/BestBall.vue";
import { ref, reactive } from "vue";
import Api from "@/Api/Api.js";
import { Toast } from "vant";
let value = ref("");
let show = ref(true);
let flag = ref(true);
let arr = reactive(["未使用", "已使用", "已失效"]);
let res = ref("未使用");
let coupon = ref([]);
let count = 1;
let sure = async (a = "未使用") => {
  res.value = a;
  if (res.value == "未使用") {
    show.value = true;
  } else {
    show.value = false;
  }
  count = res.value == "未使用" ? 1 : res.value == "已使用" ? 2 : 3;
  //   console.log(res.value);
  let { data } = await Api.getCoupon({ type: count });
  //   console.log(data);
  if (data.code == 0) {
    flag.value = false;
    coupon.value = data.data.list;
    if (data.data.list.length == 0) {
      Toast("暂无优惠卷信息");
    }
  } else {
    Toast("加载失败，请稍后再试");
  }
};
sure();

//兑换
let exChange = () => {
  if (value.value == "") {
    Toast("请输入兑换码");
  }
};
</script>
<style scoped lang="less">
ul {
  margin-top: 0.88rem;
  width: 100%;
  height: 0.72rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  color: rgb(137, 137, 137);
  li {
    height: 100%;
    line-height: 0.72rem;
    font-size: 0.26rem;
  }
}
.active {
  color: rgb(193, 67, 116);
  border-bottom: 1px solid rgb(193, 67, 116);
}
.content {
  font-size: 0.24rem;
  width: 100%;
  height: 14.63rem;
  position: relative;
  background-color: #f5f5f5;
  .top {
    width: 6.8rem;
    height: 0.76rem;
    margin: 0 auto;
    padding: 0.18rem 0.24rem;
    box-sizing: border-box;
    border: 1px solid #dedede;
    background-color: #fff;
    position: relative;
    top: 0.36rem;
    border-radius: 0.06rem;
    input {
      width: 5.5rem;
      height: 0.36rem;
      border: 0;
      border-right: 1px solid #dedede;
    }
    span {
      text-align: right;
      color: rgb(193, 67, 116);
      margin-left: 0.2rem;
    }
  }

  .banner {
    img {
      width: 3rem;
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%);
    }
    ul {
      position: absolute;
      z-index: 10;
    }
  }
}
</style>
