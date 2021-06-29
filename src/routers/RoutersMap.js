import React from 'react';
import { Route } from 'react-router-dom';
import RouterLoader from './RouterLoader';

const RoutersMap = (routerList) => {
  return (
    routerList.map((route) => {
      const { component, ...routeToProps } = route
      const _route = {
        ...routeToProps,
        component: RouterLoader(component),
      }
      return (
        <Route key={route.path} {..._route} />
      )
    })
  )
}

export default RoutersMap;
