<template>
	<div id="shopping-cart">
		<div>{{totalPrice}}</div>
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
		])
	}
};
</script>

<style></style>