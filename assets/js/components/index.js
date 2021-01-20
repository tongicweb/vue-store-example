
Vue.component('header-navbar', {
    template: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" :class="{'active':pageName === 'products'}" href="./index.html">Products({{countProducts}}) <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" :class="{'active':pageName === 'addProducts'}" href="./add.html">Add</a>
      </div>
    </div>
  </nav>`,
  computed: {
    
    pageName() {
       return store.state.pageName
    },
    countProducts(){
      return store.state.products.length
    }
  },
})