<template>
  <div class="wrap">
    <header>
      <span class="iconfont icon-xiangzuo" @click="$router.back()"></span>
      <span class="title">{{ pageData.title }}</span>
      <span class="iconfont icon-dingwei" @click="share"></span>
    </header>
    <section>
      <div class="headerImg">
        <img :src="pageData.img" alt="" />
      </div>
      <ul v-for="v in pageData.list" key="v.id">
        <li class="day">第{{ v.day }}天</li>
        <li>{{ v.title }}</li>
        <li>
          <p>行程</p>
          <p v-for="i in v.plans_detail">{{ i.name }}</p>
        </li>
        <li>
          <p>酒店</p>
          <p>
            <span v-for="q in v.hotels">{{ q.name }}/</span>
          </p>
        </li>
        <li>
          <p>用餐</p>
          <p>
            <span>早餐：</span>
            <span>{{ v.breakfast }};</span>
            <span>午餐：</span>
            <span>{{ v.dinner }};</span>
            <span>晚餐：</span>
            <span>{{ v.lunch }}</span>
          </p>
        </li>
        <li>
          <p>车导</p>
          <p>
            <span>用车</span>
            <span>{{ v.traffic }};</span>
            <span>导游：</span>
            <span>{{ v.guide }}</span>
          </p>
        </li>
      </ul>
    </section>
    <footer>
      <router-link :to="`/submitorder`"> 确认提交订单 </router-link>
    </footer>
    <!-- 遮罩层 -->
    <BackTell v-model:x="show" />
  </div>
</template>
<script setup>
import { Tijiao } from "@/Api/index";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import BackTell from "@/components/BestBall.vue";
import { Toast } from "vant";
let show = ref(true); //控制遮罩层显示隐藏
let router = useRouter();
let route = useRoute();
let pageData = ref("");
let getData = async () => {
  let { data } = await Tijiao(route.params);
  console.log(data);
  if (data.code == 0) {
    show.value = false;
  } else {
    setTimeout(() => {
      show.value = false;
      Toast("该地区该时间点暂无团期,即将返回");
      setTimeout(() => {
        router.go(-2);
      }, 1000);
    }, 2000);
  }
  pageData.value = data?.data ?? {};
};
getData();
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-size: 0.32rem;
  overflow: hidden;
  footer {
    box-sizing: border-box;
    height: 1.3rem;
    position: relative;
    a {
      width: 3rem;
      height: 80%;
      background-color: #c04354;
      position: absolute;
      bottom: 0;
      right: 0;
      border: none;
      color: #fff;
      font-size: 0.32rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  header {
    height: 1rem;
    width: 100%;
    box-shadow: 0 0 0.1rem #dedede;
    display: flex;
    justify-content: space-between;
    padding: 0 0.3rem;
    box-sizing: border-box;
    align-items: center;
    color: #333;
    .title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      box-sizing: border-box;
      padding: 0 1rem;
    }
  }
  section {
    box-sizing: border-box;
    padding: 0 0.3rem;
    height: 14rem;
    overflow: auto;
    .headerImg {
      width: 100%;
      img {
        width: 100%;
        border-radius: 0.2rem;
      }
    }
    ul {
      margin: 0.3rem 0;
      padding: 0.2rem;
      box-sizing: border-box;
      li {
        margin: 0.3rem 0;
        line-height: 0.6rem;
        color: #666;
        box-sizing: border-box;
        padding: 0 0.3rem;
      }
      .day {
        font-size: 0.4rem;
        background-color: #eee;
        text-align: center;
        padding: 0.2rem 0;
        border-radius: 0.2rem;
      }
    }
  }
}
</style>
