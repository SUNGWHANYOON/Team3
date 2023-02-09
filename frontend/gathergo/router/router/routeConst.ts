import Main from './pages/main';
import login from './pages/login';
import card from './pages/card';
import profile from './pages/profile';


export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/card\/[\w]+$/, element: card },
  { path: /^\/login$/, element: login },
  { path: /^\/profile$/, element: profile},
];
