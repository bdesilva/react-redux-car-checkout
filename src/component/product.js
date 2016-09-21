import React from 'react';
import {add} from '../action/cart';
import {connect} from 'react-redux';
import styles from '../../styles/styles.css';

const Product = ({...product, add, items}) => (
  <div className={items.filter((item) => item.id === product.id)[0]
    ? styles.productCardInactive : styles.productCardActive}>
    <div className={styles.productCardHeader}>
        <h2>{product.title}</h2>
        <h3>{product.heading}</h3>
    </div>
    <div className={styles.productCardSpace}></div>
    <div className={styles.productCardFeatures}>
        <img src={product.image} alt={product.title} className={styles.productImage}/>
        <div>
          <p className={styles.multilineEllipsis}>{product.description}</p>
        </div>
    </div>
    <div className={styles.productCardOrder}>
      <p><a onClick={() => add(product.id)}>Order</a></p>
    </div>
  </div>
);

export default connect((state) => {
  return {
    items: state.cart.items,
  };
}, {add})(Product);
