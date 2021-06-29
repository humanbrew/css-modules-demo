import React from 'react';

import styles from './CssModules.module.scss';

const CssModules = () => {
  return (
    <>
      <div className={styles.block}>
        <div className={styles.main}>hello world, I am Emotion! 😁</div>
        <div className={styles.section}>This is a section</div>
      </div>
    </>
  )
}

export default CssModules;