<template>
  <div class="wrap">
    <header>
      <span @click="$router.back()" class="iconfont icon-xiangzuo"></span>
      <span>{{ route.params.title }}</span>
      <span class="iconfont icon-sousuoxiao"></span>
    </header>
    <ul class="nav1">
      <li
        :style="{
          color: v.title == word ? '#c84c7b' : '#333',
        }"
        @click="Filter(v.title)"
        v-for="v in typeData"
      >
        {{ v.title }}
        <div class="fach" v-if="v.title == word"></div>
      </li>
    </ul>
    <!-- <ul class="nav2"></ul> -->
    <section v-if="itemData.length">
      <li v-for="v in itemData" :key="v.id">
        <router-link :to="`/detail/${v.id}`">
          <img :src="v.img" alt="" />
        </router-link>
        <div class="data">
          <p class="tit">{{ v.title }}</p>
          <p class="look">{{ v.subtitle }}</p>
          <div class="mod">
            <span v-for="i in v.mark" :key="i.name">{{ i.name }}</span>
          </div>
          <p class="price">￥{{ v.price }}起/{{ v.unit }}</p>
        </div>
      </li>
    </section>
    <section v-else @click="$router.go(-1)">
      <div class="qwqw"><p>该地区该暂无团期</p></div>
    </section>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { twoPage, getTypeData, getFilterData } from "@/Api/ItarPage.js";
import { ref } from "vue";
let itemData = ref(""); //详情数据
let typeData = ref(""); //分类
let filterData = ref(""); //筛选
let word = ref("全部"); //选择判断

let router = useRouter();
let route = useRoute();
//获取数据
let getDatas = async () => {
  //详情数据
  let { data } = await twoPage(route.params.id);
  itemData.value = data?.data?.list ?? [];
  console.log(itemData.value, "详情");
  //类型
  let a = await getTypeData(route.params.id);
  typeData.value = a?.data?.data?.list ?? [];
  console.log(typeData.value, "类型");
  //筛选
  let res = await getFilterData(route.params.id, 26);
  filterData.value = res?.data?.data ?? {};
  console.log(filterData.value, "筛选");
};
getDatas();
let Filter = (a) => {
  word.value = a;
  let arr = itemData.value;
  console.log(arr);
};
</script>

<style lang="less" scoped>
.wrap {
  header {
    width: 100%;
    height: 0.88rem;
    box-sizing: border-box;
    font-size: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.3rem;

    .iconfont {
      font-size: 0.36rem;
      color: #666;
    }
  }
  .nav1 {
    width: 100%;
    display: flex;
    font-size: 0.26rem;
    height: 0.88rem;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 0 0.3rem;
    li {
      height: 100%;
      position: relative;
      line-height: 0.88rem;
      .fach {
        width: 0.52rem;
        height: 0.04rem;
        background-color: #c84c7b;
        position: absolute;
        bottom: 0.1rem;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  section {
    width: 100%;
    height: 14.48rem;
    box-sizing: border-box;
    padding: 0 0.3rem;
    box-sizing: border-box;
    font-size: 0.32rem;
    overflow: auto;
    .qwqw {
      border: 1px solid #000;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #000;
      color: #fff;
      opacity: 0.6;
      text-align: center;
      box-sizing: border-box;
      p {
        display: block;
        width: 1.2rem;
        font-size: 1rem;
        position: absolute;
        bottom: 0;
        left: 0;
        top: 2rem;
        right: 0;
        margin: auto;
      }
    }
    li {
      list-style: none;
      width: 100%;
      margin: 0.1rem 0 0.5rem 0;
      img {
        width: 100%;
        border-radius: 0.1rem;
      }
      .data {
        padding: 0 0.2rem;
        box-sizing: border-box;
        .tit {
          font-size: 0.3rem;
          color: #333;
          margin: 0.1rem 0;
        }
        .look {
          font-size: 0.28rem;
          color: #898989;
          margin: 0.1rem 0;
        }
        .mod {
          font-size: 0.24rem;
          color: #c14374;
          margin: 0.2rem 0;
          span {
            border: 1px solid #ecd3dd;
            padding: 0.06rem 0.1rem;
            margin: 0 0.1rem;
          }
        }
        .price {
          font-size: 0.36rem;
          color: #c04374;
          margin: 0.1rem 0;
        }
      }
    }
  }
}
</style>
