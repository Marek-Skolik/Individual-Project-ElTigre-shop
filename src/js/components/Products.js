import {templates} from '../settings.js';

class Product {
    constructor (element){
        const thisProduct = this;

        thisProduct.render(element);
    }

    render(element){
        const thisProduct = this;
        const generatedHTML = templates.productList();
        thisProduct.dom = {};
        thisProduct.dom.wrapper = element;
        thisProduct.dom.wrapper.innerHTML = generatedHTML;
    }
}
console.log(Product);

export default Product;