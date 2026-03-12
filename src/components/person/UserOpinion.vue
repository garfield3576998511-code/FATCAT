<template>
  <div class="wrap">
    <div class="context">
      <h3>用户反馈</h3>
      <p>
        <input
          type="text"
          placeholder="请写下您的宝贵意见或建议，我们会在第一时间给予回复！"
          v-model="opinion"
        />
      </p>
    </div>
    <div class="context">
      <h3>姓名</h3>
      <p>
        <input type="text" placeholder="请输入您的名字" v-model="userName" />
      </p>
    </div>
    <div class="context">
      <h3>手机号</h3>
      <p>
        <input type="text" v-model="value" />
      </p>
    </div>
    <button @click="sure" :style="{ backgroundColor: send }">发送</button>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { ref, watch } from "vue";
import { Toast } from "vant";
let store = useStore();
let value = ref("");
let opinion = ref("");
let userName = ref("");
let send = ref(null);
value.value = store.state.user.userName;
value.value = "15837365115";
watch(opinion, () => {
  if (opinion.value) {
    watch(userName, () => {
      if (userName.value) {
        if (value.value) {
          send.value = "#C14374";
        }
      }
    });
  }
});
let sure = () => {
  Toast("提交成功，感谢您的意见");
};
</script>
<style lang="less" scoped>
.wrap {
  margin-top: 0.88rem;
  width: 100%;
  height: 15.35rem;
  overflow: hidden;
  box-sizing: border-box;
  h3 {
    font-weight: normal;
    font-size: 0.28rem;
    color: #333333;
    font-weight: 500;
    margin-bottom: 0.24rem;
    margin-top: 0.2rem;
  }
  .context {
    width: 6.8rem;
    height: 1.68rem;
    margin: 0.3rem auto;
    p {
      position: relative;
      border-bottom: 0.02667rem solid #e1e1e1;
      input {
        border: 0;
        width: 100%;
        padding: 0.4rem 0;
        box-sizing: border-box;
        display: block;
        color: inherit;
        font: inherit;
      }
    }
  }
  button {
    width: 6.8rem;
    height: 0.88rem;
    background-color: #e2a0b9;
    color: #fff;
    border: 0;
    display: block;
    margin: 0.8rem auto;
  }
}
</style>
