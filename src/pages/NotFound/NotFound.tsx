import React, {Fragment} from 'react';
import styles from './notFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <h2>Page not found</h2>{' '}
    </div>
  );
};

export default NotFound;
