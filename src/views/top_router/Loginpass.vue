<template>
  <header>
    <span class="iconfont icon-xiangzuo" @click="$router.back()"></span>

    <router-link to="/reg" class="reg">注册</router-link>
    <h6>账号密码登录</h6>
    <p>未注册手机验证后即完成注册</p>
  </header>
  <section>
    <p>手机号</p>
    <input type="number" placeholder="请输入手机号码" />
    <br />
    <p>密码</p>
    <input type="password" placeholder="请输入手机号码" />
    <br />
    <button>获取验证码</button>
    <br />
    <router-link to="/login">手机号登录</router-link>
  </section>
  <footer></footer>
</template>
<script setup>
import { useRouter } from "vue-router";
let router = useRouter();
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
.reg {
  position: absolute;
  font-size: 0.36rem;
  text-decoration: none;
  color: #333;
  right: 0.6rem;
  top: 0.3rem;
}
</style>
