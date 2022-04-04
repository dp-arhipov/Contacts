import {Typography} from '@mui/material';
import React from 'react';
import CenterXY from '../../components/CenterXY';
import styles from './notFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <CenterXY>
        <Typography variant="h3" component="h2">
          Sorry, not such page
        </Typography>
      </CenterXY>
    </div>
  );
};

export default NotFound;
