const ReactHomePage = () => import(/* webpackChunkName: "ReactHomePage" */ '../App');
const Emotion = () => import(/* webpackChunkName: "Emotion" */ '@views/emotion/Emotion');
const StyledComponents = () => import(/* webpackChunkName: "StyledComponents" */ '@views/styledComponents/StyledComponents');
const CssModules = () => import(/* webpackChunkName: "CssModules" */ '@views/cssModules/CssModules');

const exact = true;

const router = [
  {
    path: '/',
    exact,
    component: ReactHomePage,
  },
  {
    path: '/emotion',
    component: Emotion,
  },
  {
    path: '/styledComponents',
    component: StyledComponents,
  },
  {
    path: '/cssModules',
    component: CssModules,
  },
]

export default router;