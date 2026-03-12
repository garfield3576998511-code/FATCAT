import axios from "axios";
axios.defaults.baseURL = "/api/v3";

export default {
  //获取斑马豆
  getBean() {
    return axios.get("/user/score/history");
  },
  //优惠券
  getCoupon(params) {
    return axios.get("/m1/coupon/list", { params });
  },
  //我的收藏
  getCollects(params) {
    return axios.get("/product/collects", { params });
  },
  //我的订单
  getOrder() {
    return axios.get("/order/new/list");
  },
};
