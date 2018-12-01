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
	      </tr>
	    </thead>
	    <tbody>
	      <tr v-for="product in added">
	        <td>{{product.group}}</td>
	        <td>{{product.name}}</td>
	        <td>{{product.price}}</td>
	      </tr>
	    </tbody>
	  </table>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'ShoppingCart',
	computed: {
		...mapGetters('cart', [
			'added',
			'totalPrice'
		]),
		checkoutDisabled(){
			return this.added.length == 0
		}
	},
	methods: {
		...mapActions('cart', [
			'checkout'
		])
	}
};
</script>

<style></style>