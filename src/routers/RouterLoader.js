import React from 'react'
import Loadable from 'react-loadable'

import LoadingPage from '@views/spinPage/SpinPage';

// 根据用户身份权限返回业务组件或者无权限组件
const RouterLoader = (res, userDefinedProps) => {
  return Loadable({
    loader: res,
    render(loaded, defProps) {
      const Component = loaded.default
      const props = { ...defProps, ...userDefinedProps }
      return <Component {...props} />
    },
    loading: () => <LoadingPage />,
  })
}

export default RouterLoader;
