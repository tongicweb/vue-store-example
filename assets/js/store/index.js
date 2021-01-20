const store = new Vuex.Store({
  state: {
    pageName: "",
    products: [{
      name: "Iphone",
      category: "mobile"
    }],
  },
  plugins: [createPersistedState()],
  mutations: {
    setPageName: function (state, payload) {
      state.pageName = payload
    },
    addProduct: function (state, payload) {
      state.products = [...state.products, {
        name: payload.firstName,
        category: payload.category
      }];
    },
    removeProduct: function (state, payload) {
      console.log(payload);
      state.products = state.products.filter((value, index, arr) => index !== payload)
    },
    clearProducts: function (state, payload) {
      state.products = [];
    }
  }
})

