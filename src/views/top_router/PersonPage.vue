<template>
  <div class="wrap">
    <Header></Header>
    <Coupon v-if="show[0]"> </Coupon>
    <HouseBean v-if="show[1]"></HouseBean>
    <MyCollects v-if="show[2]"></MyCollects>
    <OrderList v-if="show[3]"></OrderList>
    <UserOpinion v-if="show[4]"></UserOpinion>
    <About v-if="show[5]"></About>
  </div>
</template>
<script setup>
import Header from "@/components/person/Header.vue";
import Coupon from "@/components/person/Coupon.vue";
import HouseBean from "@/components/person/HouseBean.vue";
import MyCollects from "@/components/person/MyCollects.vue";
//我的订单
import OrderList from "@/components/person/OrderList.vue";
//用户反馈
import UserOpinion from "@/components/person/UserOpinion.vue";
//设置
import About from "@/components/person/AboutView.vue";
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
let route = useRoute();
let show = ref([]);
show.value[0] = route.params.title == "我的卡券" ? true : false;
show.value[1] = route.params.title == "我的斑马豆" ? true : false;
show.value[2] = route.params.title == "我的收藏" ? true : false;
show.value[3] = route.params.title == "订单列表" ? true : false;
show.value[4] = route.params.title == "用户反馈" ? true : false;
show.value[5] = route.params.title == "设置" ? true : false;
console.log(show.value);
</script>
<style scoped lang="less">
.wrap {
  height: 100%;
}
</style>
