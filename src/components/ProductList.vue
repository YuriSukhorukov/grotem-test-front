<template>
  <table>
   <thead class="data-tablee-text">
     <tr>
     	<th></th>
       <th class="data-tablee-text">
         <div class="dropdown">
            <button name="showGroupButton" class="dropbtn text-first-upper" @click='onSelectGroupClick'>{{selectedGroup}}</button>
            <div class="text-first-upper dropdown-content" :style='dropdownContent'>
              <a class="text-first-upper" href="#" @click="selectGroup('Категория'); onSelectGroupClick()">...</a>
              <a class="text-first-upper" href="#" @click="selectGroup(group.name); onSelectGroupClick()" v-for="group in groups">{{group.name}}</a>
            </div>
          </div> 
        </th>
       <th class="data-tablee-text" style="color: #47A2D3; font-weight: bold" @click="sort('name')">Товар</th>
       <th class="data-tablee-text" style="color: #47A2D3; font-weight: bold" @click="sort('price')">Цена</th>
     </tr>
   </thead>
   <tbody>
     <tr v-for="product in sortedProducts" class="data-tablee-cell">
     	<td class='td-checkbox-product'><input type="checkbox" value="product" v-model="product.selected"></td>
       <td class="text-first-upper data-tablee-text">{{product.group}}</td>
       <td class="data-tablee-text">{{product.name}}</td>
       <td class="data-tablee-text">{{product.price}}</td>
     </tr>
   </tbody>
    <tfoot>
      <tr>
        <td colspan="4" class="btn-add-to-cart">
          <button @click='addSelectedToCart'>В корзину</button>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'ProductList',
	
  created () {
    this.loadWithGroup();
    this.loadGroups();
    
    document.addEventListener('click', this.onSelectGroupClickOutside)
	},

  data () {
    return {
      selectedGroup: 'Категория',
      currentSort:'name',
      currentSortDir:'asc',
      selectGroupTitle: 'Категория',
      selectGroupMenuEnabled: false
    }
  },

  computed: {
    ...mapGetters ('products', [
      'all',
      'groups',
      'byGroup'
    ]),

    ...mapGetters ('cart', [
      'added',
    ]),

    products () {
      if(this.selectedGroup == this.selectGroupTitle)
        return this.all.filter(product => !this.added.includes(product));
      else
        return this.byGroup(this.selectedGroup).filter(product => !this.added.includes(product));
    },

    sortedProducts () {
      return this.products.sort((a,b) => {
        let modifier = 1;    
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    },

    dropdownContent () {
      let obj = this.selectGroupMenuEnabled ? {display: 'block'} : {display: 'none'};
      return obj;
    }
  },

	methods: {
    ...mapActions('products', [
      'loadWithGroup',
      'loadGroups'
    ]),
    
    ...mapActions('cart', [
      'addProduct',
      'removeProduct'
    ]),

    sort (s) {
		  if(s === this.currentSort)
		    this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
		  this.currentSort = s;
		},
		
    selectGroup (group) {
      this.selectedGroup = group;
    },

    addSelectedToCart () {
		  this.products.forEach(product => {
		  	if(product.selected){ 
          product.selected = false;
          this.addProduct(product);
        }
      })
		},

    onSelectGroupClick () {
      this.selectGroupMenuEnabled = !this.selectGroupMenuEnabled;
    },

    onSelectGroupClickOutside (e) {
      if(e.target.name != 'showGroupButton'){
        if(this.selectGroupMenuEnabled)
          this.selectGroupMenuEnabled = false;
      }
    }
  }
};
</script>

<style scoped>
/*   #product-list {
    border: 1px solid #eaedef;
    border-radius: 5px;
    border-spacing: 0;
    width: 50%;
  } */

  .data-tablee-text {
    font-size: 13px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    color: #5e6684;

  }

  .data-tablee-text { line-height: 1; }

  .group-selecter {
    /* width: 100%; */
    /* background-color: yellow; */
  }
/*   td {
    border: 1px solid #eaedef;
  } */

	th {
	  cursor:pointer;
    /* text-align: left; */
	}

  td, th {
    padding: 5px;
    text-align: left;
    height: 30px;
    vertical-align: center;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
  }

  tbody tr:hover {
    background-color: #ffffdd;
  }

  td {
    border-right: 1px solid #f0f0f0;
  }

  thead, tfoot {
    background-color: #fafafa;
  }

  table {
    vertical-align: center;
    /* overflow: hidden; */
    /* border-collapse: collapse; */
    /* border: 1px solid #eaedef; */
    /* border-radius: 5px; */
    border-spacing: 0;
    width: 50%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  }

  .td-checkbox-product {
    vertical-align: center;
    padding: 10px;
    text-align: left;
    width: 10px;
  }

  .btn-add-to-cart {
    text-align: right;
  }

  .data-tablee-text {
    /* background-color: yellow; */
    /* border-bottom: 1px solid #eaedef; */
  }

	.dropbtn {
/* 	    background-color: #4CAF50;
	    color: white;
	    padding: 16px;
	    font-size: 16px;
	    border: none; */
	}

	.dropdown {
	    position: relative;
	    display: inline-block;
	}

	.dropdown-content {
	    display: none;
	    position: absolute;
	    /* background-color: #f1f1f1; */
      background-color: white;
	    min-width: 160px;
	    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	    z-index: 1;
	}

	.dropdown-content a {
      color: #5e6684;
	    padding: 12px 16px;
	    text-decoration: none;
	    display: block;
	}

	.dropdown-content a:hover {background-color: #f0f0f0;}

	.dropdown:hover .dropdown-content {display: block;}

	.dropdown:hover .dropbtn {background-color: #f0f0f0;}

  /* .dropdown:active .dropdown-content {display: none;} */

  .text-first-upper {
    text-transform: lowercase;
  }
  .text-first-upper:first-letter {
    text-transform: uppercase;
  }
</style>