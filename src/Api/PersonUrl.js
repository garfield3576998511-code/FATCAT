import axios from "axios";
axios.defaults.baseURL = "/api/v3";
//获取个人信息
export let getPersonUrl = () => {
  return axios.get("/user/infos");
};
//获取我的斑马豆
export let getMyMoney = () => {
  return axios.get("/user/score/history");
};
//添加取消收藏
export let alterShouc = (params) => {
  return axios.post("/product/collect", params);
};
//查看我的收藏
export let lookShouc = (x) => {
  return axios.get("/product/collects", { params: { type: 0 } });
};
