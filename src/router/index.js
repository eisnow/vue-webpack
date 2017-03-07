import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Hello from 'components/Hello'
import ProductList from 'components/ProductList'
import Cart from 'components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: Hello
        },
        {
          path: 'products',
          component: ProductList
        },
        {
          path: 'cart',
          component: Cart
        }
      ]
    }
  ]
})
