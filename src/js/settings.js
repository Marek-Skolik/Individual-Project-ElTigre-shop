export const select = {
  templateOf: {
    menuProduct: '#template-product',
    product: '#product',
  },
  containerOf: {
    menuProducts: '#product-list-products',
    homeProducts: '#product-list-home',
    pages: '#pages',
  },
  nav: {
    links: '.navigation a',
  },
};

export const settings = {
  db: {
    url: '//localhost:3131',
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
  nav: {
    active: 'active',
  }
};

export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
};