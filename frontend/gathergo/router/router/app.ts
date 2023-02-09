import Router from './router';

export const navigater = (to : string, isReplace = false) => {
    const historyChangeEvent = new CustomEvent('historychange', {
    detail: {
        to,
        isReplace,
    },
    });
    dispatchEvent(historyChangeEvent);
};

function App($container : HTMLBodyElement) {
  const container = $container;
  const BASE_URL = 'http://localhost:5173';
  const init = () => {
    window.addEventListener('load', (e) => {
      e.preventDefault();
      const targetURL = location.href.replace(BASE_URL, '');

      navigater(targetURL);
    });
    Router(container);
  };

  init();
}

export default App;
