<template>
  <header>
    <span class="iconfont icon-xiangzuo" @click="$router.back()"></span>
    <h6>手机号注册</h6>
    <p>未注册手机验证后即完成注册</p>
  </header>
  <section>
    <p>手机号</p>
    <input type="number" placeholder="请输入手机号码" v-model="num" />
    <br />
    <button @click="goYzm" ref="btnStyle">获取验证码</button>
    <br />
    <router-link to="/loginpass">账号密码登录</router-link>
  </section>
  <footer></footer>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref, watch, onMounted } from "vue";
import { useStore } from "vuex";
import { Toast } from "vant"; //引入轻提示
import { getYzm } from "@/Api";
let store = useStore();
let reg =
  /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
let router = useRouter();
let num = ref("");
//点击获取验证码事件
let goYzm = async () => {
  store.commit("setNum", num);
  if (!reg.test(num.value)) {
    Toast("请输入正确手机号");
    return false;
  }
  let { data } = await getYzm({ phone: num.value });
  if (data.code == "0") {
    router.push("/ymh");
  }
};
let btnStyle = ref(null);
//获取DOM节点用onMounted包裹
onMounted(() => {
  watch(num, () => {
    reg.test(num.value)
      ? (btnStyle.value.style.backgroundColor = "#C04374")
      : (btnStyle.value.style.backgroundColor = "#e2a0b9");
  });
});
</script>

<style scoped lang="less">
header {
  overflow: hidden;
  width: 100%;
  height: 2.48rem;
  box-sizing: border-box;
  background-image: url("https://product-ssl-qiniu.bmtrip.com/20191125_banner.png");
  background-size: cover;
  position: relative;
  padding: 0 1rem;
  span {
    font-size: 0.39rem;
    position: absolute;
    left: 0.3rem;
    top: 0.3rem;
    cursor: pointer;
  }
  h6 {
    font-size: 0.43rem;
    font-weight: 400;
    margin-top: 1rem;
  }
  p {
    font-size: 0.2rem;
    color: #666;
  }
}
section {
  box-sizing: border-box;
  padding: 0 1rem;
  font-size: 0.3rem;
  p {
    margin: 0.3rem 0;
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid rgb(226, 224, 224);
    color: rgb(64, 62, 62);
    margin: 0.2rem 0;
    font-size: 0.36rem;
    height: 0.8rem;
    outline-style: none;
  }
  button {
    width: 100%;
    border: none;
    background-color: #e2a0b9;
    height: 0.86rem;
    color: #fff;
    font-size: 0.3rem;
    margin: 0.3rem 0;
  }
  a {
    font-size: 0.2rem;
    color: #666;
  }
}
</style>
