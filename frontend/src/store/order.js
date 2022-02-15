import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const order = {
  namespaced: true,
  state: {
    cart: 0,
  },
  mutations: {
    setOrders(state, orders) {
      state.cart = orders.reduce((val, cur) => {
        return val + cur;
      });
    },
  },
  actions: {
    async fetchOrders({ commit }) {
      const orders = await axios.get("/order-cart");
      commit(
        "setOrders",
        orders.data.map((totalprice) => {
          return totalprice.course_id.price;
        })
      );
      return orders.data;
    },
    async addOrders(_, id) {
      await axios.post("/order-cart", { course_id: id });
    },
    async removeOrder(_, id) {
      await axios.delete(`/order-cart/${id}`);
    },
    async buyCourse(_, stripe) {
      await axios.post("/order-cart/buy-course", stripe)
      .then((res) => {
        const url = res.data.url;
        window.location.href = url;
      });
    },
  },
  modules: {},
};

export default order;
