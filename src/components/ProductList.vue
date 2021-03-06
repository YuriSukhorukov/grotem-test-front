<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>
          <div class="dropdown">
            <button name="showGroupButton" class="dropbtn text-first-upper" @click='onSelectGroupClick'>
              {{selectedGroup}} &emsp; &#9776;
            </button>
            <div class="text-first-upper dropdown-content" :style='dropdownContent'>
              <a class="text-first-upper" href="#" @click="selectGroup('Категория'); onSelectGroupClick()">
                ...
              </a>
              <a v-for="group in groups" class="text-first-upper" href="#" @click="selectGroup(group.name); onSelectGroupClick()">
                {{group.name}}
              </a>
            </div>
          </div> 
        </th>
      <th @click="sort('name')">
        <span v-if="currentSort===`name`">{{currentSortDirSymbol}}</span>
        &emsp;Товар
      </th>
      <th @click="sort('price')">
        <span v-if="currentSort===`price`">{{currentSortDirSymbol}}</span>
        &emsp;Цена
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in sortedProducts" class="data-tablee-cell">
      <td class='td-checkbox-product'>
        <input type="checkbox" value="product" v-model="product.selected">
      </td>
      <td class="text-first-upper">{{product.group}}</td>
      <td>{{product.name}}</td>
      <td>{{product.price}}</td>
    </tr>
  </tbody>
    <tfoot>
      <tr>
        <td colspan="4" class="btn-add-to-cart-wrapper">
          <button class="btn-add-to-cart" @click='addSelectedToCart'>
            В корзину
          </button>
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
      selectGroupMenuEnabled: false,
      currentSortDirSymbol: ''
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
      let preparedList = [];

      if(this.selectedGroup == this.selectGroupTitle)
        preparedList = this.all.filter((product) => {
          return !this.added.includes(product);
        });
      else
        preparedList = this.byGroup(this.selectedGroup).filter((product) => {
          return !this.added.includes(product);
        });

      return preparedList;
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
      let showMode = this.selectGroupMenuEnabled ? {display: 'block'} : {display: 'none'};
      return showMode;
    },
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
      this.currentSortDirSymbol = this.currentSortDir==='asc'?'▲':'▼';
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
        if(this.selectGroupMenuEnabled){
          this.selectGroupMenuEnabled = false;
        }
      }
    }
  }
};
</script>

<style scoped>
  table {
    vertical-align: center;
    border-spacing: 0;
    width: 50%;
    font-size: 13px;
    font-family: 'Nunito Sans', sans-serif;
    color: #5e6684;
    line-height: 1;
    font-weight: 400;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  }

  thead, 
  tfoot {
    background-color: #fafafa;
    color: #47A2D3;
    font-weight: bold;
  }

  td, 
  th {
    text-align: left;
    height: 30px;
    vertical-align: center;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
  }

  th {cursor:pointer;}

  td {border-right: 1px solid #f0f0f0;}

  tbody tr:hover {background-color: #ffffdd;}

  .td-checkbox-product {
    vertical-align: center;
    padding: 10px;
    text-align: left;
    width: 10px;
  }

  .btn-add-to-cart-wrapper {text-align: right;}

  .dropbtn, 
  .btn-add-to-cart {
    font-size: 13px;
    color: #47A2D3; 
    font-weight: bold;
    border-radius: 5px;
    background-color: white;
    border: 1px solid #dfdfdf;
  }

  .btn-add-to-cart:active {transform: scale(0.95, 0.95);}

  .btn-add-to-cart:hover {background-color: #f0f0f0;}

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropbtn:active {transform: scale(0.95, 0.95);}

  .dropdown-content {
      display: none;
      position: absolute;
      background-color: white;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
  }

  .dropdown-content a {
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      color: #47A2D3;
      font-weight: bold;
  }

  .dropdown-content a:hover {background-color: #f0f0f0;}

  .dropdown:hover .dropdown-content {display: block;}

  .dropdown:hover .dropbtn {background-color: #f0f0f0;}

  .text-first-upper {text-transform: lowercase;}

  .text-first-upper:first-letter {text-transform: uppercase;}
</style>