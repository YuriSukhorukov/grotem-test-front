import axios from 'axios';

const shop = {
  loadProductsWithGroup () {
    return axios.get('https://ssdev.superagent.ru/TestApp/Values/GetWithParent');
  },
  loadProductsGroups () {
    return axios.get('https://ssdev.superagent.ru/TestApp/Values/GetParents');
  }
}

export default shop;