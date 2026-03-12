<template>
  <div class="wrap">
    <!-- 左侧导航栏 -->
    <nav>
      <li
        v-for="(v, i) in itarData"
        :class="{ active: v.label == word }"
        @click="navClick(v.label)"
        :key="v.id"
      >
        <div class="ball" v-show="word == v.label"></div>
        {{ v.label }}
      </li>
    </nav>
    <!-- 右侧列表 -->
    <div class="list">
      <div class="wrap">
        <ul class="top">
          <!-- 点击跳转城市详情 -->
          <li v-if="listData[0]" v-for="(v, i) in listData[0].children">
            <router-link :to="`/cityitem/${v.id}/${v.label}`">
              <img :src="v.img" alt="" />
              <div class="top-ball">
                <p class="pinyin">{{ v.name_en }}</p>
                <p class="name">{{ v.label }}</p>
              </div>
            </router-link>
          </li>
        </ul>
        <h3>热门推荐</h3>
        <ul class="bottom">
          <li v-for="(v, i) in listData[0].product" v-if="listData[0]">
            <!-- 点击跳转详情页 -->
            <router-link :to="`/detail/${v.id}`">
              <img :src="v.img" alt="" />
            </router-link>
            <p class="title">{{ v.title }}</p>
            <p class="subtitle">{{ v.subtitle }}</p>
            <span class="price">￥{{ v.price }}起/{{ v.unit }}</span>
            <div class="ball">{{ v.tip_mark }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <BestBall v-model:x="show" />
</template>

<script setup>
import { ref } from "vue";
import { getItarData } from "@/Api/ItarPage.js";
import { Toast } from "vant";
import BestBall from "@/components/BestBall.vue";
let word = ref("海南"); //nav响应数据
let itarData = ref(""); //页面数据
let listData = ref(""); //右侧列表数据
let show = ref(true);
let timer;
//获取到页面数据
let wrapUrl = async () => {
  let { data } = await getItarData();
  if (data.code == 0) {
    show.value = false;
  } else {
    timer = setTimeout(() => {
      show.value == 0;
      Toast("页面加载失败，请检查网络");
    }, 3000);
  }
  itarData.value = data?.data?.list ?? [];
  listData.value = (itarData.value || []).filter((v) => {
    return v.label == "海南";
  });
};
wrapUrl();
//nav点击事件
let navClick = (a) => {
  word.value = a;
  listData.value = (itarData.value || []).filter((v) => {
    return v.label == a;
  });
};
</script>

<style scoped lang="less">
.wrap {
  position: relative;
  z-index: 88;
  height: 101%;
  nav {
    width: 1.6rem;
    height: 100%;
    box-sizing: border-box;
    float: left;
    font-size: 0.28rem;
    overflow: auto;
    position: absolute;
    li {
      color: #333;
      width: 100%;
      height: 1.2rem;
      background-color: #f7f8fa;
      list-style: none;
      padding: 0 0.2rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
      .ball {
        width: 0.08rem;
        height: 0.32rem;
        background-color: red;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .list {
    height: 97.6%;
    width: 5.9rem;
    float: right;
    padding: 0.3rem;
    box-sizing: border-box;
    list-style: none;
    // border: 1px solid #000;
    .wrap {
      overflow: auto;
      h3 {
        font-size: 0.32rem;
        font-weight: 400;
        line-height: 1rem;
        text-indent: 0.1rem;
      }
      .top {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li {
          a {
            position: relative;
            .top-ball {
              width: 80%;
              height: 60%;
              border: 1px solid rgb(212, 212, 212);
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              margin: auto;
              color: #fff;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .name {
                font-size: 0.32rem;
              }
              .pinyin {
                font-size: 0.24rem;
              }
            }
            img {
              display: block;
              width: 2.47rem;
              height: 1.44rem;
              margin: 0.1rem 0;
              border-radius: 0.06rem;
            }
          }
        }
      }
      .bottom {
        li {
          padding: 0 0.08rem;
          font-size: 0.2rem;
          color: #333;
          margin: 0.2rem 0;
          position: relative;
          img {
            width: 100%;
            border-radius: 0.1rem;
          }
          .title {
            margin: 0.1rem 0;
          }
          .subtitle {
            color: #666;
            margin: 0.1rem 0;
          }
          .price {
            color: #c04374;
            margin-top: 0.1rem;
          }
          .ball {
            position: absolute;
            color: #fff;
            background-color: #333;
            opacity: 0.6;
            font-size: 0.16rem;
            padding: 0.06rem 0.1rem;
            top: 0;
            left: 0.3rem;
            border-radius: 0.06rem;
          }
        }
      }
    }
  }
  .active {
    background-color: #fff;
  }
}
</style>
