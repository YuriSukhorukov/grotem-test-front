<template>
	<div>
	    

	    <div>{{totalPrice}}</div>


	    <button @click='addSelectedToCart'>Add selected in Cart</button>

	    
	    <div class="dropdown">
		  <button class="dropbtn">Категории</button>
		  <div class="dropdown-content">
		  	<a href="#" @click="selectGroup('')">-</a>
		  	<a href="#" @click="selectGroup(group.name)" v-for="group in groups">{{group.name}}</a>
		  </div>
		</div>


	    <table>
	    <thead>
	      <tr>
	      	<th></th>
	        <th @click="sort('group')">Категория</th>
	        <th @click="sort('name')">Товар</th>
	        <th @click="sort('price')">Цена</th>
	      </tr>
	    </thead>
	    <tbody>
	      <tr v-for="product in sortedProducts">
	      	<input type="checkbox" value="product" v-model="product.selected">
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
	name: 'ProductList',
	created() {
		this.loadWithParent()
	    this.loadParents()
	},
	methods: {
	    ...mapActions('products', [
	      'loadWithParent',
	      'loadParents'
	    ]),
	    ...mapActions('cart', [
	      'addProduct',
	      'removeProduct'
	    ]),
	    sort(s) {
		    if(s === this.currentSort) {
		      this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
		    }
		    this.currentSort = s;
		  },
		  selectGroup(group){
		  	this.selectedGroup = group;
		  },
		  addSelectedToCart(){
		  	this.products.forEach(product => {
		  		if(product.selected) this.addProduct(product)
		  	})
		  }
	  },
	  data() {
	    return {
	      selectedGroup: '',
	      currentSort:'name',
  		  currentSortDir:'asc',
	    }
	  },
	computed :{
		...mapGetters('products', [
	      'all',
	      'groups',
	      'byGroup'
	    ]),
	    ...mapGetters('cart', [
	      'added',
	      'totalPrice'
	    ]),

	    products(){
	    	if(this.selectedGroup == '')
	      		return this.all.filter(val => !this.added.includes(val))
	      	else
	      		return this.byGroup(this.selectedGroup).filter(val => !this.added.includes(val))
	    },

	    inCart(){
	      return this.added
	    },

	    sortedProducts() {
	    	return this.products.sort((a,b) => {
		      let modifier = 1;
		      if(this.currentSortDir === 'desc') modifier = -1;
		      if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
		      if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
		      return 0;
		    });
  		}
	}
};
</script>

<style scoped>
	td, th {
	  padding: 5px;
	}

	th {
	  cursor:pointer;
	}

	.dropbtn {
	    background-color: #4CAF50;
	    color: white;
	    padding: 16px;
	    font-size: 16px;
	    border: none;
	}

	.dropdown {
	    position: relative;
	    display: inline-block;
	}

	.dropdown-content {
	    display: none;
	    position: absolute;
	    background-color: #f1f1f1;
	    min-width: 160px;
	    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	    z-index: 1;
	}

	.dropdown-content a {
	    color: black;
	    padding: 12px 16px;
	    text-decoration: none;
	    display: block;
	}

	.dropdown-content a:hover {background-color: #ddd;}

	.dropdown:hover .dropdown-content {display: block;}

	.dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>