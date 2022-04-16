<script>
import { mapActions, mapState } from "vuex";
import { notification } from 'ant-design-vue';
export default {
  name: "OrderList",
  data() {
    return {
      isLoading: true,
      orders: [],
      stripe: {
        totalAmount: "",
        course_name: "",
        course_id:""
      },
    };
  },
  methods: {
    ...mapActions("order", ["fetchOrders"]),
    ...mapActions("order", ["removeOrder"]),
    ...mapActions("order", ["buyCourse"]),
    async updateOrders() {
      this.orders = await this.fetchOrders();
    },
    async sendOrder() {
      if(this.itemLength == 0) {
        notification.error({message: "Firstly Add Course"})
      }else{
        await this.buyCourse(this.stripe);

      }
    },
    async deleteOrder(id) {
      await this.removeOrder(id);
      this.updateOrders();
      notification.error({message: 'Order Deleted'})
    },
  },
  computed: {
    ...mapState("order", ["cart"]),
    ...mapState("order", ["itemLength"]),
  },
  async mounted() {
    await this.updateOrders();
    if(this.itemLength == 0 ){
      return this.isLoading = false
    }else {
    this.isLoading = false;
    this.stripe.totalAmount = this.cart;
    this.stripe.course_name = this.orders.map(
      (name) => name.course_id.course_name
    ).toString();
    this.stripe.course_id = this.orders.map(id => id.course_id._id)
      }
  },
};
</script>
<template>
  <div class="order-container">
    <h1>Order List</h1>
    <div v-if="isLoading">Please wait...</div>
    <div v-else class="order-detail">
      <div v-if="this.itemLength == 0" class="projects-list">
        <h1 class="no-order">No Order...</h1>
        </div>
      <div v-else class="projects-list">
        <div class="projects" v-for="order in orders" :key="order._id">
          <div class="img-container">
            <img :src="order.course_id.cover" alt="" />
          </div>
          <div class="projects-detail">
            <div class="course-name">
              <router-link :to="`/courses/${order.course_id._id}`">Course: {{order.course_id.course_name}}</router-link>
            </div>
            <div class="price">Price: {{ order.course_id.price }} $</div>
          </div>
          <span class="delete-order" @click="deleteOrder(order._id)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="icon-size"
              class="h-6 w-6 icon-color"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="payment-container">
        <div class="payment-detail">
          <span class="total-title">Total:</span>
          <span v-if="this.itemLength == 0" class="total">0$</span>
          <span v-else class="total">{{ cart }}$</span>

          <button @click="sendOrder">PAYMENT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.order-detail {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.payment-container {
  width: 400px;
}
.projects-list {
  width: 50em;
  height: 10em;
}
.projects {
  height: 10em;
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(0, 0, 0, 0.212);
  border-radius: 15px;
  margin-bottom: 10px;
}
.icon-color:hover {
  fill: gray;
}
img {
  object-fit: cover;
  width: 300px;
  height: 100%;
}
.projects-detail {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  width: 60%;
}
.delete-order {
  font-size: 30px;
  font-weight: 600;
}
.delete-order:hover {
  height: 50px;
}
.course-name {
  font-size: 1.5em;
  font-weight: 800;
}
.project-description {
  padding-top: 10px;
  font-size: 1.3em;
  font-weight: 500;
}
.payment-detail {
  display: flex;
  flex-direction: column;
  margin-left: 80px;
}
.total-title {
  font-size: 2.4em;
  font-weight: 500;
}
.total {
  font-size: 2em;
  display: flex;
  justify-content: center;
}
button {
  height: 3.3em;
  outline: none;
  border: none;
  border-radius: 5px;
  background: rgba(26, 26, 218, 0.548);
  margin-top: 20px;
}
button:hover {
  background: rgba(69, 69, 253, 0.548);
}
.price {
  font-size: 30px;
  font-weight: 800;
  margin-top: 20px;
}
.no-order{
  display: flex;
  justify-content: center;
}
</style>
