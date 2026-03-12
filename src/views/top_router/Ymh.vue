<template>
  <header>
    <span class="iconfont icon-xiangzuo" @click="$router.back()"></span>

    <h6>请输入验证码</h6>
  </header>
  <section>
    <div>
      <p>已发送验证码至{{ store.state.num }}</p>
      <!-- 密码输入框 -->
      <van-password-input
        :value="value"
        :length="4"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
        :mask="false"
      />
      <!-- 数字键盘 -->
      <van-number-keyboard
        v-model="value"
        :show="showKeyboard"
        @blur="showKeyboard = false"
      />
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, watch } from "vue";
import { yzmLogin } from "@/Api";
import { Toast } from "vant";
let router = useRouter();
let store = useStore();
let value = ref("");
let showKeyboard = ref(true);
watch(value, async () => {
  if (value.value.length == 4) {
    let res = yzmLogin({ code: value.value, phone: store.state.num });
    console.log((await res).data.code);
    if ((await res).data.code == 0) {
      Toast("感谢您注册成为巴马旅游会员！");
      localStorage.setItem("token", "okokok以登录");
      setTimeout(() => {
        router.push("/person");
      }, 1000);
    } else {
      Toast("验证码有误！");
    }
  }
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
    text-decoration: none;
  }
}
</style>
