import React from 'react';
import styles from './centerXY.module.scss';

const CenterXY: React.FC = ({children}) => {
  return <div className={styles.centerXY}>{children}</div>;
};

export default CenterXY;
