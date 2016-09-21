import React from 'react';
import {connect} from 'react-redux';

import {clear, setQuantity, remove} from '../action/cart';
import * as products from '../store/items';
import Heading from './heading';
import styles from '../../styles/styles.css';

const Item = connect(
  () => ({}),
  {setQuantity, remove}
)(({id, quantity, remove, setQuantity}) => {
  const {title, price, image} = products[id];
  const inc = () => setQuantity({id, quantity: quantity + 1});
  const dec = () => setQuantity({id, quantity: quantity - 1});
  const del = () => remove(id);
  const subtractButtonEnabled = (quantity > 0) ? styles.quantitySubtractButton : styles.quantitySubtractButtonDisabled;
  return (
    <tr className={styles.itemAppear}>
      <td>
        <div className={styles.productContainer}>
          <a className={styles.removeProduct} onClick={del} />
          <img src={image} alt={title} className={styles.productThumbnail}/>
        </div>
      </td>
      <td>
        {title}
      </td>
      <td>
        {price}
      </td>
      <td>
        <span>
          <span>{quantity}</span>
          <span className={styles.quantityButtonsContainer}><a className={styles.quantityAddButton} onClick={inc} /></span>
          <span className={styles.quantityButtonsContainer}><a className={subtractButtonEnabled} onClick={dec} /></span>
        </span>
      </td>
      <td>
        ${(price * quantity).toFixed(2)}
      </td>
    </tr>
  );
});

const Cart = connect(
  () => ({}),
  {clear}
)(({total, items, clear}) => {
  return (
    <div>
      <div className={styles.row}>
        <Heading>Cart</Heading>
      </div>
      <div className={styles.row}>
        <a onClick={clear}>
          <div>
            <img src="http://downloadicons.net/sites/default/files/clear-cart-icon-70563.png" 
              alt="Clear all items" />
           </div>
        </a>
      </div>
      <div className={styles.productTableContainer}>
        <table className={styles.productTable}>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => <Item key={item.id} {...item}/>)}
            <tr><td colSpan={4}/><td><span className={styles.totalLabel}>TOTAL: ${total}</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default connect((state) => {
  const preFormattedTotal = state.cart.items.reduce((sum, {id, quantity}) => sum + products[id].price * quantity, 0);

  return {
    items: state.cart.items,
    total: preFormattedTotal.toFixed(2),
  };
})(Cart);
