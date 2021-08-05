import React from 'react';

import { normalizeMoneyValue } from '@shoppingcart/utils';

import { ListPrices, PriceItem } from './SummaryList.styles';

function SummaryList({ priceValue }) {
  return (
    <ListPrices>
      <PriceItem>
        <div>
          <p>PRODUTOS</p>
          <p>{normalizeMoneyValue(priceValue.subTotal)}</p>
        </div>
      </PriceItem>
      <PriceItem>
        <div>
          <p>FRETE</p>
          <p>{normalizeMoneyValue(priceValue.shippingTotal)}</p>
        </div>
      </PriceItem>
      <PriceItem>
        <div>
          <p>
            <span>DESCONTO</span>
          </p>
          <p>
            <span>- {normalizeMoneyValue(priceValue.discount)}</span>
          </p>
        </div>
      </PriceItem>
      <PriceItem>
        <div>
          <p>
            <strong>TOTAL</strong>
          </p>
          <p>
            <strong>{normalizeMoneyValue(priceValue.total)}</strong>
          </p>
        </div>
      </PriceItem>
    </ListPrices>
  );
}

export { SummaryList };
