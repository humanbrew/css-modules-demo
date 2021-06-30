import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import RoutersMap from './RoutersMap';
import router from './route';

const Main = () => {
  return (
    <Switch>
      {RoutersMap(router)}
      <Redirect to="/" />
    </Switch>
  )
}
// withRouter高阶组件提供了history、location、match供我们使用。通过props传递。
const Root = withRouter(Main);

export default Root;
