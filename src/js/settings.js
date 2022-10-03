export const select = {
  templateOf: {
    menuProduct: '#template-products',
  },
  containerOf: {
    menu: '#product-list',
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
    image: '.image',
  },
};

export const classNames = {
  pages: {
    active: 'active',
  },
};

export const templates = {
  product: Handlebars.compile(document.querySelector(select.templateOf.productList).innerHTML),
};