import React from 'react';
import { Route } from 'react-router-dom';
import RouterLoader from './RouterLoader';

const RoutersMap = (routerList) => {
  return (
    routerList.map((route) => {
      const { component, props: userDefinedProps = {}, ...routeToProps } = route;
      const _route = {
        ...routeToProps,
        component: RouterLoader(component, userDefinedProps),
      }
      return (
        <Route key={route.path} {..._route} />
      )
    })
  )
}

export default RoutersMap;
