import axios from "axios";
axios.defaults.baseURL = "/api/v3";
//获取页面id
export let getPageId = () => {
  return axios.get("/m1/cms/nav");
};
//获取手机验证码
export let getYzm = (params) => {
  return axios.get("/m1/user/send_code", { params });
};
//验证码登录
export let yzmLogin = (params) => {
  return axios.post("/login/register", params);
};
//首页数据
export let homeData = (x) => {
  return axios.get("/m1/cms/page/detail", { params: { pageId: x } });
};
//首页列表数据
export let getListData = (params) => {
  return axios.post("/m1/product/list/by_ids", params);
};
//获取商品详情
export let getDataDetail = (id) => {
  return axios.get("/m1/product/detail", { params: { product_id: id } });
};
//选择团期
export let cooseData = (id) => {
  return axios.get("/product/combo/date", { params: { product_id: id } });
};
//立即预定
export let reserveNow = (id) => {
  return axios.get("/product/combo/date", { params: { product_id: id } });
};
//提交预定
export let Tijiao = (params) => {
  return axios.get("/product/new/trip", { params });
};
// 私人订制数据
export let getTailor = () => {
  return axios.get("/m1/cms/customize");
};
// 私人订制  定制师详情
export let getMaster = (params) => {
  return axios.get("/m1/get_dzs", params);
};
// 通过ids 获取数据
export let getList = (params) => {
  return axios.post("/m1/product/list/by_ids", params);
};
