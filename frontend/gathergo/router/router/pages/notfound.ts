function NotFound($container : HTMLBodyElement) {
  const container = $container;

  const setState = () => {
    render();
  };

  const render = () => {
    container.innerHTML = `
      <main class="notFoundPage">
        404 NOT FOUND
      </main>
    `;
  };

  render();
}

export default NotFound;
