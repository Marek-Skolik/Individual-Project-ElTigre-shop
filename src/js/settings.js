export const select = {
  templateOf: {
    menuProduct: '#template-menu-product',
  },
  containerOf: {
    menu: '#products',
    pages: '#pages',
  },
  nav: {
    links: '.navigation a',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
    name: '.name',
    description: '.descrtiption',
    roasting: '.roasting',
    intensity: '.intensity',
    image: 'img[src="image"]',
  }
};

export const classNames = {

};

export const templates = {
 
};