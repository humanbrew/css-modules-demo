const ReactHomePage = () => import(/* webpackChunkName: "ReactHomePage" */ '../App');
const Emotion = () => import(/* webpackChunkName: "Emotion" */ '@views/emotion/Emotion');

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
  }
]

export default router;