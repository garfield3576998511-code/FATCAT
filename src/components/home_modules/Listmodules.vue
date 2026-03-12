<template>
  <!-- 酒店列表 -->
  <div class="morList" v-for="(v, i) in y">
    <div class="text">
      <a href=""><img :src="x[i].img" /></a>
    </div>
    <div class="content">
      <ul>
        <li v-for="item in v.list" :key="item.id">
          <router-link :to="`/detail/${item.id}`">
            <img :src="item.img" alt="" />
            <div>
              <p class="title">{{ item.title }}</p>
              <p class="address">
                {{ item.subtitle }}
              </p>
              <p class="hot">
                <template v-for="v in item.mark" :key="v">
                  <span>{{ v.name }}</span>
                </template>
              </p>
              <div class="price">
                <p class="left">
                  ￥<span>{{ item.price }}</span
                  >起/<span>{{ item.unit }}</span>
                </p>
                <span></span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="text" v-if="i == 8">
      <a href=""><img class="image" :src="x[9].img" /></a>
    </div>
  </div>
</template>
<script setup>
//引入传值插件
import { defineProps } from "vue";
defineProps(["x", "y"]);
</script>

<style lang="less" scoped>
.morList {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0 0.3rem;
  box-sizing: border-box;
  .image {
    margin: 0.3rem 0;
  }
  .text {
    width: 100%;
    overflow: hidden;
    a {
      width: 100%;
      display: block;
      img {
        width: 100%;
      }
    }
  }
  ul {
    margin: 0.3rem 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 3.3rem;
      height: 4.2rem;
      margin: 0.2rem 0;
      img {
        width: 100%;
        height: 2.04rem;
      }
      div {
        margin-top: 0.15rem;
        font-size: 12px;
        .title {
          margin-bottom: 3px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #333;
          font-weight: 700;
        }
        .address {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 6px;
          color: #898989;
        }
        .hot {
          display: flex;
          flex-wrap: wrap;
          span {
            border: 0.5px solid rgba(193, 67, 116, 0.2);
            color: #c14374;
            padding: 1px 3px;
            margin-right: 6px;
          }
        }
        .price {
          display: flex;
          justify-content: space-between;
          .left {
            color: #c04374;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
