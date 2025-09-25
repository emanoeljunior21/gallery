const cartoes = document.querySelectorAll(".cartao");

cartoes.forEach((cartao) => {
  cartao.addEventListener("mouseenter", () => {
    cartoes.forEach((c) => {
      if (c !== cartao) c.style.opacity = "0.6";
    });
  });

  cartao.addEventListener("mouseleave", () => {
    cartoes.forEach((c) => (c.style.opacity = "1"));
  });

  cartao.addEventListener("click", () => {
    alert(`Você clicou em ${cartao.dataset.titulo}`);
  });
});
