function card($container: HTMLBodyElement) {
  const container = $container;

  const setState = () => {
    render();
  };

  const render = () => {
    container.innerHTML = `
      <main class="cardPage">
        카드 페이지에요.
      </main>
    `;
  };

  render();
}

export default card;
