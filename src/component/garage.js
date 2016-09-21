import React from 'react';
import Car from './cars';
import * as cars from '../store/items';
import Heading from './heading';
import styles from '../../styles/styles.css';

export default () => (
  <div>
    <Heading><span>Cars</span></Heading>
    <div className={styles.col}>
      <div className={styles.productContainer}>
        <Car {...cars.supra}/>
        <Car {...cars.skyline}/>
        <Car {...cars.sti}/>
      </div>
    </div>
  </div>
);
