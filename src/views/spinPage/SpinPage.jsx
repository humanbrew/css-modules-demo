import React from 'react';
import { Spin } from 'antd';
import 'antd/dist/antd.css';

import styles from './SpinPage.module.scss';

const LoadingPage = () => {
  return (
    <div className={styles.spinWrapper}>
      <Spin size="large" tip="Loading" />
    </div>
  )
}

export default LoadingPage;