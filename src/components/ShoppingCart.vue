<template>
	<div id="shopping-cart">
		<div>{{totalPrice}}</div>
		<button @click='checkout' :disabled='checkoutDisabled'>Checkout</button>
		<table>
	    <thead>
	      <tr>
	        <th>Категория</th>
	        <th>Товар</th>
	        <th>Цена</th>
	        <th></th>
	      </tr>
	    </thead>
	    <tbody>
	      <tr v-for="product in added">
	        <td class="text-first-upper">{{product.group}}</td>
	        <td>{{product.name}}</td>
	        <td>{{product.price}}</td>
	        <button @click='removeProduct'>-</button>
	      </tr>
	    </tbody>
	  </table>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'ShoppingCart',
	
	computed: {
		...mapGetters('cart', [
			'added',
			'totalPrice'
		]),
		
		checkoutDisabled(){
			return this.added.length === 0;
		}
	},

	methods: {
		...mapActions('cart', [
			'removeProduct',
			'checkout'
		])
	}
};
</script>

<style>
	.text-first-upper {
    text-transform: lowercase;
  }
  .text-first-upper:first-letter {
    text-transform: uppercase;
  }
</style>