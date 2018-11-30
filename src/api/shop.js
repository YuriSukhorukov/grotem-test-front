import axios from 'axios';

export default {
  // получить список товаров с категориями
  getProductsWithParent: _ => {
    return axios.get('https://ssdev.superagent.ru/TestApp/Values/GetWithParent')
  },

  // получить список категорий
  getProductsParents: _ => {
    return axios.get('https://ssdev.superagent.ru/TestApp/Values/GetParents')
  },
}