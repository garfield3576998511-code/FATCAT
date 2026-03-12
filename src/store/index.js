import { createStore } from "vuex";
import { getPageId } from "@/Api";

export default createStore({
  state: {
    nav: [],
    word: localStorage.getItem("word"),
    num: "",
    itarListData: [],
  },
  getters: {},
  mutations: {
    setNav(state, a) {
      state.nav = a;
    },
    setWord(state, a) {
      state.word = a;
    },
    setNum(state, a) {
      state.num = a;
    },
    setItar(state, a) {
      state.itarListData = a;
    },
  },
  //公共库处理数据
  actions: {
    async setNav(context) {
      let { data } = await getPageId();
      context.commit("setNav", data.data.nav);
    },
  },
  modules: {},
});
