import React from 'react';
import Cart from './cart';
import Products from './products';
import styles from '../../styles/styles.css';

export default () => (
  <div className={styles.mainApp}>
    <div className={styles.header}>
      <h1>Ben's Garage</h1>
    </div>
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.row}>
          <Cart/>
        </div>
        <div className={styles.row}>
          <Products/>
        </div>
      </div>
    </div>
  </div>
);
