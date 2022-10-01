import {select, settings, classNames} from '../settings.js';

class Product {
    constructor(id, data){
        const thisProduct = this;

        thisProductId = id;
        thisProductData = data;

        thisProduct.renderInMenu();
    }

    renderInMenu (){
        const thisProduct = this;

        const generatedHTML = templates.menuProduct(thisProduct.data);
        thisProduct.element = utils.createDOMFromHTML(generatedHTML);
        const menuContainer = document.querySelector(select.containerOf.menuProduct);
        menuContainer.appendChild(thisProduct.element);
    }
}