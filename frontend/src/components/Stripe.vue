<template>
  <div>
    <div
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      @loading="v => loading = v"
    />
    <button @click="submit">Pay now!</button>
  </div>
</template>

<script>
// import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
name:"Stripe",
  components: {
    // StripeCheckout,
  },
  data () {
    this.publishableKey = "pk_test_51KCKvAJHBwYldCds3ZGiGgEBayu1IxHfG6clIZ6SBtFoT5bxyz0S17j08tLqxApJvoZnbg0DyPkQ4EVmxNB0fKy4003dO7SCd4";
    return {
      loading: false,
      lineItems: [
        {
          price: '23', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],

    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>

<style scoped>

</style>