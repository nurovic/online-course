<script>
import { mapActions, mapState } from "vuex";
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
      await this.buyCourse(this.stripe);
    },
    async deleteOrder(id) {
      await this.removeOrder(id);
      this.updateOrders();
    },
  },
  computed: {
    ...mapState("order", ["cart"]),
  },
  async mounted() {
    await this.updateOrders();
    this.isLoading = false;
    this.stripe.totalAmount = this.cart;
    this.stripe.course_name = this.orders.map(
      (name) => name.course_id.course_name
    ).toString();
    console.log("seese", this.orders.map(id => id.course_id._id));
    this.stripe.course_id = this.orders.map(id => id.course_id._id)
  },
};
</script>
<template>
  <div class="order-container">
    <h1>Order List</h1>
    <div v-if="isLoading">Please wait...</div>
    <div v-else class="order-detail">
      <div class="projects-list">
        <div class="projects" v-for="order in orders" :key="order._id">
          <div class="img-container">
            <img :src="order.course_id.cover" alt="" />
          </div>
          <div class="projects-detail">
            <div class="course-name">{{ order.course_id.course_name }}</div>
            <div class="price">{{ order.course_id.price }} $</div>
          </div>
          <span class="delete-order" @click="deleteOrder(order._id)">X</span>
        </div>
      </div>
      <div class="payment-container">
        <div class="payment-detail">
          <span class="total-title">Total:</span>
          <span class="total">{{ cart }}$</span>

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
  height: 35px;
  border: 2px solid rgba(0, 0, 0, 0.281);
  border-radius: 50%;
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
.price {
  font-size: 30px;
  font-weight: 800;
  margin-top: 20px;
}
</style>
