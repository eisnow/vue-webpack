<template>
  <div>
    <ul>
      <li v-for="p in products">
        {{ p.title }} - {{ p.price | currency }}
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
  export default {
    computed: mapGetters({
      products: 'allProducts'
    }),
    methods: mapActions([
      'addToCart'
    ]),
    created () {
      this.$store.dispatch('getAllProducts')
    }
  }

</script>
