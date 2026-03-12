<template>
  <div class="wrap">
    <header>
      <span class="iconfont icon-xiangzuo" @click="$router.back()"></span>
      <span>选择详情信息</span>
      <span class="iconfont icon-24gf-headset"></span>
    </header>
    <section v-if="lvDate">
      <div class="gocity">
        <p>出发城市</p>
        <span
          @click="aaa(v.name, v.id)"
          :class="{ active: v.name == city }"
          v-for="v in lvDate.group_list[0].list"
          >{{ v.name }}</span
        >
      </div>
      <div class="type">
        <p>选择套餐类型</p>
        <span
          @click="bbb(v.name, v.id)"
          :class="{ active: v.name == type }"
          v-for="v in lvDate.group_list[1].list"
          >{{ v.name }}</span
        >
      </div>
      <div class="godate">
        <p>请填写时间（2021-12-13）</p>
        <input type="text" v-model="reDate" />
      </div>
      <div class="data">
        <p>城市：{{ city }}</p>
        <p>套餐：{{ type }}</p>
        <p>时间：{{ reDate }}</p>
        <!-- <p>参数：{{ combo_key }}</p> -->
      </div>
    </section>
    <footer>
      <router-link
        :style="{ opacity: city && type ? 1 : 0.6 }"
        :to="`/trip/${$route.params.id}/${reDate}/${combo_key}`"
        >立即预定</router-link
      >
      <div
        class="room"
        :style="{ display: city && type ? 'none' : 'block' }"
      ></div>
    </footer>
  </div>
</template>

<script setup>
import { cooseData } from "@/Api/index";
import { useRoute } from "vue-router";
import { ref } from "vue";
let route = useRoute();
let lvDate = ref("");
let city = ref(""); //城市
let type = ref(""); //套餐类型
let reDate = ref(""); //时间

let combo_key = ref("");
//获取默认时间
let getTimer = () => {
  let day = new Date();
  let y = day.getFullYear();
  let m = day.getMonth() + 1;
  let d = day.getDate();
  let str = `${y}-${m}-${d + 5}`;
  return str;
};
getTimer();
reDate.value = getTimer();
//获取页面数据
let reserveGo = async () => {
  let { data } = await cooseData(route.params.id);
  const payload = data?.data ?? null;
  console.log(payload);
  lvDate.value = payload;
};
reserveGo();
let aaa = (x, y) => {
  city.value = x;
  combo_key.value = `10000:${y};20000:`;
};
let bbb = (x, y) => {
  type.value = x;
  combo_key.value += `${y}`;
};
</script>
<style scoped lang="less">
.wrap {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: 0.32rem;
  overflow: hidden;
  header {
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #333;
    box-shadow: 0 0 0.1rem 0 #dedede;
  }
  section {
    flex: 1;
    overflow: auto;
    box-sizing: border-box;
    padding: 0 0.3rem;

    .gocity {
      height: 2rem;
      margin: 0.3rem 0;
      p {
        margin: 0.5rem 0;
      }
      span {
        padding: 0.2rem 0.26rem;
        margin: 0.2rem;
        font-size: 0.3rem;
        color: #000;
        border: 1px solid #cecece;
      }
    }
    .type {
      margin: 0.3rem 0;
      padding-bottom: 0.6rem;
      p {
        margin: 0.5rem 0;
      }
      span {
        display: inline-block;
        padding: 0.2rem 0.26rem;
        margin: 0.2rem;
        font-size: 0.3rem;
        color: #000;
        border: 1px solid #cecece;
      }
    }
    .godate {
      height: 2rem;
      margin: 0.3rem 0;
      p {
        margin: 0.3rem 0;
      }
      input {
        border: none;
        background-color: #dedede;
        width: 5rem;
        height: 0.8rem;
        color: #666;
        padding-left: 0.5rem;
      }
    }
    .data {
      box-sizing: border-box;
      padding: 0 0.3rem;
      p {
        margin: 0.2rem 0;
      }
    }
  }
  footer {
    box-shadow: 0 0 0.1rem 0 #dedede;
    height: 1rem;
    position: relative;
    a {
      display: block;
      width: 2.3rem;
      height: 100%;
      position: absolute;
      background-color: #c04374;
      right: 0;
      color: #fff;
      text-align: center;
      line-height: 1rem;
      opacity: 0.6;
    }
    .room {
      width: 2.3rem;
      height: 100%;
      position: absolute;
      background-color: #fff;
      opacity: 0;
      right: 0;
    }
  }
}
.active {
  color: #eee;
  background-color: #c04374;
  border: none;
}
</style>
