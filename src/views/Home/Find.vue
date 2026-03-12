<template>
  <div class="qwerty">
    <!-- 遮罩层提示框 -->
    <BestBall v-model:x="show" />
    <div class="tab-content">
      <van-tabs
        v-model:active="active"
        line-width="0.18rem"
        color="rgb(193, 67, 116)"
        title-active-color="rgb(193, 67, 116)"
        animated
        @click-tab="change"
      >
        <van-tab :title="item" v-for="item in navData">
          <div class="content">
            <ul>
              <li v-for="v in findDatas">
                <router-link :to="`/finddetail/${v.id}`">
                  <img :src="v.head_pic" />
                  <h5>{{ v.title }}</h5>
                  <h6>{{ v.subtitle }}</h6>
                  <span class="boxx">{{ v.sort_name }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, watch } from "vue";
import { findData } from "@/Api/findPage.js";
import { Toast } from "vant";
import BestBall from "@/components/BestBall.vue"; //引入遮罩层组件
let findDatas = ref([]);
let navData = reactive(["全部", "涨知识", "看世界", "达人说"]);
let result = ref(0);
let active = ref("");
let show = ref(true); //控制遮罩层显示隐藏
let timer;
//初始拿到全部的数据
let getFindData = async () => {
  let { data } = await findData({ sort_id: 0, size: 20 });
  findDatas.value = data.data.list;
  if (data.code == 0) {
    show.value = false;
  } else {
    timer = setTimeout(() => {
      show.value = false;
      Toast("加载失败，请重试！");
    }, 3000);
  }
};
getFindData();
let change = async () => {
  //加载遮罩层
  show.value = true;
  clearTimeout(timer);
  // console.log(active.value);
  //根据点击数据渲染不同的数据
  result.value = active.value;
  result.value =
    result.value == 0 ? 0 : result.value == 1 ? 5 : result.value == 2 ? 6 : 7;
  // console.log(result.value);
  let { data } = await findData({ sort_id: result.value, size: 20 });
  if (data.code == 0) {
    show.value = false;
    findDatas.value = data.data.list;
  }
};
</script>
<style lang="less" scoped>
.qwerty {
  box-sizing: border-box;
  width: 100%;
  padding: 0 0.3rem;

  ul::-webkit-scrollbar {
    display: none;
  }
  .tab-content {
    .content {
      width: 100%;
      text-align: center;
      ul {
        height: 13.5rem;
        overflow: auto;
        li {
          margin-bottom: 0.6rem;
          position: relative;
          img {
            width: 100%;
            height: 3.8rem;
            display: block;
          }
          h5 {
            width: 100%;
            font-weight: 500;
            font-size: 0.3rem;
            color: #333;
            margin: 0.32rem 0 0.22rem 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          h6 {
            width: 100%;
            font-weight: 500;
            font-size: 0.24rem;
            color: #333333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .boxx {
            font-size: 0.24rem;
            position: absolute;
            right: 0.35rem;
            top: 0.2rem;
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
            border-radius: 0.05rem;
            padding: 0.05rem 0.1rem;
          }
        }
      }
    }
  }
}
</style>
