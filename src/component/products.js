import React from 'react';
import Product from './product';
import * as products from '../store/items';
import Heading from './heading';
import styles from '../../styles/styles.css';

export default () => (
  <div>
    <Heading><span>Cars</span></Heading>
    <div className={styles.col}>
      <div className={styles.productContainer}>
        <Product {...products.supra}/>
        <Product {...products.skyline}/>
        <Product {...products.sti}/>
      </div>
    </div>
  </div>
);
