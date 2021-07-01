import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './ReactCssModulesDecorators.module.scss';

const ReactCssModulesDecorators = () => {
  return (
    <div className={styles.block}>
      <div className={styles.main}>Hello world, I am Css Modules! especially about decorators 😁</div>
      <div className={styles.section}>This is a section</div>
      <div className={styles.styleSyntax}>
        {`Manage className with `}
        <span className="syntaxName">{`@CSSModules<Decorators>`}</span>
      </div>
    </div>
  )
}

export default CSSModules(ReactCssModulesDecorators, styles);