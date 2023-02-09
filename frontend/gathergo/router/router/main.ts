import App from './app'


window.addEventListener('DOMContentLoaded', (e) => {
  const $app = document.getElementById('#app') as HTMLBodyElement | null;
  if($app != null){
    App($app);
  }
});

