<template>
		<table>
	    <thead>
	    	<tr>
	    		<th style="color: #47A2D3; font-weight: bold">К оплате:</th>
	    		<th></th>
	    		<th style="color: #47A2D3; font-weight: bold; text-align: center">{{totalPrice}}</th>
	    	</tr>
	    </thead>
	    <tbody>
	      <tr v-for="product in added">
	        <td style="width: 80%">{{product.name}}</td>
	        <td>{{product.price}}</td>
	        <td class="btn-remove-product"><button @click='removeProduct'><span style="color: #E24646">&#x2716;</span></button></td>
	      </tr>
	    </tbody>
	    <tfoot>
      	<tr>
      		<td style="width: 80%">
        	</td>
        	<td class="total-price">
        	</td>
        	<td>
        		<button class="btn-checkout" @click='checkout' :disabled='checkoutDisabled'>Заказать</button>
        	</td>
      	</tr>
    	</tfoot>
	  </table>
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

<style scoped>
	table {
		vertical-align: center;
		width: 25%;
		font-size: 13px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    color: #5e6684;
    line-height: 1;
    /* border: 1px solid #eaedef; */
    /* border-radius: 5px; */
    border-spacing: 0;
    width: 30%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	}
	td, th {
    padding: 5px;
    text-align: left;
    height: 30px;
    vertical-align: center;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
  }

  thead, tfoot {
    background-color: #fafafa;
  }

  tbody tr:hover {
  	background-color: #ffffdd;
  }

  tbody td {
    border-right: 1px solid #f0f0f0;
  }

  .btn-remove-product {
  	text-align: center;
  }

  .btn-checkout {
  	text-align: center;
  }

  .btn-checkout {
      font-size: 13px;
      color: #47A2D3; 
      font-weight: bold;

      border-radius: 5px;
      background-color: white;
      border: 1px solid #dfdfdf;
  }

  .btn-checkout:hover {
    background-color: #f0f0f0;
  }

  .btn-checkout:active {
    transform: scale(0.95, 0.95);
  }

	.text-first-upper {
    text-transform: lowercase;
  }
  .text-first-upper:first-letter {
    text-transform: uppercase;
  }

  .total-price {
    text-align: left;
  }
</style>