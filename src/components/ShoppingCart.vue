<template>
	<div id="shopping-cart">
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
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
	name: 'ShoppingCart',
	computed: {
		...mapGetters('cart', [
			'added'
		])
	}
};
</script>

<style></style>