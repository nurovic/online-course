import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const order = {
  namespaced: true,
  state: {
    cart: 0,
    itemLength: 0
  },
  mutations: {
    setOrders(state, orders) {
      if(orders.length > 0){
        state.cart = orders.reduce((val, cur) => {
          return val + cur;
        });
      }
    },
    itemLength(state, length) {
      state.itemLength = length
    }
  },
  actions: {
    async fetchOrders({ commit }) {
      const orders = await axios.get("/order-cart");
      commit("itemLength", orders.data.length)
      commit("setOrders",orders.data.map((totalprice) => {
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
    async buyCourse({dispatch}, stripe) {
      await axios.post("/order-cart/buy-course", stripe)
      .then((res) => {
        const url = res.data.url;
        window.location.href = url;
      });
      dispatch('deleteAll')
    },
    async deleteAll(req,res) {
      await axios.post("/order-cart/delete-many")
    }
  },
  modules: {},
};

export default order;
