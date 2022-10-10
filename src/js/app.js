import {select, settings, classNames } from './settings.js';
import Product from './components/Products.js';

const app = {

  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', ''); //#/about -> about

    let pageMatchingHash = thisApp.pages[0].id; //home

    for (let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement= this;
        event.preventDefault();

        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');

        /* run thisApp.activatePage with that id */
        thisApp.activatePage(id);

        /* change URL hash */

        window.location.hash = '#/' + id;

      });
    }
  },

  activatePage: function (pageId){
    const thisApp = this;

    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    /* add class "active" to matching links, remove from non-matching */

    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }

  },

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
    thisApp.pages = new Product(thisApp.widgetContainer);
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
    thisApp.initPages();
  },
};

app.init();