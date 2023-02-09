import { routes } from './routeConst';
import NotFound from './pages/notfound';

function Router($container : HTMLBodyElement) {
  const container = $container;
  let currentPage : any = undefined;
  const findMatchedRoute = () =>
    routes.find((route) => route.path.test(location.pathname)
    );

  const route = () => {
    currentPage = null;
    const TargetPage = findMatchedRoute()?.element || NotFound;
    currentPage = TargetPage(container);
  };

  const init = () => {
    window.addEventListener('historychange', ({ detail } :any) => {
      const { to, isReplace } = detail;
      if (isReplace || to === location.pathname)
        history.replaceState(null, '', to);
      else history.pushState(null, '', to);

      route();
    });

    window.addEventListener('popstate', () => {
      route();
    });
  };

  init();
  route();
}

export default Router;
