import React from 'react';
import Cart from './cart';
import Garage from './garage';
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
          <Garage/>
        </div>
      </div>
    </div>
  </div>
);
