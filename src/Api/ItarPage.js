import axios from "axios";
axios.defaults.baseURL = "/api/v3";
//目的地数据
export let getItarData = () => {
  return axios.get("/m1/area/group");
};
//二级页数据
export let twoPage = (id) => {
  return axios.get("/m1/product/list", {
    params: {
      district_id: [id],
      page: 1,
      order_by: 5,
      type: 7,
    },
  });
};
//二级页面类型
export let getTypeData = (pid) => {
  return axios.get("/m1/product/list/type", {
    params: { district_id: pid },
  });
};
//二级页面筛选
export let getFilterData = (rid, type) => {
  return axios.get("/m1/page/product/filter", {
    params: { district_id: rid, type },
  });
};
