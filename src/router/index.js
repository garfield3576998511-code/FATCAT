import { createRouter, createWebHashHistory } from "vue-router";
import { Toast } from "vant";
const routes = [
  {
    path: "/submitorder", //提交订单
    component: () => import("@/views/top_router/SubmitOrder"),
  },
  {
    path: "/trip/:product_id/:date/:combo_key", //跳转至行程
    component: () => import("@/views/top_router/Trip"),
  },
  {
    path: "/coosedate/:id", //选择团期
    component: () => import("@/views/top_router/CooseDate"),
  },
  {
    path: "/finddetail/:id", //找到页面详情
    component: () => import("@/views/top_router/FindDetail.vue"),
  },
  {
    path: "/personpage/:title", //我的模块上部
    component: () => import("@/views/top_router/PersonPage.vue"),
  },
  {
    path: "/backtell", //反馈
    component: () => import("@/views/top_router/BackTell"),
  },
  {
    path: "/order", //反馈
    component: () => import("@/views/top_router/Order"),
  },
  {
    path: "/setting", //反馈
    component: () => import("@/views/top_router/Setting"),
  },
  {
    path: "/detail/:id", //商品详情
    component: () => import("@/views/top_router/Detail"),
  },
  {
    path: "/cityitem/:id/:title", //城市详情
    component: () => import("@/views/top_router/CityItem"),
  },
  {
    path: "/agreement", //用户协议
    component: () => import("@/views/top_router/Agreement"),
  },
  {
    path: "/ymh", //验证码
    component: () => import("@/views/top_router/Ymh"),
  },
  {
    path: "/login", //手机号登录
    component: () => import("@/views/top_router/Login"),
  },
  {
    path: "/loginpass", //账号密码登录
    component: () => import("@/views/top_router/Loginpass"),
  },
  {
    path: "/reg", //注册
    component: () => import("@/views/top_router/Reg"),
  },
  {
    path: "/", //首页
    component: () => import("@/views/top_router/Index"),
    children: [
      {
        path: "", //首页
        component: () => import("@/views/Home/Home"),
      },
      {
        path: "itar", //目的地
        component: () => import("@/views/Home/Itar"),
      },
      {
        path: "find", //找到
        component: () => import("@/views/Home/Find"),
      },
      {
        path: "person", //我的
        component: () => import("@/views/Home/Person"),
        meta: { needLogin: true },
      },
      {
        path: "travel", //旅游
        component: () => import("@/views/Home/Travel"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  // to from  $route
  // console.log(from, to);
  // next(); //放行

  if (to.meta.needLogin) {
    // 需要登录才能访问的
    if (localStorage.getItem("token")) {
      // 有token 说明是登录状态
      next();
    } else {
      // 拦截至登录页
      Toast("您还未登录!\n请先登录\n2秒");
      let second = 2;
      const timer = setInterval(() => {
        second--;
        if (second) {
          Toast(`您还未登录!\n请先登录\n  ${second} 秒`);
        } else {
          clearInterval(timer);
          Toast.clear();
          next("/login?from=" + encodeURIComponent(to.fullPath));
        }
      }, 1000);
    }
  } else {
    // 不需要登录验证的
    next();
  }
});
export default router;
