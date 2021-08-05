import api from './api';

// buscando as informações do carrinho de compra
const getCart = () => {
  return api({
    method: 'get',
    url: '/5b15c4923100004a006f3c07',
  });
};

export { getCart };
