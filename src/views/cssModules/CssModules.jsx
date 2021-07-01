import React from 'react';

import stylesSass from './CssModules.module.scss';
import stylesLess from './CssModules.module.less';

const CssModules = (props) => {
  const { styleSyntax } = props;
  const isStyleLess = styleSyntax === 'less';
  const styles = isStyleLess ? stylesLess : stylesSass;

  return (
    <div className={styles.block}>
      <div className={styles.main}>Hello world, I am Css Modules! 😁</div>
      <div className={styles.section}>This is a section</div>
      <div className={styles.styleSyntax}>
        {`Style syntax is `}
        <span className="syntaxName">{isStyleLess ? "Less" : 'Sass'}</span>
      </div>
    </div>
  )
}

export default CssModules;