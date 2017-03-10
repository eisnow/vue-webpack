<template>
  <div>
    <h1>{{testMessage}}</h1>
    <ul>
      <li v-for="p in products">
        {{ p.title }} - {{ p.price | currency }} - {{p.inventory}}
        <br>
        <button :disabled="!p.inventory" @click="addToCart(p)">
        Add to cart
      </button>
      </li>
    </ul>
    <router-link to="/cart"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>Goto Cart</router-link>
    <router-link to="/"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>Home</router-link>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { GETTERS, ACTIONS } from '../store/types'

  export default {
    computed: {
      ...mapGetters({
        products: GETTERS.allProducts
      }),
      testMessage: () => 'Now is ' + Date.now()
    },
    methods: mapActions([
      ACTIONS.addToCart
    ]),
    created () {
      this.$store.dispatch(ACTIONS.getAllProducts)
    }
  }

</script>
