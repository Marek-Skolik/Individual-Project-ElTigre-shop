import { settings } from './settings.js';
import Product from './components/Products.js';

const app = {

  initMenu: function () {
    const thisApp = this;

    //console.log('thisApp.data', thisApp.data);
    for (let productData of thisApp.data.products) {
      new Product(productData.id, productData);
    }
  },

  initProduct: function (){
    const thisApp = this;

    thisApp.widgetContainer = document.querySelector(select.containerOf.pages);
    thisApp.pages = new Home(thisApp.widgetContainer);
  },

  initData: function () {
    const thisApp = this;

    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        // save parsedResponse at thisApp.data.products
        thisApp.data.products = parsedResponse;
        console.log('PARSEDRESPONSE:', parsedResponse);
        // execute initMenu method
        app.initMenu();
      });
  },


  init: function() {
    const thisApp = this;
    thisApp.initData();
    thisApp.initProduct;
  },
};

app.init();