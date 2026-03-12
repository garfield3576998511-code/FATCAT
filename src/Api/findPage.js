import axios from "axios";
axios.defaults.baseURL = "/api/v3";

//发现页
export let findData = (params) => {
  return axios.get("/article/list", { params });
};
//发现详情
export let findDetailUrl = (id) => {
  return axios.get("/article/detail", { params: { id } });
};
