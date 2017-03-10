import shop from '../../apis/shop'
import { GETTERS, ACTIONS, MUTATIONS } from '../types'

// initial state
// shape: [{ id, quantity }]
const state = {
  added: [],
  checkoutStatus: null
}

// getters
const getters = {
  [GETTERS.checkoutStatus]: state => state.checkoutStatus,
  [GETTERS.cartProducts]: (state, gettes, rootState) => {
    return state.added.map(({ id, quantity }) => {
      const product = rootState.products.all.find(p => p.id === id)
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity
      }
    })
  }
}

// actions
const actions = {
  [ACTIONS.addToCart] ({ commit }, product) {
    if (product.inventory > 0) {
      commit(MUTATIONS.ADD_TO_CART, {
        id: product.id
      })
    }
  },
  [ACTIONS.checkout] ({ commit, state, rootState }, products) {
    const savedCartItems = [...state.added]
    commit(MUTATIONS.CHECKOUT_REQUEST)
    shop.buyProducts(
      products,
      () => commit(MUTATIONS.CHECKOUT_SUCCESS),
      () => commit(MUTATIONS.CHECKOUT_FAILURE, { savedCartItems })
    )
  },
  [ACTIONS.changeQuantity] ({ commit, state }, { id, quantity }) {
    const record = state.added.find(p => p.id === id)
    if (record) {
      let change = quantity - record.quantity
      commit(MUTATIONS.CHANGE_QUANTITY_IN_CART, {id: record.id, quantity: change})
      commit(MUTATIONS.CHANGE_INVENTORY, {id: record.id, quantity: change})
    }
  }
}

// mutations
const mutations = {
  [MUTATIONS.ADD_TO_CART] (state, { id }) {
    state.lastCheckout = null
    const record = state.added.find(p => p.id === id)
    if (!record) {
      state.added.push({
        id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },
  [MUTATIONS.CHANGE_QUANTITY_IN_CART] (state, { id, quantity }) {
    const record = state.added.find(p => p.id === id)
    if (record) {
      record.quantity += quantity
    }
  },

  [MUTATIONS.CHECKOUT_REQUEST] (state) {
    // clear cart
    state.added = []
    state.checkoutStatus = null
  },

  [MUTATIONS.CHECKOUT_SUCCESS] (state) {
    state.checkoutStatus = 'successful'
  },

  [MUTATIONS.CHECKOUT_FAILURE] (state, { savedCartItems }) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems
    state.checkoutStatus = 'failed'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
