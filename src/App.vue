<template>
  <div id="app">
    <ProductList/>
    <ShoppingCart/>
  </div>
</template>

<script>
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

export default {
  name: 'app',
  components: {
    ShoppingCart,
    ProductList
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
