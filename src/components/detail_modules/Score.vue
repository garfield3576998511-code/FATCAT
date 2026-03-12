<template>
  <div class="wapp">
    <div class="top">
      <span>评分：5.0</span>
      <a href="">查看全部<span class="iconfont icon-xiangyou1"></span></a>
    </div>
    <div class="bottom">
      <div class="tt">
        <span>t***7</span>
        <span>2021-09-18</span>
      </div>
      <div class="bb">
        <li v-for="v in data" :key="v">
          {{ v }}：
          <span class="iconfont icon-xingxing" v-for="i in 5"></span>
        </li>
      </div>
      <p>
        房间非常有档次，屋内的配套也相当高级，两天都给了零食，全部在冰箱里，都可以免费吃，然后就是采摘，一筐9个梨，是免费的，工作小姐姐带着去，还多给了一个，非常贴心，出门要叫高尔夫车，按零键就可以，一般两三分钟就到了，挺方便的，就是晚上九点左右叫车有点慢，其他时间都非常快，之前看网评说工作人员态度不好，完全没有，工作人员非常友好耐心，我的浴巾忘在了酒店，给我打电话说给我免费邮寄，非常暖心。Discovery建议选择高空网针，大概需要40分钟，悬崖泳池随时可以去，不限时间的，孩子喜欢，总之，非常赞的酒店，去庾村步行也很方便。
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
let data = ref(["行程安排", "餐饮住宿", "导游服务", "旅游交通"]);
</script>

<style scoped lang="less">
.wapp {
  font-size: 0.32rem;
  width: 100%;
  height: 3.12rem;
  margin: 0.2rem 0;
  background-color: #fff;
  .top {
    height: 0.74rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.3rem;
    span {
      font-size: 0.3rem;
      color: #f90;
    }
    a {
      span {
        color: #333;
        font-size: 0.26rem;
      }
      font-size: 0.26rem;
      color: #333;
    }
  }
  .bottom {
    padding: 0 0.3rem;
    height: 2.38rem;
    box-sizing: border-box;
    list-style: none;
    .tt {
      display: flex;
      justify-content: space-between;
      font-size: 0.28rem;
      color: #777;
      line-height: 0.6rem;
    }
    .bb {
      height: 1rem;
      box-sizing: border-box;
      font-size: 0.2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 2.6rem;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        box-sizing: border-box;
        .iconfont {
          font-size: 0.24rem;
          color: #f90;
        }
      }
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.24rem;
      color: #666;
      line-height: 0.6rem;
      box-sizing: border-box;
      padding-left: 0.26rem;
    }
  }
}
</style>
