import { settings } from './settings.js';
const app = {
  initData: function() {
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
      });
  },

  initMenu: function () {
    const thisApp = this;

    for (let productData of thisApp.data.products) {
      new Product(productData.id, productData);
    }
  },

  init: function() {
    const thisApp = this;
    thisApp.initData();
  },
};

app.init();