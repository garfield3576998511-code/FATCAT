<template>
  <header>
    <span class="iconfont icon-x" @click="$router.back()"></span>
    <h6>手机号登录</h6>
    <p>未注册手机验证后即完成注册</p>
  </header>
  <section>
    <p>手机号</p>
    <input type="number" placeholder="请输入手机号码" v-model="phoneNum" />
    <br />
    <button ref="btnStyle" @click="goYzm">获取验证码</button>
    <br />
    <router-link to="/loginpass">账号密码登录</router-link>
  </section>
  <footer>
    <p>
      登录即代表同意巴马旅游 <router-link to="/agreement">用户协议</router-link>
    </p>
  </footer>
</template>
<script setup>
import { useRouter } from "vue-router";
import { yzmLogin } from "@/Api";
import { onMounted, watch, ref } from "vue";
import { useStore } from "vuex";
import { getYzm } from "@/Api";
import { Toast } from "vant";

let store = useStore();
let router = useRouter();
let btnStyle = ref("");
let phoneNum = ref("");
let reg =
  /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
onMounted(() => {
  watch(phoneNum, () => {
    reg.test(phoneNum.value)
      ? (btnStyle.value.style.backgroundColor = "#C04374")
      : (btnStyle.value.style.backgroundColor = "#e2a0b9");
  });
});
//点击获取验证码事件
let goYzm = async () => {
  store.commit("setNum", phoneNum);
  if (!reg.test(phoneNum.value)) {
    Toast("请输入正确手机号");
    return false;
  }
  let { data } = await getYzm({ phone: phoneNum.value });
  console.log(data);
  if (data.code == "0") {
    router.push("/ymh");
  } else {
    Toast("发送失败");
  }
};
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
    text-decoration: none;
  }
}
footer {
  position: absolute;
  bottom: 0.6rem;
  font-size: 0.28rem;
  color: #666;
  line-height: 0.6rem;
  width: 100%;
  text-align: center;
  a {
    text-decoration: underline;
    color: #000;
    font-size: 0.26rem;
  }
}
</style>
