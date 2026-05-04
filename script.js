gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

function animarPagina() {
  // ANIMAÇÕES HERO

  gsap.from(".hero", {
    opacity: 0,
    duration: 1,
  });

  gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1,
  });

  gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1,
  });

  // ANIMAÇÕES CARDS (ENTRADA COM SCROLL)

  gsap.from(".card", {
    opacity: 0,
    filter: "blur(10px)",
    y: 30,
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".cards",
      markers: false,
      start: "0% 85%",
      end: "100% 70%",
      scrub: true,
    },
  });

  // ANIMAÇÕES AGRADECIMENTO

  gsap.from(".secaoAgradecimento ul li", {
    opacity: 0,
    x: 20,
    filter: "blur(10px)",
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
      trigger: "li",
      markers: false,
      start: "0% 95%",
      end: "100% 55%",
      scrub: true,
    },
  });

  // ANIMAÇÕES FOOTER

  gsap.from("footer", {
    y: -200,
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      scrub: 2,
      start: "0% 100%",
      end: "100% 80%",
    },
  });

  // LETRAS ANIMADAS (SPLIT TEXT)

  const textSplit = document.querySelectorAll(".textoSplit");

  textSplit.forEach((textoUnicoSplit) => {
    const split = SplitText.create(textoUnicoSplit, {
      type: "lines words, chars",
      mask: "lines",
    });

    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.04,
      scrollTrigger: {
        trigger: textoUnicoSplit,
        opacity: 0,
        duration: 1,
      },
    });
  });

  // HOVER — BOTÃO "COMPRAR INGRESSOS"

  const botaoIngressos = document.querySelector(".secao2 button");

  const tlIngressos = gsap.timeline({ paused: true });

  tlIngressos.to(botaoIngressos, {
    scale: 1.05,
    duration: 0.4,
    ease: "power2.out",
  });

  botaoIngressos.addEventListener("mouseenter", () => {
    tlIngressos.play();
  });

  botaoIngressos.addEventListener("mouseleave", () => {
    tlIngressos.reverse();
  });

  // HOVER — CARDS (FLUTUAR PARA CIMA)

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const tlCard = gsap.timeline({ paused: true });

    tlCard.to(card, {
      y: -16,
      duration: 0.4,
      ease: "power2.out",
    });

    card.addEventListener("mouseenter", () => {
      tlCard.play();
    });

    card.addEventListener("mouseleave", () => {
      tlCard.reverse();
    });
  });
}

// PRELOADER

const tl = gsap.timeline({
  onComplete() {
    animarPagina();
    gsap.to("#preloader", {
      opacity: 0,
      onComplete() {
        gsap.to("#preloader", {
          display: "none",
        });
      },
    });
  },
});

tl.to("#preloader path", {
  duration: 1.5,
  strokeDashoffset: 0,
});

tl.to("#preloader path", {
  fill: "rgb(168, 19, 19)",
  duration: 0.5,
  strokeDashoffset: 0,
});

// HOVER — BOTÃO PRINCIPAL DA HERO

const botao = document.querySelector(".botaoPrincipal");

const tlBotao = gsap.timeline({ paused: true });

tlBotao.to(botao, {
  scale: 1.05,
  duration: 0.4,
  ease: "power2.out",
});

botao.addEventListener("mouseenter", () => {
  tlBotao.play();
});

botao.addEventListener("mouseleave", () => {
  tlBotao.reverse();
});
