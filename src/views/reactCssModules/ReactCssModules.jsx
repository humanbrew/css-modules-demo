import React from 'react';

import './ReactCssModules.module.scss';

const ReactCssModules = () => {
  return (
    <div className='block'>
      <div className='main'>Hello world, I am Css Modules! 😁</div>
      <div className='sub'>
        <span>{`{ `}</span>
        especially about className separately
        <span>{` }`}</span>
      </div>
      <div className='section'>This is a section</div>
      <div className='styleSyntax'>
        {`Manage className without `}
        <span className="syntaxName">{`styles.[className]`}</span>
      </div>
    </div>
  )
}

export default ReactCssModules;