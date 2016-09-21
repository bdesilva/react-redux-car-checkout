import React from 'react';
import {add} from '../action/cart';
import {connect} from 'react-redux';
import styles from '../../styles/styles.css';

const Car = ({...car, add, items}) => (
  <div className={items.filter((item) => item.id === car.id)[0]
    ? styles.productCardInactive : styles.productCardActive}>
    <div className={styles.productCardHeader}>
        <h2>{car.title}</h2>
        <h3>{car.heading}</h3>
    </div>
    <div className={styles.productCardSpace}></div>
    <div className={styles.productCardFeatures}>
        <img src={car.image} alt={car.title} className={styles.productImage}/>
        <div>
          <p className={styles.multilineEllipsis}>{car.description}</p>
        </div>
    </div>
    <div className={styles.productCardOrder}>
      <p><a onClick={() => add(car.id)}>Order</a></p>
    </div>
  </div>
);

export default connect((state) => {
  return {
    items: state.cart.items,
  };
}, {add})(Car);
