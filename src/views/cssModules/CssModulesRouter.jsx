import RoutersMap from '@routers/RoutersMap';

const CssModules = () => import(/* webpackChunkName: "CssModules" */ '@views/cssModules/CssModules');

const PreJobTrainRouter = ({ match }) => {
  const { path } = match
  const routerList = [
    {
      path: `${path}/sass`,
      component: CssModules,
      props: { styleSyntax: 'sass' },
    },
    {
      path: `${path}/less`,
      component: CssModules,
      props: { styleSyntax: 'less' },
    },
  ]
  return RoutersMap(routerList)
}

export default PreJobTrainRouter;
