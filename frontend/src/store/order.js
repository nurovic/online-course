import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const actions = {
  FETCH_ORDERS: 'fetchOrders',
  ADD_ORDERS: 'addOrders',
  REMOVE_ORDER: 'removeOrder',
  BUY_COURSE: 'buyCourse',
  DELETE_ALL: 'deleteAll'
}

const mutations = {
  SET_ORDERS: "setOrders",
  ITEM_LENGTH: "itemLength"
}

const order = {
  namespaced: true,
  state: {
    cart: 0,
    itemLength: 0
  },
  mutations: {
    [mutations.SET_ORDERS](state, orders) {
      if(orders.length > 0){
        state.cart = orders.reduce((val, cur) => {
          return val + cur;
        });
      }
    },
    [mutations.ITEM_LENGTH](state, length) {
      state.itemLength = length
    }
  },
  actions: {
    async [actions.FETCH_ORDERS]({ commit }) {
      const orders = await axios.get("/order-cart");
      commit(mutations.ITEM_LENGTH, orders.data.length)
      commit(mutations.SET_ORDERS,orders.data.map((totalprice) => {
          return totalprice.course_id.price;
        })
      );
      return orders.data;
    },
    async [actions.ADD_ORDERS](_, id) {
      await axios.post("/order-cart", { course_id: id });
    },
    async [actions.REMOVE_ORDER](_, id) {
      await axios.delete(`/order-cart/${id}`);
    },
    async [actions.BUY_COURSE]({dispatch}, stripe) {
      await axios.post("/order-cart/buy-course", stripe)
      .then((res) => {
        const url = res.data.url;
        window.location.href = url;
      });
      dispatch('deleteAll')
    },
    async [actions.DELETE_ALL]() {
      await axios.post("/order-cart/delete-many")
    }
  },
  modules: {},
};

export default order;
