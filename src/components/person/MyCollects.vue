<template>
  <div class="myCollects">
    <ul class="top">
      <li
        v-for="(v, index) in arr"
        :key="v"
        @click="sure(v)"
        :class="{ active: res == v ? true : false }"
      >
        {{ v }} (<span>{{ num[index] }}</span
        >)
      </li>
    </ul>
    <div class="content">
      <ul>
        <li ref="oDiv" v-for="(v, index) in collects" :key="v.id">
          <router-link :to="`/detail/${v.id}`">
            <img :src="v.img" alt="" />
            <div class="right">
              <div class="right-top">
                <p class="title">{{ v.title }}</p>
                <p class="price">￥ {{ v.price }}</p>
              </div>
            </div>
          </router-link>
          <p class="del" @click="haha(v.id, index)">移除</p>
        </li>
      </ul>
      <p class="more">没有更多了</p>
    </div>
  </div>
  <BestBall v-model:x="flag"></BestBall>
</template>
<script setup>
import BestBall from "@/components/BestBall.vue";
import Api from "@/Api/Api.js";
import { ref, reactive, onMounted } from "vue";
import { Toast } from "vant";
import { alterShouc } from "@/Api/PersonUrl";
let arr = reactive(["品质跟团", "定制产品"]);
let res = ref("品质跟团");
let collects = ref([]);
let flag = ref(true);
let num = ref([]);
let oDiv = ref(null);
let delFlag = ref(-1);
let oLi = ref(null);
let count;
let sure = async (a = "品质跟团") => {
  res.value = a;
  count = res.value == "品质跟团" ? 0 : 1;
  let { data } = await Api.getCollects({ type: count });
  //   console.log(data);
  if (data.code == 0) {
    flag.value = false;
    collects.value = data.data.list;
    //处理数据,对数据进行分类
    let count1 = [0, 0];
    data.data.list.forEach((v) => {
      if (v.display == 0) {
        count1[0]++;
      } else {
        count1[1]++;
      }
      return count1;
    });
    num.value = count1;

    if (data.data.list.length == 0) {
      Toast("暂无收藏信息");
    }
  } else {
    Toast("加载失败，请稍后再试");
  }
};
sure();
let haha = async (x, index) => {
  console.log(x);
  let { data } = await alterShouc({ product_id: x, action: "del" });
  console.log(data.data);
  collects.value.splice(index, 1);
  num.value[0]--;
};
</script>
<style lang="less" scoped>
.top {
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
  overflow: hidden;
  width: 100%;
  height: 14.42rem;
  background-color: #f5f5f5;
  overflow: auto;
  ul {
    margin-top: 0.2rem;
    li {
      width: 100%;
      position: relative;
      height: 1.9rem;
      margin-bottom: 0.3rem;
      background-color: #fff;
      box-sizing: border-box;
      padding: 0.1rem 0.2rem;
      a {
        display: flex;
        font-size: 0.32rem;
        img {
          width: 1.6rem;
          height: 1.08rem;
        }
        .right {
          display: flex;
          height: 90%;
          justify-content: space-between;
          .right-top {
            margin-left: 0.4rem;
            .title {
              font-weight: 400;
              font-size: 0.24rem;
              color: #333;
            }
            .price {
              color: gray;
              margin-top: 0.3rem;
            }
          }
        }
      }
      .del {
        padding: 0.1rem 0.2rem;
        margin-top: 0.1rem;
        position: absolute;
        right: 0.25rem;
        top: 1.3rem;
        color: #fff;
        background-color: #bc6286;
        font-size: 0.24rem;
        border-radius: 0.1rem;
      }
    }
  }
  .more {
    width: 100%;
    text-align: center;
    color: gray;
    font-size: 0.3rem;
    margin-top: 0.5rem;
    height: 0.5rem;
  }
}
</style>
