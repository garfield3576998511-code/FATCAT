<template>
  <div class="wrap">
    <!-- 轮播 -->
    <BannerSwipe v-model:x="swiprData" />
    <!-- 国内酒店 -->
    <SterHotel v-model:x="sterHotel" />
    <!-- 精品推荐 -->
    <Boutique v-model:x="Boutique" />
    <div class="Boutique">
      <a :href="Boutique.url">
        <img :src="Boutique.img" alt="" />
      </a>
    </div>
    <!-- 精品推荐轮播 -->
    <BoutiqueLbMod v-model:x="boutiqueLb" />
    <!-- 酒店列表 -->
    <Listmodules v-model:x="listTitleData" v-model:y="listData" />
    <!-- Footer -->
    <!-- <FooterModules /> -->
    <!-- <div class="footer-wrap"></div> -->
  </div>
  <BestBall v-model:x="show" />
</template>
<script setup>
import { useStore } from "vuex";
import { homeData, getListData, getPageId } from "@/Api";
import { ref, reactive } from "vue";
import BannerSwipe from "@/components//home_modules/BannerSwipe.vue"; //轮播
import SterHotel from "@/components/home_modules/SterHotel.vue"; //国内酒店
import BoutiqueLbMod from "@/components/home_modules/BoutiqueLbMod.vue"; //精品推荐轮播
import Listmodules from "@/components/home_modules/Listmodules.vue";
import FooterModules from "@/components/home_modules/FooterModules.vue"; //首页底部模块
import BestBall from "@/components/BestBall.vue"; //遮罩层模块
import { Toast } from "vant";

let show = ref(true);
let store = useStore();
let pageId = ref("");
let indexData = ref("");
let swiprData = ref([]); //轮播图数据
let sterHotel = ref([]); //国内酒店 明星推荐
let Boutique = ref([]); //精品推荐
let boutiqueLb = ref([]); //精品推荐轮播
// let idArr = reactive([]);//获取轮播数据

let listData = reactive([]); //酒店列表
let listTitleData = reactive([]); //酒店列表title
let timer;
//获取页面ID
let getHomePageId = async () => {
  let res = await getPageId();
  store.commit("setNav", res.data.data.nav);
  pageId.value = res.data.data.nav[0].pageId;
  getHomeData();
};
getHomePageId();
//获取页面数据
let getHomeData = async () => {
  let { data } = await homeData(pageId.value);
  indexData.value = data.data.data;
  console.log(data.data.data); //数据模式
  if (data.code == 0) {
    show.value = false;
  } else {
    timer = setTimeout(() => {
      show.value = false;
      Toast("页面请求失败，请检查网络。");
    }, 4000);
  }
  function getData(num) {
    // 添加数据检查
    const block = data?.data?.data?.[num];
    if (!block || !Array.isArray(block.data)) {
      return [];
    }
    let arr = block.data.map((v) => {
      return { url: v?.url || '', img: v?.img?.url || '' };
    });
    return arr;
  }
  //获取id
  function getIds(num) {
    // 添加数据检查，防止崩溃
    const block = data?.data?.data?.[num];
    if (!block) return [];
    // 如果 block.data 是数组且含 ids 字段在对象中，尝试收集 ids
    if (Array.isArray(block.data)) {
      // 取每项的 ids 并扁平化（若需要）——这里原逻辑似乎期望 block.data.ids，保持兼容
      return block.data.ids || [];
    }
    return block.data?.ids || [];
  }
  //获取titel
  function getTitle(num) {
    let obj = {
      url: "",
      img: "",
    };
    // 添加数据检查，防止崩溃
    const block = data?.data?.data?.[num];
    if (block && Array.isArray(block.data) && block.data[0]) {
      obj.url = block.data[0]?.url || "";
      obj.img = block.data[0]?.img?.url || "";
    }
    return obj;
  }
  swiprData.value = getData(0); //轮播图数据
  sterHotel.value = getData(1); //国内酒店 明星推荐
  Boutique.value = getData(2)[0]; //精品推荐
  boutiqueLb.value = getData(3); //精品推荐轮播
  console.log(getData(3));
  let arrs = [];
  for (let i = 4; i <= 22; i++) {
    i % 2 !== 0 ? arrs.push(getIds(i)) : listTitleData.push(getTitle(i));
  }
  arrs.forEach((v, i) => {
    getListData({ ids: v }).then(({ data }) => {
      listData.push(data.data);
    });
  });
};
console.log(listData);
</script>

<style scoped lang="less">
.wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;

  .Boutique {
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.3rem;
    img {
      width: 100%;
    }
  }
  .footer-wrap {
    width: 100%;
    height: 3rem;
    border: 1px solid #000;
    box-sizing: border-box;
    margin-bottom: 1rem;
  }
}
</style>
