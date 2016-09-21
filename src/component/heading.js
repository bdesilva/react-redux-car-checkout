import React from 'react';
import styles from '../../styles/styles.css';

const Heading = ({children}) => (
  <span className={styles.heading}>{children}</span>
);

export default Heading;
