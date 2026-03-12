<template>
  <div class="product">
    <div class="swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="v in x.product_img_wx">
          <img :src="v.url" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="itemData">
      <p class="tit">{{ x.title }}</p>
      <p class="ttp">{{ x.subtitle }}</p>
      <div class="bbx">
        <span v-for="v in x.mark">{{ v.name }}</span>
      </div>
      <p class="price">￥{{ x.min_price }}起/{{ x.unit }}</p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps(["x"]);
</script>
<style scoped lang="less">
.product {
  background-color: #fff;
  width: 100%;
  height: 7.5rem;
  box-sizing: border-box;
  .swipe {
    height: 4.65rem;
    box-sizing: border-box;
    overflow: hidden;
    img {
      width: 100%;
      height: 4.65rem;
    }
  }
  .itemData {
    height: 2.85rem;
    box-sizing: border-box;
    padding: 0.3rem;

    .tit {
      font-size: 0.3rem;
      color: #333;
    }
    .ttp {
      font-size: 0.24rem;
      color: #898989;
      margin: 0.2rem 0;
    }
    .bbx {
      font-size: 0.24rem;
      color: #c14374;
      margin: 0.2rem 0;
      span {
        border: 1px solid #c14374;
        padding: 0.06rem 0.1rem;
        margin-right: 0.2rem;
      }
    }
    .price {
      font-size: 0.36rem;
      color: #c04374;
    }
  }
}
</style>
