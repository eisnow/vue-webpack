<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="p in products">
        {{ p.title }} - {{ p.price | currency }} x 
        <input type="number" v-model="p.quantity" @input="changeQuantity(p)">
      </li>
    </ul>
    <ul>
      <li v-for="p in products">
        {{ p.title }} - {{ p.price | currency }} x {{p.quantity}}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
    <router-link to="/products"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>Back to Products</router-link>
    <router-link to="/"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>Home</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { GETTERS, ACTIONS } from '../store/types'
export default {
  computed: {
    ...mapGetters({
      products: GETTERS.cartProducts,
      checkoutStatus: GETTERS.checkoutStatus
    }),
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: {
    checkout (products) {
      this.$store.dispatch(ACTIONS.checkout, products)
    },
    changeQuantity (p) {
      this.$store.dispatch(ACTIONS.changeQuantity, p)
    }
  }
}
</script>
