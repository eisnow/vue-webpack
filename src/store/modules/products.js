import shop from '../../apis/shop'
import { GETTERS, ACTIONS, MUTATIONS } from '../types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  [GETTERS.allProducts]: state => state.all
}

// actions
const actions = {
  [ACTIONS.getAllProducts] ({ commit }) {
    shop.getProducts().then(products => {
      commit(MUTATIONS.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  [MUTATIONS.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },

  [MUTATIONS.ADD_TO_CART] (state, { id }) {
    changeInventory(state.all.find(p => p.id === id), 1)
  },

  [MUTATIONS.CHANGE_INVENTORY] (state, { id, quantity }) {
    changeInventory(state.all.find(p => p.id === id), quantity)
  }
}

function changeInventory (product, quantity) {
  if (product) {
    product.inventory -= quantity
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
