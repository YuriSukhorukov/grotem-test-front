(function(t){function e(e){for(var n,u,s=e[0],i=e[1],a=e[2],d=0,p=[];d<s.length;d++)u=s[d],o[u]&&p.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,a||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(n=!1)}n&&(c.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},o={app:0},c=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var l=i;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("ProductList"),r("ShoppingCart")],1)},c=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th"),r("th",[r("div",{staticClass:"dropdown"},[r("button",{staticClass:"dropbtn text-first-upper",attrs:{name:"showGroupButton"},on:{click:t.onSelectGroupClick}},[t._v("\n            "+t._s(t.selectedGroup)+"   ☰\n          ")]),r("div",{staticClass:"text-first-upper dropdown-content",style:t.dropdownContent},[r("a",{staticClass:"text-first-upper",attrs:{href:"#"},on:{click:function(e){t.selectGroup("Категория"),t.onSelectGroupClick()}}},[t._v("\n              ...\n            ")]),t._l(t.groups,function(e){return r("a",{staticClass:"text-first-upper",attrs:{href:"#"},on:{click:function(r){t.selectGroup(e.name),t.onSelectGroupClick()}}},[t._v("\n              "+t._s(e.name)+"\n            ")])})],2)])]),r("th",{on:{click:function(e){t.sort("name")}}},["name"===t.currentSort?r("span",[t._v(t._s(t.currentSortDirSymbol))]):t._e(),t._v("\n       Товар\n    ")]),r("th",{on:{click:function(e){t.sort("price")}}},["price"===t.currentSort?r("span",[t._v(t._s(t.currentSortDirSymbol))]):t._e(),t._v("\n       Цена\n    ")])])]),r("tbody",t._l(t.sortedProducts,function(e){return r("tr",{staticClass:"data-tablee-cell"},[r("td",{staticClass:"td-checkbox-product"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"product.selected"}],attrs:{type:"checkbox",value:"product"},domProps:{checked:Array.isArray(e.selected)?t._i(e.selected,"product")>-1:e.selected},on:{change:function(r){var n=e.selected,o=r.target,c=!!o.checked;if(Array.isArray(n)){var u="product",s=t._i(n,u);o.checked?s<0&&t.$set(e,"selected",n.concat([u])):s>-1&&t.$set(e,"selected",n.slice(0,s).concat(n.slice(s+1)))}else t.$set(e,"selected",c)}}})]),r("td",{staticClass:"text-first-upper"},[t._v(t._s(e.group))]),r("td",[t._v(t._s(e.name))]),r("td",[t._v(t._s(e.price))])])})),r("tfoot",[r("tr",[r("td",{staticClass:"btn-add-to-cart-wrapper",attrs:{colspan:"4"}},[r("button",{staticClass:"btn-add-to-cart",on:{click:t.addSelectedToCart}},[t._v("\n          В корзину\n        ")])])])])])},s=[],i=(r("7f7f"),r("ac6a"),r("55dd"),r("6762"),r("2fdb"),r("be94")),a=r("2f62"),l={name:"ProductList",created:function(){this.loadWithGroup(),this.loadGroups(),document.addEventListener("click",this.onSelectGroupClickOutside)},data:function(){return{selectedGroup:"Категория",currentSort:"name",currentSortDir:"asc",selectGroupTitle:"Категория",selectGroupMenuEnabled:!1,currentSortDirSymbol:""}},computed:Object(i["a"])({},Object(a["c"])("products",["all","groups","byGroup"]),Object(a["c"])("cart",["added"]),{products:function(){var t=this,e=[];return e=this.selectedGroup==this.selectGroupTitle?this.all.filter(function(e){return!t.added.includes(e)}):this.byGroup(this.selectedGroup).filter(function(e){return!t.added.includes(e)}),e},sortedProducts:function(){var t=this;return this.products.sort(function(e,r){var n=1;return"desc"===t.currentSortDir&&(n=-1),e[t.currentSort]<r[t.currentSort]?-1*n:e[t.currentSort]>r[t.currentSort]?1*n:0})},dropdownContent:function(){var t=this.selectGroupMenuEnabled?{display:"block"}:{display:"none"};return t}}),methods:Object(i["a"])({},Object(a["b"])("products",["loadWithGroup","loadGroups"]),Object(a["b"])("cart",["addProduct","removeProduct"]),{sort:function(t){t===this.currentSort&&(this.currentSortDir="asc"===this.currentSortDir?"desc":"asc"),this.currentSort=t,this.currentSortDirSymbol="asc"===this.currentSortDir?"▲":"▼"},selectGroup:function(t){this.selectedGroup=t},addSelectedToCart:function(){var t=this;this.products.forEach(function(e){e.selected&&(e.selected=!1,t.addProduct(e))})},onSelectGroupClick:function(){this.selectGroupMenuEnabled=!this.selectGroupMenuEnabled},onSelectGroupClickOutside:function(t){"showGroupButton"!=t.target.name&&this.selectGroupMenuEnabled&&(this.selectGroupMenuEnabled=!1)}})},d=l,p=(r("621f"),r("2877")),f=Object(p["a"])(d,u,s,!1,null,"36bb4719",null);f.options.__file="ProductList.vue";var h=f.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",{staticClass:"t-align-left"},[t._v("К оплате:")]),r("th"),r("th",{staticClass:"t-align-right"},[t._v(t._s(t.totalPrice))])])]),r("tbody",t._l(t.added,function(e){return r("tr",[r("td",[t._v(t._s(e.name))]),r("td",{staticClass:"t-align-center"},[t._v(t._s(e.price))]),r("td",{staticClass:"btn-remove-product-wrapper"},[r("button",{on:{click:function(r){t.removeProduct(e)}}},[r("span",[t._v("✖")])])])])})),r("tfoot",[r("tr",[r("td",{staticClass:"t-align-right",attrs:{colspan:"4"}},[r("button",{staticClass:"btn-checkout",attrs:{disabled:t.isCheckoutDisabled},on:{click:t.checkout}},[t._v("\n        \t\t\tЗаказать\n        \t\t")])])])])])},b=[],m={name:"ShoppingCart",computed:Object(i["a"])({},Object(a["c"])("cart",["added","totalPrice"]),{isCheckoutDisabled:function(){return 0===this.added.length}}),methods:Object(i["a"])({},Object(a["b"])("cart",["removeProduct","checkout"]))},_=m,g=(r("68b1"),Object(p["a"])(_,v,b,!1,null,"17ca455f",null));g.options.__file="ShoppingCart.vue";var G=g.exports,S={name:"app",components:{ShoppingCart:G,ProductList:h}},P=S,k=(r("034f"),Object(p["a"])(P,o,c,!1,null,null,null));k.options.__file="App.vue";var y=k.exports,C=(r("7514"),r("bc3a")),O=r.n(C),j={loadProductsWithGroup:function(){return O.a.get("https://ssdev.superagent.ru/TestApp/Values/GetWithParent")},loadProductsGroups:function(){return O.a.get("https://ssdev.superagent.ru/TestApp/Values/GetParents")}},w=j,x={namespaced:!0,state:{items:[]},mutations:{putProduct:function(t,e){t.items.push(e)},outProduct:function(t,e){var r=t.items.find(function(t){return t.id===e.id});t.items.indexOf(e);t.items.splice(t.items.indexOf(r),1)},clear:function(t){t.items.splice(0)}},actions:{addProduct:function(t,e){var r=t.commit;r("putProduct",e)},removeProduct:function(t,e){var r=t.commit;r("outProduct",e)},checkout:function(t){var e=t.commit;e("clear")}},getters:{added:function(t){return t.items},totalPrice:function(t,e){return e.added.reduce(function(t,e){return t+e.price},0)}}},E=x,D=(r("4917"),{namespaced:!0,state:{all:[],groups:[]},mutations:{setProducts:function(t,e){t.all=e},setGroups:function(t,e){t.groups=e}},actions:{loadWithGroup:function(t){var e=t.commit;w.loadProductsWithGroup().then(function(t){e("setProducts",t.data.map(function(t){if(null!==t.group)return t.skus.forEach(function(e){return e.group=t.group.name,e.selected=!1,e}),t.skus}).flat().filter(function(t){return null!=t}))})},loadGroups:function(t){var e=t.commit;w.loadProductsGroups().then(function(t){e("setGroups",t.data.filter(function(t){return null!==t.name&&t.name.match(/^([^0-9]*)$/)}))})}},getters:{all:function(t){return t.all},byGroup:function(t){return function(e){return t.all.filter(function(t){return t.group===e})}},groups:function(t){return t.groups}}}),M=D;n["a"].use(a["a"]);var T=new a["a"].Store({modules:{cart:E,products:M}}),$=T;n["a"].config.productionTip=!1,new n["a"]({store:$,render:function(t){return t(y)}}).$mount("#app")},"621f":function(t,e,r){"use strict";var n=r("8838"),o=r.n(n);o.a},"64a9":function(t,e,r){},"68b1":function(t,e,r){"use strict";var n=r("aec8"),o=r.n(n);o.a},8838:function(t,e,r){},aec8:function(t,e,r){}});